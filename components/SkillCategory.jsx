import SkillTag from "./SkillTag";

export default function SkillCategory({ category, skills }) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}
