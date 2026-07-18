export default function SectionTitle({ title, description }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
      {description && (
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
