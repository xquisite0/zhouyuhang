import Image from "next/image";

export default function AchievementItem({ achievement }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          {achievement.logo && (
            <Image
              src={achievement.logo}
              alt={`${achievement.title} logo`}
              width={40}
              height={40}
              className="rounded flex-shrink-0"
            />
          )}
          <h3 className="text-lg font-semibold">{achievement.title}</h3>
        </div>
        <span className="text-sm text-gray-500 whitespace-nowrap">
          {achievement.year}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        {achievement.description}
      </p>
      {achievement.link && (
        <a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm mt-2 inline-block"
        >
          View Profile →
        </a>
      )}
    </div>
  );
}
