export default function CompanyCard({ company }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{company.name}</h2>
      <p className="text-gray-600">Location: {company.location}</p>
      <p className="text-gray-600">Industry: {company.industry}</p>
    </div>
  );
}
