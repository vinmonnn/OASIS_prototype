import { useEffect, useState } from "react";
import { getDashboardHtes } from "../../api/student.service";
import HteTable from "./HteTable";

export default function HteDashboard() {
  const [htes, setHtes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardHtes();
        setHtes(data);
      } catch (err) {
        setError("Failed to load HTE dashboard");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return <p className="text-center p-4">Loading dashboard…</p>;
  }

  if (error) {
    return (
      <p className="text-center p-4 text-red-600">
        {error}
      </p>
    );
  }

  return (
    <section className="w-full flex flex-col gap-4">
      <h2 className="text-xl font-bold text-oasis-header">
        HTE Dashboard Updates
      </h2>

      <HteTable htes={htes} />
    </section>
  );
}
