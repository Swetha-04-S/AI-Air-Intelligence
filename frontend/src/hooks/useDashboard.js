import { useEffect, useState } from "react";
import api from "../services/api";

export default function useDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadDashboard() {
    try {
      setLoading(true);
      const response = await api.get("/dashboard");
      setDashboard(response.data);
      setError("");
    } catch (err) {
      setError("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return {
    dashboard,
    loading,
    error,
    refresh: loadDashboard,
  };
}