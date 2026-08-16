import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'assignmenthelptalk',
      name: 'Fixwell',
    },
  },

  ui: {
    brand: {
      name: 'FixWell Services CMS',
    },
  },

  singletons: {
    business: singleton({
      label: 'Business Info & Contact Details',
      path: 'src/content/business/main',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Business Name' }),
        url: fields.url({ label: 'Website URL' }),
        phone: fields.text({
          label: 'Phone number (for click-to-call)',
          description: 'e.g. +447391599078, no spaces',
        }),
        phoneDisplay: fields.text({
          label: 'Phone number (as displayed)',
          description: 'e.g. +44 7391 599 078',
        }),
        email: fields.text({ label: 'Email address' }),
        address: fields.text({ label: 'Postal address' }),
        city: fields.text({ label: 'City' }),
        county: fields.text({ label: 'County' }),
        postcode: fields.text({ label: 'Postcode' }),
        tagline: fields.text({ label: 'Tagline' }),
        description: fields.text({ label: 'Business description', multiline: true }),
        priceRange: fields.text({ label: 'Price range', description: 'e.g. ££' }),
        openingHours: fields.text({
          label: 'Opening hours',
          description: 'e.g. Mo-Su 07:00-20:00',
        }),
        areaServed: fields.array(fields.text({ label: 'Town / village' }), {
          label: 'Areas served',
          description: 'Towns and villages you cover',
          itemLabel: (props) => props.value || 'Area',
        }),
        formAction: fields.url({ label: 'Quote form submission address' }),
        googleMapsUrl: fields.url({ label: 'Google Maps link' }),
      },
    }),

    reviewsSettings: singleton({
      label: 'Overall Rating Display',
      path: 'src/content/reviewsSettings/main',
      format: { data: 'json' },
      schema: {
        googleReviewUrl: fields.url({ label: 'Link to your Google reviews page' }),
        overallRating: fields.text({ label: 'Overall star rating', description: 'e.g. 5.0' }),
        reviewCount: fields.integer({ label: 'Total number of reviews' }),
      },
    }),

    trustBadges: singleton({
      label: 'Certificate Numbers',
      path: 'src/content/trustBadges/main',
      format: { data: 'json' },
      schema: {
        publicLiabilityPolicyNumber: fields.text({
          label: 'Public Liability Insurance policy number',
        }),
        dbsCertificateNumber: fields.text({ label: 'DBS certificate number' }),
      },
    }),
  },

  collections: {
    testimonials: collection({
      label: 'Testimonials',
      path: 'src/content/testimonials/*',
      format: { data: 'json' },
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Customer name' } }),
        rating: fields.integer({
          label: 'Star rating',
          validation: { min: 1, max: 5 },
        }),
        text: fields.text({ label: 'Review text', multiline: true }),
        date: fields.date({ label: 'Date of review' }),
        badge: fields.text({
          label: 'Badge',
          description: 'Optional, e.g. Local Guide',
        }),
      },
    }),

    gallery: collection({
      label: 'Work Gallery',
      path: 'src/content/gallery/*',
      format: { data: 'json' },
      slugField: 'caption',
      schema: {
        caption: fields.slug({ name: { label: 'Caption' } }),
        image: fields.text({
          label: 'Photo path',
          description: 'Path under /public, e.g. /blog_image_2.webp',
        }),
        alt: fields.text({
          label: 'Alt text',
          description: 'Short description for accessibility',
        }),
      },
    }),

    pageContent: collection({
      label: 'Services & Info Pages',
      path: 'src/content/pageContent/*',
      format: { data: 'json' },
      slugField: 'section',
      schema: {
        section: fields.slug({
          name: {
            label: 'Page identifier',
            description:
              'Matches this page’s URL slug — do not change unless you also update the page route.',
          },
        }),
        intro: fields.text({ label: 'Introduction paragraph', multiline: true }),
        sections: fields.array(
          fields.object({
            heading: fields.text({ label: 'Heading' }),
            body: fields.text({ label: 'Body text', multiline: true }),
          }),
          {
            label: 'Content sections',
            itemLabel: (props) => props.fields.heading.value || 'Section',
          }
        ),
        faqs: fields.array(
          fields.object({
            q: fields.text({ label: 'Question' }),
            a: fields.text({ label: 'Answer', multiline: true }),
          }),
          {
            label: 'Frequently asked questions',
            itemLabel: (props) => props.fields.q.value || 'FAQ',
          }
        ),
      },
    }),
  },
});
