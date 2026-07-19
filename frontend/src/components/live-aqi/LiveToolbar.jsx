import { FaSearch } from "react-icons/fa";

export default function LiveToolbar() {
  return (
    <div
      className="
        bg-slate-900
        rounded-2xl
        p-6
        mb-8
        border border-slate-800
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="relative">

          <FaSearch
            className="
              absolute
              left-4
              top-4
              text-slate-500
            "
          />

          <input
            type="text"
            placeholder="Search station..."
            className="
              w-full
              bg-slate-800
              rounded-xl
              py-3
              pl-12
              pr-4
              outline-none
              border border-slate-700
            "
          />

        </div>

        <select
          className="
            bg-slate-800
            rounded-xl
            px-4
            border border-slate-700
          "
        >
          <option>All Pollutants</option>
          <option>PM2.5</option>
          <option>PM10</option>
          <option>NO2</option>
          <option>SO2</option>
          <option>CO</option>
          <option>OZONE</option>
        </select>

        <select
          className="
            bg-slate-800
            rounded-xl
            px-4
            border border-slate-700
          "
        >
          <option>All Status</option>
          <option>Good</option>
          <option>Satisfactory</option>
          <option>Moderate</option>
          <option>Poor</option>
          <option>Very Poor</option>
          <option>Severe</option>
        </select>

      </div>
    </div>
  );
}