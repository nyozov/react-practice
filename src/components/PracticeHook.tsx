import React, { useEffect, useState } from "react";
import usePatients from "../hooks/usePatients";

type User = {
    id: number,
    firstName: string,
    lastName: string,
}
export default function PracticeHook() {
  const { loading, patients, error } = usePatients();

  if (loading) return <p>Loading patients...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((p: User) => (
          <li key={p.id}>
            {p.firstName} {p.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
