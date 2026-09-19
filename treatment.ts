export interface TreatmentSection {
  id: string;
  label: string;
}

export const boysNavSections: TreatmentSection[] = [
  { id: 'over', label: 'Over de behandeling' },
  { id: 'redenen', label: 'Redenen' },
  { id: 'wanneer-niet', label: 'Wanneer niet?' },
  { id: 'leeftijd-angst', label: 'Leeftijd & angst' },
  { id: 'toestemming', label: 'Toestemming' },
  { id: 'genezing', label: 'Genezing' },
  { id: 'mogelijke-problemen', label: 'Mogelijke problemen' },
  { id: 'nazorg', label: 'Nazorg' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'klachten', label: 'Klachten' },
];

export const boysTimeline = [
  { number: '01', title: 'Gesprek met de arts', description: 'De arts legt de procedure uit en beantwoordt vragen van u en uw zoon.' },
  { number: '02', title: 'Voorbereiding & verdoving', description: 'De huid wordt desinfecteerd en plaatselijke verdoving wordt toegediend.' },
  { number: '03', title: 'Behandeling', description: 'De besnijdenis wordt uitgevoerd door een ervaren arts onder plaatselijke verdoving.' },
  { number: '04', title: 'Direct na de behandeling', description: 'U krijgt nazorginstructies en kan kort uitrusten voordat u naar huis gaat.' },
  { number: '05', title: 'Herstel & nazorg', description: 'Thuis volgt u de nazorginstructies. Bij vragen kunt u contact opnemen.' },
];

export const boysRecoveryCards = [
  { title: 'Napijn', description: 'Enige napijn in de eerste dagen is normaal. Paracetamol kan volgens bijsluiter worden gegeven.' },
  { title: 'Baden & vaseline', description: 'Het is belangrijk de eerste dagen te baden en vaseline aan te brengen om vastplakken te voorkomen.' },
  { title: 'Pijnstilling', description: 'Gebruik paracetamol volgens de bijsluiter. Bij aanhoudende pijn kunt u contact opnemen.' },
  { title: 'Geel laagje', description: 'Een geel laagje op de eikel is een normaal onderdeel van het genezingsproces, geen infectie.' },
  { title: 'Blauwe verkleuring', description: 'Enige blauwe verkleuring of zwelling kan optreden en verdwijnt meestal binnen enkele dagen.' },
];

export const boysComplications = [
  { title: 'Nabloeding', description: 'Bij aanhoudende bloeding die niet stopt, neem direct contact op met de vestiging of uw huisarts.' },
  { title: 'Niet kunnen plassen', description: 'Als uw zoon niet kan plassen, neem dan direct contact op met een arts.' },
  { title: 'Infectie', description: 'Bij tekenen van infectie (roodheid, pus, koorts) neemt u contact op met de vestiging.' },
  { title: 'Koorts', description: 'Bij koorts boven 38,5°C in de eerste dagen na de behandeling neemt u contact op.' },
  { title: 'Losgeraakte hechting', description: 'Als een hechting losraakt en dit tot problemen leidt, neem contact op voor advies.' },
  { title: 'Afwijkend herstel', description: 'Bij afwijkend herstel of twijfel over het genezingsproces, neem contact op met de vestiging.' },
  { title: 'Ernstige complicaties', description: 'Bij ernstige complicaties of acute klachten neemt u direct contact op met uw huisarts of de spoedeisende hulp.' },
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
