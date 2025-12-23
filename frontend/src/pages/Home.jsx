import "./Home.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Merchants from "./components/Merchants";
import Footer from "./components/Footer";
import axios from "axios";

const Home = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (!location) return;

    axios.post(
      "http://localhost:3000/merchant/nearby",
      {
        latitude: location.lat,
        longitude: location.lng,
      },
      { withCredentials: true }
    );
  }, [location]);

  return (
    <div className="home-section">
      <Navbar />
      <Merchants userLocation={location} />
      <Footer />
    </div>
  );
};

export default Home;
