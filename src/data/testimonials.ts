export interface Testimonial {
  quote: string;
  name: string;
  industry?: string;
  featured: boolean;
  category: 'nick' | 'company';
}

export const testimonials: Testimonial[] = [
  {
    quote: "Running a company is anything but easy, but the last thing we need to worry about is having our system down. It's great to know we have a strong IT provider with N2M watching our back.",
    name: 'Kevin W.',
    industry: 'Manufacturing',
    featured: true,
    category: 'company',
  },
  {
    quote: "Entering into a contract with N2M is one of the best business decisions we ever made. Our IT program now runs seamlessly. Probably most remarkable is how few problems we now have since our issues are handled proactively.",
    name: 'Dan B.',
    industry: 'Medical',
    featured: true,
    category: 'company',
  },
  {
    quote: "Working with N2M has been a great experience. From the high-level knowledge to the attention to detail, our needs are always met and the worry of IT we used to have is gone.",
    name: 'Ian D.',
    industry: 'Services',
    featured: true,
    category: 'company',
  },
  {
    quote: "Our IT simply works. Whenever something goes wrong, we just submit a ticket online and enjoy fast response times from N2M's qualified team.",
    name: 'Miles P.',
    industry: 'Financial',
    featured: false,
    category: 'company',
  },
  {
    quote: "I couldn't be happier with the service provided to us by N2M; I would say they went the \"extra mile,\" but it was more like 10-15 miles extra!",
    name: 'Tim B.',
    industry: 'Non-Profit',
    featured: false,
    category: 'company',
  },
  {
    quote: "Nick goes above and beyond to complete the project and satisfy his customer. He is focused and pays attention to the smallest details.",
    name: 'Eric G.',
    industry: undefined,
    featured: false,
    category: 'nick',
  },
  {
    quote: "Nick is an outstanding Infrastructure program manager and subject matter expert. He does it all — from designing the solution to getting it installed. He has strong communication skills, great relationship skills and is trustworthy and honest.",
    name: 'Sue N.',
    industry: undefined,
    featured: false,
    category: 'nick',
  },
  {
    quote: "Nick's knowledge and experience with networks as a consultant is outstanding. He has the background and experience to handle any type of network challenge!",
    name: 'Wendy R.',
    industry: undefined,
    featured: false,
    category: 'nick',
  },
];
