export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '25+', numericValue: 25, suffix: '+', label: 'Years of Success' },
  { value: '98%', numericValue: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: '400+', numericValue: 400, suffix: '+', label: 'Projects Complete' },
  { value: '250+', numericValue: 250, suffix: '+', label: 'Clients' },
];
