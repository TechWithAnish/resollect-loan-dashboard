import React, { useState, useMemo } from 'react';
import './DataTable.css';

function DataTable({ data, filter }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const filteredData = filter
    ? data.filter((item) =>
        item.loanNo.toLowerCase().includes(filter.toLowerCase())
      )
    : data;

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredData, sortConfig]);

  const requestSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th onClick={() => requestSort('loanNo')}>Loan No</th>
          <th onClick={() => requestSort('loanType')}>Loan Type</th>
          <th onClick={() => requestSort('borrower')}>Borrower</th>
          <th onClick={() => requestSort('coBorrower')}>Co-Borrower 1</th>
          <th onClick={() => requestSort('address')}>Address</th>
          <th onClick={() => requestSort('opd')}>Current OPD</th>
          <th onClick={() => requestSort('region')}>Region</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.loanNo}</td>
            <td>{item.loanType}</td>
            <td>{item.borrower}</td>
            <td>{item.coBorrower}</td>
            <td>{item.address}</td>
            <td>₹{item.opd.toLocaleString()}</td>
            <td>{item.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(DataTable);