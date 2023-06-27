import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./routes/home/Home";
import { Search } from "./routes/search/Search";

export const AppRouter : React.FC = () => {
    return(
        <Router>
        <div>
          <nav>

          </nav>
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </Router>
    )
}