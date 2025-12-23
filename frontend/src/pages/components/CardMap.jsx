import React, { useEffect, useRef, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "./CardMap.css";

const CardMap = () => {
  const { state } = useLocation();
  if (!state) return <Navigate to="/" />;

  const { merchant, userLocation } = state;

  const mapElement = useRef();
  const [map, setMap] = useState(null);
  const [distance, setDistance] = useState("");
  const [userMarker, setUserMarker] = useState(null);
  const [watchId, setWatchId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ NO HARDCODE
  const merchantLocation = {
    lat: Number(merchant.latitude),
    lng: Number(merchant.longitude),
  };

  // Map init
  useEffect(() => {
    const mapInstance = tt.map({
      key: "mkLHFhQI8ZJb1S4xGUht8QXwLxTATsfu",
      container: mapElement.current,
      center: merchantLocation,
      zoom: 14,
    });

    mapInstance.addControl(new tt.NavigationControl());
    setMap(mapInstance);

    new tt.Marker({ color: "#ff4444" })
      .setLngLat([merchantLocation.lng, merchantLocation.lat])
      .setPopup(
        new tt.Popup().setHTML(
          `<b>${merchant.name}</b><br>${merchant.address}`
        )
      )
      .addTo(mapInstance);

    return () => mapInstance.remove();
  }, []);

  // ✅ Live tracking using HOME location as base
  const startLiveTracking = () => {
    if (!map || !userLocation) return;

    setLoading(true);
    setError("");

    if (watchId) navigator.geolocation.clearWatch(watchId);

    const id = navigator.geolocation.watchPosition(
      (pos) => {
        setLoading(false);

        const currentUserLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };

        if (!userMarker) {
          const el = document.createElement("div");
          el.className = "user-marker";
          el.innerHTML = "📍";

          const marker = new tt.Marker({ element: el, anchor: "bottom" })
            .setLngLat([currentUserLocation.lng, currentUserLocation.lat])
            .addTo(map);

          setUserMarker(marker);
        } else {
          userMarker.setLngLat([
            currentUserLocation.lng,
            currentUserLocation.lat,
          ]);
        }

        ttapi.services
          .calculateRoute({
            key: "mkLHFhQI8ZJb1S4xGUht8QXwLxTATsfu",
            locations: `${currentUserLocation.lng},${currentUserLocation.lat}:${merchantLocation.lng},${merchantLocation.lat}`,
          })
          .then((res) => {
            const geojson = res.toGeoJson();

            if (map.getSource("route")) {
              map.removeLayer("route");
              map.removeSource("route");
            }

            map.addSource("route", { type: "geojson", data: geojson });
            map.addLayer({
              id: "route",
              type: "line",
              source: "route",
              paint: { "line-color": "#007bff", "line-width": 4 },
            });

            const km = (
              res.routes[0].summary.lengthInMeters / 1000
            ).toFixed(2);
            setDistance(`${km} km away from you`);
          })
          .catch(() => setError("Failed to calculate route."));
      },
      () => {
        setError("Location access denied or unavailable.");
        setLoading(false);
      },
      { enableHighAccuracy: true }
    );

    setWatchId(id);
  };

  // ✅ UI UNCHANGED
  return (
    <div className="map-container">
      <div className="info-card">
        <img
          src={merchant.picture}
          alt={merchant.name}
          className="shop-image"
        />
        <div className="shop-details">
          <h2>{merchant.name}</h2>
          <p className="subtitle">{merchant.address}</p>
          {/* <p className="distance">📍 {merchant.distance} away</p> */}

          {merchant.phone && merchant.phone !== "N/A" && (
            <p className="phone">📞 {merchant.phone}</p>
          )}

          {loading && <p className="loading">📍 Getting your location...</p>}
          {error && <p className="error">{error}</p>}
          {distance && (
            <p className="distance">📍 Live: {distance}</p>
          )}

          <div className="buttons">
            <button onClick={startLiveTracking} className="btn-primary">
              🚗 Start Live Tracking
            </button>
          </div>
        </div>
      </div>

      <div ref={mapElement} className="map-view" />
    </div>
  );
};

export default CardMap;

// import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import * as tt from "@tomtom-international/web-sdk-maps";
// import * as ttapi from "@tomtom-international/web-sdk-services";
// import "./CardMap.css";

// const CardMap = () => {
//   const { state: merchant } = useLocation(); // get selected merchant
//   const mapElement = useRef();
//   const [map, setMap] = useState(null);
//   const [distance, setDistance] = useState("");
//   const [userMarker, setUserMarker] = useState(null);
//   const [watchId, setWatchId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Always use Oriental College of Technology coordinates for merchant location
//   const merchantLocation = {
//     lat: 23.2875, 
//     lng: 77.4664  
//   };
//   // const userLocation = {
//   //   lat: 23.2875,
//   //   lng: 77.4664,
//   // };

//   // Initialize map
//   useEffect(() => {
//     const mapInstance = tt.map({
//       key: "mkLHFhQI8ZJb1S4xGUht8QXwLxTATsfu",
//       container: mapElement.current,
//       center: merchantLocation,
//       zoom: 14,
//     });
//     mapInstance.addControl(new tt.NavigationControl());
//     setMap(mapInstance);

//     new tt.Marker({ color: "#ff4444" })
//       .setLngLat(merchantLocation)
//       .setPopup(new tt.Popup().setHTML(`<b>${merchant.name}</b><br>Oriental College of Technology, Bhopal`))
//       .addTo(mapInstance);

//     return () => mapInstance.remove();
//   }, []);

//   // Live tracking
//   const startLiveTracking = () => {
//     if (!map) return;
//     setLoading(true);
//     setError("");

//     if (watchId) navigator.geolocation.clearWatch(watchId);

//     const id = navigator.geolocation.watchPosition(
//       (pos) => {
//         setLoading(false);
//         const userLocation = {
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         };

//         // For testing from Oriental College location
//         // const userLocation = {
//         //   lat: 23.2875,
//         //   lng: 77.4664,
//         // };

//         if (!userMarker) {
//           const el = document.createElement("div");
//           el.className = "user-marker";
//           el.innerHTML = "📍";
//           const marker = new tt.Marker({ element: el, anchor: "bottom" })
//             .setLngLat([userLocation.lng, userLocation.lat])
//             .addTo(map);
//           setUserMarker(marker);
//         } else {
//           userMarker.setLngLat([userLocation.lng, userLocation.lat]);
//         }

//         // draw route
//         ttapi.services
//           .calculateRoute({
//             key: "mkLHFhQI8ZJb1S4xGUht8QXwLxTATsfu",
//             locations: `${userLocation.lng},${userLocation.lat}:${merchantLocation.lng},${merchantLocation.lat}`,
//           })
//           .then((res) => {
//             const geojson = res.toGeoJson();
//             if (map.getSource("route")) {
//               map.removeLayer("route");
//               map.removeSource("route");
//             }
//             map.addSource("route", { type: "geojson", data: geojson });
//             map.addLayer({
//               id: "route",
//               type: "line",
//               source: "route",
//               paint: { "line-color": "#007bff", "line-width": 4 },
//             });

//             const summary = res.routes[0].summary;
//             const km = (summary.lengthInMeters / 1000).toFixed(2);
//             setDistance(`${km} km away from you`);
//           })
//           .catch(() => setError("Failed to calculate route."));
//       },
//       (err) => {
//         setError("Location access denied or unavailable.");
//         console.error(err);
//         setLoading(false);
//       },
//       { enableHighAccuracy: true }
//     );

//     setWatchId(id);
//   };

//   return (
//     <div className="map-container">
//       <div className="info-card">
//         <img src={merchant.picture} alt={merchant.name} className="shop-image" />
//         <div className="shop-details">
//           <h2>{merchant.name}</h2>
//           <p className="subtitle">Oriental College of Technology, Bhopal</p>
//           <p className="distance">📍 {merchant.distance} away</p>
          
//           {/* Phone number conditionally displayed */}
//           {merchant.phone && merchant.phone !== "N/A" && (
//             <p className="phone">📞 {merchant.phone}</p>
//           )}

//           {loading && <p className="loading">📍 Getting your location...</p>}
//           {error && <p className="error">{error}</p>}
//           {distance && <p className="live-distance">📍 Live: {distance}</p>}

//           <div className="buttons">
//             <button onClick={startLiveTracking} className="btn-primary">
//               🚗 Start Live Tracking
//             </button>
//           </div>
//         </div>
//       </div>
//       <div ref={mapElement} className="map-view" />
//     </div>
//   );
// };

// export default CardMap;