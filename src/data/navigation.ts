export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/handyman-services-salisbury',
    children: [
      { label: 'Emergency Handyman', href: '/emergency-handyman-salisbury' },
      { label: 'Property Maintenance', href: '/property-maintenance-salisbury' },
      { label: 'Landlord Services', href: '/landlord-property-maintenance-salisbury' },
      { label: 'Home Repairs', href: '/home-repairs-salisbury' },
      { label: 'Odd Jobs', href: '/odd-jobs-salisbury' },
      { label: 'Garden Maintenance', href: '/garden-maintenance-salisbury' },
      { label: 'Painting & Decorating', href: '/painting-decorating-salisbury' },
      { label: 'Carpentry', href: '/carpentry-services-salisbury' },
      { label: 'Renovation', href: '/renovation-services-salisbury' },
      { label: 'Plumbing Repairs', href: '/plumbing-repairs-salisbury' },
    ],
  },
  {
    label: 'Areas',
    href: '/handyman-services-salisbury',
    children: [
      { label: 'Amesbury', href: '/handyman-amesbury' },
      { label: 'Wilton', href: '/handyman-wilton' },
      { label: 'Tidworth', href: '/handyman-tidworth' },
      { label: 'Fordingbridge', href: '/handyman-fordingbridge' },
      { label: 'Downton', href: '/handyman-downton' },
      { label: 'Andover', href: '/handyman-andover' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Advice', href: '/what-does-a-handyman-do' },
  { label: 'Contact', href: '/contact' },
];

export const footerServiceLinks = [
  { label: 'Emergency Handyman Salisbury', href: '/emergency-handyman-salisbury' },
  { label: 'Property Maintenance Salisbury', href: '/property-maintenance-salisbury' },
  { label: 'Landlord Property Maintenance', href: '/landlord-property-maintenance-salisbury' },
  { label: 'Home Repairs Salisbury', href: '/home-repairs-salisbury' },
  { label: 'Odd Jobs Salisbury', href: '/odd-jobs-salisbury' },
  { label: 'Garden Maintenance Salisbury', href: '/garden-maintenance-salisbury' },
  { label: 'Painting & Decorating', href: '/painting-decorating-salisbury' },
  { label: 'Carpentry Services', href: '/carpentry-services-salisbury' },
  { label: 'Plumbing Repairs', href: '/plumbing-repairs-salisbury' },
  { label: 'Fence Repair', href: '/fence-repair-salisbury' },
  { label: 'Gutter Cleaning', href: '/gutter-cleaning-salisbury' },
];

export const footerAreaLinks = [
  { label: 'Handyman Amesbury', href: '/handyman-amesbury' },
  { label: 'Handyman Wilton', href: '/handyman-wilton' },
  { label: 'Handyman Tidworth', href: '/handyman-tidworth' },
  { label: 'Handyman Fordingbridge', href: '/handyman-fordingbridge' },
  { label: 'Handyman Downton', href: '/handyman-downton' },
  { label: 'Handyman Andover', href: '/handyman-andover' },
];

export const footerInfoLinks = [
  { label: 'What Does a Handyman Do?', href: '/what-does-a-handyman-do' },
  { label: 'Handyman Cost Guide', href: '/handyman-cost-salisbury' },
  { label: 'Handyman vs Tradesman', href: '/handyman-vs-tradesman' },
  { label: 'Landlord Legal Obligations', href: '/landlord-property-maintenance-legal-obligations' },
  { label: 'Find a Reliable Handyman', href: '/how-to-find-reliable-handyman-wiltshire' },
];
