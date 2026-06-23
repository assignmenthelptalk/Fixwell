export type OuterPageType = 'outer-info';

export interface OuterPage {
  id: string;
  slug: string;
  pageType: OuterPageType;
  title: string;
  h1: string;
  metaDescription: string;
  macroContext: string;
  intent: string;
  linksToCoreIds: string[];
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const outerHubPages: OuterPage[] = [
  {
    id: 'outer-hub-01',
    slug: 'what-does-a-handyman-do',
    pageType: 'outer-info',
    title: 'What Does a Handyman Do? Services, Skills & Scope | FixWell',
    h1: 'What Does a Handyman Do? A Complete Guide',
    metaDescription:
      'What does a handyman do? A comprehensive guide to handyman services, skills, and scope — what falls within handyman work and when you need a specialist tradesman.',
    macroContext:
      'Comprehensive definition of the handyman trade — what services fall within handyman scope, what requires a specialist tradesman, and how to use a handyman effectively',
    intent: 'Informational — top-of-funnel definition page',
    linksToCoreIds: ['handyman-services-salisbury', 'odd-jobs-salisbury'],
    sections: [
      {
        heading: 'What Is a Handyman?',
        body: 'A handyman is a skilled generalist who can carry out a wide range of home repair, maintenance, and improvement tasks. Unlike specialist tradespeople — plumbers, electricians, or builders — a handyman handles the everyday jobs that keep a home or rental property in good condition. The term covers a broad spectrum of work, from fitting a shelf to repairing a fence, assembling furniture to repainting skirting boards.',
      },
      {
        heading: 'What Can a Handyman Do?',
        body: 'The scope of handyman work is wide. In general, a professional handyman can carry out: minor plumbing repairs (taps, toilets, visible pipes), minor electrical work (replacing like-for-like sockets, switches, and light fittings outside kitchens and bathrooms), carpentry (shelving, furniture assembly, door repairs, skirting boards), painting and decorating (interior and exterior), garden and outdoor maintenance (fence repair, paving, gutter clearing), and property maintenance (routine checks, between-tenancy preparation).',
      },
      {
        heading: 'What a Handyman Cannot Do',
        body: 'Certain work requires a licensed specialist. In the UK, gas work must be carried out by a Gas Safe registered engineer. Major electrical installation work — new circuits, consumer unit replacement, or any electrical work in kitchens and bathrooms — requires a Part P competent electrician. Structural work that involves load-bearing elements typically requires a builder and may need planning permission. A professional handyman will always tell you clearly when your job falls outside their scope and refer you to the right specialist.',
      },
      {
        heading: 'When Should You Use a Handyman?',
        body: "Use a handyman for jobs that are too small for a specialist trade (who may have minimum charges that make a small job uneconomical), for general property maintenance, for odd jobs that have been building up, or when you need a reliable, insured professional for home repairs and maintenance. A good handyman is a valuable long-term resource for both homeowners and landlords who want to keep their properties in top condition without managing multiple specialist contractors.",
      },
    ],
    faqs: [
      {
        q: 'Is a handyman the same as a builder?',
        a: 'No. A builder typically handles structural, groundwork, and large-scale construction projects. A handyman specialises in smaller-scale repairs, maintenance, and improvement work. There is some overlap, but a handyman will not carry out structural work or work requiring Planning Permission.',
      },
      {
        q: 'Does a handyman need to be qualified?',
        a: 'There is no single mandatory licence for handyman work in the UK, though professional handymen hold relevant qualifications and insurance. Specific tasks have legal requirements — gas work requires Gas Safe registration, major electrical work requires Part P competence. Always check that your handyman is fully insured.',
      },
      {
        q: 'How much does a handyman charge per hour in the UK?',
        a: 'Typical handyman hourly rates in the UK range from £20–£50 per hour depending on location and the nature of the work. In Salisbury and Wiltshire, FixWell Services charges £20–£40 per hour, or provides fixed-price quotes for defined-scope jobs.',
      },
    ],
  },
  {
    id: 'outer-hub-02',
    slug: 'handyman-cost-salisbury',
    pageType: 'outer-info',
    title: 'How Much Does a Handyman Cost in Salisbury? | 2026 Rates | FixWell',
    h1: 'How Much Does a Handyman Cost in Salisbury? 2026 Pricing Guide',
    metaDescription:
      'Handyman pricing guide for Salisbury and Wiltshire — hourly rates, fixed-price jobs, what affects cost, and how to get a fair quote. FixWell Services 2026 rates.',
    macroContext:
      'Handyman pricing in Salisbury and Wiltshire — hourly rates, fixed-price jobs, what affects cost, how to get a fair quote, and what is included',
    intent: 'Informational/commercial — pricing research with high conversion proximity',
    linksToCoreIds: ['handyman-services-salisbury', 'emergency-handyman-salisbury', 'odd-jobs-salisbury'],
    sections: [
      {
        heading: 'Handyman Hourly Rates in Salisbury (2026)',
        body: 'The standard handyman hourly rate in Salisbury and Wiltshire ranges from £20 to £40 per hour. This is broadly in line with the national average for skilled handyman work outside London. FixWell Services charges within this range. The rate for your job will depend on the complexity of the work, the materials required, and whether access equipment is needed.',
      },
      {
        heading: 'Fixed-Price vs Hourly Rates',
        body: 'For well-defined jobs — such as shelf installation, furniture assembly, or fence panel replacement — a fixed-price quote gives you cost certainty before work begins. For open-ended jobs or general maintenance visits where the scope is uncertain, an hourly rate is more appropriate. FixWell Services offers both, and will advise which is right for your situation.',
      },
      {
        heading: 'What Affects the Cost of a Handyman Job?',
        body: 'Several factors affect the total cost of handyman work in Salisbury: the complexity of the task, the time required to complete it, the cost of materials (billed separately or included, depending on the job), whether specialist equipment such as scaffolding towers is needed, and whether the job requires emergency or out-of-hours attendance.',
      },
      {
        heading: 'Cost of Common Handyman Jobs in Salisbury',
        body: 'Common handyman jobs in Salisbury and approximate costs: shelf installation (1–2 hours, £20–£80 plus materials); furniture assembly (1–3 hours, £20–£120); fence panel replacement (2–4 hours per panel, £40–£160 plus materials); skirting board painting (per room, £40–£120 depending on size); gutter cleaning (£60–£120 for a standard house); between-tenancy property check (half day to full day, £100–£200).',
      },
    ],
    faqs: [
      {
        q: 'Do handymen in Salisbury charge a call-out fee?',
        a: 'Some handymen charge a minimum call-out fee for small jobs. FixWell Services will discuss this when you book — we aim to be transparent about all costs upfront.',
      },
      {
        q: 'Are materials included in the handyman price?',
        a: 'Materials are usually billed separately at cost, though for small jobs (fixings, screws, basic materials) these may be included in the hourly rate. For jobs requiring significant materials — paint, timber, replacement fittings — these will be quoted separately.',
      },
      {
        q: 'Is VAT charged on handyman work in Salisbury?',
        a: 'Small handyman businesses that are not VAT registered do not charge VAT. FixWell Services will clarify the VAT position when providing your quote.',
      },
    ],
  },
  {
    id: 'outer-hub-03',
    slug: 'handyman-vs-tradesman',
    pageType: 'outer-info',
    title: 'Handyman vs Tradesman: When to Use Each for Home Repairs | FixWell',
    h1: 'Handyman vs Tradesman: When to Use Each for Home Repairs',
    metaDescription:
      'When to use a handyman versus a specialist tradesman — legal scope, cost comparison, job complexity guide for UK homeowners. FixWell Services Salisbury.',
    macroContext:
      'When to use a handyman versus a specialist tradesman (plumber, electrician, builder) — legal scope, cost comparison, job complexity guide for UK homeowners',
    intent: 'Informational — decision-support query',
    linksToCoreIds: [
      'handyman-services-salisbury',
      'home-repairs-salisbury',
      'plumbing-leak-repairs-salisbury',
      'electrical-repairs-salisbury',
    ],
    sections: [
      {
        heading: 'What Is the Difference Between a Handyman and a Tradesman?',
        body: "A tradesman is a specialist who has completed a formal apprenticeship or qualification in a specific trade — plumbing, electrical installation, bricklaying, gas engineering. A handyman is a generalist who can carry out a wide variety of repair, maintenance, and improvement tasks across multiple trades, but at a lighter or more routine level. The key distinction is depth versus breadth: a tradesman goes deep in their specialism; a handyman goes broad across many everyday tasks.",
      },
      {
        heading: 'When to Use a Handyman',
        body: 'Use a handyman for: routine home maintenance and repairs, odd jobs that combine different types of work (e.g., fixing a tap and hanging shelves on the same day), smaller-scale tasks that do not require specialist certification, property maintenance visits, and between-tenancy preparation. A handyman is also the right choice when you need a single trusted contact for multiple jobs rather than managing several specialist contractors.',
      },
      {
        heading: 'When to Use a Specialist Tradesman',
        body: 'UK law requires certain work to be carried out by certified specialists. Gas work must be done by a Gas Safe registered engineer. Major electrical work — new circuits, consumer unit replacement, or electrical work in kitchens and bathrooms — requires a Part P certified electrician. Structural work, large extensions, and drainage connections typically require a builder and may need planning permission. A qualified handyman will always refer you to the right specialist when required.',
      },
      {
        heading: 'Cost Comparison: Handyman vs Tradesman',
        body: 'Specialist tradespeople typically charge higher rates than handymen — often £50–£120 per hour — and may have minimum call-out charges that make small jobs expensive. For routine repairs and maintenance that fall within handyman scope, using a handyman at £20–£40 per hour can save significantly without compromising quality or compliance.',
      },
    ],
    faqs: [
      {
        q: 'Can a handyman do plumbing in the UK?',
        a: 'Yes, for minor plumbing repairs. UK regulations allow non-Gas Safe individuals to repair or replace like-for-like plumbing fittings such as taps, washers, valves, and visible pipes. Gas work is strictly for Gas Safe engineers. A competent handyman handles minor plumbing and will clearly tell you when a plumber is needed.',
      },
      {
        q: 'Can a handyman do electrical work in the UK?',
        a: 'Yes, for minor like-for-like replacements. Under Part P of the Building Regulations, replacing existing sockets, switches, and light fittings outside kitchens and bathrooms is permitted without notification. New circuits, fuse board work, and kitchen or bathroom electrical work requires a qualified electrician.',
      },
      {
        q: 'Is a handyman cheaper than a plumber or electrician?',
        a: 'Generally yes. Handyman rates in Salisbury are £20–£40/hr. Specialist plumbers and electricians typically charge £50–£120/hr. For repairs that fall within handyman scope, using a skilled handyman is the cost-effective choice.',
      },
    ],
  },
  {
    id: 'outer-hub-04',
    slug: 'landlord-property-maintenance-legal-obligations',
    pageType: 'outer-info',
    title: 'Landlord Property Maintenance Legal Obligations in England | FixWell',
    h1: 'Landlord Property Maintenance Legal Obligations in England',
    metaDescription:
      'UK landlord legal duties for property maintenance — Homes (Fitness for Human Habitation) Act, gas safety, electrical inspections, routine repair obligations. FixWell Services.',
    macroContext:
      'UK landlord legal duties for property maintenance — Homes (Fitness for Human Habitation) Act, gas safety, electrical inspections, routine repair obligations, and consequences of non-compliance',
    intent: 'Informational — high-value landlord research query',
    linksToCoreIds: ['landlord-property-maintenance-salisbury', 'between-tenancy-property-preparation-salisbury'],
    sections: [
      {
        heading: "Landlord's Legal Duty to Maintain Property in England",
        body: "Under the Landlord and Tenant Act 1985, landlords are legally required to maintain the structure and exterior of the property (roof, walls, windows, doors), heating and hot water systems, gas and electrical installations, and sanitation systems (sinks, baths, toilets, drainage). Failure to meet these obligations can result in rent repayment orders, fines, and civil liability.",
      },
      {
        heading: 'The Homes (Fitness for Human Habitation) Act 2018',
        body: "The Homes (Fitness for Human Habitation) Act 2018 extended landlords' obligations significantly. The property must be fit to live in at the start of the tenancy and remain so throughout. This covers damp and mould, unstable structures, excess cold, insufficient ventilation, unsafe electrics, falls from heights, and other hazards. Tenants can take landlords to court if the property is unfit for habitation.",
      },
      {
        heading: 'Gas Safety Requirements',
        body: 'Landlords must have a Gas Safety check carried out every year by a Gas Safe registered engineer. A copy of the Gas Safety Certificate must be provided to each tenant within 28 days of the check. This is non-negotiable and failure is a criminal offence.',
      },
      {
        heading: 'Electrical Safety Requirements',
        body: 'Since 2020, landlords in England must arrange an Electrical Installation Condition Report (EICR) every five years from a qualified electrician. The report must be provided to tenants and the local authority if requested. Any faults identified must be remedied within 28 days (or sooner if urgent).',
      },
      {
        heading: 'Routine Maintenance and Repairs',
        body: "Landlords must respond to repair requests within a reasonable time. Emergency repairs (no heating in winter, major leak, security breach) require same-day or next-day response. Routine repairs should be completed within 14–28 days. Using a reliable local handyman service in Salisbury for routine maintenance ensures you stay compliant and your tenants are satisfied.",
      },
    ],
    faqs: [
      {
        q: 'Are landlords responsible for garden maintenance?',
        a: "Garden maintenance is usually the tenant's responsibility unless the tenancy agreement states otherwise. However, landlords must maintain any boundary fences and structural garden features that form part of the property.",
      },
      {
        q: "What happens if a landlord ignores a tenant's repair request?",
        a: 'Tenants can report the landlord to the local authority, who can serve an Improvement Notice under the Housing Act 2004. Tenants can also apply to court for a rent repayment order or seek compensation for damages caused by the disrepair.',
      },
      {
        q: 'Do I need a licensed contractor for landlord maintenance in Salisbury?',
        a: 'For general maintenance, you need an insured and competent tradesperson. For gas work you need a Gas Safe engineer; for major electrical work, a Part P electrician. FixWell Services provides fully insured handyman and property maintenance services for landlords across Salisbury.',
      },
    ],
  },
  {
    id: 'outer-hub-05',
    slug: 'home-maintenance-schedule-uk',
    pageType: 'outer-info',
    title: 'Home Maintenance Schedule: Annual Checklist for UK Homeowners | FixWell',
    h1: 'Annual Home Maintenance Schedule for UK Homeowners',
    metaDescription:
      'Annual home maintenance checklist for UK homeowners — seasonal tasks, systems to inspect, signs of wear, and which tasks need a professional handyman in Salisbury.',
    macroContext:
      'Annual home maintenance checklist for UK homeowners — seasonal tasks, systems to inspect, signs of wear, and which tasks need a professional handyman',
    intent: 'Informational — planning and preventative maintenance query',
    linksToCoreIds: ['property-maintenance-salisbury', 'garden-maintenance-salisbury', 'gutter-cleaning-salisbury'],
    sections: [
      {
        heading: 'Why a Home Maintenance Schedule Matters',
        body: 'A consistent maintenance schedule prevents small problems from becoming expensive repairs. Catching a blocked gutter in October stops water damage to fascias and walls over winter. Checking seals around windows and doors before the cold weather prevents heat loss and damp. UK homes — particularly older properties in areas like Salisbury and Wiltshire — benefit enormously from a proactive maintenance approach.',
      },
      {
        heading: 'Spring Maintenance Tasks (March–May)',
        body: 'After winter: check gutters and downpipes for blockages caused by autumn leaves; inspect roof tiles for storm damage; check external paintwork and woodwork for peeling or cracking; service garden tools and power equipment; check patio and paving for frost-damaged slabs; inspect boundary fences for storm damage; service the boiler before it is turned off for summer.',
      },
      {
        heading: 'Summer Maintenance Tasks (June–August)',
        body: 'Painting and decorating season: exterior painting and woodwork treatment are best done in dry, warm weather. Check roof valley flashings and chimney pointing. Service and clean air bricks and ventilation points. Treat timber decking and garden furniture. Check garden drainage and address any pooling water before autumn.',
      },
      {
        heading: 'Autumn Maintenance Tasks (September–November)',
        body: 'Critical before winter: clear gutters of fallen leaves; check insulation in the loft and around pipes; bleed radiators and check the boiler; inspect door and window draught-proofing; check external lighting; clean patio and paths to prevent slippery surfaces; check smoke and CO alarms.',
      },
      {
        heading: 'Winter Maintenance Tasks (December–February)',
        body: 'Protect against cold: insulate any exposed pipes in unheated spaces; know where the main stopcock is in case of a burst pipe; keep heating on low in unoccupied rooms; check flat roofs for standing water; service any solid fuel heating equipment.',
      },
    ],
    faqs: [
      {
        q: 'How much should I budget for annual home maintenance in the UK?',
        a: "Property professionals often recommend budgeting 1–3% of the property's value per year for maintenance. For a £250,000 home, that is £2,500–£7,500 annually, though many homeowners spend less in good years and more when larger work is needed.",
      },
      {
        q: 'Which seasonal home maintenance tasks need a professional handyman?',
        a: 'Gutter cleaning (working at height), roof inspections, fence post repair (requires concreting), boiler servicing, and exterior painting on upper floors all benefit from a professional. FixWell Services provides these services across Salisbury and Wiltshire.',
      },
    ],
  },
  {
    id: 'outer-hub-06',
    slug: 'how-to-find-reliable-handyman-wiltshire',
    pageType: 'outer-info',
    title: 'How to Find a Reliable Handyman in Wiltshire | FixWell Services',
    h1: 'How to Find a Reliable Handyman in Wiltshire',
    metaDescription:
      'How to vet and choose a handyman in Wiltshire — what questions to ask, insurance requirements, red flags to avoid, and what a professional service looks like.',
    macroContext:
      'How to vet and choose a handyman in Wiltshire — what questions to ask, insurance requirements, red flags to avoid, and what a professional service looks like',
    intent: 'Informational — trust-building pre-purchase research',
    linksToCoreIds: ['handyman-services-salisbury', 'emergency-handyman-salisbury'],
    sections: [
      {
        heading: 'Why Vetting Your Handyman Matters',
        body: "Inviting someone into your home to carry out repairs is a significant decision. A poor-quality or uninsured handyman can leave you with substandard work, additional damage, or no recourse if something goes wrong. Taking a few minutes to verify credentials and ask the right questions protects you, your property, and your finances.",
      },
      {
        heading: 'Key Questions to Ask a Handyman Before Booking',
        body: 'Ask these before confirming a booking: Are you fully insured (public liability insurance)? Can you provide a written quote? Do you have references or testimonials I can check? How long have you been operating in this area? Are you registered for any professional schemes? What happens if the work is not completed to a satisfactory standard?',
      },
      {
        heading: 'Red Flags to Watch For',
        body: 'Be cautious of: cash-only requests before work starts; no written quote or vague pricing; reluctance to provide insurance details; pressure to start work immediately without agreeing scope; no local presence or verifiable reviews; inability to name the address they work from.',
      },
      {
        heading: 'How to Verify a Handyman Is Legitimate',
        body: "Check Google Business Profile reviews for the business name. Ask to see a copy of their insurance certificate. Search for the business on Companies House if they claim to be a limited company. Ask trusted neighbours or local Facebook groups for recommendations. Verify that any specialist work (gas, electrics) is carried out by the appropriately certified engineer.",
      },
    ],
    faqs: [
      {
        q: 'Should a handyman be insured in the UK?',
        a: 'Yes. Any professional handyman working in your home should hold public liability insurance. This covers damage to your property and injury caused during the work. Always ask for proof of insurance before work starts.',
      },
      {
        q: 'How do I find a trusted handyman in Salisbury or Wiltshire?',
        a: 'Ask neighbours and friends for personal recommendations, check Google reviews for local businesses, and look for handymen with a visible local address and verifiable insurance. FixWell Services is fully insured and has operated in Salisbury and Wiltshire for years.',
      },
    ],
  },
  {
    id: 'outer-hub-07',
    slug: 'when-do-you-need-emergency-handyman',
    pageType: 'outer-info',
    title: 'When Do You Need an Emergency Handyman? Warning Signs | FixWell',
    h1: 'When Do You Need an Emergency Handyman? Key Warning Signs',
    metaDescription:
      'Signs that a repair cannot wait — burst pipes, electrical faults, broken locks, storm damage, heating failure, and how to find emergency help in Salisbury.',
    macroContext:
      'Signs that a repair cannot wait — burst pipes, electrical faults, broken locks, storm damage, heating failure, and how to find emergency help in Salisbury',
    intent: 'Informational — urgency trigger education',
    linksToCoreIds: ['emergency-handyman-salisbury'],
    sections: [
      {
        heading: 'What Counts as a Home Emergency?',
        body: 'A home emergency is any situation that poses an immediate risk to safety, security, or the structural integrity of your property — or that will cause significantly more damage if not addressed within hours rather than days. Knowing the difference between an emergency and a routine repair helps you get the right help at the right speed.',
      },
      {
        heading: 'Plumbing Emergencies',
        body: "Burst or rapidly leaking pipes require immediate attention — turn off the water at the stopcock and call for emergency help straight away. A slow drip from a tap is not an emergency, but a joint failure under the floor or in the wall cavity is. Signs of water damage (staining, bubbling paint, wet carpets) also warrant urgent inspection, as the source may not be visible.",
      },
      {
        heading: 'Electrical Emergencies',
        body: 'If you have tripping circuits you cannot reset, burning smells from sockets or appliances, visible scorching around switch plates, or power to part of your home that will not restore, call for help. Turn off the affected circuit at the consumer unit. Never attempt to force a tripped RCD or investigate behind sockets or switches yourself.',
      },
      {
        heading: 'Security Emergencies',
        body: 'A broken or jammed front or back door lock is a same-day emergency — your home is not secure. Storm damage that leaves a door, window, or roof section open to the weather requires immediate temporary boarding or repair. Do not wait until the next working day for security issues.',
      },
      {
        heading: 'Heating and Hot Water Failure',
        body: 'A boiler breakdown in cold weather is urgent, particularly in homes with young children or elderly residents. If your heating fails, call your gas engineer for the boiler and a handyman for any associated controls, thermostats, or radiator issues. Keep the number of a local emergency handyman to hand for situations like these.',
      },
    ],
    faqs: [
      {
        q: 'Who do I call for a home emergency in Salisbury?',
        a: 'For gas leaks, call the National Gas Emergency Service (0800 111 999) immediately. For plumbing, electrical, lock, and structural emergencies in Salisbury, call FixWell Services on +44 7391 599 078 for same-day response.',
      },
      {
        q: 'What should I do if I have a burst pipe?',
        a: 'Turn off the stopcock (usually under the kitchen sink or where the supply enters the property). Turn off your boiler. Open cold taps to drain remaining water from the system. Mop up as much water as possible to prevent damage. Then call an emergency plumber or handyman.',
      },
    ],
  },
  {
    id: 'outer-hub-08',
    slug: 'diy-vs-professional-home-repairs-uk',
    pageType: 'outer-info',
    title: 'DIY vs Professional Home Repairs: What UK Homeowners Need to Know | FixWell',
    h1: "DIY vs Professional Home Repairs: A UK Homeowner's Guide",
    metaDescription:
      'When DIY is appropriate vs when to call a professional handyman — legal limits for electrical and plumbing work in the UK, safety risks, and cost of getting it wrong.',
    macroContext:
      'When DIY is appropriate versus when to call a professional handyman — legal limits for electrical and plumbing work in the UK, safety risks, and cost of getting it wrong',
    intent: 'Informational — decision-support plus risk-awareness',
    linksToCoreIds: ['handyman-services-salisbury', 'home-repairs-salisbury'],
    sections: [
      {
        heading: 'The Case for DIY',
        body: "DIY home repairs can save money and give homeowners a genuine sense of accomplishment. For simple cosmetic tasks — painting a room, hanging a picture, assembling flat-pack furniture, or replacing a tap washer — a competent DIYer with the right tools can produce good results. The internet and YouTube have made basic home maintenance more accessible than ever.",
      },
      {
        heading: 'Where DIY Becomes Risky',
        body: 'The risks of DIY increase significantly when the job involves: working at height (roofs, ladders, second-floor windows); live electrical work; gas fittings; structural changes; waterproofing and damp prevention; and any repair where doing it wrong could void your home insurance or affect resale value. Getting these wrong can be costly — and in some cases dangerous.',
      },
      {
        heading: 'UK Legal Restrictions on DIY Work',
        body: 'Some home repair work is legally restricted in the UK. Gas work must be carried out by a Gas Safe registered engineer — this is a legal requirement, not a suggestion. Certain electrical work falls under Part P of the Building Regulations: new circuits, work in kitchens and bathrooms, and consumer unit replacement must be done by a Part P qualified electrician. Attempting this work without the right certification can invalidate your buildings insurance and cause legal problems when you sell the property.',
      },
      {
        heading: 'The True Cost of a Failed DIY Repair',
        body: "Failed DIY jobs often cost more to fix than hiring a professional in the first place. Common examples: a DIY plumbing repair that creates a slow leak inside a wall; an improperly hung door that damages the frame; a poorly patched rendering job that lets in damp; a fence post set without concrete that fails in the first storm. If you're not confident, the investment in a professional handyman is usually money well spent.",
      },
    ],
    faqs: [
      {
        q: 'Can I legally do my own plumbing in the UK?',
        a: 'Most plumbing repairs (replacing tap washers, fixing visible leaks, unblocking drains) can be done by a homeowner. Connecting to or altering the main water supply, drainage, or gas supply is restricted or requires notification. When in doubt, use a professional.',
      },
      {
        q: "Can DIY home repairs affect my home insurance?",
        a: "Yes. If a DIY repair fails and causes subsequent damage, your insurer may refuse to pay out if the work was outside the homeowner's competence or breached building regulations. Major repairs should always be documented with receipts and, where required, completion certificates.",
      },
    ],
  },
  {
    id: 'outer-hub-09',
    slug: 'preparing-home-for-winter-uk',
    pageType: 'outer-info',
    title: 'Preparing Your Home for Winter: Property Maintenance Guide | FixWell',
    h1: 'Preparing Your Home for Winter: Complete UK Property Guide',
    metaDescription:
      'Winter-proofing a home in the UK — pipe insulation, boiler servicing, gutter clearing, roof checks, draught-proofing doors and windows. FixWell Services Salisbury.',
    macroContext:
      'Winter-proofing a home in the UK — pipe insulation, boiler servicing, gutter clearing, roof checks, door and window draught-proofing, and what a handyman can help with',
    intent: 'Informational — seasonal, shareable content',
    linksToCoreIds: ['property-maintenance-salisbury', 'plumbing-leak-repairs-salisbury', 'gutter-cleaning-salisbury'],
    sections: [
      {
        heading: 'Why Autumn Is the Right Time to Winter-Proof Your Home',
        body: "Wiltshire winters can be cold and wet, with occasional hard frosts. Properties in Salisbury and the surrounding villages — many of them older stone and brick buildings — are particularly vulnerable to cold-weather damage if not properly maintained. The best time to carry out winter preparation is September and October, before the worst of the weather arrives.",
      },
      {
        heading: 'Gutters and Drainage',
        body: 'Autumn leaves block gutters quickly. Blocked gutters overflow, directing water against your fascias, soffits, and walls — leading to damp, rot, and in severe cases, structural damage. Get gutters cleared in October or November. Check that all downpipes are free-flowing and draining away from the building.',
      },
      {
        heading: 'Pipes and Boiler',
        body: 'Insulate any water pipes in unheated spaces — loft, garage, or under a suspended floor. Know where your stopcock is so you can turn off the water quickly in case of a burst pipe. Service your boiler before winter — boiler engineers are busiest in November and December when breakdowns are most common. Bleed radiators to remove trapped air.',
      },
      {
        heading: 'Roof and Structure',
        body: 'Have your roof inspected in autumn — missing or slipped tiles, cracked ridge tiles, and deteriorating flashings will admit water and worsen under frost. Check chimney pointing if you have an active chimney. Look for signs of damage to flat roofs or felt valleys.',
      },
      {
        heading: 'Doors, Windows, and Draught-Proofing',
        body: 'Cold draughts through doors and windows waste energy and make rooms uncomfortable. Check that door seals and threshold strips are intact. Re-apply draught-proofing tape to frames where it has deteriorated. Have any sticking or ill-fitting doors adjusted before the wood swells further in cold, wet weather.',
      },
    ],
    faqs: [
      {
        q: 'How do I stop my pipes freezing in winter?',
        a: 'Insulate pipes in unheated areas with foam lagging. Keep heating on a low temperature (at least 12°C) in unoccupied rooms. If you are going away, ask someone to check the property, or consider leaving heating on a frost setting.',
      },
      {
        q: 'Can a handyman help me prepare my home for winter in Salisbury?',
        a: 'Yes. FixWell Services carries out autumn property maintenance including gutter clearing, pipe insulation, draught-proofing, minor roof tile repairs, fence checking, and general winter-readiness checks across Salisbury and Wiltshire.',
      },
    ],
  },
];

export const outerSubPages: OuterPage[] = [
  {
    id: 'outer-sub-01',
    slug: 'assured-shorthold-tenancy-maintenance-obligations',
    pageType: 'outer-info',
    title: 'Assured Shorthold Tenancy: Landlord Maintenance Obligations | FixWell',
    h1: 'Assured Shorthold Tenancy: Landlord Maintenance Obligations Explained',
    metaDescription:
      'How AST contracts define repair and maintenance responsibilities for landlords and tenants in England — what landlords must maintain under an AST.',
    macroContext:
      'How AST contracts define repair and maintenance responsibilities for landlords and tenants in England — what landlords must maintain and what tenants are responsible for',
    intent: 'Informational — landlord legal knowledge',
    linksToCoreIds: ['landlord-property-maintenance-salisbury'],
    sections: [
      {
        heading: 'What Is an Assured Shorthold Tenancy (AST)?',
        body: 'An Assured Shorthold Tenancy (AST) is the most common form of residential tenancy in England. It gives tenants the right to occupy a property for an agreed period and gives landlords the right to recover the property at the end of that period (with proper notice). Under an AST, both landlords and tenants have defined responsibilities for maintenance and repairs.',
      },
      {
        heading: "Landlord Maintenance Obligations Under an AST",
        body: "Under Section 11 of the Landlord and Tenant Act 1985, landlords with AST agreements must maintain: the structure and exterior of the property; heating and hot water installations; gas and electrical installations; sanitation (baths, sinks, toilets, drains). These obligations cannot be removed by the tenancy agreement — they apply regardless of what the contract says.",
      },
      {
        heading: "Tenant Responsibilities Under an AST",
        body: "Tenants are generally responsible for: keeping the property clean and in good condition; minor maintenance (replacing light bulbs, unblocking sinks caused by their use); reporting repair needs to the landlord promptly; not causing damage beyond fair wear and tear; and carrying out any repairs they have specifically agreed to in the tenancy agreement.",
      },
    ],
    faqs: [
      {
        q: 'Can a landlord make a tenant responsible for all repairs in an AST?',
        a: "No. The statutory repairing obligations under Section 11 of the Landlord and Tenant Act 1985 cannot be contracted out of. Regardless of what an AST says, landlords remain responsible for structure, heating, plumbing, and electrics.",
      },
    ],
  },
  {
    id: 'outer-sub-02',
    slug: 'managing-rental-property-remotely-maintenance',
    pageType: 'outer-info',
    title: 'How to Manage a Rental Property from a Distance | FixWell Services',
    h1: "How to Manage a Rental Property Remotely — A Landlord's Guide",
    metaDescription:
      'Managing maintenance for remote landlords in Salisbury and Wiltshire — trusted local contractors, inspection schedules, emergency procedures. FixWell Services.',
    macroContext:
      'Managing property maintenance for remote landlords — trusted local contractors, inspection schedules, emergency procedures, and using property maintenance services in Salisbury',
    intent: 'Informational — absentee landlord audience',
    linksToCoreIds: ['landlord-property-maintenance-salisbury', 'property-maintenance-salisbury'],
    sections: [
      {
        heading: 'The Challenges of Managing a Property from a Distance',
        body: "Many landlords in Salisbury and Wiltshire live elsewhere in the UK or abroad. Managing a rental property remotely brings specific challenges: responding quickly to tenant maintenance requests, arranging inspections, handling emergencies, and staying on top of compliance requirements — all without being physically present.",
      },
      {
        heading: 'Building a Reliable Local Contractor Relationship',
        body: "The most important thing a remote landlord can do is establish a relationship with a reliable, fully insured local handyman or property maintenance service before problems arise. Having a trusted contact who knows the property, holds a spare key, and can respond to emergencies immediately removes the biggest source of stress in remote property management.",
      },
      {
        heading: 'Setting Up a Maintenance System',
        body: "Agree a process with your tenant for reporting issues: email, phone, or a shared document. Set clear response time expectations. Schedule at least one annual inspection visit. Use a local property maintenance service to carry out routine seasonal tasks (gutters, boiler service, garden) so the property stays in good condition between inspections.",
      },
    ],
    faqs: [
      {
        q: 'Can FixWell Services act as a maintenance contact for remote landlords in Salisbury?',
        a: "Yes. We work with several landlords who are based outside Wiltshire. We hold a spare key, respond to tenant maintenance requests, carry out routine maintenance, and keep you informed by phone or email.",
      },
    ],
  },
  {
    id: 'outer-sub-03',
    slug: 'garden-maintenance-seasons-wiltshire',
    pageType: 'outer-info',
    title: 'Garden Maintenance Through the Seasons in Wiltshire | FixWell',
    h1: 'Garden Maintenance Through the Seasons in Wiltshire',
    metaDescription:
      'Seasonal garden maintenance guide for Wiltshire — spring planting, summer lawn care, autumn clearance, winter garden protection, and fence and paving upkeep.',
    macroContext:
      'Seasonal garden maintenance calendar for Wiltshire — spring planting, summer lawn care, autumn leaf clearance, winter garden protection, and fencing/paving upkeep',
    intent: 'Informational — seasonal gardening guide for Wiltshire climate',
    linksToCoreIds: ['garden-maintenance-salisbury', 'fence-repair-salisbury'],
    sections: [
      {
        heading: "Wiltshire's Garden Calendar",
        body: "Wiltshire has a temperate oceanic climate — mild and wet in winter, warm and moderately dry in summer. Gardens in Salisbury and the surrounding chalk downland can be exposed to strong winds, and clay soils in the vale areas can become waterlogged in winter. Understanding your soil type and microclimate helps you plan seasonal maintenance effectively.",
      },
      {
        heading: 'Spring (March–May)',
        body: 'Spring is the busiest season for garden preparation. Key tasks: clear winter debris and dead growth; feed and aerate the lawn; check and repair winter storm damage to fences and gates; re-lay any frost-heaved paving; apply weed suppressant to paths and borders; check and clear gutters after autumn.',
      },
      {
        heading: 'Summer (June–August)',
        body: "Regular lawn mowing, hedge trimming, and watering in dry spells. Check timber fences and treat with preservative if they haven't been done recently. Repair any fence panels or post damage before autumn storms. Check drainage around the property — address any pooling water while conditions are dry.",
      },
      {
        heading: 'Autumn (September–November)',
        body: 'Leaf clearance is essential — blocked drains, slippery paths, and gutter overflow are the main autumn risks. Apply lawn treatments. Cut back overgrown shrubs and trees before strong winds cause damage. Plant spring bulbs.',
      },
      {
        heading: 'Winter (December–February)',
        body: 'Winter garden maintenance in Wiltshire is primarily protective. Check fences after strong winds. Clear gutters of any remaining leaves. Protect delicate plants from frost. Keep paths and steps clear of algae and ice.',
      },
    ],
    faqs: [
      {
        q: 'Do you offer regular garden maintenance in Salisbury?',
        a: 'Yes. FixWell Services provides seasonal garden maintenance in Salisbury and Wiltshire — including lawn care, hedge trimming, fence repair, gutter clearing, and paving maintenance.',
      },
    ],
  },
  {
    id: 'outer-sub-04',
    slug: 'how-to-paint-skirting-boards',
    pageType: 'outer-info',
    title: 'How to Paint Skirting Boards Without Ruining Your Carpet | FixWell',
    h1: 'How to Paint Skirting Boards Without Ruining Your Carpet',
    metaDescription:
      'Step-by-step guide to painting skirting boards — preparation, primer, gloss technique, masking, and protecting carpets and floors. FixWell Services Salisbury.',
    macroContext:
      'Step-by-step guide to painting skirting boards professionally — preparation, primer, gloss technique, masking, and protecting carpets and floors',
    intent: 'Informational — consolidates 3 duplicate blog posts on this topic',
    linksToCoreIds: ['painting-decorating-salisbury', 'skirting-board-painting-salisbury'],
    sections: [
      {
        heading: 'What You Need Before You Start',
        body: "Materials: decorator's masking tape (low-tack for carpets), dust sheets, fine-grit sandpaper (120–180 grit), sugar soap or degreaser, wood primer (if repainting bare wood), good-quality gloss or satin paint, a 1.5–2 inch angled brush. Preparation is the difference between a professional-looking result and a patchy, peeling finish.",
      },
      {
        heading: 'Step 1: Prepare the Skirting Board',
        body: "Sand the existing paint lightly to key the surface. Fill any cracks or holes with wood filler and sand smooth when dry. Clean the skirting thoroughly with sugar soap to remove grease and dust. Wipe dry. If the skirting has bare wood sections, apply a coat of wood primer and allow to dry fully before painting.",
      },
      {
        heading: 'Step 2: Protect Carpet and Floors',
        body: "Use a wide, low-tack decorator's masking tape pressed firmly along the top of the skirting. Slide a thin piece of card or a paint shield under the bottom edge of the skirting and over the carpet as you paint each section. Use dust sheets to protect the wider floor area from paint drips.",
      },
      {
        heading: 'Step 3: Apply Paint',
        body: "Apply the first coat of gloss or satin with an angled brush, working in the direction of the grain. Keep strokes long and smooth. Allow to dry fully — typically 4–6 hours for gloss. Lightly sand with fine grit and apply a second coat. Two thin coats always outperform one thick coat for durability and finish quality.",
      },
      {
        heading: 'Step 4: Remove Masking and Finish',
        body: "Remove masking tape while the final coat is still slightly tacky — this gives a clean edge. Pull the tape back at a 45-degree angle rather than straight up. Clean any accidental paint from walls with a damp cloth while still wet.",
      },
    ],
    faqs: [
      {
        q: 'Gloss or satin — which paint is best for skirting boards?',
        a: "Traditional skirting boards are painted in gloss, which is durable and easy to wipe clean. Satin is increasingly popular as it offers a lower sheen that looks more modern and is easier to apply without brush marks. Both are suitable — it's a matter of preference.",
      },
      {
        q: 'How long does it take to paint skirting boards in a room?',
        a: 'A typical bedroom with 10–12 linear metres of skirting takes 2–3 hours including preparation and two coats. Larger rooms or more complex skirting profiles will take longer.',
      },
      {
        q: 'Should I hire a professional to paint my skirting boards in Salisbury?',
        a: 'For a high-quality, paint-free result on carpets, a professional decorator makes a significant difference. FixWell Services provides professional skirting board painting across Salisbury at competitive rates.',
      },
    ],
  },
  {
    id: 'outer-sub-05',
    slug: 'home-renovation-planning-guide-salisbury',
    pageType: 'outer-info',
    title: 'Home Renovation Planning Guide for Salisbury Homeowners | FixWell',
    h1: 'Home Renovation Planning Guide for Salisbury Homeowners',
    metaDescription:
      'Planning a home renovation in Salisbury — budgeting, sequencing trades, planning permission, managing contractors, and choosing between full renovation and targeted improvements.',
    macroContext:
      'Planning a home renovation in Salisbury — budgeting, sequencing trades, planning permission requirements, managing contractors, and choosing between full renovation and targeted improvements',
    intent: 'Informational — pre-renovation research query',
    linksToCoreIds: ['renovation-services-salisbury', 'kitchen-renovation-salisbury', 'bathroom-renovation-salisbury'],
    sections: [
      {
        heading: 'Start with a Clear Scope',
        body: 'The most common cause of renovation projects going over budget is scope creep — starting with one room and gradually expanding. Before any work begins, define clearly what you want to achieve, which rooms are in scope, and what your non-negotiable priorities are. A clear written scope gives contractors a consistent brief and helps you compare quotes fairly.',
      },
      {
        heading: 'Do You Need Planning Permission?',
        body: "Many internal renovation projects in Salisbury do not require planning permission. However, changes to the external appearance of a listed building, works in a Conservation Area (much of central Salisbury is within a Conservation Area), or significant extensions do require consent. Check with Wiltshire Council's planning department before committing to any external changes.",
      },
      {
        heading: 'Budgeting for a Renovation',
        body: "Add a 15–20% contingency to your budget for unexpected findings. Older properties in Salisbury regularly reveal hidden issues when opened up — outdated wiring, damp, structural cracks, or asbestos in materials from the 1960s–1980s. Without a contingency, a single discovery can derail the entire project.",
      },
      {
        heading: 'Sequencing the Work',
        body: "Renovation work must follow the right sequence to avoid costly rework: structural and drainage work first; then electrics, plumbing, and heating rough-in; then plastering; then second fix carpentry (skirting, doors, architrave); then painting; then floor coverings. Getting this order wrong means trades working over each other's finished work.",
      },
    ],
    faqs: [
      {
        q: 'Can FixWell Services manage a full kitchen or bathroom renovation in Salisbury?',
        a: 'Yes. We manage renovation projects across Salisbury — coordinating trades, sourcing materials, and carrying out the handyman elements of the work including tiling, painting, carpentry, and fitting. Call us to discuss your project.',
      },
      {
        q: 'Do I need building regulations approval for a renovation in Salisbury?',
        a: 'Building Regulations approval is required for: extensions, loft conversions, new electrical circuits, structural changes, change of use, and installation of new heating systems. Internal cosmetic renovations (painting, new flooring, kitchen unit replacement) typically do not require Building Regulations approval.',
      },
    ],
  },
  {
    id: 'outer-sub-06',
    slug: 'common-home-repair-problems-older-uk-properties',
    pageType: 'outer-info',
    title: 'Common Home Repair Problems in Older UK Properties | FixWell Services',
    h1: 'Common Home Repair Problems in Older UK Properties',
    metaDescription:
      'Most common maintenance and repair issues in older UK homes — damp, cracked plaster, rotting timber, outdated wiring, sash window failures and how to address each.',
    macroContext:
      'Most common maintenance and repair issues in older UK homes — damp, cracked plaster, rotting timber, outdated wiring, sash window failures, and how to address each',
    intent: 'Informational — Salisbury has significant older property stock',
    linksToCoreIds: ['home-repairs-salisbury', 'property-maintenance-salisbury'],
    sections: [
      {
        heading: "Why Older Properties Need Specialist Attention",
        body: "Salisbury and the surrounding Wiltshire villages have a high proportion of pre-1950 housing — Victorian terraces, Georgian townhouses, Edwardian semis, and older stone cottages. These properties have enormous character and structural solidity, but they also come with a specific set of maintenance and repair challenges that differ from modern builds.",
      },
      {
        heading: 'Damp and Moisture Problems',
        body: "Rising damp, penetrating damp through solid walls, and condensation are common in older properties without cavity walls or modern vapour barriers. Signs include tide marks on walls, peeling plaster, musty smells, and efflorescence (white salt deposits). Identifying the source correctly is critical — treating the symptom without understanding the cause leads to recurring problems.",
      },
      {
        heading: 'Cracked and Blown Plaster',
        body: "Traditional lime plaster on older properties moves and breathes differently from modern gypsum plaster. Hairline cracks are often cosmetic, but larger cracks — particularly diagonal cracks around door and window openings — should be monitored for signs of structural movement. Blown plaster (plaster that has separated from the wall and sounds hollow when tapped) needs raking out and patching.",
      },
      {
        heading: 'Rotting Timber',
        body: "Window frames, external door frames, soffits, fascias, and structural timbers in older properties are vulnerable to wet rot and dry rot. Wet rot is more common and localised — caused by persistent moisture contact. Dry rot is more serious and can spread through a building if not treated. Early-stage rot in window frames is often repairable; advanced rot requires full replacement.",
      },
      {
        heading: 'Sash Windows',
        body: "Many older Salisbury properties have original sash windows, which are draughty, rattle in the wind, and often painted shut over decades of redecoration. Common repairs include re-cording the sashes, installing draught-proofing strips, freeing painted-shut windows, and replacing broken glass or putty. Well-maintained original sash windows are a property asset — they are worth repairing rather than replacing.",
      },
    ],
    faqs: [
      {
        q: 'Do you have experience working on older properties in Salisbury?',
        a: 'Yes. Many of our customers in Salisbury have Victorian, Edwardian, or Georgian properties. We are familiar with the specific challenges of these buildings — solid walls, lime plaster, sash windows, original tiled floors — and take appropriate care with period features.',
      },
      {
        q: 'Can you repair (rather than replace) original features in older Salisbury homes?',
        a: "Yes. Where possible we repair original features — sash windows, timber skirting boards, period doors — rather than replacing them. This is better for the character of the property and often more cost-effective than sourcing matching modern replacements.",
      },
    ],
  },
];

export const allOuterPages: OuterPage[] = [...outerHubPages, ...outerSubPages];
