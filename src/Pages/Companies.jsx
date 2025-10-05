import { useState, useEffect } from "react";
import CompanyCard from "../Components/CompanyCard";
import Filter from "../Components/Filter";
import companiesData from "../data/companies.json"; // This is mock data

export default function Companies() {
  // State for Companies
  const [companies, setCompanies] = useState([]);

  // State for filters
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Simulate API fetch
  useEffect(() => {
    setLoading(true);
    setError("");
    try {
      // Simulate network delay
      setTimeout(() => {
        setCompanies(companiesData);
        setLoading(false);
      }, 1000);
    } catch (err) {

      setError("Failed to load companies.");
      setLoading(false);
    }
  }, []);

  // Filter by location first
  const filteredByLocation = location
    ? companies.filter((c) => c.location === location)
    : companies;

  // Filter by industry within the selected location
  const filteredCompanies = industry
    ? filteredByLocation.filter((c) => c.industry === industry)
    : filteredByLocation;

  // Further filter by search
  const finalCompanies = filteredCompanies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        industry={industry}
        setIndustry={setIndustry}
      />
      {/* Show loading message while data is being fetched */}

      {loading && <p className="text-blue-500">Loading companies...</p>}
      {/* Show error message if fetching fails */}

      {error && <p className="text-red-500">{error}</p>}
      {/* Show message if no companies match current filters */}

      {!loading && !error && finalCompanies.length === 0 && (
        <p className="text-gray-500">No data available for this selection.</p>
      )}
            {/* Displaying company cards in a responsive grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!loading && !error && finalCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
}
