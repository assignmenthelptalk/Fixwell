export type PageType = 'service-hub' | 'service-detail' | 'location';

export interface FAQ {
  q: string;
  a: string;
}

export interface PageSection {
  heading: string;
  body: string;
}

export interface CorePage {
  id: string;
  slug: string;
  pageType: PageType;
  title: string;
  h1: string;
  metaDescription: string;
  macroContext: string;
  priority: string;
  linksTo: string[];
  faqs: FAQ[];
  sections?: PageSection[];
  parentSlug?: string;
  icon?: string;
  shortLabel?: string;
}

export const coreHubPages: CorePage[] = [
  {
    id: 'core-hub-01',
    slug: 'handyman-services-salisbury',
    pageType: 'service-hub',
    title: 'Handyman Services Salisbury | FixWell Services',
    h1: 'Handyman Services in Salisbury & Wiltshire',
    metaDescription:
      'Professional, fully insured handyman services in Salisbury. Home repairs, property maintenance, emergency callouts and renovation work. Call FixWell Services today.',
    macroContext:
      'Professional, fully insured handyman services covering all home repair, maintenance, and improvement needs in Salisbury and Wiltshire',
    priority: 'P0',
    linksTo: [
      'emergency-handyman-salisbury',
      'property-maintenance-salisbury',
      'landlord-property-maintenance-salisbury',
      'home-repairs-salisbury',
      'odd-jobs-salisbury',
      'garden-maintenance-salisbury',
      'painting-decorating-salisbury',
      'carpentry-services-salisbury',
      'renovation-services-salisbury',
      'plumbing-repairs-salisbury',
    ],
    icon: '🔨',
    shortLabel: 'All Services',
    faqs: [
      {
        q: 'What handyman services do you offer in Salisbury?',
        a: 'FixWell Services covers the full range of home repair and maintenance work in Salisbury and Wiltshire — including plumbing repairs, electrical fixes, carpentry, painting, fence repair, garden maintenance, and emergency callouts. No job is too small.',
      },
      {
        q: 'Are you fully insured?',
        a: 'Yes. FixWell Services is fully insured for all handyman and property maintenance work. We hold comprehensive public liability insurance, so you can book with confidence.',
      },
      {
        q: 'Do you cover areas outside Salisbury?',
        a: 'We cover Salisbury and the surrounding Wiltshire and Hampshire areas including Amesbury, Wilton, Tidworth, Fordingbridge, Downton, and Andover.',
      },
      {
        q: 'How do I get a quote?',
        a: 'Call us on 07391 599 078 or use the contact form on this page. We will discuss your job, provide a fixed-price quote or hourly rate (£20–£40/hr), and arrange a convenient time.',
      },
      {
        q: 'Can you do same-day emergency repairs?',
        a: 'Yes. We offer same-day emergency handyman callouts in Salisbury for urgent repairs including burst pipes, broken locks, electrical faults, and storm damage.',
      },
      {
        q: 'What are your rates?',
        a: 'Our hourly rates are £20–£40 per hour, which is competitive for Salisbury and Wiltshire. Fixed-price quotes are available for defined-scope jobs. Materials are billed separately or included depending on the job.',
      },
    ],
  },
  {
    id: 'core-hub-02',
    slug: 'emergency-handyman-salisbury',
    pageType: 'service-hub',
    title: 'Emergency Handyman Salisbury | Same-Day Repairs | FixWell Services',
    h1: 'Emergency Handyman Salisbury — Same-Day Callouts',
    metaDescription:
      'Emergency handyman in Salisbury — same-day callouts for burst pipes, broken locks, electrical faults, storm damage and heating failures. Fully insured. Call FixWell now.',
    macroContext:
      'Same-day emergency handyman callouts in Salisbury for burst pipes, broken locks, electrical faults, heating failures, storm damage',
    priority: 'P0',
    linksTo: [
      'handyman-services-salisbury',
      'plumbing-leak-repairs-salisbury',
      'electrical-repairs-salisbury',
      'lock-door-repair-salisbury',
    ],
    icon: '🚨',
    shortLabel: 'Emergency',
    faqs: [
      {
        q: 'How quickly can you respond to an emergency in Salisbury?',
        a: 'We aim to respond to emergency callouts in Salisbury on the same day. For urgent situations like burst pipes or broken locks, call us directly on 07391 599 078.',
      },
      {
        q: 'What counts as a handyman emergency?',
        a: 'Emergencies include burst or leaking pipes, broken door locks (security risk), electrical faults, boiler or heating failures, storm damage to fences or roofs, and any repair that could cause further damage if left overnight.',
      },
      {
        q: 'Do you charge extra for emergency callouts?',
        a: 'Emergency callout rates may vary depending on timing. We will always give you a clear quote before starting work so there are no surprises.',
      },
      {
        q: 'Are you available at weekends for emergency repairs?',
        a: 'Yes. We are available Monday to Sunday, 7am to 8pm for emergency repairs across Salisbury and the surrounding Wiltshire area.',
      },
    ],
  },
  {
    id: 'core-hub-03',
    slug: 'property-maintenance-salisbury',
    pageType: 'service-hub',
    title: 'Property Maintenance Salisbury | Home & Landlord Services | FixWell',
    h1: 'Property Maintenance Salisbury — Reliable, Insured Service',
    metaDescription:
      'Comprehensive property maintenance in Salisbury. Routine checks, seasonal upkeep, landlord compliance work and one-off repairs. Fully insured. FixWell Services.',
    macroContext:
      'Comprehensive property maintenance in Salisbury covering routine checks, seasonal upkeep, and landlord compliance work',
    priority: 'P0',
    linksTo: [
      'landlord-property-maintenance-salisbury',
      'between-tenancy-property-preparation-salisbury',
      'gutter-cleaning-salisbury',
    ],
    icon: '🏠',
    shortLabel: 'Maintenance',
    faqs: [
      {
        q: 'What does property maintenance include?',
        a: 'Our property maintenance service in Salisbury covers routine inspection and repair of plumbing, electrical fittings, doors and windows, gutters, fencing, and garden areas — as well as seasonal upkeep and compliance checks for rental properties.',
      },
      {
        q: 'Can you set up a regular maintenance schedule?',
        a: 'Yes. We work with homeowners and landlords to set up quarterly or annual maintenance schedules that keep properties in good condition and prevent costly emergency repairs.',
      },
      {
        q: 'Do you provide maintenance for rental properties in Salisbury?',
        a: 'Yes. We specialise in landlord property maintenance across Salisbury and Wiltshire, including between-tenancy preparation, routine checks, and emergency repairs for rental properties.',
      },
    ],
  },
  {
    id: 'core-hub-04',
    slug: 'landlord-property-maintenance-salisbury',
    pageType: 'service-hub',
    title: 'Landlord Property Maintenance Salisbury | Fully Insured | FixWell',
    h1: 'Landlord Property Maintenance in Salisbury — Trusted & Insured',
    metaDescription:
      'Landlord property maintenance in Salisbury — between-tenancy preparation, routine inspections, compliance checks, emergency repairs. Fully insured. FixWell Services.',
    macroContext:
      'Landlord property maintenance in Salisbury — between-tenancy preparation, routine inspections, compliance checks, emergency repairs for rental properties',
    priority: 'P0',
    linksTo: [
      'property-maintenance-salisbury',
      'between-tenancy-property-preparation-salisbury',
      'landlord-property-maintenance-legal-obligations',
      'assured-shorthold-tenancy-maintenance-obligations',
    ],
    icon: '🔑',
    shortLabel: 'Landlord',
    faqs: [
      {
        q: 'What landlord maintenance services do you offer in Salisbury?',
        a: "We provide end-to-end landlord property maintenance including between-tenancy preparation, routine property checks, emergency repairs, gutter cleaning, painting, and compliance work under the Homes (Fitness for Human Habitation) Act and EICR requirements.",
      },
      {
        q: 'Can you help prepare a property between tenancies?',
        a: 'Yes. Our between-tenancy service covers cleaning coordination, minor repairs, repainting, door and window checks, carpet inspection, and compliance walk-throughs to ensure the property is ready for the next tenant.',
      },
      {
        q: 'Do you work with letting agents in Salisbury?',
        a: 'Yes. We work directly with landlords and letting agents across Salisbury and Wiltshire. We can be added to your approved contractor list and respond quickly to tenant maintenance requests.',
      },
      {
        q: 'What are landlords legally required to maintain?',
        a: "Under the Landlord and Tenant Act 1985 and the Homes (Fitness for Human Habitation) Act 2018, landlords must maintain the structure, roof, plumbing, heating, electrics, and ensure the property is safe to live in. We can help you stay compliant.",
      },
    ],
  },
  {
    id: 'core-hub-05',
    slug: 'home-repairs-salisbury',
    pageType: 'service-hub',
    title: 'Home Repairs Salisbury | FixWell Services',
    h1: 'Home Repairs in Salisbury — Professional & Reliable',
    metaDescription:
      'Professional home repairs in Salisbury covering plumbing, electrical, carpentry, doors, windows and structural repairs. Fully insured. Get a free quote from FixWell Services.',
    macroContext:
      'Professional home repairs in Salisbury covering plumbing, electrical, carpentry, doors, windows, and structural repairs',
    priority: 'P1',
    linksTo: [
      'plumbing-leak-repairs-salisbury',
      'electrical-repairs-salisbury',
      'lock-door-repair-salisbury',
      'shelf-installation-salisbury',
      'furniture-assembly-salisbury',
    ],
    icon: '🔧',
    shortLabel: 'Home Repairs',
    faqs: [
      {
        q: 'What home repairs do you cover in Salisbury?',
        a: 'FixWell Services handles a wide range of home repairs in Salisbury including leaking taps, dripping pipes, faulty sockets and light fittings, broken door locks, stiff or sagging doors and windows, carpentry repairs, and more.',
      },
      {
        q: 'Do you work on older properties in Salisbury?',
        a: 'Yes. Salisbury has many period and older properties, and we have experience working on Victorian and Edwardian homes — including sash windows, solid walls, and older plumbing and electrical systems.',
      },
      {
        q: 'Can you do repairs the same week?',
        a: 'In most cases, yes. We aim to offer appointments within 1–3 days for non-emergency repairs in Salisbury and the surrounding area.',
      },
    ],
  },
  {
    id: 'core-hub-06',
    slug: 'odd-jobs-salisbury',
    pageType: 'service-hub',
    title: 'Odd Jobs Salisbury | Handyman for Small Tasks | FixWell Services',
    h1: 'Odd Jobs in Salisbury — No Job Too Small',
    metaDescription:
      'Handyman for odd jobs in Salisbury — shelf fitting, furniture assembly, minor repairs, picture hanging and more. Fully insured. FixWell Services.',
    macroContext:
      'Professional handyman for odd jobs in Salisbury — shelf installation, furniture assembly, minor repairs, small plumbing and electrical tasks',
    priority: 'P1',
    linksTo: [
      'handyman-services-salisbury',
      'shelf-installation-salisbury',
      'furniture-assembly-salisbury',
      'skirting-board-painting-salisbury',
    ],
    icon: '🛠️',
    shortLabel: 'Odd Jobs',
    faqs: [
      {
        q: 'What odd jobs can you do in Salisbury?',
        a: 'Common odd jobs we handle include shelf installation, furniture assembly, picture and mirror hanging, curtain rail fitting, minor plumbing fixes, light bulb or fixture replacement, draught-proofing, and general household maintenance tasks.',
      },
      {
        q: 'Is there a minimum booking for odd jobs?',
        a: 'We have a minimum call-out charge. For small jobs, we can often batch several tasks together in a single visit to make the most of your booking.',
      },
      {
        q: 'Do you bring your own tools and materials?',
        a: 'We bring all necessary tools. For materials like fixings, brackets, or paint, we can either supply them (billed at cost) or you can provide them yourself.',
      },
    ],
  },
  {
    id: 'core-hub-07',
    slug: 'garden-maintenance-salisbury',
    pageType: 'service-hub',
    title: 'Garden Maintenance Salisbury | Landscaping & Outdoor Repairs',
    h1: 'Garden Maintenance in Salisbury — Outdoor Care All Year',
    metaDescription:
      'Garden maintenance and landscaping in Salisbury — lawn care, fence repair, paving, gate repair and seasonal outdoor upkeep. FixWell Services.',
    macroContext:
      'Garden maintenance and landscaping in Salisbury — lawn care, fence repair, gate repair, paving, garden furniture, and seasonal outdoor upkeep',
    priority: 'P1',
    linksTo: ['fence-repair-salisbury', 'paving-slab-replacement-salisbury', 'garden-maintenance-seasons-wiltshire'],
    icon: '🌿',
    shortLabel: 'Garden',
    faqs: [
      {
        q: 'What garden maintenance services do you offer in Salisbury?',
        a: 'Our garden and outdoor services include lawn mowing and edging, hedge trimming, fence repair and replacement, gate repair, paving slab repair, garden tidy-ups, and seasonal clearance work.',
      },
      {
        q: 'Can you repair or replace garden fences in Salisbury?',
        a: 'Yes. We repair and replace garden fences across Salisbury and Wiltshire — including leaning posts, broken panels, post concreting, and storm damage repairs.',
      },
    ],
  },
  {
    id: 'core-hub-08',
    slug: 'painting-decorating-salisbury',
    pageType: 'service-hub',
    title: 'Painting and Decorating Salisbury | Interior & Exterior | FixWell',
    h1: 'Painting & Decorating in Salisbury — Professional Finish',
    metaDescription:
      'Professional painting and decorating in Salisbury — interior and exterior painting, skirting boards, feature walls and full room decoration. FixWell Services.',
    macroContext:
      'Professional painting and decorating in Salisbury — interior and exterior painting, skirting board finishing, feature walls, full room decoration',
    priority: 'P1',
    linksTo: ['skirting-board-painting-salisbury', 'how-to-paint-skirting-boards'],
    icon: '🎨',
    shortLabel: 'Decorating',
    faqs: [
      {
        q: 'Do you do interior and exterior painting in Salisbury?',
        a: 'Yes. We handle both interior and exterior painting and decorating across Salisbury — from full room redecoration to exterior fencing, gates, and masonry painting.',
      },
      {
        q: 'Can you paint skirting boards without damaging the carpet?',
        a: 'Absolutely. We use professional masking techniques to protect carpets and flooring during skirting board painting — a detail that makes a big difference to the finished result.',
      },
    ],
  },
  {
    id: 'core-hub-09',
    slug: 'carpentry-services-salisbury',
    pageType: 'service-hub',
    title: 'Carpentry Services Salisbury | Joinery & Woodwork | FixWell',
    h1: 'Carpentry & Joinery in Salisbury — Skilled Woodwork',
    metaDescription:
      'Carpentry and joinery in Salisbury — shelving, furniture assembly, door repairs, timber fixing and bespoke woodwork. Fully insured. FixWell Services.',
    macroContext:
      'Carpentry and joinery in Salisbury — shelving installation, furniture assembly, door repairs, timber fixing, bespoke woodwork',
    priority: 'P1',
    linksTo: ['shelf-installation-salisbury', 'furniture-assembly-salisbury', 'door-hinge-repair-salisbury'],
    icon: '🪚',
    shortLabel: 'Carpentry',
    faqs: [
      {
        q: 'What carpentry work do you do in Salisbury?',
        a: 'Our carpentry services include shelving installation, flat-pack furniture assembly, door repairs and hanging, skirting board fitting, timber fixing to brickwork and stud walls, and basic joinery work.',
      },
      {
        q: 'Can you fix sticking or sagging doors?',
        a: 'Yes. Sticking, sagging, or rattling doors are one of the most common jobs we handle. We adjust hinges, plane the door edge, or replace fixings to restore a smooth, secure close.',
      },
    ],
  },
  {
    id: 'core-hub-10',
    slug: 'renovation-services-salisbury',
    pageType: 'service-hub',
    title: 'Renovation Services Salisbury | Kitchen & Bathroom | FixWell',
    h1: 'Home Renovation in Salisbury — Kitchen, Bathroom & More',
    metaDescription:
      'Home renovation in Salisbury — kitchen renovation, bathroom renovation, interior refurbishment, and property improvement. FixWell Services.',
    macroContext:
      'Home renovation in Salisbury — kitchen renovation, bathroom renovation, interior refurbishment, and property improvement projects',
    priority: 'P1',
    linksTo: [
      'kitchen-renovation-salisbury',
      'bathroom-renovation-salisbury',
      'home-renovation-planning-guide-salisbury',
    ],
    icon: '🏗️',
    shortLabel: 'Renovation',
    faqs: [
      {
        q: 'Do you do full kitchen renovations in Salisbury?',
        a: 'Yes. We manage kitchen renovation projects in Salisbury including cabinet replacement, worktop fitting, tiling, painting, and full kitchen transformations. We coordinate trades where specialist work is required.',
      },
      {
        q: 'What bathroom renovation work do you cover?',
        a: 'Our bathroom renovation services include tiling, fitting new sanitaryware, resealing, painting, and full bathroom refurbishment. We work with your chosen fixtures or can advise on suitable options.',
      },
    ],
  },
  {
    id: 'core-hub-11',
    slug: 'plumbing-repairs-salisbury',
    pageType: 'service-hub',
    title: 'Plumbing Repairs Salisbury | Leaks, Taps & Drains | FixWell',
    h1: 'Plumbing Repairs in Salisbury — Leaks, Taps & Drains Fixed Fast',
    metaDescription:
      'Minor plumbing repairs in Salisbury — leaking taps, running toilets, blocked drains, burst pipes and emergency plumbing callouts. FixWell Services.',
    macroContext:
      'Minor plumbing repairs in Salisbury — leaking taps, running toilets, blocked drains, burst pipes, tap installation, and emergency plumbing callouts',
    priority: 'P2',
    linksTo: ['emergency-handyman-salisbury', 'plumbing-leak-repairs-salisbury'],
    icon: '🚿',
    shortLabel: 'Plumbing',
    faqs: [
      {
        q: 'What plumbing repairs do you handle in Salisbury?',
        a: 'We handle minor plumbing repairs within legal handyman scope: fixing leaking taps, dripping showerheads, running toilets, blocked drains, replacing washers and valves, and responding to burst pipe emergencies.',
      },
      {
        q: 'Do you need to be a qualified plumber to do plumbing repairs?',
        a: 'For minor repairs such as fixing taps, replacing washers, and unblocking drains, a qualified handyman can legally carry out the work. For gas work or major plumbing installations, a Gas Safe registered engineer is required — we will advise if that applies to your job.',
      },
    ],
  },
];

export const tier2ServicePages: CorePage[] = [
  {
    id: 'core-sub-01',
    slug: 'plumbing-leak-repairs-salisbury',
    pageType: 'service-detail',
    title: 'Plumbing Leak Repairs Salisbury | FixWell Services',
    h1: 'Plumbing Leak Repairs in Salisbury',
    metaDescription:
      'Emergency and routine plumbing leak repairs in Salisbury — burst pipes, dripping taps, leaking joints, and water damage prevention. FixWell Services.',
    macroContext:
      'Emergency and routine plumbing leak repairs in Salisbury — burst pipes, dripping taps, leaking joints, and water damage prevention',
    priority: 'P1',
    parentSlug: 'plumbing-repairs-salisbury',
    linksTo: ['plumbing-repairs-salisbury', 'emergency-handyman-salisbury'],
    faqs: [
      {
        q: 'How quickly can you fix a leaking pipe in Salisbury?',
        a: 'For emergency leaks, we aim for same-day response. For routine drips and leaks, we can usually attend within 1–2 days across Salisbury and Wiltshire.',
      },
      {
        q: 'Can a burst pipe cause serious damage?',
        a: "Yes. A burst pipe can release significant volumes of water in a short time, causing structural damage, mould, and electrical hazards. It's important to turn off the stopcock and call for help immediately.",
      },
    ],
  },
  {
    id: 'core-sub-02',
    slug: 'electrical-repairs-salisbury',
    pageType: 'service-detail',
    title: 'Electrical Repairs Salisbury | Sockets, Lights & Faults | FixWell',
    h1: 'Electrical Repairs in Salisbury — Sockets, Lights & Faults',
    metaDescription:
      'Minor electrical repairs in Salisbury — faulty sockets, light fitting replacement, switch repairs, circuit fault finding within UK legal limits. FixWell Services.',
    macroContext:
      'Minor electrical repairs in Salisbury — faulty sockets, light fitting replacement, switch repairs, circuit fault finding (within UK legal limits)',
    priority: 'P1',
    parentSlug: 'home-repairs-salisbury',
    linksTo: ['home-repairs-salisbury', 'emergency-handyman-salisbury'],
    faqs: [
      {
        q: 'What electrical work can a handyman legally do in the UK?',
        a: 'Under UK building regulations (Part P), a handyman can replace like-for-like electrical fittings such as sockets, switches, and light fittings outside kitchens and bathrooms without notification. We work within these legal limits and advise when a fully qualified electrician is needed.',
      },
    ],
  },
  {
    id: 'core-sub-03',
    slug: 'lock-door-repair-salisbury',
    pageType: 'service-detail',
    title: 'Broken Lock & Door Repair Salisbury | FixWell Services',
    h1: 'Broken Lock & Door Repair in Salisbury',
    metaDescription:
      'Broken lock and door repairs in Salisbury — lock replacement, door alignment, hinge repair, security restoration for homes and rental properties. FixWell Services.',
    macroContext:
      'Broken lock and door repairs in Salisbury — lock replacement, door alignment, hinge repair, security restoration for homes and rental properties',
    priority: 'P1',
    parentSlug: 'home-repairs-salisbury',
    linksTo: ['home-repairs-salisbury', 'emergency-handyman-salisbury', 'door-hinge-repair-salisbury'],
    faqs: [
      {
        q: 'Can you replace a broken lock on the same day in Salisbury?',
        a: 'For security emergencies — such as a lock that has been damaged or broken — we offer same-day callouts across Salisbury and Wiltshire to restore your home security.',
      },
    ],
  },
  {
    id: 'core-sub-04',
    slug: 'between-tenancy-property-preparation-salisbury',
    pageType: 'service-detail',
    title: 'Between Tenancy Property Preparation Salisbury | FixWell Services',
    h1: 'Between Tenancy Property Preparation in Salisbury',
    metaDescription:
      'Between-tenancy preparation in Salisbury — cleaning coordination, repairs, repainting, carpet checks, and compliance inspections before new tenant moves in.',
    macroContext:
      'Between-tenancy property preparation in Salisbury — cleaning, repairs, repainting, carpet checks, compliance inspections before new tenant',
    priority: 'P1',
    parentSlug: 'landlord-property-maintenance-salisbury',
    linksTo: [
      'landlord-property-maintenance-salisbury',
      'property-maintenance-salisbury',
      'landlord-property-maintenance-legal-obligations',
    ],
    faqs: [
      {
        q: 'How long does between-tenancy preparation take?',
        a: 'Depending on the size and condition of the property, a between-tenancy refresh typically takes 1–3 days. We can carry out all work between the previous tenant vacating and the new tenant moving in.',
      },
    ],
  },
  {
    id: 'core-sub-05',
    slug: 'gutter-cleaning-salisbury',
    pageType: 'service-detail',
    title: 'Gutter Cleaning Salisbury | FixWell Services',
    h1: 'Gutter Cleaning in Salisbury — Blockage Removal & Maintenance',
    metaDescription:
      'Gutter cleaning and maintenance in Salisbury — clearing blockages, downpipe checks, fascia board inspection, overflow prevention. FixWell Services.',
    macroContext:
      'Gutter cleaning and maintenance in Salisbury — clearing blockages, downpipe checks, fascia board inspection, overflow prevention',
    priority: 'P1',
    parentSlug: 'property-maintenance-salisbury',
    linksTo: ['property-maintenance-salisbury', 'home-maintenance-schedule-uk'],
    faqs: [
      {
        q: 'How often should gutters be cleaned in Salisbury?',
        a: 'We recommend cleaning gutters at least once a year — ideally in late autumn after leaves have fallen. Properties with overhanging trees may need cleaning twice a year.',
      },
    ],
  },
  {
    id: 'core-sub-06',
    slug: 'shelf-installation-salisbury',
    pageType: 'service-detail',
    title: 'Shelf Installation Salisbury | FixWell Services',
    h1: 'Shelf Installation in Salisbury — Secure Fitting to Any Wall',
    metaDescription:
      'Professional shelf installation in Salisbury — floating shelves, alcove shelving, garage shelving, secure fixing to all wall types. FixWell Services.',
    macroContext:
      'Professional shelf installation in Salisbury — floating shelves, alcove shelving, garage shelving, secure fixing to all wall types',
    priority: 'P1',
    parentSlug: 'odd-jobs-salisbury',
    linksTo: ['odd-jobs-salisbury', 'carpentry-services-salisbury'],
    faqs: [
      {
        q: 'Can you fix shelves to solid stone or brick walls in Salisbury?',
        a: 'Yes. Many Salisbury homes have solid stone or brick walls. We have the tools and fixings for all wall types — solid masonry, plasterboard, and timber stud — so your shelves will be safe and secure.',
      },
    ],
  },
  {
    id: 'core-sub-07',
    slug: 'furniture-assembly-salisbury',
    pageType: 'service-detail',
    title: 'Furniture Assembly Salisbury | Flat-Pack & Self-Assembly | FixWell',
    h1: 'Furniture Assembly in Salisbury — IKEA, B&Q & All Brands',
    metaDescription:
      'Professional flat-pack and self-assembly furniture assembly in Salisbury — IKEA, B&Q, Argos and all major brands. Quick, stress-free service. FixWell Services.',
    macroContext:
      'Professional flat-pack and self-assembly furniture assembly in Salisbury — IKEA, B&Q, and all major brands',
    priority: 'P1',
    parentSlug: 'odd-jobs-salisbury',
    linksTo: ['odd-jobs-salisbury', 'carpentry-services-salisbury'],
    faqs: [
      {
        q: 'Do you assemble IKEA furniture in Salisbury?',
        a: 'Yes. We assemble furniture from all major brands including IKEA, B&Q, Argos, Made.com, and others. Bring us your flatpack and we will have it built quickly and correctly.',
      },
    ],
  },
  {
    id: 'core-sub-08',
    slug: 'skirting-board-painting-salisbury',
    pageType: 'service-detail',
    title: 'Skirting Board Painting Salisbury | FixWell Services',
    h1: 'Skirting Board Painting in Salisbury — Clean, Professional Finish',
    metaDescription:
      'Skirting board painting in Salisbury — preparation, priming, gloss finish, protecting carpets and flooring. Professional results. FixWell Services.',
    macroContext:
      'Skirting board painting and finishing in Salisbury — preparation, priming, gloss finish, protecting carpets and flooring',
    priority: 'P1',
    parentSlug: 'painting-decorating-salisbury',
    linksTo: ['painting-decorating-salisbury', 'how-to-paint-skirting-boards'],
    faqs: [
      {
        q: 'How do you protect carpets when painting skirting boards?',
        a: 'We use professional masking tape and dust sheets to protect carpets, hard floors, and walls. We also apply a thin first coat and sand back before the topcoat for a smooth, durable finish.',
      },
    ],
  },
  {
    id: 'core-sub-09',
    slug: 'fence-repair-salisbury',
    pageType: 'service-detail',
    title: 'Fence Repair Salisbury | Posts & Panels | FixWell Services',
    h1: 'Fence Repair in Salisbury — Posts, Panels & Storm Damage',
    metaDescription:
      'Fence repair and replacement in Salisbury — leaning post straightening, panel replacement, post concreting, storm damage repairs. FixWell Services.',
    macroContext:
      'Fence repair and replacement in Salisbury — leaning post straightening, panel replacement, post concreting, storm damage repairs',
    priority: 'P1',
    parentSlug: 'garden-maintenance-salisbury',
    linksTo: ['garden-maintenance-salisbury', 'garden-maintenance-seasons-wiltshire'],
    faqs: [
      {
        q: 'Can you repair fence posts that have rotted at the base in Salisbury?',
        a: 'Yes. Rotted fence posts are the most common fence repair we carry out in Salisbury. We either use post repair spikes driven into undamaged ground or concrete in a new post alongside the old one.',
      },
    ],
  },
  {
    id: 'core-sub-10',
    slug: 'paving-slab-replacement-salisbury',
    pageType: 'service-detail',
    title: 'Paving Slab Replacement Salisbury | FixWell Services',
    h1: 'Paving Slab Repair & Replacement in Salisbury',
    metaDescription:
      'Paving slab repair and replacement in Salisbury — cracked or sunken slabs, re-levelling, sand jointing, patio restoration. FixWell Services.',
    macroContext:
      'Paving slab repair and replacement in Salisbury — cracked or sunken slabs, re-levelling, sand jointing, patio restoration',
    priority: 'P1',
    parentSlug: 'garden-maintenance-salisbury',
    linksTo: ['garden-maintenance-salisbury'],
    faqs: [
      {
        q: 'Can you replace individual cracked paving slabs in Salisbury?',
        a: 'Yes. We can replace individual slabs or re-lay a section of paving that has become uneven or sunken. We re-compact the sub-base and re-sand the joints for a neat, lasting repair.',
      },
    ],
  },
  {
    id: 'core-sub-11',
    slug: 'door-hinge-repair-salisbury',
    pageType: 'service-detail',
    title: 'Door Hinge Installation & Repair Salisbury | FixWell Services',
    h1: 'Door Hinge Repair & Installation in Salisbury',
    metaDescription:
      'Door hinge installation and repair in Salisbury — sagging doors, stiff hinges, loose fixings, hinge replacement for internal and external doors. FixWell Services.',
    macroContext:
      'Door hinge installation and repair in Salisbury — sagging doors, stiff hinges, loose fixings, hinge replacement for internal and external doors',
    priority: 'P1',
    parentSlug: 'carpentry-services-salisbury',
    linksTo: ['carpentry-services-salisbury', 'lock-door-repair-salisbury'],
    faqs: [
      {
        q: 'My door is dragging on the floor — can you fix it?',
        a: 'Yes. A dragging door is usually caused by loose or bent hinges, a swollen door, or a settled door frame. We diagnose the cause and carry out the right repair — hinge tightening, re-hanging, or planing the door edge.',
      },
    ],
  },
  {
    id: 'core-sub-12',
    slug: 'kitchen-renovation-salisbury',
    pageType: 'service-detail',
    title: 'Kitchen Renovation Salisbury | FixWell Services',
    h1: 'Kitchen Renovation in Salisbury — Transform Your Kitchen',
    metaDescription:
      'Kitchen renovation in Salisbury — cabinet replacement, worktop installation, tiling, painting and full kitchen transformations. FixWell Services.',
    macroContext:
      'Kitchen renovation and refurbishment in Salisbury — cabinet replacement, worktop installation, tiling, painting, and full kitchen transformations',
    priority: 'P1',
    parentSlug: 'renovation-services-salisbury',
    linksTo: ['renovation-services-salisbury', 'home-renovation-planning-guide-salisbury'],
    faqs: [
      {
        q: 'How long does a kitchen renovation take in Salisbury?',
        a: 'A straightforward kitchen refresh (new doors, worktops, painting) typically takes 2–5 days. A full kitchen renovation including new units and appliances may take 1–2 weeks depending on scope.',
      },
    ],
  },
  {
    id: 'core-sub-13',
    slug: 'bathroom-renovation-salisbury',
    pageType: 'service-detail',
    title: 'Bathroom Renovation Salisbury | FixWell Services',
    h1: 'Bathroom Renovation in Salisbury — Fresh, Clean Bathrooms',
    metaDescription:
      'Bathroom renovation in Salisbury — tiling, fitting, resealing, painting and full bathroom refurbishment. FixWell Services.',
    macroContext:
      'Bathroom renovation in Salisbury — tiling, fitting, resealing, painting, and full bathroom refurbishment',
    priority: 'P1',
    parentSlug: 'renovation-services-salisbury',
    linksTo: ['renovation-services-salisbury', 'home-renovation-planning-guide-salisbury'],
    faqs: [
      {
        q: 'Can you re-tile a bathroom in Salisbury?',
        a: 'Yes. We carry out bathroom tiling in Salisbury — either re-tiling full walls or replacing damaged tiles. We prepare surfaces properly and use the right adhesive and grout for wet areas.',
      },
    ],
  },
];

export const locationPages: CorePage[] = [
  {
    id: 'loc-01',
    slug: 'handyman-amesbury',
    pageType: 'location',
    title: 'Handyman Amesbury | FixWell Services',
    h1: 'Handyman in Amesbury — Local, Reliable & Fully Insured',
    metaDescription:
      'Professional handyman services in Amesbury, Wiltshire — home repairs, maintenance, emergency callouts, and renovation work. FixWell Services covers Amesbury and surrounding areas.',
    macroContext: 'Handyman services in Amesbury, Wiltshire — home repairs, maintenance and emergency callouts',
    priority: 'P2',
    linksTo: [
      'handyman-services-salisbury',
      'emergency-handyman-salisbury',
      'property-maintenance-salisbury',
      'home-repairs-salisbury',
    ],
    faqs: [
      {
        q: 'Do you provide handyman services in Amesbury?',
        a: 'Yes. FixWell Services regularly covers Amesbury and the surrounding Wiltshire area. We offer the same fully insured, professional handyman service as our Salisbury customers — including emergency callouts.',
      },
      {
        q: 'How far is Amesbury from Salisbury?',
        a: 'Amesbury is approximately 8 miles north of Salisbury, about 15 minutes by road. We cover Amesbury as part of our regular service area.',
      },
    ],
  },
  {
    id: 'loc-02',
    slug: 'handyman-wilton',
    pageType: 'location',
    title: 'Handyman Wilton | FixWell Services',
    h1: 'Handyman in Wilton — Professional Home Repair Service',
    metaDescription:
      'Professional handyman services in Wilton, Wiltshire — home repairs, property maintenance and emergency callouts. FixWell Services covers Wilton and surrounding areas.',
    macroContext: 'Handyman services in Wilton, Wiltshire — home repairs, property maintenance and emergency callouts',
    priority: 'P2',
    linksTo: [
      'handyman-services-salisbury',
      'emergency-handyman-salisbury',
      'property-maintenance-salisbury',
    ],
    faqs: [
      {
        q: 'Do you cover Wilton for handyman work?',
        a: 'Yes. Wilton is just 3 miles west of Salisbury and is within our regular service area. We provide the same professional, insured handyman service to Wilton residents and landlords.',
      },
    ],
  },
  {
    id: 'loc-03',
    slug: 'handyman-tidworth',
    pageType: 'location',
    title: 'Handyman Tidworth | FixWell Services',
    h1: 'Handyman in Tidworth — Reliable Local Service',
    metaDescription:
      'Professional handyman services in Tidworth, Wiltshire — home repairs, property maintenance and emergency callouts. FixWell Services covers Tidworth.',
    macroContext: 'Handyman services in Tidworth, Wiltshire — home repairs, property maintenance and emergency callouts',
    priority: 'P2',
    linksTo: [
      'handyman-services-salisbury',
      'emergency-handyman-salisbury',
      'property-maintenance-salisbury',
    ],
    faqs: [
      {
        q: 'Do you provide handyman services in Tidworth?',
        a: 'Yes. FixWell Services covers Tidworth and the surrounding area. We travel from our Salisbury base to serve customers across the region.',
      },
    ],
  },
  {
    id: 'loc-04',
    slug: 'handyman-fordingbridge',
    pageType: 'location',
    title: 'Handyman Fordingbridge | FixWell Services',
    h1: 'Handyman in Fordingbridge — Trusted Local Repairs',
    metaDescription:
      'Professional handyman services in Fordingbridge, Hampshire — home repairs, property maintenance and emergency callouts. FixWell Services covers Fordingbridge.',
    macroContext: 'Handyman services in Fordingbridge, Hampshire — home repairs, maintenance and emergency callouts',
    priority: 'P2',
    linksTo: [
      'handyman-services-salisbury',
      'emergency-handyman-salisbury',
      'property-maintenance-salisbury',
    ],
    faqs: [
      {
        q: 'Do you cover Fordingbridge for handyman work?',
        a: 'Yes. Fordingbridge is approximately 11 miles south of Salisbury. We cover Fordingbridge and the surrounding New Forest fringe as part of our extended service area.',
      },
    ],
  },
  {
    id: 'loc-05',
    slug: 'handyman-downton',
    pageType: 'location',
    title: 'Handyman Downton | FixWell Services',
    h1: 'Handyman in Downton — Professional Local Service',
    metaDescription:
      'Professional handyman services in Downton, Wiltshire — home repairs, property maintenance and emergency callouts. FixWell Services covers Downton.',
    macroContext: 'Handyman services in Downton, Wiltshire — home repairs, property maintenance and emergency callouts',
    priority: 'P2',
    linksTo: [
      'handyman-services-salisbury',
      'emergency-handyman-salisbury',
      'property-maintenance-salisbury',
    ],
    faqs: [
      {
        q: 'Do you provide handyman services in Downton?',
        a: 'Yes. Downton is about 5 miles south of Salisbury and is within our regular service area. We provide fully insured handyman and property maintenance services to Downton residents.',
      },
    ],
  },
  {
    id: 'loc-06',
    slug: 'handyman-andover',
    pageType: 'location',
    title: 'Handyman Andover | FixWell Services',
    h1: 'Handyman in Andover — Skilled, Insured & Local',
    metaDescription:
      'Professional handyman services in Andover, Hampshire — home repairs, property maintenance and emergency callouts. FixWell Services covers Andover.',
    macroContext: 'Handyman services in Andover, Hampshire — home repairs, property maintenance and emergency callouts',
    priority: 'P2',
    linksTo: [
      'handyman-services-salisbury',
      'emergency-handyman-salisbury',
      'property-maintenance-salisbury',
    ],
    faqs: [
      {
        q: 'Do you cover Andover for handyman services?',
        a: 'Yes. Andover is approximately 18 miles north of Salisbury. We cover Andover as part of our extended service area across Wiltshire and north Hampshire.',
      },
    ],
  },
];

export const allCorePages: CorePage[] = [
  ...coreHubPages,
  ...tier2ServicePages,
  ...locationPages,
];
