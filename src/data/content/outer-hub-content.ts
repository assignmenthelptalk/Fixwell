/**
 * FixWell Services — Outer Hub Page Content
 * Methodology: Holistic SEO / PageGPT by Koray Tuğberk GÜBÜR
 * Source Context: Lead-generation for homeowners and landlords in Salisbury and Wiltshire
 * Central Entity: Handyman services
 *
 * Each page follows the contextual vector:
 *   intro → H2-1 (definition) → H2-2 (attributes/types) → H2-3 (UK legal/regulatory)
 *   → H2-4 (Salisbury/Wiltshire practical context) → H2-5 (contextual border → core page bridge)
 * Schema: ARTICLE + FAQPage
 * 6 FAQs per page bridging informational ↔ transactional intent
 */

export const outerHubContent: Record<
  string,
  {
    metaDescription: string;
    intro: string;
    sections: { heading: string; body: string }[];
    faqs: { q: string; a: string }[];
  }
> = {
  'what-does-a-handyman-do': {
    metaDescription:
      'What does a handyman do? A precise guide to handyman scope in the UK — services covered, legal limits, what requires a specialist tradesman, and how to use a handyman effectively in Salisbury and Wiltshire.',

    intro:
      'The word handyman is used loosely, which is part of the problem when homeowners try to decide whether their job is the right fit. A handyman is a skilled generalist — someone who can carry out a wide range of repair, maintenance, and improvement work across multiple trade areas, but who operates at a different level of depth and legal scope than a specialist tradesperson. Understanding exactly what a handyman can and cannot do helps you match the right professional to the right job, avoid paying specialist rates for general work, and stay on the right side of UK building regulations when repairs touch licensed activities.',

    sections: [
      {
        heading: 'What Is a Handyman?',
        body: 'A handyman is a skilled generalist who carries out everyday home repair, maintenance, and improvement tasks that do not require a specialist trade qualification. The defining characteristic is breadth: a professional handyman can move between carpentry, plumbing repairs, painting, electrical like-for-like replacements, outdoor work, and property maintenance across a single visit — something no specialist trade would offer. In the UK there is no single mandatory licence for general handyman work, but a professional handyman will hold relevant qualifications, carry full public liability insurance, and know precisely where their scope ends and where a Gas Safe engineer, Part P electrician, or structural engineer must take over. This boundary awareness is itself a mark of competence: the handyman who claims to do everything is usually the one you should avoid.',
      },
      {
        heading: 'What Can a Handyman Do?',
        body: 'The scope of professional handyman work spans several trade categories. In plumbing, a handyman can repair or replace taps, washers, toilet mechanisms, visible supply pipes, and minor waste fittings. In electrics, like-for-like replacement of sockets, switches, and light fittings outside kitchens and bathrooms is permitted under UK Building Regulations without specialist notification. Carpentry includes shelf installation, furniture assembly, door repairs and adjustments, skirting board fitting and repair, architrave, and timber fence repairs. Painting and decorating covers interior and exterior surfaces — walls, ceilings, woodwork, and rendering where the surface is sound. Outdoor and property maintenance includes gutter clearing, paving repair, fence panel replacement, gate adjustment, and between-tenancy property checks. General property maintenance brings all these skills together for landlords managing multiple repair needs across a portfolio.',
      },
      {
        heading: 'What a Handyman Cannot Do in the UK',
        body: 'UK law draws firm lines around certain types of work. Gas work of any kind — including appliance connections, pipe alterations, and boiler work — must be carried out by a Gas Safe registered engineer. This is a criminal law requirement under the Gas Safety (Installation and Use) Regulations 1998, not a recommendation. Major electrical installation work falls under Part P of the Building Regulations: new circuits, consumer unit replacement, and all electrical work inside kitchens and bathrooms must be carried out by a Part P competent person who can self-certify the work. Structural work involving load-bearing elements may require a structural engineer and possibly planning permission, particularly in conservation areas such as central Salisbury. A professional handyman will always identify when your job crosses one of these lines, and a good one will refer you to the appropriate certified specialist rather than attempt the work regardless.',
      },
      {
        heading: 'Types of Handyman Work by Property Context',
        body: 'The most valuable handyman work varies depending on who owns the property and why. For homeowner-occupiers, the priority is convenience: a single trusted professional who can clear a job list — shelves, a sticking door, a dripping tap, touch-up painting — in one efficient visit. For landlords, the focus shifts to compliance and response time: routine maintenance that keeps the property legally habitable, rapid response to tenant repair requests, and documented work that protects the landlord\'s position. For rental properties in Wiltshire specifically, between-tenancy preparation — cleaning, minor repairs, repainting scuffs, replacing worn fittings — is a distinct and recurring need. Understanding which context applies shapes how a handyman should be briefed and what outcome counts as success.',
      },
      {
        heading: 'When Understanding Handyman Scope Leads to Booking One',
        body: 'Most homeowners discover the value of a reliable handyman when they have a list of small jobs that have been building up for months — individually too small to justify a specialist call-out, collectively more than a weekend DIY project. A professional handyman service can address a mixed list in a single visit: adjust a sticking door, fix a dripping tap, hang shelves, fill and paint scuffed walls, and replace a broken fence panel all on the same day. FixWell Services covers exactly this scope across Salisbury and Wiltshire, with transparent hourly rates or fixed-price quotes depending on the job. If your list includes work that falls outside handyman scope — gas, notifiable electrical, structural — a professional will tell you clearly and can often recommend a trusted specialist for that element.',
      },
    ],

    faqs: [
      {
        q: 'Is a handyman the same as a builder?',
        a: "No. A builder typically handles structural, groundwork, and large-scale construction projects — extensions, new walls, drainage connections, loft conversions. A handyman specialises in smaller-scale repair, maintenance, and improvement work that doesn\'t require structural alteration or planning permission. There is some overlap in carpentry and general repairs, but a handyman will not carry out load-bearing structural work.",
      },
      {
        q: 'Does a handyman need to be qualified in the UK?',
        a: 'There is no single mandatory licence for general handyman work in the UK. However, specific tasks have legal requirements: gas work requires Gas Safe registration, major electrical work requires a Part P qualified competent person, and asbestos removal requires an HSE-licensed contractor. Professional handymen typically hold NVQ or City and Guilds qualifications in relevant trades and carry public liability insurance. Always check insurance as a minimum.',
      },
      {
        q: 'How much does a handyman charge per hour in Salisbury?',
        a: 'In Salisbury and Wiltshire, professional handyman rates typically range from £20 to £40 per hour. FixWell Services charges within this range. The rate depends on the complexity of the work, whether materials are included, and whether specialist access equipment is needed. Fixed-price quotes are available for well-defined jobs where scope is clear.',
      },
      {
        q: 'Can a handyman do plumbing in the UK?',
        a: 'Yes, for minor repairs. UK regulations allow non-Gas Safe individuals to repair or replace like-for-like plumbing fittings — taps, washers, valves, toilet mechanisms, and visible pipes. Gas work is strictly restricted to Gas Safe registered engineers. A competent handyman will be transparent about which plumbing tasks fall within their scope.',
      },
      {
        q: 'Can a handyman do electrical work in the UK?',
        a: 'Yes, for minor like-for-like replacements outside kitchens and bathrooms. Under Part P of the Building Regulations, replacing existing sockets, switches, and light fittings in rooms other than kitchens and bathrooms can be done without a qualified electrician or formal notification. New circuits, fuse board work, and kitchen or bathroom electrical work requires a Part P qualified competent person.',
      },
      {
        q: 'How do I know if my job needs a handyman or a specialist tradesman?',
        a: "A useful rule: if the job involves gas, it needs a Gas Safe engineer. If it involves new electrical circuits, kitchen or bathroom electrics, or consumer unit work, it needs a Part P electrician. If it involves structural alteration to load-bearing elements, it may need a structural engineer. Everything else — repairs, maintenance, and improvement work that doesn\'t touch those categories — is typically within handyman scope. When in doubt, call a professional handyman first: a good one will tell you honestly whether they can take the job.",
      },
    ],
  },

  'handyman-cost-salisbury': {
    metaDescription:
      'Handyman pricing guide for Salisbury and Wiltshire 2026 — hourly rates (£20–£40/hr), fixed-price jobs, callout fees, VAT status of small traders, and typical costs for common handyman jobs.',

    intro:
      'Cost is the first question most people ask before calling a handyman, and it is a reasonable one. Knowing the going rate for handyman work in Salisbury helps you assess whether a quote is fair, decide between hourly and fixed-price billing, and budget accurately for a list of jobs. This guide gives real figures for Salisbury and Wiltshire — not vague national ranges — including hourly rates, fixed-price job costs, callout fee practices, VAT status of small traders, and what affects where in the price range your job will land.',

    sections: [
      {
        heading: 'Handyman Hourly Rates in Salisbury (2026)',
        body: 'The standard handyman hourly rate in Salisbury and Wiltshire ranges from £20 to £40 per hour for professional, fully insured work. This is in line with the broader South of England average outside London, where rates range from £25 to £50 per hour. In London, comparable work runs £40 to £80 per hour. FixWell Services prices within the £20–£40 range. Day rates (typically 7–8 hours of working time) run from £160 to £280 for general handyman work. Specialist activities that cross into trade territory — first fix carpentry, tiling, or complex plumbing above handyman scope — attract a rate premium. General maintenance work, furniture assembly, painting, and minor repairs all sit in the standard range.',
      },
      {
        heading: 'Fixed-Price vs Hourly Rate: Which Is Right for Your Job?',
        body: 'For well-defined, clearly scoped jobs, a fixed price is almost always preferable for the customer — it removes cost uncertainty and gives you a firm figure to budget against. Good candidates for fixed pricing include: shelf installation (typically £40–£80 labour), furniture assembly (£30–£120 depending on complexity), fence panel replacement (£50–£120 per panel labour), TV mounting (£50–£80), and gutter clearing (£60–£120 for a standard house). For open-ended work where the scope is genuinely uncertain — general maintenance visits, investigation jobs, or multi-room painting — an hourly rate is more honest than a fixed price that will require adjustment. A professional handyman will advise which model suits your job, and should be willing to convert to fixed price once scope is confirmed.',
      },
      {
        heading: 'Callout Fees, Minimum Charges, and VAT Status',
        body: 'Some handyman businesses apply a minimum charge — typically covering one to two hours of work — to make small jobs economically viable. This is standard practice and not a red flag; it simply reflects the reality that travel, setup, and return time is not free. Whether a minimum charge applies depends on the business and the job. On VAT: the VAT registration threshold in the UK is £90,000 annual turnover (as of 2024). Many small handyman businesses operate below this threshold and are therefore not VAT registered, meaning they do not charge VAT on their invoices. This represents a genuine 20% saving compared to larger contractors who are VAT registered. FixWell Services will clarify the VAT position clearly when providing your quote.',
      },
      {
        heading: 'Cost of Common Handyman Jobs in Salisbury',
        body: 'Approximate costs for frequently requested handyman jobs in Salisbury and Wiltshire (labour only unless stated): shelf installation — 1 to 2 hours, £20–£80; furniture assembly (flatpack) — 1 to 3 hours, £30–£120 depending on complexity; fence panel replacement — 2 to 4 hours per panel plus materials, total £80–£200; skirting board painting per room — £40–£120 depending on linear metres; gutter clearing standard house — £60–£120 (includes minor downpipe clearance); between-tenancy property check and minor repairs — half to full day, £120–£250; external door lock replacement — £40–£80 plus materials; TV mounting with cable concealment — £60–£100; draught-proofing doors and windows — £40–£80 per door or window set.',
      },
      {
        heading: 'How to Get a Fair Quote from a Handyman in Salisbury',
        body: "Before calling a handyman, prepare a clear job list — and if the work is straightforward, take a few photos. The more precisely you can describe the scope, the more accurate the quote will be. A trustworthy quote should be written (not verbal only), itemise labour and materials separately, specify whether it is fixed or an hourly estimate with a cap, and include what happens if additional work is discovered. Red flags include a refusal to put anything in writing, a price that seems dramatically low compared to the market rate, or a request for substantial payment upfront before work begins. FixWell Services provides written quotes, itemised for labour and materials, via phone or on-site assessment across Salisbury and Wiltshire.",
      },
    ],

    faqs: [
      {
        q: 'Do handymen in Salisbury charge a callout fee?',
        a: "It depends on the business and the size of the job. Some handymen apply a minimum charge — equivalent to one or two hours of labour — for very small jobs where travel and setup time would otherwise make the visit uneconomical. FixWell Services is transparent about any minimum charge when you call to book, so you know exactly what to expect before we arrive.",
      },
      {
        q: 'Are materials included in the handyman price?',
        a: 'Materials are typically billed separately at cost, though for jobs requiring only minor fixings — screws, plugs, filler — these may be absorbed into the hourly rate. For jobs requiring significant materials (paint, timber, replacement fixtures, fence panels), a materials allowance or separate quote is provided. Always ask your handyman to clarify whether quoted prices are labour-only or all-in.',
      },
      {
        q: 'Is VAT charged on handyman work in Salisbury?',
        a: 'Small handyman businesses with annual turnover below the VAT registration threshold (£90,000 as of 2024) are not required to charge VAT. This is a legitimate tax position and represents a saving to customers. FixWell Services will clarify its VAT status when providing your quote. If a handyman service is VAT registered, they are legally required to show this on their invoice.',
      },
      {
        q: 'How much does a full day of handyman work cost in Salisbury?',
        a: "A full working day (7–8 hours) of professional handyman work in Salisbury typically costs £160–£280 for labour, depending on the rate and the nature of the work. A day\'s handyman visit is an efficient way to work through a list of accumulated jobs that have been building up — combining small repairs, maintenance, and improvement tasks that individually wouldn\'t justify a separate call-out.",
      },
      {
        q: 'How do handyman costs in Salisbury compare to national averages?',
        a: "Salisbury handyman rates (£20–£40/hr) are broadly in line with the South England average outside London, and significantly cheaper than London rates (£40–£80/hr). You are unlikely to find professional, fully insured handyman work for less than £20/hr anywhere in the South of England — rates significantly below market often indicate lack of insurance, undeclared work, or inexperience.",
      },
      {
        q: 'Can I get a fixed-price quote for handyman work in Salisbury?',
        a: 'Yes. For jobs where the scope is well defined — shelf installation, furniture assembly, gutter clearing, fence panel replacement, TV mounting — a fixed-price quote gives you cost certainty upfront. FixWell Services offers fixed-price quotes for defined-scope work and hourly rates for open-ended maintenance visits. Call +44 7391 599 078 or email sales@fixwellservices.co.uk to request a quote.',
      },
    ],
  },

  'handyman-vs-tradesman': {
    metaDescription:
      'Handyman vs tradesman in the UK — when to use each, legal scope of handyman work, what requires Gas Safe or Part P certification, and cost comparison. Decision guide for Salisbury homeowners.',

    intro:
      'One of the most common questions homeowners face when they have a repair or maintenance need is whether to call a handyman or a specialist tradesperson. Getting this wrong in either direction costs money: calling a specialist plumber or electrician for a job well within handyman scope means paying premium rates for no added benefit, while using a handyman for work that legally requires a certified specialist creates legal risk, insurance exposure, and potential safety hazards. This guide explains the functional difference between a handyman and a tradesman, maps out which jobs belong to which category under UK law, and gives you a cost comparison to make the right choice.',

    sections: [
      {
        heading: 'What Is the Difference Between a Handyman and a Tradesman?',
        body: 'A tradesman is a specialist who has completed a formal apprenticeship or vocational qualification in a specific trade — plumbing, electrical installation, bricklaying, gas engineering, plastering. Their expertise goes deep in a narrow field. A handyman is a generalist who covers a wide range of repair, maintenance, and improvement tasks across multiple trade areas, but at a lighter or more routine level than a specialist. The simplest way to understand the distinction is depth versus breadth: a tradesman goes deep in one field; a handyman goes broad across many fields at an everyday maintenance level. Neither is inherently better — the question is always which matches your job. A handyman is not a lesser version of a tradesman; they are a different professional with a different role.',
      },
      {
        heading: 'Work That Legally Requires a Specialist Tradesman in the UK',
        body: 'UK law defines certain categories of home repair work that must be carried out by a certified specialist, regardless of competence. All gas work — any connection, alteration, repair, or servicing of a gas appliance, pipe, or fitting — must be carried out by a Gas Safe registered engineer under the Gas Safety (Installation and Use) Regulations 1998. This is a criminal law requirement. Major electrical work falls under Part P of the Building Regulations: new electrical circuits, consumer unit (fuse board) replacement, and any electrical work inside kitchens and bathrooms must be carried out by a Part P qualified competent person who can issue a Building Regulations completion certificate. Structural work involving load-bearing elements may require a structural engineer and potentially planning permission, particularly in Salisbury\'s extensive Conservation Area. Attempting any of these without the appropriate certification is illegal, can void your buildings insurance, and creates serious problems on property sale.',
      },
      {
        heading: 'Work a Professional Handyman Can Do',
        body: "Within the areas not covered by specialist legal requirements, a professional handyman has wide scope. Minor plumbing repairs are permitted: replacing tap washers, cartridges, and valves; repairing or replacing toilet cistern mechanisms and seats; fixing visible leaking pipe joints and pushfit fittings; replacing kitchen and bathroom taps (the tap itself, not the supply pipe connections to the mains). Minor electrical work is permitted: like-for-like replacement of sockets, switches, and light fittings in rooms other than kitchens and bathrooms, without modification to the circuit. Carpentry, furniture assembly, painting and decorating, outdoor maintenance, property maintenance, gutter clearing, fence and gate repair, door and window adjustment — all of these fall clearly within handyman scope. A professional handyman knows these limits precisely and will always refer work outside them to the appropriate specialist.",
      },
      {
        heading: 'Cost Comparison: Handyman vs Specialist Tradesman',
        body: 'Specialist tradespeople command a rate premium that reflects their qualifications, certification costs, and specialist insurance. Plumbers in Wiltshire typically charge £50–£90 per hour, with minimum callout charges of £70–£100 common. Electricians charge £55–£100 per hour, and Gas Safe engineers £70–£120. These rates are justified for the work they are qualified to do — but for general repairs and maintenance that fall clearly within handyman scope, paying these rates delivers no additional value. A professional handyman at £20–£40 per hour handles the same routine maintenance work at significantly lower cost. The savings compound quickly: a day of mixed handyman work at £40/hr costs £280; the same day at electrician or plumber rates would cost £560–£960.',
      },
      {
        heading: 'How FixWell Handles Jobs That Cross the Handyman/Tradesman Line',
        body: "Many home maintenance jobs involve a combination of work — some within handyman scope, some requiring a specialist. A bathroom renovation might need tiling, painting, and fixture fitting handled by a handyman, alongside electrical work that requires a Part P electrician. A kitchen repair job might involve carpentry and decoration alongside a tap installation that touches the supply pipe connection. FixWell Services is transparent about where the handyman scope ends. Where a job requires a Gas Safe engineer or Part P electrician for specific elements, we will tell you clearly and can recommend trusted specialists in Salisbury for those components. We handle the handyman portion of the work and coordinate with the specialist where required, so you are not managing multiple contractors independently.",
      },
    ],

    faqs: [
      {
        q: 'Can a handyman do plumbing in the UK?',
        a: 'Yes, for minor repairs and like-for-like replacements. Replacing tap washers, cartridges, and valves, repairing visible pipe joints, replacing toilet cistern mechanisms, and fitting new taps (tap-to-existing-fitting connections) are all within handyman scope. Gas work is strictly prohibited for anyone without Gas Safe registration. If you are unsure whether your plumbing job is within handyman scope, describe it to a professional handyman — they will tell you honestly.',
      },
      {
        q: 'Can a handyman do electrical work in the UK?',
        a: 'Yes, for minor like-for-like replacements in rooms other than kitchens and bathrooms. Under Part P of the Building Regulations, replacing existing sockets, switches, and light fittings in living rooms, bedrooms, hallways, and other non-notifiable locations is permitted. New circuits, consumer unit replacement, and any electrical work in kitchens or bathrooms requires a Part P qualified electrician who can certify the work.',
      },
      {
        q: 'Is a handyman cheaper than a plumber or electrician?',
        a: 'Generally, yes — significantly so. Handyman rates in Salisbury are £20–£40 per hour. Specialist plumbers typically charge £50–£90 per hour, and electricians £55–£100 per hour. For work that falls within handyman scope, using a professional handyman is the cost-effective choice with no reduction in quality or compliance.',
      },
      {
        q: 'What happens if a handyman does work that requires a specialist tradesman?',
        a: "Work that required specialist certification and was carried out without it creates multiple risks: it may be illegal (gas, notifiable electrical), it will likely void your buildings insurance for related claims, and it will surface as a problem at property sale when a solicitor or surveyor asks for completion certificates. Always ensure the right professional carries out the right work.",
      },
      {
        q: 'Can a handyman manage a job that needs both handyman and specialist work?',
        a: 'A professional handyman can carry out the elements of the job that fall within their scope and refer the specialist elements to the appropriate certified tradesperson. FixWell Services coordinates with trusted Gas Safe engineers and Part P electricians in Salisbury for jobs requiring both types of work, so you have a single point of contact managing the project.',
      },
      {
        q: 'How do I know whether my job needs a handyman or a specialist?',
        a: 'Use this framework: Does it involve gas? You need a Gas Safe engineer. Does it involve a new electrical circuit, or electrical work in a kitchen or bathroom? You need a Part P electrician. Does it involve structural alteration to load-bearing elements? You may need a structural engineer. Everything else — general repairs, maintenance, carpentry, painting, plumbing repairs above — is typically handyman scope. When in doubt, call a professional handyman first and describe the job.',
      },
    ],
  },

  'landlord-property-maintenance-legal-obligations': {
    metaDescription:
      'Landlord property maintenance legal obligations in England — Landlord and Tenant Act 1985 s.11, Homes (Fitness for Human Habitation) Act 2018, annual gas safety certificate, 5-year EICR, repair response times, and penalties for non-compliance.',

    intro:
      "Landlords in England operate within a detailed framework of statutory obligations for property maintenance and repair. These obligations are not optional clauses in a tenancy agreement — they are implied legal duties that cannot be contracted away, regardless of what your tenancy agreement says. Understanding the specific legislation that applies, the timescales you are required to meet, and the consequences of non-compliance is essential for any landlord managing property in Salisbury or Wiltshire. This guide covers the key statutes and their practical requirements, from the foundational repairing obligations under the Landlord and Tenant Act 1985 to the more recent Homes (Fitness for Human Habitation) Act 2018 and mandatory certificate requirements.",

    sections: [
      {
        heading: "Landlord\'s Legal Duty to Maintain Property Under the Landlord and Tenant Act 1985",
        body: "Section 11 of the Landlord and Tenant Act 1985 establishes the core repairing covenant that applies to all assured shorthold tenancies and most other residential tenancies. The landlord is required to keep in repair and proper working order: the structure and exterior of the dwelling (including roof, walls, windows, external doors, and drains); the installations for the supply of water, gas, electricity, and sanitation (basins, sinks, baths, toilets, and their pipes and drainage); and the installations for space heating and water heating. These obligations are non-waivable — they cannot be removed by a tenancy agreement clause. Breach entitles the tenant to apply to the county court, and the landlord may face a rent repayment order, compensation for any damage caused by disrepair, and an order to carry out the works.",
      },
      {
        heading: 'The Homes (Fitness for Human Habitation) Act 2018',
        body: "The Homes (Fitness for Human Habitation) Act 2018 significantly extended landlords' obligations beyond the structural and systems focus of the LTA 1985. Under the Act, the property must be fit for human habitation at the time the tenancy is granted and must remain fit throughout the tenancy. The Act incorporates the 29 hazard categories from the Housing Health and Safety Rating System (HHSRS), which include: damp and mould (brought into sharp public focus by the Awaab Ishak case and subsequent Awaab\'s Law provisions); excess cold (inadequate heating or insulation); falls from height (unsafe stairs, railings, windows); structural collapse; and inadequate ventilation. Tenants can bring a civil action directly in the county court without needing to involve the local authority, significantly reducing the barrier to enforcement.",
      },
      {
        heading: 'Gas Safety Certificate and Annual Inspection Requirements',
        body: "Under the Gas Safety (Installation and Use) Regulations 1998, landlords must arrange an annual gas safety check of all gas appliances, fittings, and flues in the property. The check must be carried out by a Gas Safe registered engineer — this is non-negotiable and not substitutable with any other trade. The engineer issues a Gas Safety Record (commonly called the Gas Safety Certificate). This must be provided to existing tenants within 28 days of the check, and to new tenants before they move in. A copy must be retained for at least two years. Failure to obtain and provide the Gas Safety Certificate is a criminal offence under the 1998 Regulations, not merely a civil breach — landlords have been prosecuted and fined. There is no exemption, and there is no grace period.",
      },
      {
        heading: 'Electrical Installation Condition Report (EICR) Requirements',
        body: "Since 1 April 2021, all private landlords in England have been required to carry out an Electrical Installation Condition Report (EICR) at least every five years, under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020. The inspection must be carried out by a qualified electrician. The report assesses the condition of the fixed electrical installation — wiring, consumer unit, sockets, switches, and related accessories. Any unsatisfactory findings must be remediated within 28 days (or sooner if the inspector specifies a shorter period due to urgency). A copy of the EICR must be provided to existing tenants within 28 days of the inspection, to new tenants before occupation, and to the local housing authority within 7 days if requested. Failure to comply can result in a financial penalty of up to £30,000.",
      },
      {
        heading: 'Repair Response Times and Practical Compliance for Salisbury Landlords',
        body: "The LTA 1985 requires landlords to carry out repairs within a 'reasonable time' of being notified by the tenant. What counts as reasonable depends on urgency. Emergency repairs — no heating or hot water in winter, a major water leak, a compromised front door lock, loss of power — should be addressed within 24 hours. Urgent but non-emergency repairs (a leaking roof but not causing active ingress, a blocked drain, a faulty but not dangerous electrical fitting) should be addressed within 14 days. Non-urgent repairs can typically wait up to 28 days. Consistent failure to respond within reasonable timescales can render a Section 21 notice invalid, expose the landlord to a rent repayment order, and generate a local authority improvement notice. For Salisbury landlords who are not locally based, having a reliable local handyman service on call for routine maintenance and emergency response is the most practical way to meet these obligations.",
      },
    ],

    faqs: [
      {
        q: "Are landlords responsible for garden maintenance under the Landlord and Tenant Act 1985?",
        a: "Section 11 of the LTA 1985 does not extend to garden maintenance — this is typically the tenant\'s responsibility under the tenancy agreement. However, landlords remain responsible for boundary fences and structural garden features (retaining walls, external steps) that form part of the property structure. Tenancy agreements should be specific about garden maintenance obligations to avoid disputes at the end of the tenancy.",
      },
      {
        q: "What happens if a landlord ignores a tenant\'s repair request in Salisbury?",
        a: "If a landlord fails to respond to a repair request within a reasonable time, tenants have several remedies: reporting to Wiltshire Council\'s housing team, who can serve an Improvement Notice under the Housing Act 2004; bringing a civil claim under the Homes (Fitness for Human Habitation) Act 2018; applying for a rent repayment order; or in the most serious cases, the local authority can carry out the work and recharge the landlord. Unresolved disrepair also invalidates Section 21 notices in many circumstances.",
      },
      {
        q: 'How often must a landlord carry out a gas safety check?',
        a: "Every year. The Gas Safety (Installation and Use) Regulations 1998 require an annual check by a Gas Safe registered engineer. The Gas Safety Record must be provided to the tenant within 28 days of the check. There is no exemption for 'new' appliances or recently purchased properties — the obligation runs from the start of every tenancy and continues annually throughout.",
      },
      {
        q: 'What is an EICR and how often do landlords need one in England?',
        a: 'An EICR (Electrical Installation Condition Report) is a formal inspection of the fixed electrical installation in a rental property by a qualified electrician. Under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, all private landlords in England must carry out an EICR at least every five years. Faults identified must be remedied within 28 days, and copies must be provided to tenants and the local authority on request. Non-compliance can result in a financial penalty of up to £30,000.',
      },
      {
        q: 'Can a landlord use a general handyman for routine property maintenance in Salisbury?',
        a: 'Yes — for general maintenance, repairs, and improvement work that does not require specialist certification. A fully insured professional handyman is the right choice for most routine landlord maintenance: between-tenancy preparation, minor repairs, painting, carpentry, outdoor maintenance. For gas work (annual safety check, appliance service), you need a Gas Safe engineer. For the EICR, you need a qualified electrician. FixWell Services provides fully insured handyman and property maintenance services for landlords across Salisbury and Wiltshire.',
      },
      {
        q: 'What are the consequences of failing to carry out repairs as a landlord?',
        a: "Consequences range from civil to criminal depending on the breach. Failing to provide a Gas Safety Certificate is a criminal offence. Failing to arrange an EICR can result in a civil penalty of up to £30,000. Persistent failure to carry out general repairs can result in: rent repayment orders (tenants can claim back up to 12 months' rent); improvement notices from the local authority; orders to carry out works; and invalidation of Section 21 notices that would otherwise allow the landlord to recover possession.",
      },
    ],
  },

  'home-maintenance-schedule-uk': {
    metaDescription:
      'Annual home maintenance schedule for UK homeowners — seasonal checklist across spring, summer, autumn, and winter, which tasks require a professional, and how to protect older properties in Salisbury and Wiltshire.',

    intro:
      'A home maintenance schedule is the single most cost-effective habit a homeowner can develop. The alternative — reacting to problems as they arise — is consistently more expensive and more stressful. A blocked gutter caught in October costs £60–£90 to clear; the same blockage left until spring can cause fascia rot, wall saturation, and internal damp that costs thousands to repair. This annual schedule is calibrated for UK homes, with particular attention to the seasonal patterns of Wiltshire and the specific vulnerabilities of older properties that make up a significant proportion of housing stock in Salisbury and surrounding villages.',

    sections: [
      {
        heading: 'Why a Home Maintenance Schedule Matters for UK Properties',
        body: "Reactive maintenance consistently costs more than preventative maintenance — often three to ten times more when damage has time to compound. UK-specific failure modes make proactive scheduling particularly valuable: the freeze-thaw cycle damages mortar, brick, paving, and roof materials; persistent autumn and winter rainfall saturates walls, blocks gutters, and tests drainage; and the high proportion of pre-1950 housing stock in areas like Salisbury introduces specific vulnerabilities — no cavity wall insulation, solid walls that absorb and transmit moisture, older roof materials with limited remaining life. Budgeting for routine maintenance also makes financial sense: property professionals recommend setting aside 1–3% of a property\'s value per year. For a £300,000 Salisbury home, that is £3,000–£9,000 annually — far less than a single significant failure event.",
      },
      {
        heading: 'Spring Maintenance Tasks (March–May)',
        body: "Spring is the post-mortem season for winter damage and the preparation season for summer work. Priority tasks: inspect gutters and downpipes for blockages caused by autumn and winter leaf accumulation, and check for any frost-damaged sections; survey roof tiles for slippage, cracking, or loss caused by winter storms — binoculars from ground level work for an initial check; inspect external paintwork and woodwork for peeling, cracking, or opening joints, which need addressing before moisture penetrates further; check patio and paving for frost-heaved slabs or widened joint lines; inspect boundary fences and gates for storm damage and post movement; check the boiler after its winter workload, ideally having it serviced before it is turned off for summer (or booking it early before autumn demand peaks); aerate and treat the lawn after winter compaction.",
      },
      {
        heading: 'Summer Maintenance Tasks (June–August)',
        body: "Summer is the weather window for external maintenance work — dry, warm conditions are essential for exterior painting, woodwork treatment, and pointing. Key tasks: carry out exterior painting and woodwork treatment (exterior gloss, fence stain, timber preservative) while conditions are dry and above 10°C; check roof valley flashings, chimney pointing, and ridge mortar for deterioration that winter has worsened; clean and clear air bricks and ventilation points that may have been blocked during winter (critical for preventing timber decay and condensation); treat timber decking and garden furniture before UV and rain cause significant degradation; check and address garden drainage — soakaway blockages and surface pooling are far easier to resolve in dry conditions than under autumn rain; replace any deteriorated window putty or exterior sealant.",
      },
      {
        heading: 'Autumn Maintenance Tasks (September–November)',
        body: "Autumn is the highest-priority maintenance season for UK homes because the consequences of neglecting it arrive quickly and harshly. The most important tasks: clear gutters of fallen leaves in October or November, before consistent winter rainfall begins — this single task prevents the largest category of avoidable winter damage; check loft insulation depth and condition, and inspect any water pipes in unheated spaces; bleed all radiators to remove trapped air before the heating season begins in earnest; service the boiler in October, before the November–December rush when lead times for boiler engineers extend significantly; inspect and replace draught-proofing on external doors and windows; check external lighting and sensor coverage for shorter days; clean paths and patio with a pressure washer or patio cleaner to reduce algae and slip risk; test smoke alarms and carbon monoxide detectors (the Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022 require CO alarms in all rooms with a fixed combustion appliance).",
      },
      {
        heading: 'Which Seasonal Tasks Need a Professional Handyman in Wiltshire?',
        body: "Many maintenance tasks on this schedule are accessible to a competent homeowner. Some are better handled by a professional, either for safety or quality reasons. Working-at-height tasks — gutter clearing, roof tile inspection, exterior painting above first-floor level, chimney inspection — should be handled by a professional with appropriate ladders or scaffold tower access; ladder falls account for a significant proportion of DIY injuries in the UK. Fence post repair requiring concrete setting, repointing of chimney stacks or external walls, and boiler-adjacent controls and thermostat work all benefit from professional involvement. For homeowners in Salisbury and Wiltshire who want a single pre-winter visit that addresses all the main maintenance tasks — gutter clearing, fence check, draught-proofing, outdoor lighting, minor repairs — FixWell Services provides a seasonal property maintenance visit that works through the list in a single day.",
      },
    ],

    faqs: [
      {
        q: 'How much should I budget for annual home maintenance in the UK?',
        a: "Property professionals typically recommend budgeting 1–3% of the property\'s value per year for maintenance and repairs. For a £300,000 property in Salisbury, that is £3,000–£9,000 annually. Most homeowners spend toward the lower end in good years, with larger expenditure when roofing, structural, or major systems work is due. Consistent preventative maintenance over time reduces the likelihood of large sudden expenditure.",
      },
      {
        q: 'How often should I have my gutters cleared in Wiltshire?',
        a: 'For most properties in Wiltshire, gutter clearing once a year in autumn — October to November, after the main leaf fall — is sufficient. Properties with overhanging trees may need clearing twice a year, once in late autumn and once in early spring. Blocked gutters are one of the most common causes of preventable building damage in the UK, so this is a high-priority annual task.',
      },
      {
        q: 'What is the best time of year to have exterior painting done in the UK?',
        a: "The ideal window for exterior painting and woodwork treatment in the UK is May to September, when temperatures are consistently above 10°C and rainfall is lower. Avoid painting in the morning when dew or moisture may be present on the surface. In Wiltshire, the driest months are typically June and July, making this the optimal period for exterior work on older stone or render-faced properties.",
      },
      {
        q: 'Do I need to test smoke alarms annually in a UK property?',
        a: "Yes. The Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022 require working smoke alarms on every floor of a residential property and a carbon monoxide alarm in every room with a fixed combustion appliance (gas boiler, log burner, open fireplace). Alarms should be tested monthly by pressing the test button, and batteries replaced annually. For rental properties, landlords must ensure alarms are working at the start of each tenancy.",
      },
      {
        q: 'When is the best time to service a boiler in the UK?',
        a: "October is the optimal month for boiler servicing in most UK homes. This is late enough in the year that the boiler has done some of the work that might reveal emerging issues, but early enough to book ahead of the November–December rush when Gas Safe engineers have the longest lead times. Servicing also ensures the boiler runs efficiently through the period of heaviest use.",
      },
      {
        q: 'Which home maintenance tasks can a professional handyman in Salisbury help with?',
        a: 'FixWell Services carries out a range of annual maintenance tasks across Salisbury and Wiltshire: gutter clearing (including working at height safely), fence repair and post concreting, draught-proofing doors and windows, painting and external woodwork treatment, path and patio anti-slip cleaning, minor roof tile inspections from ground level, and general pre-winter property condition checks. Call +44 7391 599 078 to discuss a seasonal maintenance visit.',
      },
    ],
  },

  'how-to-find-reliable-handyman-wiltshire': {
    metaDescription:
      'How to find a reliable handyman in Wiltshire — what questions to ask before booking, insurance requirements, red flags to avoid, how to verify legitimacy, and what a professional handyman service looks like.',

    intro:
      'Finding a reliable handyman in Wiltshire should be straightforward, but the combination of an unregulated trade, a fragmented local market, and the consequences of getting it wrong means it deserves careful attention. A poor-quality or uninsured handyman can leave you with substandard work, property damage, and no recourse. A good one becomes an invaluable long-term resource. This guide explains exactly what to look for, what questions to ask, and how to spot the warning signs — so that finding a trustworthy professional in Salisbury or the surrounding Wiltshire area is a process with a reliable outcome rather than a gamble.',

    sections: [
      {
        heading: 'Why Vetting Your Handyman Matters',
        body: "Inviting a tradesperson into your home is a significant trust decision. Unlike regulated trades such as Gas Safe engineering or Part P electrical work, general handyman services in the UK are not subject to mandatory licensing — anyone can describe themselves as a handyman and begin working. This means the quality, competence, and insurance position of individuals operating in the market varies widely. The consequences of choosing poorly range from inconvenient (poor-quality work that needs to be redone) to financially serious (property damage with no insurance recourse, or a dispute over a cash payment with no written record). According to the Department for Business and Trade, rogue trader activity costs UK consumers hundreds of millions of pounds annually. Knowing how to identify a trustworthy professional protects your property and your money.",
      },
      {
        heading: 'Key Questions to Ask a Handyman Before Booking',
        body: "Before confirming any booking, ask these questions: Are you fully insured, and can you provide a copy of your public liability insurance certificate? (Minimum cover £1 million; professional services typically carry £2 million.) Can you provide a written quote? (For any job above a trivial cost, this is non-negotiable.) Do you have Google reviews or references I can check? (Verifiable, third-party reviews carry far more weight than testimonials on a personal website.) How long have you been operating in this area? (Local presence builds accountability.) What happens if the work is not completed to a satisfactory standard — do you have a complaints process? How do you prefer to invoice — bank transfer or cheque? (Cash-only is a red flag.) A professional handyman will answer all of these without hesitation.",
      },
      {
        heading: 'Red Flags and Warning Signs',
        body: "Be cautious of: cash-only payment demanded before work starts — this is the clearest single warning sign of a rogue trader; refusal to provide a written quote or a deliberately vague verbal estimate that can shift upward once the job has started; high-pressure urgency tactics ('I can only do it this week at this price'); inability to provide an insurance certificate or a business address; no verifiable online presence — Google Business Profile, Checkatrade listing, or equivalent; doorstep cold-calling, particularly following a storm or other weather event, which is a common rogue trader approach; and a price dramatically below the market rate, which typically signals either inexperience, no insurance, or work that will be abandoned or done badly.",
      },
      {
        heading: 'How to Verify a Handyman Is Legitimate in Wiltshire',
        body: "Google Business Profile reviews are your first stop: search for the business by name and check both the rating and the content of recent reviews. Look for patterns in negative reviews — repeat complaints about the same type of issue (incomplete work, pricing disputes, no-shows) are significant. If the handyman or company claims to be a limited company, verify on Companies House (search.companieshouse.gov.uk). Ask to see their public liability insurance certificate and check the policy is current and covers the type of work they will be carrying out. Wiltshire-specific recommendations: Nextdoor, local Facebook groups (Salisbury community groups are active), and recommendations from Wiltshire estate agents and letting agents who deal with reliable contractors regularly are all strong verification routes in a community where reputation is visible.",
      },
      {
        heading: 'What a Professional Handyman Service in Wiltshire Looks Like',
        body: "A professional handyman service in Wiltshire or Salisbury will have: a physical local presence with a verifiable address; full public liability insurance they can evidence on request; a process for providing written quotes (fixed price or hourly estimate with a cap); contactable by phone during working hours and responsive to email or message; verifiable Google reviews from recent customers; transparency about what falls within and outside their scope; and a clear approach to invoicing that does not require cash-only upfront payment. FixWell Services meets all of these criteria: fully insured, locally based in Salisbury, transparent pricing, with a contact number (+44 7391 599 078) and email (sales@fixwellservices.co.uk) for quotes and bookings across Salisbury and Wiltshire.",
      },
    ],

    faqs: [
      {
        q: 'Should a handyman be insured in Wiltshire?',
        a: "Yes. Any professional handyman working in your property should carry public liability insurance with a minimum of £1 million cover. This protects you if the handyman causes damage to your property or injury to a third party during the work. Always ask for proof of insurance before work starts. A professional will provide this without hesitation — reluctance to do so is a clear red flag.",
      },
      {
        q: 'What is TrustMark and should I look for a TrustMark handyman?',
        a: "TrustMark is a government-endorsed quality scheme for tradespeople in the UK. TrustMark registered firms are vetted for technical competence, insurance, trading standards compliance, and customer service processes. Finding a TrustMark or similar scheme member (Checkatrade, Which? Trusted Traders) provides an additional layer of assurance beyond individual reviews. It is not a mandatory requirement, but it is a useful positive signal.",
      },
      {
        q: 'How do I find a reliable handyman in Salisbury specifically?',
        a: "The most reliable routes in Salisbury are: personal recommendations from neighbours and friends; Google reviews for locally listed handyman businesses; local Facebook groups and Nextdoor where community members share contractor experiences; and Checkatrade or similar platforms with verifiable reviews. FixWell Services is locally based in Salisbury, fully insured, and has a track record of positive reviews from customers across Salisbury and Wiltshire.",
      },
      {
        q: 'What should be included in a written quote from a handyman?',
        a: "A written quote should include: a description of the specific work to be carried out; a breakdown of labour cost (hourly rate or fixed price); any materials to be supplied and their approximate cost; the basis on which the price could change (for hourly work); the expected duration of the job; and payment terms. A professional handyman should be able to provide this by email or message before work starts.",
      },
      {
        q: 'Can I report a rogue trader handyman in Wiltshire?',
        a: "Yes. If you believe you have been a victim of rogue trader activity, contact Citizens Advice (0808 223 1133), which will refer serious cases to Trading Standards. Trading Standards Wiltshire operates through Wiltshire Council. You can also report to Action Fraud (0300 123 2040) if criminal fraud has occurred. Leaving an honest public review on Google is also a valuable warning for other local consumers.",
      },
      {
        q: 'Is there a difference in reliability between sole-trader and larger handyman companies?',
        a: "Not inherently — sole traders and small companies can be equally reliable or unreliable. What matters is insurance, verifiable reviews, local presence, and professional conduct — not business size. Some of the most reliable handymen operating in Wiltshire are experienced sole traders who have built a strong local reputation over many years. Use the questions and verification steps above regardless of business size.",
      },
    ],
  },

  'when-do-you-need-emergency-handyman': {
    metaDescription:
      'When to call an emergency handyman — what counts as a home emergency, burst pipes, broken locks, electrical faults, storm damage, heating failure, and how to get same-day help in Salisbury (+44 7391 599 078).',

    intro:
      "Not every home repair is urgent, but some are — and misidentifying an emergency as a routine job can turn a manageable problem into a serious one. A slowly weeping pipe joint that drips inside a wall cavity over several days causes far more damage than one that causes an obvious emergency and gets fixed immediately. Understanding which repairs genuinely cannot wait — and knowing what to do in the time before a professional arrives — is practical knowledge that every homeowner should have before they need it.",

    sections: [
      {
        heading: 'What Counts as a Home Emergency?',
        body: "A home emergency is any situation that meets one of three criteria: it poses an immediate risk to the physical safety of people in or near the property; it compromises the security of the property (it is no longer lockable or weatherproof); or it involves active progressive damage that will multiply significantly if not addressed within hours rather than days. The third category is the one most commonly underestimated. A burst pipe in a wall cavity that is not making noise but is slowly saturating insulation, timber, and plasterboard may not feel like an emergency until the damage is revealed — at which point remediation costs have multiplied many times over the original pipe repair cost. When in doubt, treat a suspected progressive problem as an emergency until proven otherwise.",
      },
      {
        heading: 'Plumbing Emergencies: What to Do First',
        body: "Active plumbing leaks — a burst or rapidly weeping pipe, a joint failure under a floor or within a wall, or an overflow that is not clearing — require immediate action before the professional arrives. First: turn off the water at the stopcock. In most UK homes this is under the kitchen sink or where the supply pipe enters the property through the floor or wall; if you do not know where yours is, find it before you need it. Second: turn off the boiler — continued pressurisation against a burst pipe worsens the leak. Third: open cold taps to drain water from the system and reduce ongoing flow. Mop up as much surface water as you can to reduce secondary damage to floors, carpets, and subfloor. Signs that the source is not immediately visible — staining on ceilings, bubbling paint on walls, wet carpet without obvious cause — also warrant emergency investigation.",
      },
      {
        heading: 'Electrical Emergencies: What to Do First',
        body: "Electrical emergencies require a conservative initial response — your priority is isolation and safety, not diagnosis. If circuits are tripping and will not reset, if there is a burning smell from sockets, appliances, or the consumer unit, if there is visible scorching around switch plates or sockets, or if part of your home has lost power without an obvious cause (a tripped individual circuit is not an emergency), isolate the affected circuit at the consumer unit and do not attempt to investigate behind switch or socket plates yourself. A burned smell from a consumer unit or junction box is a structural electrical fault and requires immediate professional attention. Do not use that circuit. Smoke and carbon monoxide detector alerts in the absence of visible cause should be treated as genuine alerts rather than false alarms until confirmed otherwise.",
      },
      {
        heading: 'Security and Storm Damage Emergencies',
        body: "A compromised entry point to your home — a broken or jammed front or rear door lock, a storm-damaged door or window frame that cannot be secured, or damage that leaves a visible opening to the weather or to access from outside — is a same-day emergency. Your home is not secure, and both your safety and your home insurance policy (most policies require you to take 'reasonable steps' to prevent further loss) require prompt action. Emergency boarding or lock repair provides temporary security until a permanent repair can be made. Do not wait until the next working day for a security breach. Storm damage to roof sections, particularly where internal water ingress has begun, is also a same-day priority — the longer the opening remains, the greater the secondary damage to ceilings, walls, and structure.",
      },
      {
        heading: 'Getting Same-Day Emergency Help in Salisbury',
        body: "When you need emergency handyman help in Salisbury or Wiltshire, immediate response matters. FixWell Services provides same-day emergency response for the following: emergency lock repair and door boarding; plumbing leak investigation and temporary repair (pending specialist plumber attendance if required); storm damage inspection and temporary boarding; and general emergency property repair. Call FixWell Services on +44 7391 599 078 for same-day emergency response across Salisbury and the surrounding Wiltshire area. For gas emergencies (smell of gas, suspected gas leak) always call the National Gas Emergency Service first on 0800 111 999, which is free, 24 hours, and handles immediate gas safety situations.",
      },
    ],

    faqs: [
      {
        q: 'What should I do first in a home emergency in Salisbury?',
        a: "Prioritise safety first: if there is any risk to personal safety, get people out and call emergency services. For plumbing emergencies, turn off the stopcock. For electrical issues, isolate the circuit at the consumer unit. For gas emergencies, leave the building and call 0800 111 999. Then call FixWell Services on +44 7391 599 078 for same-day emergency handyman response.",
      },
      {
        q: 'What is the national gas emergency number?',
        a: "The National Gas Emergency Service number is 0800 111 999. This is free, available 24 hours a day, seven days a week, and covers any gas emergency — smell of gas, suspected gas leak, or concerns about gas appliances. If you smell gas, open windows, leave the building, do not use switches or appliances, and call this number immediately before calling any other service.",
      },
      {
        q: 'Is a broken door lock an emergency?',
        a: "Yes — any situation where your home cannot be secured is a same-day emergency. A broken or jammed door lock leaves your property unsecured against access and may also affect the validity of your home insurance policy, which typically requires you to take reasonable steps to prevent loss. FixWell Services carries out emergency lock repair and temporary boarding across Salisbury on the same day.",
      },
      {
        q: 'What should I do if my pipe bursts while I am away?',
        a: "If you are away and discover via a neighbour or alert system that a pipe has burst: ask a trusted neighbour to turn off the stopcock if they have access and know where it is. Call FixWell Services on +44 7391 599 078 — we work with remote landlords and homeowners who need emergency response without being physically present. Notify your home insurer as promptly as possible — delayed notification can affect your claim.",
      },
      {
        q: 'Does a handyman cover emergency repairs or only planned work?',
        a: "A professional handyman service covers both planned work and emergency response. FixWell Services provides same-day attendance for genuine emergencies across Salisbury and Wiltshire. Emergency response covers: lock failure and boarding; visible active leaks (as a temporary measure pending specialist plumber attendance where required); storm damage boarding; electrical fault investigation at the surface level (safely, within handyman scope); and general urgent property repairs.",
      },
      {
        q: 'How quickly can FixWell Services respond to an emergency in Salisbury?',
        a: "For genuine emergencies — broken locks, storm damage, burst pipes — FixWell Services aims for same-day response across Salisbury. Call +44 7391 599 078 as early as possible in the day. For out-of-hours emergencies, leave a message and we will call back at the earliest opportunity. Salisbury city and close surroundings are typically reachable within 30–60 minutes during working hours.",
      },
    ],
  },

  'diy-vs-professional-home-repairs-uk': {
    metaDescription:
      "DIY vs professional home repairs in the UK — what the law allows, where DIY becomes risky, the true cost of failed DIY, UK legal restrictions on gas and electrical work, and how to make the right call for your Salisbury home.",

    intro:
      "The DIY versus professional handyman decision is not a binary choice between incompetence and expertise — it is a practical calculation about competence, legal scope, tools, risk, and cost of failure. Many home repairs are well within reach of a capable, safety-conscious homeowner. Others carry legal restrictions, insurance implications, or failure costs that make professional involvement the sensible choice regardless of skill level. This guide maps out the terrain clearly so UK homeowners can make the right call for each job rather than applying a blanket rule in either direction.",

    sections: [
      {
        heading: 'The Case for DIY',
        body: "DIY home maintenance genuinely makes sense for a wide range of tasks. Simple cosmetic work — painting a room, filling small cracks and touching up, hanging pictures and mirrors, replacing door handles and cabinet fittings, assembling flat-pack furniture, cleaning and treating decking — requires no specialist knowledge and produces good results with standard tools. Minor plumbing tasks that do not involve the main supply or drainage connections — replacing a tap washer, unblocking a sink, fitting a new toilet seat, cleaning a showerhead — are well within reach. Replacing like-for-like light fittings or switches in rooms outside kitchens and bathrooms is also DIY-permissible under Part P of the Building Regulations. For these jobs, DIY saves money and builds useful knowledge of your own property. The internet and video guides have made basic maintenance techniques accessible to any motivated homeowner.",
      },
      {
        heading: 'UK Legal Restrictions on DIY Home Repairs',
        body: "The UK places firm legal restrictions on certain categories of home repair work — restrictions that apply regardless of how competent the homeowner is. Gas work is the clearest example: under the Gas Safety (Installation and Use) Regulations 1998, any work on gas appliances, gas pipes, or gas fittings must be carried out by a Gas Safe registered engineer. This includes connecting or repositioning appliances, not just installation from scratch. Attempting this work without registration is a criminal offence. For electrical work, Part P of the Building Regulations defines 'notifiable' work that must be carried out by a certified competent person: new circuits, consumer unit replacement, and all electrical work inside kitchens and bathrooms. If you carry out notifiable electrical work yourself and cannot certify it through a competent person scheme, it creates problems when you sell the property and may void your buildings insurance for related claims.",
      },
      {
        heading: 'Where DIY Becomes Dangerous or Costly',
        body: "Beyond the legal restrictions, several practical risk categories make professional involvement the better choice. Working at height is responsible for a significant proportion of DIY injuries in the UK each year — ladder accidents during gutter clearing, roof tile adjustment, and painting upper-floor windows are entirely preventable with a professional carrying the right equipment. Waterproofing and damp treatment are high-failure DIY categories: misdiagnosis of the damp source is very common, and treating the symptom (painting a damp-proof product on an interior wall) while the cause (blocked gutterdefective pointing, bridged DPC) continues leads to recurring and worsening problems. Asbestos is present in a significant proportion of UK homes built before 2000 — in Artex ceilings, floor tiles, pipe insulation, and roof materials — and must be handled according to HSE guidance; disturbing it during a DIY repair without awareness of its presence carries real health risk.",
      },
      {
        heading: 'The True Cost of a Failed DIY Repair',
        body: "The financial risk of failed DIY is systematically underestimated because the initial saving is visible and the potential failure cost is not. Common failure modes and their costs: a DIY plumbing repair that creates a slow concealed leak saturates wall cavities, subfloor timbers, and insulation — the resultant replastering, decoration, and damp remediation can cost £1,500–£5,000 against a £40 professional repair. An improperly hung door — hung without adequately checking for plumb and square — causes progressive frame damage, draught, security compromise, and eventually frame replacement. Poorly mixed or applied external render lets in penetrating damp that affects internal walls over a subsequent winter. A fence post set without being properly concreted in fails in the first significant storm, requiring a more extensive repair than the original installation. When the cost of getting it wrong is high relative to the saving, professional involvement is the right economic decision.",
      },
      {
        heading: "The Margin Call: Deciding When to Call a Professional Handyman",
        body: "For borderline jobs — tasks that sit between 'straightforward DIY' and 'obviously specialist' — a practical decision framework helps. Ask four questions: Am I genuinely confident with this specific task, not just the general category? (Being confident at painting does not mean being confident at external rendering.) Do I have the right tools? (A lack of the right tool is often where amateur repairs go wrong.) Is this a legally notifiable activity under UK Building Regulations or the Gas Safety Regulations? And: what is the realistic cost if this goes wrong? If the answer to any of these creates doubt, the investment in a professional handyman at £20–£40 per hour is almost always the better use of money. FixWell Services handles exactly the jobs that sit at this margin — competent, insured, and efficient — for homeowners across Salisbury and Wiltshire.",
      },
    ],

    faqs: [
      {
        q: 'Can I legally do my own plumbing in the UK?',
        a: "Most plumbing repairs can be carried out by a homeowner: replacing tap washers and cartridges, unblocking drains and waste pipes, replacing toilet seats and cistern mechanisms, and fixing visible pipe leaks. You cannot legally carry out gas work without Gas Safe registration. Connecting to or significantly altering the main water supply or public drainage may require notification to your water supplier or local authority. If the work is above your confidence level, always use a professional.",
      },
      {
        q: 'Can DIY home repairs affect my home insurance in the UK?',
        a: "Yes. If DIY work that was required to meet Building Regulations was carried out without certification (notifiable electrical work, for example), your insurer may decline a related claim or query the work at renewal. If a DIY repair fails and causes subsequent damage, your insurer may argue the repair was not carried out to a reasonable standard and reduce or reject the claim. Major repairs should be documented; notifiable work should be certified through a competent person scheme.",
      },
      {
        q: 'Is asbestos a risk in older UK homes during DIY?',
        a: "Yes. Asbestos-containing materials are present in many UK homes built before 2000. Common locations include: Artex textured ceilings, vinyl floor tiles, window putty in pre-1990 homes, cement roof tiles (Asbestos Cement), soffit boards, pipe insulation lagging, and insulation board around boilers. The HSE advises homeowners to treat any material in a pre-2000 home as potentially asbestos-containing before disturbing it. An asbestos survey by a licensed surveyor is advisable before any significant renovation work on pre-2000 properties.",
      },
      {
        q: 'What electrical work am I allowed to do myself in the UK?',
        a: "You may replace like-for-like sockets, switches, and light fittings in rooms other than kitchens and bathrooms without a qualified electrician. You may not install new circuits, replace the consumer unit (fuse box), or carry out any electrical work within a bathroom or kitchen without using a Part P qualified competent person who can certify the work. Attempting notifiable electrical work yourself without certification creates a Building Regulations compliance problem that affects property sale and home insurance.",
      },
      {
        q: 'How do I know if a DIY repair is within my competence?',
        a: "A reliable self-assessment: Can I describe exactly how this repair should be done, step by step, before starting? Do I have the specific tools the job requires (not an approximation)? Have I done this specific type of repair before with a good result? If any of these is uncertain, find a professional for this specific job. Confidence in a related skill does not transfer automatically — someone who can hang wallpaper proficiently may not have the plastering knowledge to achieve a smooth repair to a blown plaster section.",
      },
      {
        q: 'When is it worth calling a handyman instead of doing it yourself?',
        a: "When the cost of getting it wrong — in materials, consequential damage, or remediation — significantly exceeds the cost of professional labour. This is almost always true for: any working-at-height task without the right equipment; waterproofing and damp treatment (where misdiagnosis is expensive); concealed pipe or electrical repairs where a poor repair could cause hidden damage; and jobs where the result needs to be to a professional standard for resale or insurance reasons. FixWell Services covers all of these for homeowners in Salisbury and Wiltshire at £20–£40 per hour.",
      },
    ],
  },

  'preparing-home-for-winter-uk': {
    metaDescription:
      'Preparing your home for winter in the UK — gutter clearing, pipe insulation, boiler servicing, roof inspection, draught-proofing, and which tasks need a professional handyman in Salisbury and Wiltshire.',

    intro:
      "Winter arrives gradually in Wiltshire — a sequence of wetter months, the first hard frosts, and eventually a period of sustained cold and damp that tests every element of a property\'s envelope. The window to prepare is September through November, and the cost of missing it is measured in burst pipes, saturated walls, and boiler breakdowns at the worst possible time. This guide takes a systematic approach to winter preparation for UK homes, with particular attention to older properties in Salisbury and the wider Wiltshire area where specific vulnerabilities — solid walls, older roof materials, and limited insulation — make proactive preparation especially worthwhile.",

    sections: [
      {
        heading: 'Why Autumn Is the Right Time to Winter-Proof Your Wiltshire Home',
        body: "Wiltshire sits in the south-west of England, where winter brings persistent rainfall, occasional hard frosts, and periods of sustained damp that differ from the colder but drier winters of more northerly regions. The county\'s building stock includes a high proportion of pre-1950 properties — solid-walled Victorian and Edwardian houses, older stone cottages, and Georgian terrace buildings in Salisbury\'s conservation area — that have no cavity wall insulation and are built with materials (lime mortar, natural stone, older brickwork) that respond differently to winter moisture than modern construction. For these properties especially, preparation in October is significantly more effective than emergency responses in December. Boiler engineers have a six-week wait by November. Damp-damaged plaster from a wet winter takes months to dry out enough to redecorate. Frozen pipes in an uninsulated loft can fail in the first week of a cold snap.",
      },
      {
        heading: 'Gutters, Drainage, and Water Management Before Winter',
        body: "Gutters are the most consequential single maintenance task ahead of winter. Autumn leaf fall in October and November blocks gutters rapidly, and once a gutter overflows consistently, it directs water against fascias (causing rot), against soffit boards (causing rot and beetle ingress), against external walls (causing saturation and penetrating damp), and in older properties, potentially into the wall cavity or against foundation masonry. Clear gutters in late October or early November — after the majority of leaf fall, before consistent winter rainfall begins. Check all downpipes are free-flowing and draining away from the building rather than pooling at the base of the wall. In Wiltshire\'s clay vale areas particularly, surface drainage away from the building should be checked — compacted or clay-heavy gardens can redirect surface water toward foundations rather than away from them.",
      },
      {
        heading: 'Pipes, Boiler, and Heating System Preparation',
        body: "Pipe insulation in unheated spaces is straightforward and inexpensive but frequently overlooked. Foam tube lagging from a builders merchant costs very little and significantly reduces freeze risk in loft spaces, garage utility runs, and pipes under suspended floors. Before winter, locate and test your stopcock — the isolation valve on the incoming supply pipe, typically under the kitchen sink or where the supply enters through the floor. Corroded or seized stopsocks that will not turn quickly are common in older properties; having this sorted in October rather than in an emergency in January matters. Boiler servicing is ideally done in October before demand for Gas Safe engineers peaks sharply in November and December. Bleeding radiators — releasing trapped air through the bleed valve — ensures even heat distribution and improves efficiency. Review thermostat settings and timing programmes to avoid wasting energy in empty rooms while ensuring the property stays above 12°C throughout to prevent condensation and freeze risk.",
      },
      {
        heading: 'Roof, Walls, and Exterior Envelope Inspection',
        body: "A basic ground-level roof inspection with binoculars in September or October can identify issues before they become expensive winter damage. Look for: missing or slipped tiles (any gap or disrupted pattern is a potential entry point for water and vermin); cracked or raised ridge tiles (mortar failure is common after a hot, dry summer followed by early frost); deteriorating flashings at chimney bases, abutments, and valley lines; and for flat roof sections, any standing water suggesting a blocked outlet or sagging section. For Salisbury properties with active or decorative chimneys, check chimney stack pointing — the mortar between bricks above the roofline is exposed to the most severe weathering and typically needs attention every 10–15 years. Blocked or open chimney flues in unused fireplaces should be capped or baffled to prevent downdraught and rain entry.",
      },
      {
        heading: 'Doors, Windows, Draught-Proofing, and Getting Professional Help',
        body: "Draught-proofing is one of the highest-return-on-investment maintenance tasks for older Wiltshire homes. Timber doors and windows expand and contract significantly with seasonal moisture, and draught-proofing seals (brush strips, compression seals, threshold strips) that were adequate last winter may have failed or compressed. Check all external doors for cold air ingress at the threshold, frame sides, and letterbox. Re-apply draught-proofing tape or replace deteriorated compression seals where needed. Have sticking or ill-fitting external doors adjusted in autumn rather than leaving them — damp winter conditions cause further timber movement that makes the problem worse. For tasks that require working at height — gutter clearing, roof tile inspection, painting upper-floor window frames — a professional handyman with the appropriate ladder or scaffold tower access is the safer and often more efficient choice. FixWell Services provides autumn and winter property preparation services across Salisbury and Wiltshire, including gutter clearing, pipe insulation, draught-proofing, minor structural checks, and general pre-winter condition visits.",
      },
    ],

    faqs: [
      {
        q: 'How do I stop my pipes freezing in winter?',
        a: "Insulate any pipes in unheated spaces — loft, garage, utility room, under suspended floors — with foam tube lagging. Keep heating on a low setting (at least 12°C) in unoccupied rooms, including short-term empty properties. Know where your stopcock is and ensure it turns freely. If leaving the property unoccupied for more than a few days in cold weather, consider draining the system or asking someone to check the property regularly.",
      },
      {
        q: 'When should I book a boiler service before winter?',
        a: "October is the ideal month. Gas Safe engineers are in high demand from November onwards as the heating season begins and breakdowns accumulate. Booking in October ensures you get a preferred time slot, any identified issues can be resolved before cold weather, and the boiler enters the winter period known to be in good condition. Many boiler warranties also require annual servicing to remain valid.",
      },
      {
        q: 'Is gutter clearing a DIY task or does it need a professional?',
        a: "Single-storey gutters are accessible to a confident DIYer with a stable ladder and the right weather conditions. Two-storey and higher gutters, valley gutters, and any gutters that require working above a conservatory, porch, or extension roof are significantly riskier and better handled by a professional with a scaffold tower or high-level access equipment. FixWell Services carries out gutter clearing across Salisbury and Wiltshire, including properties where access requires appropriate equipment.",
      },
      {
        q: 'Can a handyman help prepare my Salisbury home for winter?',
        a: "Yes. FixWell Services provides autumn property preparation visits covering: gutter clearing, pipe insulation checking, draught-proofing doors and windows, fence inspection and repair, minor tile inspection from ground level, path anti-slip cleaning, and general pre-winter condition assessment. A single visit in October can work through the most important items on the schedule. Call +44 7391 599 078 to arrange.",
      },
      {
        q: 'How do I check my roof before winter without going up on it?',
        a: "A ground-level inspection with binoculars is sufficient for an initial assessment. Look for disrupted tile patterns, visible gaps, raised or cracked ridge tiles, and deteriorated flashings at chimney and wall junctions. After any significant storm, repeat the check. Any concerns — particularly missing tiles or visible gaps — warrant a closer inspection by a roofing professional. A handyman can carry out a visual inspection from a safe elevated position (scaffold tower) and identify areas requiring specialist roofer attention.",
      },
      {
        q: 'What is the most important winter preparation task for an older Wiltshire property?',
        a: "For most pre-1950 properties in Salisbury and Wiltshire, the highest-priority single task is gutter clearing. Solid-walled older buildings absorb and transmit moisture far more readily than modern cavity-wall construction, and sustained water running against external walls from overflowing gutters causes penetrating damp that is expensive to remediate. Gutter clearing in late October — before consistent winter rainfall — has the highest return on investment of any single maintenance task for this property type.",
      },
    ],
  },
};
