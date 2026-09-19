export interface TreatmentSection {
  id: string;
  label: string;
}

export interface TreatmentCopy {
  label?: string;
  title?: string;
  description?: string;
}

export type LocalizedTreatmentItem<T extends TreatmentCopy> = T & { en: TreatmentCopy };

export function treatmentText<T extends TreatmentCopy>(item: LocalizedTreatmentItem<T>, language: 'nl' | 'en') {
  return language === 'en' ? { ...item, ...item.en } : item;
}

export const boysNavSections: LocalizedTreatmentItem<TreatmentSection>[] = [
  { id: 'over', label: 'Over de behandeling', en: { label: 'About treatment' } },
  { id: 'redenen', label: 'Redenen', en: { label: 'Reasons' } },
  { id: 'wanneer-niet', label: 'Wanneer niet?', en: { label: 'When not?' } },
  { id: 'leeftijd-angst', label: 'Leeftijd & angst', en: { label: 'Age & anxiety' } },
  { id: 'toestemming', label: 'Toestemming', en: { label: 'Consent' } },
  { id: 'genezing', label: 'Genezing', en: { label: 'Recovery' } },
  { id: 'mogelijke-problemen', label: 'Mogelijke problemen', en: { label: 'Possible problems' } },
  { id: 'nazorg', label: 'Nazorg', en: { label: 'Aftercare' } },
  { id: 'kosten', label: 'Kosten', en: { label: 'Costs' } },
  { id: 'klachten', label: 'Klachten', en: { label: 'Complaints' } },
];

export const boysTimeline = [
  { number: '01', title: 'Gesprek met de arts', description: 'De arts legt de procedure uit en beantwoordt vragen van u en uw zoon.', en: { title: 'Discussion with the doctor', description: 'The doctor explains the procedure and answers questions from you and your son.' } },
  { number: '02', title: 'Voorbereiding & verdoving', description: 'De huid wordt desinfecteerd en plaatselijke verdoving wordt toegediend.', en: { title: 'Preparation & anaesthesia', description: 'The skin is disinfected and local anaesthetic is administered.' } },
  { number: '03', title: 'Behandeling', description: 'De besnijdenis wordt uitgevoerd door een ervaren arts onder plaatselijke verdoving.', en: { title: 'Treatment', description: 'An experienced doctor performs the circumcision under local anaesthetic.' } },
  { number: '04', title: 'Direct na de behandeling', description: 'U krijgt nazorginstructies en kan kort uitrusten voordat u naar huis gaat.', en: { title: 'Immediately after treatment', description: 'You receive aftercare instructions and can rest briefly before going home.' } },
  { number: '05', title: 'Herstel & nazorg', description: 'Thuis volgt u de nazorginstructies. Bij vragen kunt u contact opnemen.', en: { title: 'Recovery & aftercare', description: 'At home, follow the aftercare instructions. Contact us with any questions.' } },
];

export const boysRecoveryCards = [
  { title: 'Napijn', description: 'Enige napijn in de eerste dagen is normaal. Paracetamol kan volgens bijsluiter worden gegeven.', en: { title: 'Post-treatment pain', description: 'Some pain in the first days is normal. Paracetamol may be given according to the package leaflet.' } },
  { title: 'Baden & vaseline', description: 'Het is belangrijk de eerste dagen te baden en vaseline aan te brengen om vastplakken te voorkomen.', en: { title: 'Bathing & petroleum jelly', description: 'In the first days, bathing and applying petroleum jelly are important to prevent sticking.' } },
  { title: 'Pijnstilling', description: 'Gebruik paracetamol volgens de bijsluiter. Bij aanhoudende pijn kunt u contact opnemen.', en: { title: 'Pain relief', description: 'Use paracetamol according to the package leaflet. Contact us if pain persists.' } },
  { title: 'Geel laagje', description: 'Een geel laagje op de eikel is een normaal onderdeel van het genezingsproces, geen infectie.', en: { title: 'Yellow layer', description: 'A yellow layer on the glans is a normal part of healing, not an infection.' } },
  { title: 'Blauwe verkleuring', description: 'Enige blauwe verkleuring of zwelling kan optreden en verdwijnt meestal binnen enkele dagen.', en: { title: 'Bruising', description: 'Some bruising or swelling may occur and usually disappears within a few days.' } },
];

export const boysComplications = [
  { title: 'Nabloeding', description: 'Bij aanhoudende bloeding die niet stopt, neem direct contact op met de vestiging of uw huisarts.', en: { title: 'Persistent bleeding', description: 'For bleeding that does not stop, contact the location or your GP immediately.' } },
  { title: 'Niet kunnen plassen', description: 'Als uw zoon niet kan plassen, neem dan direct contact op met een arts.', en: { title: 'Unable to urinate', description: 'If your son cannot urinate, contact a doctor immediately.' } },
  { title: 'Infectie', description: 'Bij tekenen van infectie (roodheid, pus, koorts) neemt u contact op met de vestiging.', en: { title: 'Infection', description: 'Contact the location if there are signs of infection, such as redness, pus, or fever.' } },
  { title: 'Koorts', description: 'Bij koorts boven 38,5°C in de eerste dagen na de behandeling neemt u contact op.', en: { title: 'Fever', description: 'Contact us for a fever above 38.5°C in the first days after treatment.' } },
  { title: 'Losgeraakte hechting', description: 'Als een hechting losraakt en dit tot problemen leidt, neem contact op voor advies.', en: { title: 'Loose stitch', description: 'If a stitch comes loose and causes problems, contact us for advice.' } },
  { title: 'Afwijkend herstel', description: 'Bij afwijkend herstel of twijfel over het genezingsproces, neem contact op met de vestiging.', en: { title: 'Unexpected recovery', description: 'Contact the location if recovery is unusual or you are unsure about the healing process.' } },
  { title: 'Ernstige complicaties', description: 'Bij ernstige complicaties of acute klachten neemt u direct contact op met uw huisarts of de spoedeisende hulp.', en: { title: 'Serious complications', description: 'For serious complications or acute symptoms, contact your GP or emergency care immediately.' } },
];

export const manNavSections: TreatmentSection[] = [
  { id: 'hoe-gaat', label: 'Hoe gaat het?' },
  { id: 'redenen', label: 'Redenen' },
  { id: 'wanneer-niet', label: 'Wanneer niet?' },
  { id: 'stijl', label: 'Stijl' },
  { id: 'toestemming', label: 'Toestemming' },
  { id: 'genezing', label: 'Genezing' },
  { id: 'mogelijke-problemen', label: 'Mogelijke problemen' },
  { id: 'nazorg', label: 'Nazorg' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'klachten', label: 'Klachten' },
];

export const manTimeline = [
  { number: '01', title: 'Consult', description: 'U bespreekt met de arts de reden, verwachtingen en de procedure.' },
  { number: '02', title: 'Voorbereiding & verdoving', description: 'Plaatselijke verdoving wordt toegediend voor een zo min mogelijk belastende ingreep.' },
  { number: '03', title: 'Behandeling', description: 'De besnijdenis wordt uitgevoerd door een ervaren arts.' },
  { number: '04', title: 'Direct na de behandeling', description: 'U krijgt nazorginstructies en kan kort uitrusten.' },
  { number: '05', title: 'Herstel & nazorg', description: 'Het herstel bij volwassen mannen kan iets langer duren. U ontvangt specifiek nazorgadvies.' },
];

export const adviceProcess = [
  { number: '01', title: 'Onderzoek', description: 'De arts onderzoekt de huidige situatie en het resultaat van de eerdere besnijdenis.' },
  { number: '02', title: 'Beoordeling door arts', description: 'De arts beoordeelt of er sprake is van een probleem en wat de mogelijkheden zijn.' },
  { number: '03', title: 'Advies', description: 'U krijgt een duidelijk advies over de vervolgstappen.' },
  { number: '04', title: 'Eventuele vervolgstap', description: 'Afhankelijk van het advies kan dit leiden tot afwachten, terugverwijzing, correctie door BCN of verwijzing naar een specialist.' },
];

export const adviceOutcomes = [
  { title: 'Afwachten', description: 'In sommige gevallen is afwachten het beste advies en is geen verdere behandeling nodig.' },
  { title: 'Terugverwijzing', description: 'Soms wordt u terugverwezen naar uw eigen huisarts of een andere specialist.' },
  { title: 'Correctie door BCN', description: 'In bepaalde gevallen kan BCN een corrigerende operatie uitvoeren.' },
  { title: 'Verwijzing naar specialist', description: 'Voor procedures die BCN niet uitvoert, wordt u verwezen naar een uroloog of plastisch chirurg.' },
];
