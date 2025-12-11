import { findOneAuction } from "../dao/auction.dao.js";

export async function saveAuction(auction) {
    return await auction.save();
}





export default function auctionSocket(io) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Join auction room
    socket.on("joinAuction", (auction_id) => {
      socket.join(`auction:${auction_id}`);
      console.log(`User joined auction ${auction_id}`);
    });

    // Place a bid
    socket.on("placeBid", async ({ auction_id, buyer_id, amount }) => {
      try {
        const auction = await findOneAuction(auction_id);
        if (!auction) return socket.emit("errorMessage", "Auction not found");
        if (auction.status !== "ACTIVE")
          return socket.emit("errorMessage", "Auction is not active");

        const currentBid = auction.currentBid?.amount || auction.basePrice;

        if (amount > currentBid) {
          auction.currentBid = { buyer_id, amount, time: new Date() };
          auction.bids.push({ buyer_id, amount, time: new Date() });
          await saveAuction(auction);

          // Notify all bidders in the room
          io.to(`auction:${auction_id}`).emit("bidUpdate", {
            buyer_id,
            amount,
            time: new Date()
          });
        } else {
          socket.emit("errorMessage", "Bid must be higher than current bid");
        }
      } catch (err) {
        console.error(err);
        socket.emit("errorMessage", "Server error");
      }
    });
    // Close auction
    socket.on("closeAuction", async (auction_id) => {
        const auction = await findOneAuction(auction_id);
        if (!auction) return socket.emit("errorMessage", "Auction not found");

        auction.status = "CLOSED";
        await saveAuction(auction);

       await io.to(`auction:${auction_id}`).emit("auctionClosed", {
          winnerId: auction.currentBid?.buyer_id || null,
          amount: auction.currentBid?.amount || null
        });
    });
  });
}
