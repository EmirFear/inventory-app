// src/pages/Firms.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";

const Firms = () => {
  const { getFirms } = useStockRequest();
  const { data, loading, error } = useSelector((state) => state.stock.firms);

  useEffect(() => {
    getFirms("firms", "/firms");
  }, [getFirms]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Firms</h1>
      <ul>
        {data.map((firm) => (
          <li key={firm._id}>
            <img src={firm.image} alt={firm.name} style={{ width: "50px", height: "50px" }} />
            <div>{firm.name}</div>
            <div>{firm.phone}</div>
            <div>{firm.address}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Firms;

