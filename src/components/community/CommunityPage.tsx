// src/components/community/CommunityPage.tsx

export type CommunityStat = {
  label: string;
  value: string;
  helper?: string;
};

export type HighlightCard = {
  title: string;
  body: string;
};

export type Neighborhood = {
  name: string;
  blurb: string;
};

export type CommunityImage = {
  src: string;
  alt: string;
  label?: string;
};

export type CommunityPageConfig = {
  slug: string;
  name: string;
  subtitle: string;
  heroTagline: string;
  heroIntro: string;
  stats: CommunityStat[];
  highlights: HighlightCard[];
  neighborhoods: Neighborhood[];
  lifestyleTitle: string;
  lifestyleBody: string;
  listingsCtaLabel?: string;
  listingsCtaHref?: string;

  // NEW
  heroImage?: CommunityImage;
  gallery?: CommunityImage[];
};

type CommunityPageProps = {
  config: CommunityPageConfig;
};

const CommunityPage = ({ config }: CommunityPageProps) => {
  const {
    name,
    subtitle,
    heroTagline,
    heroIntro,
    stats,
    highlights,
    neighborhoods,
    lifestyleTitle,
    lifestyleBody,
    listingsCtaLabel = "View all properties →",
    listingsCtaHref = "#",
    heroImage,
    gallery = [],
  } = config;

  const cityName = name.split(",")[0];

  return (
    <main className="pt-28 pb-16 bg-gradient-to-b from-emerald-50/40 via-background to-background min-h-screen">
      <div className="container mx-auto px-4 space-y-16">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-700 mb-3">
              {subtitle}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {name}
            </h1>
            <p className="text-lg text-emerald-900 mb-4">{heroTagline}</p>
            <p className="text-muted-foreground max-w-xl">{heroIntro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#listings"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-colors"
              >
                View {cityName} Listings
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-emerald-50 transition-colors"
              >
                Schedule a Call About {cityName}
              </a>
            </div>
          </div>

          {/* Hero visual: photo if provided, fallback to original block */}
          <div className="relative">
            {heroImage ? (
              <figure className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-emerald-100 bg-white/60 shadow-lg">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {heroImage.label && (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 py-3">
                    <p className="text-xs font-medium text-emerald-50">
                      {heroImage.label}
                    </p>
                  </figcaption>
                )}
              </figure>
            ) : (
              <div className="aspect-[4/3] w-full rounded-2xl bg-emerald-900/80 shadow-lg overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_0_0,#a7f3d0,transparent_50%),radial-gradient(circle_at_100%_100%,#34d399,transparent_55%)]" />
                <div className="relative h-full flex flex-col justify-between p-6 text-emerald-50">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] mb-2">
                      Simply Real Estate Team
                    </p>
                    <p className="text-lg font-semibold">
                      Local insight meets thoughtful guidance.
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>• Personalized strategies for buying and selling</p>
                    <p>• Data-informed pricing and negotiation</p>
                    <p>• A calm, organized process from first call to closing</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Market snapshot">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-foreground">
              Market Snapshot
            </h2>
            <p className="text-xs text-muted-foreground">
              *Market stats are examples — plug in your actual data or link to
              your live reports.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-emerald-100 bg-white/80 p-4 shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-700 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-semibold text-foreground mb-1">
                  {stat.value}
                </p>
                {stat.helper && (
                  <p className="text-xs text-muted-foreground">
                    {stat.helper}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section aria-label="Community highlights">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Why buyers love {cityName}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-border bg-background/80 p-5 shadow-sm"
              >
                <h3 className="font-semibold mb-2 text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Optional photo strip / gallery */}
        {gallery.length > 0 && (
          <section aria-label={`${cityName} photos`}>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Around {cityName}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {gallery.map((photo) => (
                <figure
                  key={photo.src}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white/70 shadow-sm"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {photo.label && (
                    <figcaption className="px-3 py-2 text-xs text-muted-foreground">
                      {photo.label}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Neighborhoods */}
        <section aria-label="Neighborhoods">
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Neighborhoods & Home Styles
              </h2>
              <p className="text-sm text-muted-foreground">
                From classic character homes near the river to newer
                developments and acreage properties on the outskirts, {cityName}{" "}
                offers options for a wide range of lifestyles and budgets.
              </p>
            </div>
            <div className="grid gap-4">
              {neighborhoods.map((n) => (
                <div
                  key={n.name}
                  className="rounded-lg border border-border bg-white/80 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {n.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {n.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifestyle / Fit */}
        <section
          aria-label="Lifestyle"
          className="border border-emerald-100 bg-emerald-50/60 rounded-2xl p-6 md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-emerald-900 mb-3">
                {lifestyleTitle}
              </h2>
              <p className="text-sm text-emerald-950/80 mb-4">
                {lifestyleBody}
              </p>
              <p className="text-xs text-emerald-900/80">
                When you&apos;re ready to talk specifics — timing, price range, and
                ideal neighborhoods — we&apos;ll help you build a clear plan so your
                next move feels intentional, not rushed.
              </p>
            </div>
            <div className="rounded-xl bg-white/80 border border-emerald-100 p-4 shadow-sm space-y-3">
              <p className="text-sm font-semibold text-emerald-900">
                Curious about your options in {cityName}?
              </p>
              <ul className="text-xs text-emerald-950/80 space-y-1 list-disc list-inside">
                <li>Get a custom list of homes that match your goals</li>
                <li>See how your current home fits the market</li>
                <li>Talk through timing, schools, and commute trade-offs</li>
              </ul>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* Listings anchor – still just a placeholder box for now */}
        <section id="listings" aria-label={`${cityName} listings preview`}>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">
              Featured {cityName} Listings
            </h2>
            <a
              href={listingsCtaHref}
              className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
            >
              {listingsCtaLabel}
            </a>
          </div>
          <div className="rounded-xl border border-dashed border-border bg-background/60 p-6 text-sm text-muted-foreground">
            Listings for {cityName} will appear here once IDX integration is
            complete.
          </div>
        </section>
      </div>
    </main>
  );
};

export default CommunityPage;
