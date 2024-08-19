import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dao">DAO Page</Link></li>
        <li><Link to="/create-dao">Create DAO Page</Link></li>
        <li><Link to="/treasury">Treasury Page</Link></li>
        <li><Link to="/explore">Explore Page</Link></li>
        <li><Link to="/proposal">Proposal Page</Link></li>
        <li><Link to="/vote-details">Vote Details Page</Link></li>
        <li><Link to="/vote">Vote Page</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
