export default function LiveTable({ stations }) {
    return (
      <div className="overflow-x-auto rounded-2xl border border-slate-800">
  
        <table className="min-w-full">
  
          <thead className="bg-slate-900">
  
            <tr>
  
              <th className="p-4 text-left">Station</th>
  
              <th className="p-4">PM2.5</th>
  
              <th className="p-4">PM10</th>
  
              <th className="p-4">NO₂</th>
  
              <th className="p-4">SO₂</th>
  
              <th className="p-4">CO</th>
  
              <th className="p-4">O₃</th>
  
              <th className="p-4">Updated</th>
  
            </tr>
  
          </thead>
  
          <tbody>
  
            {stations.map((station) => (
  
              <tr
                key={station.station}
                className="border-t border-slate-800 hover:bg-slate-900"
              >
  
                <td className="p-4 font-semibold">
                  {station.station}
                </td>
  
                <td className="text-center">
                  {station.pollutants["PM2.5"] ?? "-"}
                </td>
  
                <td className="text-center">
                  {station.pollutants["PM10"] ?? "-"}
                </td>
  
                <td className="text-center">
                  {station.pollutants["NO2"] ?? "-"}
                </td>
  
                <td className="text-center">
                  {station.pollutants["SO2"] ?? "-"}
                </td>
  
                <td className="text-center">
                  {station.pollutants["CO"] ?? "-"}
                </td>
  
                <td className="text-center">
                  {station.pollutants["OZONE"] ?? "-"}
                </td>
  
                <td className="text-center">
                  {station.last_update}
                </td>
  
              </tr>
  
            ))}
  
          </tbody>
  
        </table>
  
      </div>
    );
  }