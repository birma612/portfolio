
export default function Footer({ profile = {} }) {
  const name = profile.full_name || profile.name || 'My Portfolio';
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#080612] px-5 py-7 text-white sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-400">
          © {year} <span className="font-medium text-purple-300">{name}</span>.
          {' '}All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm text-gray-400 transition hover:text-cyan-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
