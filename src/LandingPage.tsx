import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [startYear, setStartYear] = useState(1920);
  const [endYear, setEndYear] = useState(2024);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (endYear < startYear) {
      setErrorMessage("End year must be on or after the start year.");
      return;
    }

    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${searchPhrase}&media_type=image&year_start=${startYear}&year_end=${endYear}`
    );
    const data = await response.json();

    if (!data.collection.items.length) {
      setErrorMessage("No results found.");
      return;
    }

    navigate("/display", { state: { results: data.collection.items } });
  };

  return (
    <div className="landing-page">
      <h1 className="title">NASA Image Search</h1>
      <div>
        <p>




        </p>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a phrase"
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
          className="search-input"
        />
        <div>
          <p>






          </p>
        </div>
        <div className="year-range">
          <label htmlFor="start-year">Start Year:</label>
          <select
            id="start-year"
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value))}
          >
            {Array.from({ length: 105 }, (_, i) => 1920 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <label htmlFor="end-year">End Year:</label>
          <select
            id="end-year"
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value))}
          >
            {Array.from({ length: 105 }, (_, i) => 1920 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

        </div>

        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
          <div className="error-placeholder"></div>
        )}        <button type="submit" className="search-button">
          Search!
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
