import { HOME_TILE_LAYOUT, NAV_LINKS, PROJECT_GALLERY_TONES } from './layout';
import type { Project, SiteContent } from './site';

const projects: Project[] = [
  {
    title: 'saeira',
    subtitle: 'support / 2025',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.01.jpeg',
    gallery: ['soft', 'paper', 'warm'],
  },
  {
    title: 'del gesu release party',
    subtitle: 'release / 2025',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg',
    gallery: ['ink', 'warm', 'soft'],
  },
  {
    title: 'florence sinclair london headline show',
    subtitle: 'tour management / 2025',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.01 (1).jpeg',
    gallery: ['paper', 'ink', 'soft'],
  },
  {
    title: 'white garden',
    subtitle: 'event / 2024',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    gallery: ['bright', 'paper', 'warm'],
  },
  {
    title: 'poison gf',
    subtitle: 'project / 2024',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (2).jpeg',
    gallery: ['ink', 'bright', 'soft'],
  },
  {
    title: 'selected independent events',
    subtitle: 'event / 2023—2026',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (3).jpeg',
    gallery: ['warm', 'soft', 'paper'],
  },
];

const visualImages = [
  '/images/WhatsApp Image 2026-03-26 at 14.51.01.jpeg',
  '/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg',
  '/images/WhatsApp Image 2026-03-26 at 14.51.01 (1).jpeg',
  '/images/WhatsApp Image 2026-03-26 at 14.51.02 (3).jpeg',
  '/images/WhatsApp Image 2026-03-26 at 14.51.02 (2).jpeg',
  '/images/WhatsApp Image 2026-03-26 at 14.51.02.jpeg',
  '/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg',
];

export const fallbackSite: SiteContent = {
  siteMeta: {
    name: 'betsy pearl',
    description:
      'independent event organizer and cultural producer supporting music and thoughtful collaborations.',
  },
  navLinks: NAV_LINKS,
  welcomeTiles: HOME_TILE_LAYOUT.map(({ key: _key, linkFromSheet: _link, ...tile }) => tile),
  projects: projects.map((project, index) => ({
    ...project,
    gallery: project.gallery.length
      ? project.gallery
      : [
          PROJECT_GALLERY_TONES[index % PROJECT_GALLERY_TONES.length],
          PROJECT_GALLERY_TONES[(index + 1) % PROJECT_GALLERY_TONES.length],
          PROJECT_GALLERY_TONES[(index + 2) % PROJECT_GALLERY_TONES.length],
        ],
  })),
  aboutText:
    'betsy pearl is an independent project dedicated to supporting, producing and circulating music and cultural projects, with a focus on thoughtful and curated practices. it fosters sensitive, long-term and close-knit collaborations with different artists across music and culture.',
  contactEmails: [
    'betsypearlcontact@gmail.com',
    'contact@betsypearl.net',
    'contact@betsypearl.com',
  ],
  visualImages,
};
