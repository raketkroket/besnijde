export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: 'Afspraak',
    items: [
      {
        question: 'Hoe meld ik mij aan voor een besnijdenis?',
        answer:
          'U kiest een van onze negen vestigingen en vraagt online een afspraak aan via het afspraakformulier. U ontvangt vervolgens een bevestiging met alle benodigde informatie.',
      },
      {
        question: 'Kan ik een afspraak verzetten of annuleren?',
        answer:
          'Ja, dit is mogelijk. Neem contact op met de betreffende vestiging om de afspraak te verzetten of te annuleren.',
      },
      {
        question: 'Voor advies na een eerdere besnijdenis kan ik online een afspraak maken?',
        answer:
          'Nee, een afspraak voor advies of correctie kan uitsluitend telefonisch worden gemaakt. Voor Amsterdam en Almere belt u 020-6909712, voor de overige vestigingen 085-4871506.',
      },
    ],
  },
  {
    category: 'Voor jongens',
    items: [
      {
        question: 'Vanaf welke leeftijd kan een jongen worden besneden?',
        answer:
          'Besnijdenis Centrum Nederland voert besnijdenissen uit bij jongens tot 16 jaar. De behandeling wordt aangepast aan de leeftijd van het kind.',
      },
      {
        question: 'Kan ik als ouder bij de behandeling aanwezig zijn?',
        answer:
          'Ja, ouders kunnen bij de behandeling aanwezig zijn. Dit wordt aangemoedigd om het kind gerust te stellen.',
      },
      {
        question: 'Mijn zoon is erg angstig, wat kan ik doen?',
        answer:
          'Bespreek dit vooraf met de arts. De arts heeft ervaring met angstige kinderen en zal de tijd nemen om uw zoon op zijn gemak te stellen.',
      },
    ],
  },
  {
    category: 'Voor mannen',
    items: [
      {
        question: 'Wat is het verschil tussen een besnijdenis bij mannen en jongens?',
        answer:
          'De techniek en nazorg kunnen verschillen. Bij volwassen mannen kan het herstel iets langer duren. De arts bespreekt dit vooraf uitgebreid met u.',
      },
      {
        question: 'Welke stijl besnijdenis voeren jullie uit?',
        answer:
          'BCN voert een complete besnijdenis uit. De arts bespreekt vooraf de exacte methode en het verwachte resultaat met u.',
      },
    ],
  },
  {
    category: 'Voorbereiding',
    items: [
      {
        question: 'Is nuchter zijn vereist voor de behandeling?',
        answer:
          'Nee, omdat de behandeling onder plaatselijke verdoving plaatsvindt, is nuchter zijn niet vereist. U mag voor de behandeling gewoon eten en drinken.',
      },
      {
        question: 'Wat moet ik meebrengen op de dag van de behandeling?',
        answer:
          'Breng het inschrijfformulier, een geldig identificatiebewijs en de behandelovereenkomst mee. U ontvangt vooraf een complete checklist.',
      },
    ],
  },
  {
    category: 'Nazorg',
    items: [
      {
        question: 'Wat moet ik doen na de behandeling?',
        answer:
          'U ontvangt duidelijke nazorginstructies na de behandeling, inclusief informatie over verzorging, baden, vaseline en eventuele ongemakken.',
      },
      {
        question: 'Wanneer kan ik weer sporten of zwemmen?',
        answer:
          'We adviseren om de eerste dagen rustig aan te doen en intensieve lichaamsbeweging en zwemmen gedurende de eerste week te vermijden.',
      },
      {
        question: 'Er is een geel laagje op de eikel, is dat normaal?',
        answer:
          'Ja, een geel laagje is een normaal onderdeel van het genezingsproces en geen teken van infectie.',
      },
    ],
  },
  {
    category: 'Kosten',
    items: [
      {
        question: 'Wat kost een besnijdenis?',
        answer:
          'De kosten voor de besnijdenis van een jongen (tot 16 jaar) bedragen €325,- en voor een volwassen man (vanaf 16 jaar) €495,-. Deze kosten zijn inclusief de behandeling, verdoving en nazorg.',
      },
      {
        question: 'Wordt de besnijdenis vergoed door de verzekering?',
        answer:
          'Sinds 2005 worden jongensbesnijdenissen in het ziekenhuis niet meer vergoed vanuit de basisverzekering. Informeer bij uw aanvullende verzekering of de behandeling (gedeeltelijk) wordt vergoed.',
      },
    ],
  },
  {
    category: 'Vestigingen',
    items: [
      {
        question: 'Hoeveel vestigingen heeft BCN?',
        answer:
          'Besnijdenis Centrum Nederland heeft negen gespecialiseerde vestigingen verspreid over Nederland: Amsterdam, Almere, Arnhem, Breda, Eindhoven Regio, Haaglanden, Maastricht, Rotterdam en Utrecht.',
      },
      {
        question: 'Welke telefoonnummers kan ik bellen?',
        answer:
          'Voor Amsterdam en Almere belt u 020-6909712. Voor alle overige vestigingen belt u 085-4871506.',
      },
    ],
  },
];

export const faqPreview: FaqItem[] = [
  faqCategories[0].items[0],
  faqCategories[1].items[0],
  faqCategories[4].items[0],
  faqCategories[5].items[0],
  faqCategories[4].items[2],
  faqCategories[1].items[1],
];
