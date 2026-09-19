import { useState } from 'react';
import { MapPin, ArrowRight, Search } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Link, useRouter } from '@/router';
import { locations } from '@/data/locations';

const mapPositions: Record<string, { x: number; y: number }> = {
  amsterdam: { x: 50, y: 36 }, almere: { x: 56, y: 38 }, utrecht: { x: 48, y: 45 },
  arnhem: { x: 62, y: 48 }, breda: { x: 40, y: 70 }, rotterdam: { x: 40, y: 53 },
  haaglanden: { x: 34, y: 51 }, 'eindhoven-regio': { x: 52, y: 70 }, maastricht: { x: 56, y: 86 },
};

export function LocationsSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const { navigate } = useRouter();

  const filtered = locations.filter((l) =>
    l.city.toLowerCase().includes(query.toLowerCase()) ||
    l.area.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <Reveal className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-ink leading-[1.1] tracking-tight text-balance">
              Altijd een vestiging in de buurt.
            </h2>
            <p className="text-ink-muted max-w-md">Negen gespecialiseerde locaties verspreid over heel Nederland.</p>
          </div>
        </Reveal>

        {/* Mobile: search + list */}
        <div className="lg:hidden">
          <div className="relative mb-4">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input
              type="text"
              placeholder="Zoek op plaats / postcode"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-bcn-100 bg-bcn-50 text-ink placeholder:text-ink-muted focus:border-bcn-blue focus:ring-2 focus:ring-bcn-100 outline-none transition-all"
            />
          </div>
          <div className="space-y-1">
            {filtered.map((loc) => (
              <button
                key={loc.slug}
                onClick={() => navigate(`/vestigingen/${loc.slug}`)}
                className="group w-full flex items-center justify-between gap-4 p-4 rounded-lg hover:bg-bcn-ice transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-bcn-ice flex items-center justify-center group-hover:bg-bcn-200 transition-colors">
                    <MapPin size={15} className="text-bcn-deep" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{loc.city}</div>
                    <div className="text-xs text-ink-muted">{loc.area}</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-bcn-300 group-hover:text-bcn-deep group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: map + list */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative bg-bcn-50 rounded-xl2 p-10 aspect-[5/4] overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Kaart van Nederland met BCN vestigingen">
                  <path d="M28 22 Q33 15 40 13 Q47 11 54 12 Q61 13 67 17 Q71 21 71 27 Q73 32 71 37 Q69 42 65 45 L67 49 Q69 55 65 59 Q61 65 57 69 Q55 75 53 79 Q51 85 49 89 Q47 91 43 89 Q41 85 39 81 Q37 75 35 69 Q33 62 33 55 Q31 47 29 39 Q27 32 28 27 Z" fill="#D6EEFC" stroke="#8CCBF3" strokeWidth="0.4" />
                  <path d="M46 18 Q50 16 54 18 Q56 22 55 26 Q52 28 48 27 Q45 25 45 22 Z" fill="#EEF8FE" />
                  {locations.map((loc) => {
                    const pos = mapPositions[loc.slug];
                    if (!pos) return null;
                    const isHovered = hovered === loc.slug;
                    return (
                      <g key={loc.slug} transform={`translate(${pos.x}, ${pos.y})`} className="cursor-pointer" onMouseEnter={() => setHovered(loc.slug)} onMouseLeave={() => setHovered(null)} onClick={() => navigate(`/vestigingen/${loc.slug}`)}>
                        {isHovered && <circle r="3.5" fill="#168FE3" opacity="0.2" className="animate-ping" />}
                        <circle r={isHovered ? 2 : 1.6} fill={isHovered ? '#0755B0' : '#168FE3'} stroke="white" strokeWidth="0.5" className="transition-all duration-300" />
                        {isHovered && <text x="0" y="-3.5" textAnchor="middle" fontSize="3" fill="#0755B0" fontWeight="700">{loc.city}</text>}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal stagger>
              <div className="space-y-1">
                {locations.map((loc) => (
                  <button key={loc.slug} onClick={() => navigate(`/vestigingen/${loc.slug}`)} onMouseEnter={() => setHovered(loc.slug)} onMouseLeave={() => setHovered(null)} className="group w-full flex items-center justify-between gap-4 p-4 rounded-lg hover:bg-bcn-ice transition-colors text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-bcn-ice flex items-center justify-center group-hover:bg-bcn-200 transition-colors"><MapPin size={15} className="text-bcn-deep" /></div>
                      <div><div className="font-semibold text-ink text-sm">{loc.city}</div><div className="text-xs text-ink-muted">{loc.area}</div></div>
                    </div>
                    <ArrowRight size={16} className="text-bcn-300 group-hover:text-bcn-deep group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </Reveal>
            <Reveal className="mt-6">
              <Link to="/vestigingen" className="group inline-flex items-center gap-2 text-sm font-semibold text-bcn-deep hover:text-bcn-blue transition-colors">
                Alle vestigingen bekijken<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
