import Image from "next/image";

export default function ExperienceItem({ item }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          {item.logo && (
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              width={48}
              height={48}
              className="rounded flex-shrink-0"
            />
          )}
          <div>
            <h3 className="text-lg font-semibold">{item.role}</h3>
            <p className="text-sm text-gray-500">{item.company}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 whitespace-nowrap">
          {item.start} – {item.end || "Present"}
        </p>
      </div>
      {item.bullets?.length > 0 && (
        <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
          {item.bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
