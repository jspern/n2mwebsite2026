export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photo: string;
  order: number;
}

export const team: TeamMember[] = [
  {
    name: 'Nick Oliverio',
    title: 'President & Founder',
    bio: 'Nick founded N2M Technology with a vision to revolutionize IT services for businesses of all sizes. With relentless dedication, he leads the team in empowering organizations to leverage technology for growth and success.',
    photo: '/images/team/nick-oliverio.jpg',
    order: 1,
  },
  {
    name: 'Michael Oliverio',
    title: 'Vice President',
    bio: 'Michael brings deep IT expertise and a client-first mindset to every engagement, ensuring N2M delivers on its promise of seamless, proactive IT management.',
    photo: '/images/team/michael-oliverio.jpg',
    order: 2,
  },
  {
    name: 'Daniel Zientak',
    title: 'Operations Manager',
    bio: 'Daniel oversees the day-to-day operations at N2M, keeping projects on track and ensuring every client environment runs at peak performance.',
    photo: '/images/team/daniel-zientak.jpg',
    order: 3,
  },
  {
    name: 'Matthew Day',
    title: 'Lead Network Engineer',
    bio: 'Matthew designs and maintains the complex network infrastructures that keep our clients connected, secure, and productive.',
    photo: '/images/team/matthew-day.jpg',
    order: 4,
  },
  {
    name: 'Josh Spern',
    title: 'Lead Systems Engineer',
    bio: 'Josh architects and manages the server and cloud environments that form the backbone of our clients\' IT ecosystems.',
    photo: '/images/team/josh-spern.jpg',
    order: 5,
  },
];
