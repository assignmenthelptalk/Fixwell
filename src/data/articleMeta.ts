export type ArticleCategory = 'Landlords & legal' | 'Costs & choosing a handyman' | 'Home maintenance & repairs';

export interface ArticleMeta {
  category: ArticleCategory;
  /** ISO date the article first went live (from the site's git history). */
  published: string;
  /** ISO date of the last substantive content change. Update this whenever an article's advice is revised. */
  updated: string;
}

export const articleCategories: ArticleCategory[] = [
  'Landlords & legal',
  'Costs & choosing a handyman',
  'Home maintenance & repairs',
];

const LIVE = '2026-06-17';
const REVISED = '2026-08-29';
const CORRECTED = '2026-10-25';

export const articleMeta: Record<string, ArticleMeta> = {
  'landlord-property-maintenance-legal-obligations': { category: 'Landlords & legal', published: LIVE, updated: CORRECTED },
  'assured-shorthold-tenancy-maintenance-obligations': { category: 'Landlords & legal', published: LIVE, updated: CORRECTED },
  'managing-rental-property-remotely-maintenance': { category: 'Landlords & legal', published: LIVE, updated: REVISED },

  'handyman-cost-salisbury': { category: 'Costs & choosing a handyman', published: LIVE, updated: CORRECTED },
  'handyman-vs-tradesman': { category: 'Costs & choosing a handyman', published: LIVE, updated: CORRECTED },
  'what-does-a-handyman-do': { category: 'Costs & choosing a handyman', published: LIVE, updated: CORRECTED },
  'how-to-find-reliable-handyman-wiltshire': { category: 'Costs & choosing a handyman', published: LIVE, updated: REVISED },
  'diy-vs-professional-home-repairs-uk': { category: 'Costs & choosing a handyman', published: LIVE, updated: CORRECTED },

  'home-maintenance-schedule-uk': { category: 'Home maintenance & repairs', published: LIVE, updated: REVISED },
  'preparing-home-for-winter-uk': { category: 'Home maintenance & repairs', published: LIVE, updated: REVISED },
  'when-do-you-need-emergency-handyman': { category: 'Home maintenance & repairs', published: LIVE, updated: REVISED },
  'common-home-repair-problems-older-uk-properties': { category: 'Home maintenance & repairs', published: LIVE, updated: REVISED },
  'damp-in-older-salisbury-homes': { category: 'Home maintenance & repairs', published: REVISED, updated: REVISED },
  'how-to-paint-skirting-boards': { category: 'Home maintenance & repairs', published: LIVE, updated: REVISED },
  'home-renovation-planning-guide-salisbury': { category: 'Home maintenance & repairs', published: LIVE, updated: REVISED },
  'garden-maintenance-seasons-wiltshire': { category: 'Home maintenance & repairs', published: LIVE, updated: REVISED },
};

const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export function formatArticleDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}
