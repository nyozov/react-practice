import { useEffect, useState } from "react";

export default function usePatients(url = "https://dummyjson.com/users") {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPatients() {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (!cancelled) {
          setPatients(data.users);
          setLoading(false);
        }
      } catch (err) {
        setError("Failed to fetch patients");
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchPatients();

    return () => {
      cancelled = true;
    };
  }, []);

  return { patients, loading, error };
}
