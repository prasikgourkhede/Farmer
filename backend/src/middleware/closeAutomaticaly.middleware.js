// middleware/autoCloseBidding.js
import { closeBidding } from "../dao/closeBidding.dao.js";

// In-memory store for timers
const biddingTimers = new Map();

export function autoCloseBiddingMiddleware(req, res, next) {
  const { auction_id } = req.body;

  if (!auction_id) {
    return res.status(400).json({ 
        message: "auction_id is required" });
  }

  // If an old timer exists → clear it
  if (biddingTimers.has(auction_id)) {
    clearTimeout(biddingTimers.get(auction_id));
  }

  // Start/reset a new 1-min timer
  const timer = setTimeout(async () => {
    await closeBidding(auction_id);
    biddingTimers.delete(auction_id);
    console.log(`Bidding auto-closed for auction: ${auction_id}`);
  }, 60 * 1000);

  // Save this timer in memory
  biddingTimers.set(auction_id, timer);

  next();
}
