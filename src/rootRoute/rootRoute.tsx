import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DaoPage from '../pages/daoPage';
import CreateDaoPage from '../pages/createDaoPage';
import HomePage from '../pages/homePage';
import TreasuryPage from '../pages/TreasuryPage';
import ExplorePage from '../pages/explorePage';
import ProposalPage from '../pages/proposalPage';
import VoteDetailsPage from '../pages/voteDetailsPage';
import VotePage from '../pages/votePage';
import Navigation from '../components/Navigation';

const RootRouter: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dao" element={<DaoPage />} />
        <Route path="/create-dao" element={<CreateDaoPage />} />
        <Route path="/treasury" element={<TreasuryPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/proposal" element={<ProposalPage />} />
        <Route path="/vote-details" element={<VoteDetailsPage />} />
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </Router>
  );
};

export default RootRouter;
