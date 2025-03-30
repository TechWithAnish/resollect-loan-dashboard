import { useState } from 'react';
import Sidebar from './components/Sidebar'; // Corrected import
import FilterSection from './components/FilterSection';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';
import "./App.css";

function App() {
  const [filter, setFilter] = useState('');

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <header>
          <h1>Portfolio</h1>
          <div className="tabs">
            <button>All</button>
            <button>Pre-Screened</button>
            <button>NPA</button>
            <button>Symbolic Possession</button>
            <button>DM Order</button>
            <button>Physical Possession</button>
            <button>Auctions</button>
          </div>
        </header>
        <FilterSection onFilterChange={setFilter} />
        <DataTable filter={filter} />
        <Pagination />
      </div>
    </div>
  );
}

export default App;