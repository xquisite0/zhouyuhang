export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {(title || subtitle) && (
          <div className="mb-6">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
