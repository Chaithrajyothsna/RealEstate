import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  const location = useLocation();  // Make sure BrowserRouter wraps the component
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  const [filters, setFilters] = useState({
    type: "",
    county: "",
    category: "",
    bedrooms: "",
    minPrice: "",
    maxPrice: "",
    searchTerm: query,
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(filters);
    navigate(`/search-results?${params.toString()}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Advanced Search</h2>

      <div className="row justify-content-center">
        <div className="col-md-6 bg-light p-4 rounded shadow">
          <form onSubmit={handleSubmit}>
            {/* Type Dropdown */}
            <select className="form-select mb-3" name="type" value={filters.type} onChange={handleChange}>
              <option value="">Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>

            {/* County Dropdown */}
            <select className="form-select mb-3" name="county" value={filters.county} onChange={handleChange}>
              <option value="">Counties</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
            </select>

            {/* Category Dropdown */}
            <select className="form-select mb-3" name="category" value={filters.category} onChange={handleChange}>
              <option value="">Categories</option>
              <option value="rent">For Rent</option>
              <option value="sale">For Sale</option>
            </select>

            {/* Bedrooms Dropdown */}
            <select className="form-select mb-3" name="bedrooms" value={filters.bedrooms} onChange={handleChange}>
              <option value="">Bed Rooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
            </select>

            {/* Min Price Input */}
            <label className="fw-bold">Min Price (₹):</label>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter min price"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
            />

            {/* Max Price Input */}
            <label className="fw-bold">Max Price (₹):</label>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter max price"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
            />

            {/* Search Button */}
            <button type="submit" className="btn btn-primary w-100">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
