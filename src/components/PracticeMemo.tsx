import { useState, memo, useMemo, useCallback } from "react";

type Patient = {
  id: number;
  name: string;
};

type PatientItemProps = {
    patient: Patient,
      onSelect: (patient: Patient) => void;
}
const PatientItem = memo(function PatientItem({ patient, onSelect }: PatientItemProps) {
  console.log("Rendering:", patient.name);

  return <li onClick={() => onSelect(patient)}>{patient.name}</li>;
});

export default function PracticeMemo() {
  const [count, setCount] = useState(0);

  const patients = useMemo<Patient[]>(
    () => [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Brown" },
    ],
    [],
  );

  const handleSelect = useCallback((patient: Patient) => {
    console.log("Selected:", patient.name);
  }, []);

  return (
    <div>
      <h2>Patient Dashboard</h2>

      <button onClick={() => setCount(count + 1)}>
        Re-render Parent ({count})
      </button>

      <ul>
        {patients.map((p: Patient) => (
          <PatientItem key={p.id} patient={p} onSelect={handleSelect} />
        ))}
      </ul>
    </div>
  );
}
