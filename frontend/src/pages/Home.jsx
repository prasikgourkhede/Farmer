import './Home.css'
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Merchants from "./components/Merchants";
import Footer from './components/Footer';
import axios from "axios"
const Home = () => {
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
    accuracy: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported by this browser.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => {
        console.error("Error getting location:", err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );

    // Cleanup watcher when component unmounts
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

      axios.post("http://localhost:3000/merchant/nearby", {latitude: location.lat, longitude: location.lng}, {withCredentials: true}).then(response=>{
        console.log(response.data);
      })
  return (
    <div className="home-section">
      <Navbar />
      <Merchants />
      <Footer /> 
    </div>
  );
}

export default Home
