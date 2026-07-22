import { useEffect, useState } from "react";
import api from "../services/api";

export default function useForecast() {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadForecast() {
      try {
        const response = await api.get("/forecast");
        setForecast(response.data.forecasts);
      } catch (err) {
        setError("Failed to load AI forecast");
      } finally {
        setLoading(false);
      }
    }

    loadForecast();
  }, []);

  return {
    forecast,
    loading,
    error,
  };
}