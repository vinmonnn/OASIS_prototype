export default function HteTable({ htes = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-oasis-button-dark text-white text-left">
            <th className="p-3">HTE Name</th>
            <th className="p-3">Industry</th>
            <th className="p-3">MOA Signed</th>
            <th className="p-3">Expiration</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {htes.length === 0 && (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No HTE records found
              </td>
            </tr>
          )}

          {htes.map((hte) => (
            <tr
              key={hte.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-3 font-semibold">
                {hte.name}
              </td>
              <td className="p-3">
                {hte.industry}
              </td>
              <td className="p-3">
                {hte.moa_signed_at ?? "—"}
              </td>
              <td className="p-3">
                {hte.moa_expiry_date ?? "—"}
              </td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    hte.moa_status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : hte.moa_status === "EXPIRING"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {hte.moa_status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
