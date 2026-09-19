import { useState } from 'react';
import { Phone, Mail, MapPin, Info, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LinkButton, Button } from '@/components/Button';
import { Link } from '@/router';
import { locations } from '@/data/locations';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

export function ContactPage() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const [submitted, setSubmitted] = useState(false);
  const officeHours = companyInfo.officeHours.map((hour) => ({
    ...hour,
    day: t(hour.day, hour.day.replace('Maandag', 'Monday').replace('Dinsdag', 'Tuesday').replace('Woensdag', 'Wednesday').replace('Donderdag', 'Thursday').replace('Vrijdag', 'Friday').replace('Zaterdag', 'Saturday').replace('Zondag', 'Sunday')),
  }));

  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-12 lg:py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">Contact</span>
            <h1 className="mt-4 text-hero text-ink text-balance">{t('Waar kunnen we u mee helpen?', 'How can we help you?')}</h1>
          </Reveal>

          <Reveal stagger>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
              <Link to="/vestigingen" className="group p-8 bg-bcn-ice rounded-xl2 hover:bg-bcn-200/50 transition-colors">
                <div className="text-2xl font-bold text-bcn-deep mb-2">{t('Ik wil een afspraak maken', 'I want to make an appointment')}</div>
                <p className="text-sm text-ink-muted mb-4">{t('Kies een vestiging en plan online een afspraak.', 'Choose a location and make an appointment online.')}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-bcn-deep group-hover:text-bcn-blue">
                  {t('Afspraak maken', 'Make an appointment')} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a href={`tel:${companyInfo.mainPhone}`} className="group p-8 bg-bcn-ice rounded-xl2 hover:bg-bcn-200/50 transition-colors">
                <div className="text-2xl font-bold text-bcn-deep mb-2">{t('Ik heb een vraag', 'I have a question')}</div>
                <p className="text-sm text-ink-muted mb-4">{t('Bel ons of stuur een bericht via het formulier.', 'Call us or send a message using the form.')}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-bcn-deep group-hover:text-bcn-blue">
                  {t('Contact opnemen', 'Contact us')} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24 bg-bcn-ice">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-6">{t('Stuur een bericht', 'Send a message')}</h2>

            <div className="mb-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <Info size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-700">
                {t('Demo: dit formulier wordt niet verzonden. Bij de definitieve website wordt het veilig gekoppeld.', 'Demo: this form is not sent. It will be securely connected in the final website.')}
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex w-14 h-14 rounded-full bg-bcn-blue items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{t('Demo voltooid', 'Demo complete')}</h3>
                <p className="text-ink-muted">{t('In de definitieve website wordt uw bericht hier veilig verzonden.', 'Your message will be securely sent here in the final website.')}</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-bcn-deep hover:text-bcn-blue">{t('Nog een bericht', 'Another message')}</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-semibold text-ink mb-1.5">{t('Naam', 'Name')}</label>
                  <input id="c-name" type="text" required className="w-full px-4 py-3 rounded-lg border border-bcn-200 bg-white text-ink focus:border-bcn-blue focus:ring-2 focus:ring-bcn-100 outline-none transition-all" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-semibold text-ink mb-1.5">{t('Telefoonnummer', 'Phone number')}</label>
                    <input id="c-phone" type="tel" inputMode="tel" required className="w-full px-4 py-3 rounded-lg border border-bcn-200 bg-white text-ink focus:border-bcn-blue focus:ring-2 focus:ring-bcn-100 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-semibold text-ink mb-1.5">E-mail</label>
                    <input id="c-email" type="email" inputMode="email" required className="w-full px-4 py-3 rounded-lg border border-bcn-200 bg-white text-ink focus:border-bcn-blue focus:ring-2 focus:ring-bcn-100 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-loc" className="block text-sm font-semibold text-ink mb-1.5">{t('Vestiging', 'Location')}</label>
                  <select id="c-loc" className="w-full px-4 py-3 rounded-lg border border-bcn-200 bg-white text-ink focus:border-bcn-blue focus:ring-2 focus:ring-bcn-100 outline-none transition-all">
                    <option value="">{t('Selecteer een vestiging', 'Select a location')}</option>
                    {locations.map((l) => <option key={l.slug} value={l.slug}>{l.city}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-sm font-semibold text-ink mb-1.5">{t('Bericht', 'Message')}</label>
                  <textarea id="c-msg" rows={4} required className="w-full px-4 py-3 rounded-lg border border-bcn-200 bg-white text-ink focus:border-bcn-blue focus:ring-2 focus:ring-bcn-100 outline-none transition-all resize-none" />
                </div>
                <Button type="submit" size="md" withArrow className="w-full sm:w-auto">{t('Verzenden (demo)', 'Send (demo)')}</Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* General contact */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-8">{t('Algemeen contact', 'General contact')}</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Admin */}
            <Reveal>
              <div className="p-8 border border-bcn-100 rounded-xl2 h-full">
                <h3 className="font-bold text-ink mb-1">{t('Directie & administratie', 'Management & administration')}</h3>
                <p className="text-sm text-ink-muted mb-5">{companyInfo.name}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-bcn-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div>{companyInfo.administration.address}</div>
                      <div>{companyInfo.administration.postalCode} {companyInfo.administration.city}</div>
                    </div>
                  </div>
                  <a href={`tel:${companyInfo.mainPhone}`} className="flex items-center gap-3 text-ink hover:text-bcn-deep transition-colors">
                    <Phone size={16} className="text-bcn-blue" />
                    {companyInfo.mainPhone}
                  </a>
                  <a href={`mailto:${companyInfo.mainEmail}`} className="flex items-center gap-3 text-ink hover:text-bcn-deep transition-colors">
                    <Mail size={16} className="text-bcn-blue" />
                    <span className="text-sm">{companyInfo.mainEmail}</span>
                  </a>
                </div>
                <div className="mt-5 pt-5 border-t border-bcn-100">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">{t('Openingstijden', 'Opening hours')}</div>
                  <div className="space-y-1 text-sm">
                    {officeHours.map((h) => (
                      <div key={h.day} className="flex justify-between">
                        <span className="text-ink-muted">{h.day}</span>
                        <span className="font-medium text-ink">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Amsterdam */}
            <Reveal>
              <div className="p-8 border border-bcn-100 rounded-xl2 h-full">
                <h3 className="font-bold text-ink mb-1">Amsterdam</h3>
                <p className="text-sm text-ink-muted mb-5">Besnijdenis Centrum Amsterdam</p>
                <div className="space-y-3 text-sm">
                  <a href={`tel:${companyInfo.amsterdamPhone}`} className="flex items-center gap-3 text-ink hover:text-bcn-deep transition-colors">
                    <Phone size={16} className="text-bcn-blue" />
                    {companyInfo.amsterdamPhone}
                  </a>
                  <a href="mailto:amsterdam@besnijdeniscentrum.nl" className="flex items-center gap-3 text-ink hover:text-bcn-deep transition-colors">
                    <Mail size={16} className="text-bcn-blue" />
                    <span className="text-sm">amsterdam@besnijdeniscentrum.nl</span>
                  </a>
                </div>
                <div className="mt-5"><LinkButton to="/vestigingen/amsterdam" variant="secondary" size="sm" withArrow>{t('Locatie bekijken', 'View location')}</LinkButton></div>
              </div>
            </Reveal>

            {/* Almere */}
            <Reveal>
              <div className="p-8 border border-bcn-100 rounded-xl2 h-full">
                <h3 className="font-bold text-ink mb-1">Almere</h3>
                <p className="text-sm text-ink-muted mb-5">Besnijdenis Centrum Almere</p>
                <div className="space-y-3 text-sm">
                  <a href={`tel:${companyInfo.amsterdamPhone}`} className="flex items-center gap-3 text-ink hover:text-bcn-deep transition-colors">
                    <Phone size={16} className="text-bcn-blue" />
                    {companyInfo.amsterdamPhone}
                  </a>
                  <a href="mailto:almere@besnijdeniscentrum.nl" className="flex items-center gap-3 text-ink hover:text-bcn-deep transition-colors">
                    <Mail size={16} className="text-bcn-blue" />
                    <span className="text-sm">almere@besnijdeniscentrum.nl</span>
                  </a>
                </div>
                <div className="mt-5"><LinkButton to="/vestigingen/almere" variant="secondary" size="sm" withArrow>{t('Locatie bekijken', 'View location')}</LinkButton></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
