export function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-zinc-400">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full" />
    </div>
  );
}