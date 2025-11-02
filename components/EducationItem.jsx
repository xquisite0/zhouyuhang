export default function EducationItem({ item }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{item.school}</h3>
          <p className="text-sm text-gray-500">{item.degree}</p>
        </div>
        <p className="text-sm text-gray-500 whitespace-nowrap">
          {item.start} – {item.end}
        </p>
      </div>
      {item.details?.length > 0 && (
        <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
          {item.details.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
