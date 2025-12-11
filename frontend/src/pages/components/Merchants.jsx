import React, { useState, useEffect } from "react";
import "./Merchants.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Merchants = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});
  const [location, setLocation] = useState(null);
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Step 1: Get current geolocation
  
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("📍 Current Location:", pos.coords.latitude, pos.coords.longitude);
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Location error:", err);
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  // Step 2: Fetch merchants near the current location
  useEffect(() => {
    const fetchMerchants = async () => {
      if (!location) return;

      try {
        const response = await axios.post(
          "http://localhost:3000/merchant/nearby",
          {
            latitude: location.lat,
            longitude: location.lng,
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
  }, [location]);

  // Step 3: Render UI states
  if (loading) {
    return (
      <div className="farm-listings">
        <div className="loading">Fetching farms near your current location...</div>
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
              onClick={() => navigate("/cardmap", { state: merchant })}
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
                <p className={`farm-phone ${merchant.phone ? "active" : ""}`}>
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