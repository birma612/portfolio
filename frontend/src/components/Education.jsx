
export default function Education({ education = [] }) {
  const items = Array.isArray(education)
    ? education
    : Array.isArray(education?.results)
      ? education.results
      : [];

  const getValue = (item, keys, fallback = '') => {
    for (const key of keys) {
      if (item?.[key] !== undefined && item[key] !== null && item[key] !== '') {
        return item[key];
      }
    }
    return fallback;
  };

  const formatDate = (value) => {
    if (!value) return '';
    if (/present|current/i.test(String(value))) return 'Present';

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString('en', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section id="education" className="scroll-mt-20 bg-[#080612] px-5 py-24 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            My academic journey
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Education <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent"> & Learning</span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>

        {items.length ? (
          <div className="grid gap-5 md:grid-cols-2">
            {items.map((item, index) => {
              const degree = getValue(item, ['degree', 'qualification', 'title', 'course'], 'Education');
              const institution = getValue(item, ['institution', 'institution_name', 'school', 'college', 'university']);
              const field = getValue(item, ['field_of_study', 'specialization', 'stream', 'department']);
              const start = getValue(item, ['start_date', 'start_year', 'from_date']);
              const end = getValue(item, ['end_date', 'end_year', 'graduation_year', 'to_date']);
              const status = getValue(item, ['status', 'grade', 'result', 'percentage']);
              const dateText = [formatDate(start), formatDate(end)].filter(Boolean).join(' — ');

              return (
                <article
                  key={item.id ?? `${degree}-${institution}-${index}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/[0.05] sm:p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 to-blue-500/25 text-xl text-purple-200">
                    ✦
                  </div>
                  {dateText && (
                    <p className="mb-3 text-sm text-cyan-300">{dateText}</p>
                  )}
                  <h3 className="text-xl font-semibold">{degree}</h3>
                  {institution && <p className="mt-2 text-purple-300">{institution}</p>}
                  {field && <p className="mt-3 text-sm text-gray-400">{field}</p>}
                  {status && (
                    <p className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300">
                      {status}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/10 p-8 text-center text-gray-400">
            Education details will appear here when available from your API.
          </p>
        )}
      </div>
    </section>
  );
}
