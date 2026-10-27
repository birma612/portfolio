import { useEffect, useState } from 'react';

export default function Hero({ profile = {} }) {
  const [visible, setVisible] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const name =
    profile.full_name ||
    profile.name ||
    profile.first_name ||
    'Your Name';

  const role =
    profile.professional_title ||
    profile.title ||
    profile.role ||
    profile.job_title ||
    'Full Stack Developer';

  const description =
    profile.short_bio ||
    profile.bio ||
    profile.about ||
    'I build modern web applications with clean interfaces, thoughtful user experiences, and reliable backend systems.';

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  const imageUrl =
    profile.profile_image_url ||
    profile.image_url ||
    profile.avatar ||
    '';

  const handleImageError = () => {
    if (!usingFallback) {
      setUsingFallback(true);
    } else {
      setImageFailed(true);
    }
  };

  const displayedImage = usingFallback ? '/profile.jpeg' : imageUrl;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[90vh] scroll-mt-20 items-center overflow-hidden bg-[#080612] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-purple-700/30 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Introduction */}
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-400/10 px-4 py-2 text-sm text-purple-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Welcome to my portfolio
          </div>

          <p className="mb-3 text-lg text-gray-300">Hello, I'm</p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            {name}
            <span className="mt-2 block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {role}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            {description}
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3.5 font-semibold shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/25"
            >
              View Projects
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-purple-400">✦</span>
              Creative problem solver
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-400">✦</span>
              Always learning
            </span>
          </div>
        </div>

        {/* Profile visual */}
        <div
          className={`relative mx-auto flex w-full max-w-md items-center justify-center transition-all delay-150 duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Profile glow */}
          <div
            aria-hidden="true"
            className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-purple-600/40 to-blue-500/30 blur-3xl sm:h-80 sm:w-80"
          />

          {/* Main profile card */}
          <div className="relative flex aspect-square w-full max-w-[360px] items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-[1.5rem] border border-dashed border-purple-400/20"
            />

            {/* Circular profile image */}
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 p-[2px] shadow-2xl shadow-purple-500/20 sm:h-52 sm:w-52">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#100b20] text-6xl font-bold tracking-wider text-white sm:text-7xl">
                {!imageFailed && (displayedImage || '/profile.jpeg') ? (
                  <img
                    key={displayedImage || '/profile.jpeg'}
                    src={displayedImage || '/profile.jpeg'}
                    alt={name}
                    className="h-full w-full rounded-full object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  initials || 'DEV'
                )}
              </div>
            </div>

            {/* Floating card: technology */}
            <div className="absolute right-3 top-10 rounded-2xl border border-white/10 bg-[#171027]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-5">
              <p className="text-xs text-gray-400">Building with</p>
              <p className="mt-1 font-semibold text-purple-200">
                Code & Creativity
              </p>
            </div>

            {/* Floating card: approach */}
            <div className="absolute bottom-8 left-2 rounded-2xl border border-white/10 bg-[#171027]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-7">
              <p className="text-xs text-gray-400">My approach</p>
              <p className="mt-1 font-semibold text-cyan-200">
                Learn · Build · Improve
              </p>
            </div>

            {/* Decorative dots */}
            <span
              aria-hidden="true"
              className="absolute left-9 top-9 h-3 w-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/60"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-12 right-8 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/60"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-sm text-gray-500 transition hover:text-white sm:block"
      >
        Scroll to explore ↓
      </a>
    </section>
  );
}
