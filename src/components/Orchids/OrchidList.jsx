import React from 'react';
import { ORCHIDS } from '../../data/ListOfOrchids';
import Orchid from './Orchid';
import './OrchidList.css';

const OrchidList = () => {
  return (
    <div className="orchid-list-container">
      <h1 className="orchid-list-title">Our Exotic Orchid Collection</h1>
      <div className="orchid-list">
        {ORCHIDS.map(orchid => (
          <Orchid key={orchid.id} orchid={orchid} />
        ))}
      </div>
    </div>
  );
};


export default OrchidList;