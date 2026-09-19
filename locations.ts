export interface Location {
  slug: string;
  name: string;
  city: string;
  address: string;
  postalCode: string;
  area: string;
  building?: string;
  phone: string;
  email: string;
  founded: string;
  founders?: string;
  treatmentsCount: string;
  description: string;
  longDescription: string;
  nextDates: string[];
  appointmentURL: string;
  mapQuery: string;
  mapLat: number;
  mapLng: number;
  navigationNote?: string;
}

export const locations: Location[] = [
  {
    slug: 'amsterdam',
    name: 'Besnijdenis Centrum Amsterdam',
    city: 'Amsterdam',
    address: 'Drostenburg 5A',
    postalCode: '1102 AM',
    area: 'Amsterdam Zuidoost',
    phone: '020-6909712',
    email: 'amsterdam@besnijdeniscentrum.nl',
    founded: '2001',
    founders: 'huisartsen Erik Robberse en Lex Klein',
    treatmentsCount: '40.000+',
    description: 'Onze eerste en hoofdvestiging, opgericht in 2001.',
    longDescription:
      'Besnijdenis Centrum Amsterdam is de eerste vestiging van Besnijdenis Centrum Nederland, opgericht in 2001 door huisartsen Erik Robberse en Lex Klein. Sinds de oprichting zijn hier meer dan 40.000 jongens en mannen behandeld. De kliniek is gehuisvest in Gezondheidscentrum Venserpolder in Amsterdam Zuidoost, waar ervaren artsen wekelijks besnijdenissen uitvoeren onder plaatselijke verdoving.',
    nextDates: [
      '26 september 2026',
      '3 oktober 2026',
      '10 oktober 2026',
      '24 oktober 2026',
      '7 november 2026',
      '21 november 2026',
      '28 november 2026',
      '5 december 2026',
      '19 december 2026',
    ],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-amsterdam/',
    mapQuery: 'Drostenburg 5A, 1102 AM Amsterdam',
    mapLat: 52.337,
    mapLng: 4.946,
  },
  {
    slug: 'almere',
    name: 'Besnijdenis Centrum Almere',
    city: 'Almere',
    address: 'M.J. Granpré Molièrestraat 2',
    postalCode: '1333 KC',
    area: 'Almere Buiten',
    building: 'Gezondheidscentrum De Bouwmeester',
    phone: '020-6909712',
    email: 'almere@besnijdeniscentrum.nl',
    founded: '2003',
    treatmentsCount: '10.000+',
    description: 'Onze tweede vestiging, geopend in 2003 in Almere Buiten.',
    longDescription:
      'Besnijdenis Centrum Almere startte in 2003 als de tweede vestiging van BCN, na Amsterdam. Sinds de opening zijn hier meer dan 10.000 jongens en mannen behandeld. De kliniek is gehuisvest in Gezondheidscentrum De Bouwmeester in Almere Buiten, een modern en toegankelijk gezondheidscentrum.',
    nextDates: ['17 oktober 2026', '14 november 2026', '12 december 2026'],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-almere/',
    mapQuery: 'M.J. Granpré Molièrestraat 2, 1333 KC Almere',
    mapLat: 52.392,
    mapLng: 5.282,
  },
  {
    slug: 'arnhem',
    name: 'Besnijdenis Centrum Arnhem',
    city: 'Arnhem',
    address: 'Mr E.N. van Kleffensstraat 5',
    postalCode: '6842 CV',
    area: 'Arnhem',
    building: 'Andros Mannenkliniek',
    phone: '085-4871506',
    email: 'info@besnijdeniscentrum.nl',
    founded: '2005',
    founders: 'huisarts Lex Klein',
    treatmentsCount: '6.000+',
    description: 'Opgericht in 2005 door huisarts Lex Klein.',
    longDescription:
      'Besnijdenis Centrum Arnhem werd in 2005 opgericht door huisarts Lex Klein. Sinds de opening zijn hier meer dan 6.000 jongens en mannen behandeld. De kliniek is gehuisvest in de Andros Mannenkliniek in Arnhem.',
    nextDates: ['18 oktober 2026', '8 november 2026', '29 november 2026', '20 december 2026'],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-arnhem/',
    mapQuery: 'Mr E.N. van Kleffensstraat 5, 6842 CV Arnhem',
    mapLat: 51.985,
    mapLng: 5.899,
  },
  {
    slug: 'breda',
    name: 'Besnijdenis Centrum Breda',
    city: 'Breda',
    address: 'Kapelstraat 66',
    postalCode: '4817 NZ',
    area: 'Breda',
    building: 'Gezondheidscentrum Kapelhof',
    phone: '085-4871506',
    email: 'info@besnijdeniscentrum.nl',
    founded: '2007',
    treatmentsCount: '8.500+',
    description: 'Opgericht in 2007, op huidige locatie sinds 2014.',
    longDescription:
      'Besnijdenis Centrum Breda werd opgericht in 2007 en is sinds 2014 gevestigd in Gezondheidscentrum Kapelhof. Sinds de opening zijn hier meer dan 8.500 jongens en mannen behandeld.',
    nextDates: ['13 december 2026'],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-breda/',
    mapQuery: 'Kapelstraat 66, 4817 NZ Breda',
    mapLat: 51.572,
    mapLng: 4.776,
    navigationNote:
      'Let op: Breda heeft twee Kapelstraten. Voer bij navigatie de postcode 4817 NZ in. Het gezondheidscentrum ligt op de hoek van de Heerbaan.',
  },
  {
    slug: 'eindhoven-regio',
    name: 'Besnijdenis Centrum Eindhoven Regio',
    city: 'Eindhoven Regio',
    address: 'Emmalaan 13',
    postalCode: '5554 JM',
    area: 'Valkenswaard',
    building: 'Medisch Centrum Emmalaan',
    phone: '085-4871506',
    email: 'info@besnijdeniscentrum.nl',
    founded: '2011',
    treatmentsCount: '3.500+',
    description: 'Vestiging voor de regio Eindhoven, fysiek gevestigd in Valkenswaard.',
    longDescription:
      'Besnijdenis Centrum Eindhoven Regio werd opgericht in 2011 en bedient patiënten uit Zuidoost-Nederland. De fysieke locatie bevindt zich in Medisch Centrum Emmalaan in Valkenswaard. Sinds de opening zijn hier meer dan 3.500 jongens en mannen behandeld.',
    nextDates: ['25 oktober 2026', '22 november 2026', '20 december 2026'],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-eindhoven/',
    mapQuery: 'Emmalaan 13, 5554 JM Valkenswaard',
    mapLat: 51.358,
    mapLng: 5.444,
    navigationNote:
      'Deze vestiging bedient de regio Eindhoven. De fysieke locatie bevindt zich in Valkenswaard.',
  },
  {
    slug: 'haaglanden',
    name: 'Besnijdenis Centrum Haaglanden',
    city: 'Haaglanden',
    address: 'Van der Vennestraat 185',
    postalCode: '2525 CE',
    area: 'Den Haag',
    building: 'Gezondheidscentrum De Rubenshoek',
    phone: '085-4871506',
    email: 'info@besnijdeniscentrum.nl',
    founded: '2005',
    treatmentsCount: '11.000+',
    description: 'Vestiging in Den Haag, bedient de regio Haaglanden.',
    longDescription:
      'Besnijdenis Centrum Haaglanden werd in 2005 opgericht en bedient patiënten uit de regio Haaglanden. De kliniek is gehuisvest in Gezondheidscentrum De Rubenshoek in Den Haag. Sinds de opening zijn hier meer dan 11.000 jongens en mannen behandeld.',
    nextDates: [
      '3 oktober 2026',
      '17 oktober 2026',
      '31 oktober 2026',
      '14 november 2026',
      '28 november 2026',
      '12 december 2026',
      '27 december 2026',
    ],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-haaglanden/',
    mapQuery: 'Van der Vennestraat 185, 2525 CE Den Haag',
    mapLat: 52.041,
    mapLng: 4.293,
  },
  {
    slug: 'maastricht',
    name: 'Besnijdenis Centrum Maastricht',
    city: 'Maastricht',
    address: 'Einsteinstraat 34 A03',
    postalCode: '6227 BX',
    area: 'Maastricht',
    building: 'Gezondheidscentrum Heer',
    phone: '085-4871506',
    email: 'info@besnijdeniscentrum.nl',
    founded: '2007',
    treatmentsCount: '5.000+',
    description: 'Onze zuidelijkste vestiging, voor patiënten uit Limburg.',
    longDescription:
      'Besnijdenis Centrum Maastricht werd in 2007 opgericht en is onze zuidelijkste locatie. De kliniek is gehuisvest in Gezondheidscentrum Heer in Maastricht en bedient patiënten uit Limburg en omgeving. Sinds de opening zijn hier meer dan 5.000 jongens en mannen behandeld.',
    nextDates: ['21 november 2026', '19 december 2026'],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-maastricht/',
    mapQuery: 'Einsteinstraat 34, 6227 BX Maastricht',
    mapLat: 50.834,
    mapLng: 5.709,
  },
  {
    slug: 'rotterdam',
    name: 'Besnijdenis Centrum Rotterdam',
    city: 'Rotterdam',
    address: 'Tidemanstraat 91',
    postalCode: '3022 SG',
    area: 'Rotterdam',
    building: 'Gezondheidscentrum Het Nieuwe Westen',
    phone: '085-4871506',
    email: 'info@besnijdeniscentrum.nl',
    founded: '2006',
    treatmentsCount: '—',
    description: 'Vestiging in Rotterdam-West voor de regio Rijnmond.',
    longDescription:
      'Besnijdenis Centrum Rotterdam werd in 2006 opgericht en is gehuisvest in Gezondheidscentrum Het Nieuwe Westen in Rotterdam. De kliniek bedient patiënten uit de regio Rijnmond en omgeving.',
    nextDates: [
      '24 oktober 2026',
      '7 november 2026',
      '21 november 2026',
      '5 december 2026',
      '19 december 2026',
    ],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-rotterdam/',
    mapQuery: 'Tidemanstraat 91, 3022 SG Rotterdam',
    mapLat: 51.925,
    mapLng: 4.478,
  },
  {
    slug: 'utrecht',
    name: 'Besnijdenis Centrum Utrecht',
    city: 'Utrecht',
    address: 'J.P. Coenhof 200',
    postalCode: '3531 HX',
    area: 'Utrecht',
    building: 'Gezondheidscentrum Lombok',
    phone: '085-4871506',
    email: 'info@besnijdeniscentrum.nl',
    founded: '2002',
    founders: 'huisarts Lex Klein en chirurg Roderick Schmitz',
    treatmentsCount: '10.000+',
    description: 'Centraal gelegen kliniek, opgericht in 2002.',
    longDescription:
      'Besnijdenis Centrum Utrecht werd in 2002 opgericht door huisarts Lex Klein en chirurg Roderick Schmitz. Sinds 2005 is de kliniek gehuisvest in Gezondheidscentrum Lombok, op de hoek met de Kanaalstraat. Sinds de opening zijn hier meer dan 10.000 jongens en mannen behandeld. De centrale ligging maakt de kliniek eenvoudig bereikbaar vanuit alle delen van Nederland.',
    nextDates: ['10 oktober 2026', '31 oktober 2026', '21 november 2026', '12 december 2026'],
    appointmentURL: 'https://besnijdeniscentrum.nl/wordpress/afspraak-utrecht/',
    mapQuery: 'J.P. Coenhof 200, 3531 HX Utrecht',
    mapLat: 52.094,
    mapLng: 5.122,
  },
];

export const getLocation = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
