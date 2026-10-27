export default function Projects({ projects = [] }) {
  const items = Array.isArray(projects)
    ? projects
    : Array.isArray(projects?.results)
      ? projects.results
      : [];

  const getValue = (item, keys, fallback = '') => {
    for (const key of keys) {
      if (item?.[key] !== undefined && item[key] !== null && item[key] !== '') {
        return item[key];
      }
    }
    return fallback;
  };

  const getTechnologies = (item) => {
    const value = getValue(item, ['technologies', 'tech_stack', 'technology', 'tools'], []);
    if (Array.isArray(value)) {
      return value.map((tech) =>
        typeof tech === 'string'
          ? tech
          : tech?.name || tech?.title || ''
      ).filter(Boolean);
    }
    if (typeof value === 'string') {
      return value.split(',').map((tech) => tech.trim()).filter(Boolean);
    }
    return [];
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#0b0816] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300 sm:text-sm">
            Things I've built
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
            A selection of projects showcasing my development skills and problem-solving approach.
          </p>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>

        {items.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {items.map((item, index) => {
              const title = getValue(item, ['title', 'name', 'project_name'], 'Project');
              const description = getValue(item, ['description', 'summary', 'details']);
              const image = getValue(item, ['image_url', 'thumbnail', 'image']);
              const demoUrl = getValue(item, ['live_url', 'demo_url', 'project_url', 'live_link']);
              const repoUrl = getValue(item, ['github_url', 'repository_url', 'repo_url', 'github_link']);
              const technologies = getTechnologies(item);
              const featured = Boolean(item.is_featured ?? item.featured);

              return (
                <article
                  key={item.id ?? `${title}-${index}`}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-950/20"
                >
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/60 via-[#17102b] to-blue-900/50 sm:h-48">
                    {image ? (
                      <img
                        src={image}
                        alt={`${title} project preview`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-5xl font-bold text-white/20">
                        {title.slice(0, 1).toUpperCase()}
                      </span>
                    )}
                    {featured && (
                      <span className="absolute left-3 top-3 rounded-full border border-purple-300/20 bg-[#100b20]/90 px-3 py-1 text-xs text-purple-200 sm:left-4 sm:top-4">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <h3 className="break-words text-lg font-semibold sm:text-xl">
                      {title}
                    </h3>

                    {description && (
                      <p className="mt-3 line-clamp-4 break-words text-sm leading-7 text-gray-400">
                        {description}
                      </p>
                    )}

                    {technologies.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                          <span
                            key={`${tech}-${techIndex}`}
                            className="max-w-full break-words rounded-full border border-blue-400/15 bg-blue-400/[0.07] px-3 py-1 text-xs text-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {(demoUrl || repoUrl) && (
                      <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-5 sm:mt-6">
                        {demoUrl && (
                          <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0b0816]"
                          >
                            Live Demo ↗
                          </a>
                        )}
                        {repoUrl && (
                          <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-200 transition hover:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0b0816]"
                          >
                            Source Code ↗
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-8 text-center text-sm text-gray-400 sm:px-8 sm:py-10 sm:text-base">
            Projects will appear here when available from your API.
          </p>
        )}
      </div>
    </section>
  );
}
