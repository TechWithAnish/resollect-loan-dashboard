import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import FilterSection from './components/FilterSection/FilterSection';
import DataTable from './components/DataTable/DataTable';
import Pagination from './components/Pagination/Pagination';
import { loanData } from './data/data';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');
  const [tableData, setTableData] = useState(loanData);
  const [activeTab, setActiveTab] = useState('All');

  const handleAddEntry = useCallback((newEntry) => {
    setTableData((prev) => [...prev, newEntry]);
  }, []);

  const tabs = [
    'All',
    'Pre-Screened',
    'NPA',
    'Symbolic Possession',
    'DM Order',
    'Physical Possession',
    'Auctions',
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <header>
          <h1>Portfolio</h1>
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? 'tab active' : 'tab'}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>
        <FilterSection
          onFilterChange={setFilter}
          onAddEntry={handleAddEntry}
        />
        <DataTable data={tableData} filter={filter} />
        <Pagination />
      </div>
    </div>
  );
}

export default App;