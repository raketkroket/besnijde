import { useState } from 'react';
import { Check, Calendar, MapPin, User, FileText, ArrowLeft, Info } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LinkButton, Button } from '@/components/Button';
import { locations } from '@/data/locations';

type PatientType = 'jongen' | 'man' | null;
type Step = 0 | 1 | 2 | 3 | 4 | 5;

const steps = [
  { number: '01', label: 'Patiënt', icon: User },
  { number: '02', label: 'Vestiging', icon: MapPin },
  { number: '03', label: 'Datum', icon: Calendar },
  { number: '04', label: 'Gegevens', icon: FileText },
  { number: '05', label: 'Controleren', icon: Check },
];

export function AppointmentPage() {
  const [step, setStep] = useState<Step>(0);
  const [patientType, setPatientType] = useState<PatientType>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', birthDate: '', parentName: '', notes: '' });

  const location = locations.find((l) => l.slug === selectedLocation);

  const canProceed = () => {
    if (step === 0) return patientType !== null;
    if (step === 1) return selectedLocation !== null;
    if (step === 2) return selectedDate !== null;
    if (step === 3) return !!(formData.name && formData.email && formData.phone);
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, 5) as Step);
  const prev = () => setStep((s) => Math.max(s - 1, 0) as Step);

  const inputClass = 'w-full px-4 py-3 min-h-[52px] rounded-lg border border-bcn-200 bg-white text-ink focus:border-bcn-blue focus:ring-2 focus:ring-bcn-100 outline-none transition-all';
  const labelClass = 'block text-sm font-semibold text-ink mb-1.5';

  return (
    <>
      <section className="pt-[72px] pb-6 lg:pt-12 lg:pb-12 bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <h1 className="text-[clamp(2rem,7vw,4.75rem)] font-bold text-ink leading-[1.05] tracking-tight text-balance">Afspraak maken.</h1>
            <p className="mt-4 text-ink-muted">Vul de stappen in om een afspraakverzoek te doen.</p>
          </Reveal>
          <Reveal className="mt-6">
            <div className="inline-flex items-start gap-3 px-5 py-3 bg-amber-50 border border-amber-200 rounded-lg text-left max-w-lg">
              <Info size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-amber-800">Demo omgeving</div>
                <div className="text-xs text-amber-700 mt-0.5">Het online afsprakensysteem wordt bij de definitieve website veilig gekoppeld. Gegevens worden niet opgeslagen.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Progress — mobile shows step count */}
      <section className="sticky top-[64px] z-30 bg-white border-y border-bcn-100 py-3">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
          {/* Mobile: step counter */}
          <div className="lg:hidden flex items-center gap-3">
            <span className="text-sm font-bold text-bcn-deep">Stap {step + 1} van 5</span>
            <div className="flex-1 h-1.5 rounded-full bg-bcn-100 overflow-hidden">
              <div className="h-full bg-bcn-blue rounded-full transition-all duration-300" style={{ width: `${((step + 1) / 5) * 100}%` }} />
            </div>
          </div>
          {/* Desktop: full progress */}
          <div className="hidden lg:flex items-center justify-between gap-1 overflow-x-auto scrollbar-hide">
            {steps.map((s, i) => {
              const isDone = i < step;
              const isCurrent = i === step;
              return (
                <div key={s.number} className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isDone ? 'bg-bcn-blue text-white' : isCurrent ? 'bg-bcn-blue text-white ring-4 ring-bcn-100' : 'bg-bcn-50 text-ink-muted'}`}>{isDone ? <Check size={14} /> : <s.icon size={13} />}</div>
                    <span className="text-xs font-semibold text-ink">{s.label}</span>
                  </div>
                  {i < steps.length - 1 && <div className={`w-4 lg:w-8 h-px ${isDone ? 'bg-bcn-blue' : 'bg-bcn-100'}`} />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-bcn-50 min-h-[60vh]">
        <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-10">
          {step === 0 && (
            <Reveal key="s0">
              <h2 className="text-2xl font-bold text-ink mb-2">Voor wie is de afspraak?</h2>
              <p className="text-ink-muted mb-6">Selecteer het type patiënt.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button onClick={() => setPatientType('jongen')} className={`p-6 rounded-xl2 border-2 text-left transition-all ${patientType === 'jongen' ? 'border-bcn-blue bg-white shadow-card' : 'border-bcn-100 bg-white/50 hover:border-bcn-200'}`}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-bcn-deep mb-2">Jongen</div>
                  <div className="text-lg font-bold text-ink">Jongen tot 16 jaar</div>
                  <div className="text-sm text-ink-muted mt-2">€325</div>
                </button>
                <button onClick={() => setPatientType('man')} className={`p-6 rounded-xl2 border-2 text-left transition-all ${patientType === 'man' ? 'border-bcn-blue bg-white shadow-card' : 'border-bcn-100 bg-white/50 hover:border-bcn-200'}`}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-bcn-deep mb-2">Man</div>
                  <div className="text-lg font-bold text-ink">Man vanaf 16 jaar</div>
                  <div className="text-sm text-ink-muted mt-2">€495</div>
                </button>
              </div>
            </Reveal>
          )}

          {step === 1 && (
            <Reveal key="s1">
              <h2 className="text-2xl font-bold text-ink mb-2">Kies uw vestiging</h2>
              <p className="text-ink-muted mb-6">Selecteer de locatie die het beste bij u past.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locations.map((loc) => (
                  <button key={loc.slug} onClick={() => setSelectedLocation(loc.slug)} className={`p-4 rounded-xl2 border-2 text-left transition-all flex items-start gap-3 ${selectedLocation === loc.slug ? 'border-bcn-blue bg-white shadow-card' : 'border-bcn-100 bg-white/50 hover:border-bcn-200'}`}>
                    <MapPin size={16} className={`mt-1 flex-shrink-0 ${selectedLocation === loc.slug ? 'text-bcn-deep' : 'text-ink-muted'}`} />
                    <div><div className="font-semibold text-ink text-sm">{loc.city}</div><div className="text-xs text-ink-muted">{loc.area}</div></div>
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          {step === 2 && (
            <Reveal key="s2">
              <h2 className="text-2xl font-bold text-ink mb-2">Kies een beschikbare datum</h2>
              <p className="text-ink-muted mb-6">Beschikbare data in {location?.city}.</p>
              <div className="space-y-2">
                {(location?.nextDates || []).map((date) => (
                  <button key={date} onClick={() => setSelectedDate(date)} className={`w-full p-4 rounded-xl2 border-2 text-left flex items-center justify-between transition-all ${selectedDate === date ? 'border-bcn-blue bg-white shadow-card' : 'border-bcn-100 bg-white/50 hover:border-bcn-200'}`}>
                    <span className="font-semibold text-ink">{date}</span>
                    {selectedDate === date && <Check size={18} className="text-bcn-deep" />}
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          {step === 3 && (
            <Reveal key="s3">
              <h2 className="text-2xl font-bold text-ink mb-2">Patiënt- en contactgegevens</h2>
              <p className="text-ink-muted mb-6">Vul de onderstaande gegevens in.</p>
              <div className="space-y-4">
                {/* Single column on mobile, 2-col on larger */}
                <div>
                  <label htmlFor="name" className={labelClass}>Naam patiënt</label>
                  <input id="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="birthDate" className={labelClass}>Geboortedatum</label>
                  <input id="birthDate" type="date" value={formData.birthDate} onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })} className={inputClass} />
                </div>
                {patientType === 'jongen' && (
                  <div>
                    <label htmlFor="parentName" className={labelClass}>Naam ouder/voogd</label>
                    <input id="parentName" type="text" value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} className={inputClass} />
                  </div>
                )}
                <div>
                  <label htmlFor="email" className={labelClass}>Emailadres</label>
                  <input id="email" type="email" inputMode="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Telefoonnummer</label>
                  <input id="phone" type="tel" inputMode="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="notes" className={labelClass}>Opmerkingen (optioneel)</label>
                  <textarea id="notes" rows={3} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className={`${inputClass} resize-none`} />
                </div>
              </div>
            </Reveal>
          )}

          {step === 4 && (
            <Reveal key="s4">
              <h2 className="text-2xl font-bold text-ink mb-2">Controleren en versturen</h2>
              <p className="text-ink-muted mb-6">Controleer uw gegevens.</p>
              <div className="bg-white rounded-xl2 border border-bcn-100 p-5 sm:p-6 space-y-3">
                <div><div className="text-xs text-ink-muted uppercase">Patiënttype</div><div className="font-semibold text-ink">{patientType === 'jongen' ? 'Jongen tot 16 jaar' : 'Man vanaf 16 jaar'}</div></div>
                <div><div className="text-xs text-ink-muted uppercase">Vestiging</div><div className="font-semibold text-ink">{location?.city}</div></div>
                <div><div className="text-xs text-ink-muted uppercase">Datum</div><div className="font-semibold text-ink">{selectedDate}</div></div>
                <div><div className="text-xs text-ink-muted uppercase">Kosten</div><div className="font-semibold text-ink">{patientType === 'jongen' ? '€325' : '€495'}</div></div>
                <div><div className="text-xs text-ink-muted uppercase">Naam</div><div className="font-semibold text-ink">{formData.name || '—'}</div></div>
                <div><div className="text-xs text-ink-muted uppercase">Contact</div><div className="font-semibold text-ink text-sm">{formData.email}</div><div className="font-semibold text-ink text-sm">{formData.phone}</div></div>
              </div>
              <div className="mt-4 flex items-start gap-2.5 p-4 bg-bcn-ice rounded-lg">
                <Info size={16} className="text-bcn-deep flex-shrink-0 mt-0.5" />
                <p className="text-xs text-bcn-deep">Dit is een demo. Uw verzoek wordt niet verzonden of opgeslagen.</p>
              </div>
            </Reveal>
          )}

          {step === 5 && (
            <Reveal key="s5" className="text-center py-12">
              <div className="inline-flex w-16 h-16 rounded-full bg-bcn-blue items-center justify-center mb-5"><Check size={32} className="text-white" /></div>
              <h2 className="text-2xl font-bold text-ink mb-3">Demo voltooid</h2>
              <p className="text-ink-muted max-w-md mx-auto">In de definitieve website wordt de afspraak hier veilig verzonden en ontvangt u een bevestiging per email.</p>
              <div className="mt-6 bg-white rounded-xl2 border border-bcn-100 p-5 max-w-sm mx-auto text-left">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-ink-muted">Vestiging</span><span className="font-semibold text-ink">{location?.city}</span></div>
                  <div className="flex justify-between"><span className="text-ink-muted">Datum</span><span className="font-semibold text-ink">{selectedDate}</span></div>
                </div>
              </div>
              <div className="mt-6"><LinkButton to="/" variant="secondary" withArrow>Terug naar home</LinkButton></div>
            </Reveal>
          )}

          {step < 5 && (
            <div className="mt-10 flex items-center justify-between gap-4">
              {step > 0 ? <Button variant="ghost" size="md" onClick={prev}><ArrowLeft size={16} className="mr-1" />Terug</Button> : <div />}
              {step < 4 ? (
                <Button size="md" onClick={next} disabled={!canProceed()} withArrow className={!canProceed() ? 'opacity-40 cursor-not-allowed' : ''}>Verder</Button>
              ) : (
                <Button size="md" onClick={next} withArrow>Verzenden (demo)</Button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
