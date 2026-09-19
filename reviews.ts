export interface Review {
  id: number;
  name: string;
  date: string;
  location?: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Hayfa',
    date: '26 augustus 2026',
    location: 'Wael',
    rating: 5,
    text: 'The team was amazing, the doctor and staff they were so patient and humble. Thank you so much.',
  },
  {
    id: 2,
    name: 'Nouh, Abu',
    date: '25 augustus 2026',
    location: 'Besnijdeniscentrum Eindhoven/Valkenswaard',
    rating: 5,
    text: 'Heel erg bedankt voor de vlotte operatie en de goede zorgen achteraf. Ik ben ontzettend blij dat alles zo goed is verlopen. Mijn zoontje heeft er niets van gevoeld tijdens de operatie en nadien ook helemaal niets. Bedankt! Groeten uit België.',
  },
  {
    id: 3,
    name: 'Jacqueline',
    date: '25 augustus 2026',
    location: 'Besnijdenis',
    rating: 5,
    text: 'Met me vriendin mee geweest. Ze waren zo en zo lief, raad iedereen hun aan.',
  },
  {
    id: 4,
    name: 'Metodi Aleksiev',
    date: '20 augustus 2026',
    location: '',
    rating: 5,
    text: 'De kliniek is een van de beste. Zeer professioneel en goede zorg.',
  },
  {
    id: 5,
    name: 'Patiënt',
    date: 'augustus 2026',
    location: 'Amsterdam',
    rating: 5,
    text: 'Zeer tevreden over de behandeling. De arts nam de tijd om alles rustig uit te leggen. Aanrader voor ouders die twijfelen.',
  },
];
