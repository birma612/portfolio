
export default function About({ profile = {} }) {
  const name =
    profile.full_name ||
    profile.name ||
    'a passionate developer';

  const description =
    profile.about ||
    profile.bio ||
    profile.description ||
    `I'm ${name}, passionate about building useful, reliable, and user-friendly applications. I enjoy turning ideas into practical solutions through clean code and continuous learning.`;

  const highlights = [
    {
      number: '01',
      title: 'Problem Solving',
      text: 'Breaking complex challenges into practical solutions.',
    },
    {
      number: '02',
      title: 'Full-Stack Development',
      text: 'Connecting intuitive interfaces with reliable backend systems.',
    },
    {
      number: '03',
      title: 'Continuous Learning',
      text: 'Exploring technologies and improving through real projects.',
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#0b0816] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-16 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-60 w-60 rounded-full bg-purple-700/15 blur-[100px] sm:h-72 sm:w-72 sm:blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 sm:text-sm sm:tracking-[0.3em]">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Decorative identity panel */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-purple-600/25 to-blue-600/20 blur-xl sm:-inset-3"
            />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7 lg:p-9">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 text-2xl font-bold shadow-lg shadow-purple-900/30 sm:mb-8 sm:h-16 sm:w-16">
                {'</>'}
              </div>

              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 sm:text-sm">
                My approach
              </p>

              <h3 className="mt-3 text-xl font-bold leading-snug sm:text-2xl lg:text-3xl">
                Building ideas into{' '}
                <span className="text-purple-300">
                  real solutions.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
                I value thoughtful design, maintainable code, and applications
                that solve real-world problems.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                {['Curiosity', 'Creativity', 'Consistency'].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-purple-400/20 bg-purple-400/[0.08] px-3 py-1.5 text-xs text-purple-200 sm:text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* About content */}
          <div className="min-w-0">
            <h3 className="text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">
              A little about my journey
            </h3>

            <p className="mt-4 whitespace-pre-line break-words text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
              {description}
            </p>

            <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
              {highlights.map((item) => (
                <article
                  key={item.number}
                  className="group flex min-w-0 items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition duration-300 hover:border-purple-400/30 hover:bg-purple-500/[0.05] sm:gap-4 sm:p-5 sm:hover:-translate-y-1"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-xs font-bold text-purple-300 sm:h-11 sm:w-11 sm:text-sm">
                    {item.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h4 className="break-words text-sm font-semibold text-white sm:text-base">
                      {item.title}
                    </h4>

                    <p className="mt-1 break-words text-sm leading-6 text-gray-400">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
