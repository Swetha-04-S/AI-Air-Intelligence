export function getAQIStatus(value) {
    if (value <= 50)
      return {
        label: "Good",
        color: "#22c55e",
      };
  
    if (value <= 100)
      return {
        label: "Satisfactory",
        color: "#84cc16",
      };
  
    if (value <= 200)
      return {
        label: "Moderate",
        color: "#f59e0b",
      };
  
    if (value <= 300)
      return {
        label: "Poor",
        color: "#ef4444",
      };
  
    if (value <= 400)
      return {
        label: "Very Poor",
        color: "#9333ea",
      };
  
    return {
      label: "Severe",
      color: "#7e22ce",
    };
  }