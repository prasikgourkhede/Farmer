import React from "react";
import "./Favourites.css";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const navigate = useNavigate();

  const farmData = [
    {
      id: 1,
      type: "Organic Farm Stay",
      location: "Nashik, Maharashtra",
      distance: "2.3 km away",
      name: "Dudtry Farm Stay",
      rating: "⭐ 4.8 (26 reviews)",
      image: "https://images.unsplash.com/photo-1597848212624-e6d4bd7d907d?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      type: "Dairy Farm Experience",
      location: "Pune, Maharashtra",
      distance: "1.8 km away",
      name: "Flowers Farm Stay",
      rating: "⭐ 4.7 (34 reviews)",
      image: "https://images.unsplash.com/photo-1562887000-0c34d6a75c3d?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      type: "Orchard Farm Stay",
      location: "Aurangabad, Maharashtra",
      distance: "3.1 km away",
      name: "Orchard Farm Stay",
      rating: "⭐ 4.9 (20 reviews)",
      image: "https://images.unsplash.com/photo-1615485293929-06f7cf74c3e5?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      type: "Vegetable Farm Stay",
      location: "Nagpur, Maharashtra",
      distance: "4.2 km away",
      name: "Green Fields Farm Stay",
      rating: "⭐ 4.6 (38 reviews)",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    },
  ];

  const handleCardClick = (farm) => {
    navigate("/card", { state: { farm } });
  };

  return (
    <div className="favourites-container">
      <header className="favourites-header">
        <h1>🌿 Favourite Farms in Maharashtra</h1>
        <p>Discover and revisit your saved farm experiences</p>
      </header>

      <div className="farm-grid">
        {farmData.map((farm) => (
          <div
            key={farm.id}
            className="farm-card"
            onClick={() => handleCardClick(farm)}
          >
            <div className="farm-image-container">
              <img
                src={farm.image}
                alt={farm.name}
                className="farm-image"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1597848212624-e6d4bd7d907d?w=400&h=300&fit=crop";
                }}
              />
            </div>

            <div className="farm-info">
              <h3 className="farm-title">{farm.type}</h3>
              <p className="farm-location">{farm.location}</p>
              <p className="farm-rating">{farm.rating}</p>
              <p className="farm-distance">{farm.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
