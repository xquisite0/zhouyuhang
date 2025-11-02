import Image from "next/image";
import { skillIcons } from "../libs/data";

export default function SkillTag({ label }) {
  const iconUrl = skillIcons[label];

  return (
    <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-sm inline-flex items-center gap-2">
      {iconUrl && (
        <Image
          src={iconUrl}
          alt={`${label} icon`}
          width={14}
          height={14}
          className="flex-shrink-0"
        />
      )}
      {label}
    </span>
  );
}
