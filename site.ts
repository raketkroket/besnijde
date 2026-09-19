export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  {
    label: 'Behandelingen',
    href: '/besnijdenis-jongen',
    children: [
      { label: 'Besnijdenis voor jongens', href: '/besnijdenis-jongen' },
      { label: 'Besnijdenis voor mannen', href: '/besnijdenis-volwassen-man' },
      { label: 'Advies & correcties', href: '/advies-en-correcties' },
      { label: 'Kosten', href: '/besnijdenis-jongen#kosten' },
    ],
  },
  {
    label: 'Vestigingen',
    href: '/vestigingen',
  },
  {
    label: 'Over BCN',
    href: '/over-bcn',
  },
  {
    label: 'Voor artsen',
    href: '/informatie-voor-artsen',
  },
  {
    label: 'Informatie',
    href: '/informatie',
    children: [
      { label: 'Algemene informatie', href: '/over-bcn' },
      { label: 'Veelgestelde vragen', href: '/faq' },
      { label: 'Downloads', href: '/informatie#downloads' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Klachten & geschillen', href: '/privacy#klachten' },
    ],
  },
];

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  numericValue: number;
}

export const trustStats: Stat[] = [
  { value: '90.000', suffix: '+', label: 'BEHANDELINGEN', numericValue: 90000 },
  { value: '9', label: 'VESTIGINGEN', numericValue: 9 },
  { value: '8,9', label: 'GEMIDDELDE BEOORDELING', numericValue: 8.9 },
  { value: '25', suffix: '+', label: 'JAAR ERVARING', numericValue: 25 },
];

export const heroStats: Stat[] = [
  { value: '90.000', suffix: '+', label: 'behandelingen', numericValue: 90000 },
  { value: '9', label: 'vestigingen', numericValue: 9 },
  { value: '2001', label: 'sinds', numericValue: 2001 },
];

export const companyInfo = {
  name: 'Besnijdenis Centrum Nederland',
  tagline: 'Specialistische zorg sinds 2001',
  mainPhone: '085-4871506',
  amsterdamPhone: '020-6909712',
  mainEmail: 'info@besnijdeniscentrum.nl',
  administration: {
    address: 'Kerkgaarde 2',
    postalCode: '1391 MB',
    city: 'Abcoude',
  },
  kvk: '30110387',
  googleRating: '4.9',
  patientRating: '8,9',
  treatments: '90.000+',
  founded: '2001',
  officeHours: [
    { day: 'Maandag', time: '09:00–13:00' },
    { day: 'Dinsdag', time: '09:00–13:00' },
    { day: 'Donderdag', time: '09:00–13:00' },
    { day: 'Vrijdag', time: '09:00–13:00' },
  ],
};
