import './Pagination.css';
import React from 'react';

function Pagination() {
  return (
    <div className="pagination">
      <span>100 total rows</span>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Pagination;