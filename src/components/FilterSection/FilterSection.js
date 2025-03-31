import React from 'react';
import { useState } from 'react';
import { debounce } from 'lodash';
import UploadDocument from '../UploadDocument/UploadDocument';
import './FilterSection.css';

function FilterSection({ onFilterChange, onAddEntry }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleSearch = debounce((value) => {
    onFilterChange(value);
  }, 300);

  const handleClose = () => {
    setShowUploadForm(false);
  };

  return (
    <div className="filter-section">
      <input
        type="text"
        placeholder="Search Loan Number"
        aria-label="Search loan number"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <select>
        <option>Select Columns</option>
        <option>Loan No</option>
        <option>Loan Type</option>
        <option>Borrower</option>
      </select>
      <button>More Filters</button>
      <button
        className="upload-btn"
        onClick={() => setShowUploadForm(true)}
      >
        Upload
      </button>
      {showUploadForm && (
        <>
          <div className="upload-document-backdrop" onClick={handleClose} />
          <UploadDocument
            onAddEntry={(newEntry) => {
              onAddEntry(newEntry);
              setShowUploadForm(false);
            }}
          />
        </>
      )}
    </div>
  );
}

export default FilterSection;