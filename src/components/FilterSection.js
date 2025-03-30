import { useState } from 'react';
import './FilterSection.css';

function FilterSection({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Uploaded file: ${file.name}`);
      // Add logic to process the file (e.g., parse CSV, send to API)
    }
  };

  return (
    <div className="filter-section">
      <input
        type="text"
        placeholder="Search Loan Number"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select>
        <option>Select Columns</option>
        <option>Loan No</option>
        <option>Loan Type</option>
        <option>Borrower</option>
      </select>
      <button>More Filters</button>
      <label className="upload-btn">
        Upload
        <input type="file" onChange={handleUpload} style={{ display: 'none' }} />
      </label>
    </div>
  );
}

export default FilterSection;