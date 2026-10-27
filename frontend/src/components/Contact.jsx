
export default function Contact({ profile = {} }) {
  const email = profile.email || profile.contact_email || '';
  const phone = profile.phone || profile.phone_number || '';
  const location = profile.location || profile.city || '';
  const github = profile.github_url || profile.github || '';
  const linkedin = profile.linkedin_url || profile.linkedin || '';

  const links = [
    { label: 'Email', value: email, href: email ? `mailto:${email}` : '' },
    { label: 'Phone', value: phone, href: phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : '' },
    { label: 'Location', value: location, href: '' },
    { label: 'GitHub', value: github, href: github },
    { label: 'LinkedIn', value: linkedin, href: linkedin },
  ].filter((item) => item.value);

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-[#080612] px-5 py-24 text-white sm:px-8 lg:px-16">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-700/15 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.025] to-blue-500/[0.08] p-7 text-center sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Let's connect
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Have a project in <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">mind?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Interested in collaborating or discussing an opportunity? Feel free to reach out.
          </p>

          {email && (

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email || 'birmabm267@gmail.com')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Get in Touch
            </a>

          )}

          {links.length > 0 && (
            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {links.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-black/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={['GitHub', 'LinkedIn'].includes(item.label) ? '_blank' : undefined}
                      rel={['GitHub', 'LinkedIn'].includes(item.label) ? 'noreferrer' : undefined}
                      className="mt-2 block break-all text-sm text-gray-200 transition hover:text-purple-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 break-words text-sm text-gray-200">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
