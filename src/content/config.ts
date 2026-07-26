import { defineCollection, z } from 'astro:content';

const pageContent = defineCollection({
  type: 'data',
  schema: z.object({
    intro: z.string().optional(),
    sections: z
      .array(
        z.object({
          heading: z.string(),
          body: z.string(),
        })
      )
      .default([]),
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .default([]),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    rating: z.number().min(1).max(5),
    text: z.string(),
    date: z.coerce.date(),
    badge: z.string().optional(),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    alt: z.string(),
    caption: z.string(),
  }),
});

const business = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    url: z.string(),
    phone: z.string(),
    phoneDisplay: z.string(),
    email: z.string(),
    address: z.string(),
    city: z.string(),
    county: z.string(),
    postcode: z.string(),
    tagline: z.string(),
    description: z.string(),
    priceRange: z.string(),
    openingHours: z.string(),
    areaServed: z.array(z.string()),
    formAction: z.string(),
    googleMapsUrl: z.string(),
  }),
});

const reviewsSettings = defineCollection({
  type: 'data',
  schema: z.object({
    googleReviewUrl: z.string(),
    overallRating: z.string(),
    reviewCount: z.number(),
  }),
});

const trustBadges = defineCollection({
  type: 'data',
  schema: z.object({
    publicLiabilityPolicyNumber: z.string().optional(),
    dbsCertificateNumber: z.string().optional(),
  }),
});

export const collections = {
  pageContent,
  testimonials,
  gallery,
  business,
  reviewsSettings,
  trustBadges,
};
