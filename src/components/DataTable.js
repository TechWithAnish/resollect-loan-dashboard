import { useState, useEffect } from 'react';
import { loanData } from '../data';
import './DataTable.css';

function DataTable({ filter }) {
  const [filteredData, setFilteredData] = useState(loanData);

  useEffect(() => {
    if (filter) {
      const filtered = loanData.filter((item) =>
        item.loanNo.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(loanData);
    }
  }, [filter]);

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Loan No</th>
          <th>Loan Type</th>
          <th>Borrower</th>
          <th>Co-Borrower 1</th>
          <th>Address</th>
          <th>Current OPD</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
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

export default DataTable;