import React from 'react';

const Skills = ({ skills = [] }) => {
  const visibleSkills = skills.filter(
    (skill) => skill.is_visible !== false
  );

  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-[#0b0816] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300 sm:text-sm">
            What I work with
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build applications,
            solve problems, and bring ideas to life.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>

        {/* Skills grid */}
        {visibleSkills.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {visibleSkills.map((skill) => (
              <article
                key={skill.id ?? `${skill.category}-${skill.name}`}
                className="group min-w-0 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-purple-400/40 hover:bg-white/[0.06] sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-lg font-bold text-purple-200 transition group-hover:border-purple-400/40">
                    {skill.name?.charAt(0)?.toUpperCase() || 'S'}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="break-words font-semibold text-white transition group-hover:text-purple-200">
                      {skill.name || 'Skill'}
                    </h3>

                    {skill.category && (
                      <p className="mt-1 break-words text-sm text-gray-400">
                        {skill.category}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-10 text-center sm:px-8">
            <p className="text-gray-300">No skills added yet.</p>
            <p className="mt-2 text-sm text-gray-500">
              Skills will appear here when they are available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
