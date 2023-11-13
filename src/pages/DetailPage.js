import React from "react";
import { useLocation } from 'react-router-dom';
import './DetailPage.css';

export default function DetailPage({ onClose }) {
    const { state } = useLocation();
    const data = state && state.data;
  if (!data) {
    return null; // or handle the case where data is not available
  }

  return (
    <div className="detail-page">
      <div className="detail-header">
        <h2>{data.l}</h2>
      </div>
      <div className="detail-body">
        <img src={data.i && data.i.imageUrl} alt={data.l} />
        {/* You can add more details here based on the data structure */}
      </div>
    </div>
  );
}