import React, { useState, useEffect } from "react";
import "./Merchants.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Merchants = ({ userLocation }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // ❌ REMOVED navigator.geolocation
  // ✅ USING location from Home

  useEffect(() => {
    const fetchMerchants = async () => {
      if (!userLocation?.lat || !userLocation?.lng) return;

      try {
        const response = await axios.post(
          "http://localhost:3000/merchant/nearby",
          {
            latitude: userLocation.lat,
            longitude: userLocation.lng,
          },
          { withCredentials: true }
        );

        setMerchants(response.data.merchants || []);
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to fetch nearby merchants.");
      } finally {
        setLoading(false);
      }
    };

    fetchMerchants();
  }, [userLocation]);

  // UI STATES — UNCHANGED
  if (loading) {
    return (
      <div className="farm-listings">
        <div className="loading">
          Fetching farms near your current location...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="farm-listings">
        <div className="error">{error}</div>
      </div>
    );
  }

  // UI — UNCHANGED
  return (
    <div className="farm-listings">
      <div className="listings-header">
        <h1>Farms near you</h1>
        <p>Experience authentic farm life with modern comforts</p>
      </div>

      <div className="farm-grid">
        {merchants.length > 0 ? (
          merchants.map((merchant) => (
            <div
              key={merchant.id}
              className="farm-card"
              onClick={() =>
                navigate("/cardmap", {
                  state: {
                    merchant,
                    userLocation, // ✅ pass Home location forward
                  },
                })
              }
            >
              <div className="farm-image-container">
                <img
                  src={merchant.picture}
                  alt={merchant.name}
                  className="farm-image"
                />

                <span
                  className={`favorite-icon ${
                    favorites[merchant.id] ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(merchant.id);
                  }}
                >
                  🪴
                </span>
              </div>

              <div className="farm-details">
                <h3>{merchant.name}</h3>
                <p className="farm-location">{merchant.address}</p>
                <p className="farm-distance">{merchant.distance} away</p>
                <p
                  className={`farm-phone ${
                    merchant.phone ? "active" : ""
                  }`}
                >
                  📞 {merchant.phone || "Not available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-merchants">No nearby merchants found.</div>
        )}
      </div>
    </div>
  );
};

export default Merchants;
