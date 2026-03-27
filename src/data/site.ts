export type WelcomeTile = {
  title: string;
  href: string;
  kind: 'section' | 'project' | 'external';
  tone: 'soft' | 'ink' | 'warm' | 'paper' | 'bright';
  image?: string;
  x: string;
  y: string;
  rotate: string;
  width: string;
  height: string;
};

export type Artist = {
  name: string;
  location: string;
  focus: string;
  text: string;
  images?: string[];
  mockup?: string;
  recentGigs?: string[];
  links: string[];
  gallery: ('soft' | 'ink' | 'warm' | 'paper' | 'bright')[];
};

export type Project = {
  title: string;
  category: 'event' | 'project' | 'tour management' | 'release' | 'support';
  year: string;
  role: string;
  text: string;
  images?: string[];
  links?: string[];
  gallery?: ('soft' | 'ink' | 'warm' | 'paper' | 'bright')[];
  link?: string;
  linkLabel?: string;
};

export const siteMeta = {
  name: 'betsy pearl',
  description:
    'independent event organizer and cultural producer supporting music and thoughtful collaborations.',
};

export const navLinks = [
  { href: '/artists', label: 'artists' },
  { href: '/events-projects', label: 'events & projects' },
  { href: '/archives', label: 'archives' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
];

export const welcomeTiles: WelcomeTile[] = [
  {
    title: 'artists',
    href: '/artists',
    kind: 'section',
    tone: 'paper',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.01.jpeg',
    x: '2%',
    y: '62%',
    rotate: '-4deg',
    width: '172px',
    height: '160px',
  },
  {
    title: 'events & projects',
    href: '/events-projects',
    kind: 'section',
    tone: 'ink',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.01 (1).jpeg',
    x: '63%',
    y: '40%',
    rotate: '-7deg',
    width: '180px',
    height: '166px',
  },
  {
    title: 'archives',
    href: '/archives',
    kind: 'section',
    tone: 'warm',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg',
    x: '80%',
    y: '66%',
    rotate: '5deg',
    width: '174px',
    height: '156px',
  },
  {
    title: 'about',
    href: '/about',
    kind: 'section',
    tone: 'soft',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (2).jpeg',
    x: '10%',
    y: '43%',
    rotate: '-5deg',
    width: '168px',
    height: '164px',
  },
  {
    title: 'contact',
    href: '/contact',
    kind: 'section',
    tone: 'bright',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (3).jpeg',
    x: '43%',
    y: '54%',
    rotate: '-6deg',
    width: '130px',
    height: '88px',
  },
  {
    title: 'projects',
    href: '/events-projects',
    kind: 'project',
    tone: 'warm',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02.jpeg',
    x: '61%',
    y: '5%',
    rotate: '1deg',
    width: '176px',
    height: '164px',
  },
];

export const artists: Artist[] = [
  {
    name: 'artist 1',
    location: 'paris',
    focus: 'live performance and booking',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.01.jpeg', '/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg'],
    links: [
      'listen',
      'website',
      'contact',
    ],
    gallery: ['soft', 'paper', 'ink'],
        mockup: '/images/WhatsApp Image 2026-03-26 at 14.51.01.jpeg',
        recentGigs: ['Venue 1', 'Venue 2', 'Venue 3'],
  },
  {
    name: 'artist 2',
    location: 'london',
    focus: 'artist development',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.01 (1).jpeg', '/images/WhatsApp Image 2026-03-26 at 14.51.02 (2).jpeg'],
    links: [
      'listen',
      'instagram',
      'contact',
    ],
    gallery: ['warm', 'ink', 'soft'],
        mockup: '/images/WhatsApp Image 2026-03-26 at 14.51.01 (1).jpeg',
        recentGigs: ['Venue 1', 'Venue 2', 'Venue 3'],
  },
  {
    name: 'artist 3',
    location: 'brussels',
    focus: 'touring and live circulation',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.02 (3).jpeg', '/images/WhatsApp Image 2026-03-26 at 14.51.02.jpeg'],
    links: ['listen', 'website'],
    gallery: ['paper', 'bright', 'warm'],
        mockup: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (3).jpeg',
        recentGigs: ['Venue 1', 'Venue 2', 'Venue 3'],
  },
  {
    name: 'artist 4',
    location: 'berlin',
    focus: 'booking support',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.02 (2).jpeg', '/images/WhatsApp Image 2026-03-26 at 14.51.01.jpeg'],
    links: ['listen', 'contact'],
    gallery: ['ink', 'soft', 'paper'],
        mockup: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (2).jpeg',
        recentGigs: ['Venue 1', 'Venue 2', 'Venue 3'],
  },
  {
    name: 'artist 5',
    location: 'paris / london',
    focus: 'music and visual practice',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg', '/images/WhatsApp Image 2026-03-26 at 14.51.02 (3).jpeg'],
    links: ['website', 'contact'],
    gallery: ['bright', 'warm', 'soft'],
        mockup: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg',
        recentGigs: ['Venue 1', 'Venue 2', 'Venue 3'],
  },
  {
    name: 'artist 6',
    location: 'milan',
    focus: 'selected events',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.02.jpeg', '/images/WhatsApp Image 2026-03-26 at 14.51.01 (1).jpeg'],
    links: ['listen', 'website'],
    gallery: ['paper', 'ink', 'warm'],
        mockup: '/images/WhatsApp Image 2026-03-26 at 14.51.02.jpeg',
        recentGigs: ['Venue 1', 'Venue 2', 'Venue 3'],
  },
];

export const projects: Project[] = [
  {
    title: 'saeira',
    category: 'support',
    year: '2025',
    role: 'artist accompaniment and strategic support',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.01.jpeg'],
    links: ['details', 'contact'],
    gallery: ['soft', 'paper', 'warm'],
  },
  {
    title: 'del gesu release party',
    category: 'release',
    year: '2025',
    role: 'release event production',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg'],
    links: ['details', 'press'],
    gallery: ['ink', 'warm', 'soft'],
  },
  {
    title: 'florence sinclair london headline show',
    category: 'tour management',
    year: '2025',
    role: 'tour management and coordination',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.01 (1).jpeg'],
    links: ['details', 'contact'],
    gallery: ['paper', 'ink', 'soft'],
  },
  {
    title: 'white garden',
    category: 'event',
    year: '2024',
    role: 'event production and curation support',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    links: ['details'],
    gallery: ['bright', 'paper', 'warm'],
  },
  {
    title: 'poison gf',
    category: 'project',
    year: '2024',
    role: 'project highlight and production follow-through',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.02 (2).jpeg'],
    links: ['details'],
    gallery: ['ink', 'bright', 'soft'],
  },
  {
    title: 'selected independent events',
    category: 'event',
    year: '2023—2026',
    role: 'production, communication, and guest experience',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    images: ['/images/WhatsApp Image 2026-03-26 at 14.51.02 (3).jpeg'],
    links: ['details', 'contact'],
    gallery: ['warm', 'soft', 'paper'],
  },
];

export const archives = [
  {
    year: '2026',
    status: 'in preparation',
    note: 'selected documents, posters, and traces will be added here later.',
  },
  {
    year: '2025',
    status: 'in preparation',
    note: 'live stills, release moments, and project notes.',
  },
  {
    year: 'earlier',
    status: 'in preparation',
    note: 'past collaborations and archival fragments.',
  },
];

export const aboutText =
  'betsy pearl is an independent project dedicated to supporting, producing and circulating music and cultural projects, with a focus on thoughtful and curated practices. it fosters sensitive, long-term and close-knit collaborations with different artists across music and culture.';

export const contactEmails = [
  'betsypearlcontact@gmail.com',
  'contact@betsypearl.net',
  'contact@betsypearl.com',
];