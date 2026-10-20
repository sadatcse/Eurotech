// Company content from the EuroTech brochure ("Total Solutions for STP & ETP").
// Pages read from here — edit text, specs or images in this one file.

export const ABOUT = {
  intro:
    'EuroTech Corporation is an engineering and technology solutions company operating across water treatment, wastewater treatment, industrial process equipment, environmental engineering, automation and IT infrastructure.',
  body: [
    'Our solutions cover the treatment and management of water and wastewater, including Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), Reverse Osmosis (RO), Softener Plants, Iron Removal Plants, Demineralization (DM) Plants, Salinity Water Treatment, Rainwater Harvesting and Zero Liquid Discharge (ZLD) systems.',
    'Our equipment and technology portfolio includes blowers, diffusers, flow meters, pumps, air-operated diaphragm pumps, dosing systems, sensors, transmitters, filtration media, treatment chemicals and other ETP/STP machinery. Alongside this, EuroTech provides selected IT infrastructure services including website design and development, custom web applications and digital marketing.',
    'This breadth allows us to work as a solution-oriented engineering partner rather than solely an equipment supplier — selecting the treatment process, specifying the mechanical package, and integrating the instrumentation and controls that keep the plant measurable and controllable.',
  ],
  vision:
    'To contribute to a cleaner, more sustainable and water-efficient future through reliable engineering, responsible environmental technologies and continuous technological development.',
  mission:
    'To deliver efficient, sustainable and innovative water, wastewater and engineering solutions that support industrial and commercial operations while reducing environmental impact and improving resource efficiency.',
};

export const CORE_VALUES = [
  { title: 'Quality', text: 'Attention to equipment quality, engineering performance and service delivery.' },
  { title: 'Sustainability', text: 'Supporting responsible water management and environmental protection.' },
  { title: 'Innovation', text: 'Applying appropriate technologies to evolving engineering challenges.' },
  { title: 'Customer Focus', text: 'Building solutions around specific operational requirements.' },
  { title: 'Reliability', text: 'Providing dependable equipment and engineering solutions.' },
  { title: 'Professionalism', text: 'Maintaining disciplined engineering and service practice.' },
];

export const CORE_BUSINESS = [
  'Water Treatment Plant (WTP)',
  'Sewage Treatment Plant (STP)',
  'Effluent Treatment Plant (ETP)',
  'Reverse Osmosis (RO) Plant',
  'Water Softener Plant',
  'Iron Removal Plant',
  'Demineralization (DM) Plant',
  'Salinity Water Treatment',
  'Rainwater Harvesting',
  'Zero Liquid Discharge (ZLD)',
  'Swimming Pool Water Treatment',
  'ETP / STP Machinery & Spare Parts',
  'Filtration Media & Chemicals',
  'Plant Operation & AMC',
];

// Our approach — project stages from first visit to after-sales
export const PROCESS = [
  { title: 'Consultation & Survey', text: 'We visit the site, study the water or wastewater and agree the treatment target with you.' },
  { title: 'Design & Engineering', text: 'We select the treatment process, size the plant and specify the mechanical and electrical package.' },
  { title: 'Installation & Commissioning', text: 'Civil, mechanical and pipeline works, followed by testing and commissioning to the design output.' },
  { title: 'Operation & Maintenance', text: 'Operator training, spare parts, servicing and annual maintenance contracts that keep the plant compliant.' },
];

export const SOLUTIONS = [
  {
    slug: 'effluent-treatment-plant',
    short: 'ETP',
    title: 'Effluent Treatment Plant (ETP)',
    image: '/images/plants/etp.jpg',
    summary: 'Cleans industrial wastewater so it can be safely discharged or reused.',
    description: [
      'An Effluent Treatment Plant (ETP) is used to clean dirty water from factories. It removes harmful materials, chemicals, dirt and other pollutants from wastewater.',
      'The treated water can be safely discharged or used again. An ETP usually uses physical, chemical and biological methods to clean the water.',
    ],
    lists: [
      { title: 'Types of ETP', items: ['Physio-Chemical ETP', 'Bio-Chemical ETP', 'Biological ETP — MBR, SBR, MBBR, ASP'] },
      {
        title: 'Applications',
        items: ['Textile industries', 'Food and beverage industries', 'Pulp and paper mills', 'Leather industries', 'Hospitals and pharmaceutical industries'],
      },
    ],
  },
  {
    slug: 'sewage-treatment-plant',
    short: 'STP',
    title: 'Sewage Treatment Plant (STP)',
    image: '/images/plants/hero.png',
    summary: 'Treats wastewater from homes, hotels, offices and hospitals for safe discharge or reuse.',
    description: [
      'A Sewage Treatment Plant (STP) is used to clean wastewater from homes, hotels, offices, hospitals and other buildings. It removes solid waste, dirt, organic matter, nutrients and harmful germs from the water.',
      'After treatment, the water can be safely discharged or reused.',
    ],
    lists: [
      {
        title: 'Types of STP',
        items: ['Activated Sludge Plant (ASP)', 'Sequencing Batch Reactor (SBR)', 'Moving Bed Biofilm Reactor (MBBR)', 'Membrane Bioreactor (MBR)'],
      },
      {
        title: 'Applications',
        items: ['Residential and commercial buildings', 'Hospitals and pharmaceutical industries', 'Textile and garments industries', 'Municipal wastewater'],
      },
    ],
  },
  {
    slug: 'reverse-osmosis-plant',
    short: 'RO',
    title: 'Reverse Osmosis (RO) Plant',
    image: '/images/plants/ro.jpg',
    summary: 'Produces high-quality, pure water by removing dissolved salts and impurities.',
    description: [
      'A Reverse Osmosis (RO) Plant is used to make clean and pure water. It pushes water through a special membrane using high pressure.',
      'The membrane removes dissolved salts, dirt and many other impurities. RO plants are used to produce high-quality water for different purposes.',
    ],
    lists: [
      { title: 'Applications', items: ['Drinking and process water', 'Boiler feed water', 'Pharmaceutical and food production', 'Salinity water treatment'] },
    ],
  },
  {
    slug: 'water-softener-plant',
    short: 'Softener',
    title: 'Water Softener Plant',
    image: '/images/plants/softener.png',
    summary: 'Removes calcium and magnesium hardness that damages pipes and machines.',
    description: [
      'A Water Softener Plant is used to remove hardness from water. Hard water contains minerals like calcium and magnesium, which can cause problems in pipes, machines and industrial processes.',
      'A softener makes the water softer and helps machines and equipment work better.',
    ],
    lists: [{ title: 'Applications', items: ['Textile industries', 'Industrial water treatment', 'Gyms and homes', 'Commercial buildings'] }],
  },
  {
    slug: 'zero-liquid-discharge',
    short: 'ZLD',
    title: 'Zero Liquid Discharge (ZLD)',
    image: '/images/plants/etp.jpg',
    summary: 'Recovers water for reuse while producing almost no liquid waste.',
    description: [
      'A Zero Liquid Discharge (ZLD) plant treats wastewater and recovers water for reuse. It aims to produce almost no liquid waste.',
      'The water is cleaned and used again, while the remaining waste is concentrated and collected.',
    ],
    lists: [{ title: 'Main technologies', items: ['Reverse Osmosis (RO)', 'Electrodialysis', 'Evaporation', 'Crystallization'] }],
  },
  {
    slug: 'swimming-pool-water-treatment',
    short: 'Pool',
    title: 'Swimming Pool Water Treatment',
    image: '/images/plants/swimming-pool.jpg',
    summary: 'Filtration, circulation and dosing systems that keep pool water clear and safe.',
    description: [
      'We supply and install swimming pool water treatment systems for hotels, resorts, clubs and residential buildings.',
      'Circulation pumps, filtration and chemical dosing work together to keep the water clear, balanced and safe for swimmers.',
    ],
    lists: [
      { title: 'System includes', items: ['Circulation pumps', 'Sand / multimedia filtration', 'Chemical dosing and disinfection', 'Online pH and chlorine monitoring'] },
    ],
  },
];

// Smaller lines of work listed in the brochure without their own page
export const OTHER_SOLUTIONS = [
  'Water Treatment Plant (WTP)',
  'Iron Removal Plant',
  'Demineralization (DM) Plant',
  'Salinity Water Treatment',
  'Rainwater Harvesting',
  'Wastewater Recycling & Reuse',
];

export const IT_SERVICES = {
  image: '/images/plants/it-dashboard.jpg',
  intro: 'EuroTech provides selected IT services to help businesses build and manage their digital systems.',
  tagline: 'EuroTech helps businesses use modern technology to improve their daily work, online presence and digital services.',
  items: [
    'Website design and development',
    'Digital marketing',
    'IT infrastructure setup and management',
    'Business software solutions',
    'Technical support and maintenance',
  ],
};

export const PRODUCT_CATEGORIES = [
  { slug: 'aeration', title: 'Blowers & Aeration' },
  { slug: 'flow-measurement', title: 'Flow Measurement' },
  { slug: 'pumps', title: 'Pumps & Dosing' },
  { slug: 'process-equipment', title: 'Process Equipment' },
  { slug: 'instrumentation', title: 'Instrumentation & Monitoring' },
  { slug: 'media', title: 'Filtration & Bio Media' },
  { slug: 'chemicals', title: 'Treatment Chemicals' },
];

const FLOW_COMMS = ['Communication', '4~20 mA, RS485, HART, Modbus'];

export const PRODUCTS = [
  {
    slug: 'roots-air-blower',
    category: 'aeration',
    name: 'Roots Air Blower',
    images: ['/images/products/roots-blower.jpg'],
    specs: [
      ['Type', 'Twin lobe'],
      ['Capacity', '0.1~250 m³/min'],
      ['Pressure', 'Up to 10,000 mmAq (1 bar)'],
      ['Power', '1.5~250 kW'],
      ['Cooling', 'Air cooling, partial water cooling, water cooling'],
    ],
  },
  {
    slug: 'fine-bubble-diffuser',
    category: 'aeration',
    name: 'Fine Bubble Diffuser',
    images: ['/images/products/fine-bubble-diffuser.jpg'],
    specs: [
      ['Air flow rate', '0.02~0.10 m³/min'],
      ['Diameter', '10 inch (260 mm), 12 inch (300 mm)'],
      ['Membrane', 'High grade EPDM'],
      ['Features', 'Wide airflow range'],
    ],
  },
  {
    slug: 'tube-diffuser',
    category: 'aeration',
    name: 'Tube Type Diffuser',
    images: ['/images/products/tube-diffuser.jpg'],
    specs: [
      ['Air flow rate', '100~450 L/min'],
      ['Length', '500 mm, 1000 mm'],
      ['Membrane', 'High grade EPDM'],
      ['Features', 'Wide airflow range'],
    ],
  },
  {
    slug: 'coarse-bubble-diffuser',
    category: 'aeration',
    name: 'Coarse Bubble Diffuser',
    images: ['/images/products/coarse-bubble-diffuser.jpg'],
    specs: [
      ['Air flow rate', '20~450 L/min'],
      ['Diameter', '6 inch (144 mm)'],
      ['Features', 'Wide airflow range'],
    ],
  },
  {
    slug: 'ultrasonic-open-channel-flow-meter',
    category: 'flow-measurement',
    name: 'Ultrasonic Open Channel Flow Meter',
    images: ['/images/products/ultrasonic-flow-meter.png'],
    description:
      'Measures liquid flow through an open drain or channel. A transducer sends an ultrasonic wave through the media and calculates the flow from the time of the returning sound wave.',
    specs: [['Application', 'Clean water, wastewater']],
  },
  {
    slug: 'electromagnetic-flow-meter',
    category: 'flow-measurement',
    name: 'Electromagnetic Flow Meter (Water)',
    images: ['/images/products/electromagnetic-flow-meter.jpg'],
    specs: [
      ['Type', 'Remote type'],
      ['Diameter', 'DN25 to DN600 mm'],
      ['Pressure', 'Up to 1.6 MPa (16 bar)'],
      ['Accuracy', '±0.5%'],
      ['Lining / MOC', 'PTFE'],
      ['Temperature', '-20 °C to 100 °C'],
      FLOW_COMMS,
    ],
  },
  {
    slug: 'vortex-flow-meter',
    category: 'flow-measurement',
    name: 'Vortex Flow Meter (Steam, Gas, Air)',
    images: ['/images/products/vortex-flow-meter.png'],
    specs: [
      ['Type', 'Vortex'],
      ['Diameter', 'DN25 to DN300 mm'],
      ['Pressure', 'Up to 1.6 MPa (16 bar)'],
      ['Accuracy', '±1.0%'],
      ['Lining / MOC', 'SS316'],
      ['Temperature', '-20 °C to 250 °C'],
      FLOW_COMMS,
    ],
  },
  {
    slug: 'thermal-mass-gas-flow-meter',
    category: 'flow-measurement',
    name: 'Thermal Mass Gas Flow Meter',
    images: ['/images/products/thermal-mass-flow-meter.jpg'],
    specs: [
      ['Type', 'Thermal'],
      ['Diameter', 'DN25 to DN300 mm'],
      ['Pressure', 'Up to 1.6 MPa (16 bar)'],
      ['Accuracy', '±1.0%'],
      ['Lining / MOC', 'SS316'],
      ['Temperature', '-20 °C to 200 °C, -20 °C to 45 °C'],
      ['Communication', '4~20 mA, RS485, HART, Modbus, Pulse'],
    ],
  },
  {
    slug: 'gas-turbine-flow-meter',
    category: 'flow-measurement',
    name: 'Gas Turbine Flow Meter',
    images: ['/images/products/gas-turbine-flow-meter.jpg'],
    specs: [
      ['Type', 'Gas turbine'],
      ['Diameter', 'DN25 to DN300 mm'],
      ['Accuracy', '±1.0%'],
      ['Lining / MOC', 'SS316'],
      ['Temperature', '-20 °C to 55 °C'],
      FLOW_COMMS,
    ],
  },
  {
    slug: 'chemical-dosing-pump',
    category: 'pumps',
    name: 'Chemical Dosing Pump',
    images: ['/images/products/dosing-pump-solenoid.jpg', '/images/products/dosing-pump-motor.jpg'],
    specs: [
      ['Type', 'Diaphragm'],
      ['Capacity', '1~1200 LPH'],
      ['Pressure', '1~16 bar'],
      ['Pump head', 'PVDF, PP'],
      ['Drive', 'Solenoid and motor driven'],
      ['Application', 'RO, boiler, ETP, STP, WTP, process chemical dosing'],
    ],
  },
  {
    slug: 'aodd-pump',
    category: 'pumps',
    name: 'Air Operated Double Diaphragm Pump (AODD)',
    images: ['/images/products/aodd-pump.jpg'],
    specs: [
      ['Type', 'Pneumatic'],
      ['Flow range', '0~250 LPH'],
      ['Diaphragm', 'PTFE'],
      ['MOC', 'PVC, PP, PVDF, aluminium'],
      ['Application', 'Chemical transfer system'],
    ],
  },
  {
    slug: 'submersible-sewage-pump',
    category: 'pumps',
    name: 'Submersible Sewage Pump',
    images: ['/images/products/submersible-pump-1.jpg', '/images/products/submersible-pump-2.png'],
    specs: [
      ['Type', 'Non-cutter and cutter type'],
      ['Capacity', 'Up to 150 m³/hr'],
      ['Head', 'Up to 22 m'],
      ['Temperature', 'Up to 45 °C'],
      ['Delivery', 'DN25~DN150'],
      ['Application', 'ETP / STP wastewater transfer, municipal wastewater, sludge transfer'],
    ],
  },
  {
    slug: 'multistage-high-pressure-pump',
    category: 'pumps',
    name: 'Multi Stage High Pressure Pump',
    images: ['/images/products/multistage-pump.jpg'],
    specs: [
      ['Capacity', 'Up to 90 m³/hr'],
      ['Head', 'Up to 300 m'],
      ['Temperature', 'Up to 120 °C'],
      ['Delivery', 'DN25~DN200'],
      ['Application', 'RO feed, boiler feed, booster system'],
    ],
  },
  {
    slug: 'centrifugal-self-priming-pump',
    category: 'pumps',
    name: 'Centrifugal & Self Priming Open Impeller Pump',
    images: ['/images/products/centrifugal-pump.png', '/images/products/self-priming-pump.jpg'],
    specs: [
      ['Capacity', 'Up to 750 m³/hr'],
      ['Head', 'Up to 160 m'],
      ['Temperature', 'Up to 90 °C'],
      ['Delivery', 'DN25~DN250'],
      ['Application', 'Water, wastewater, sludge transfer, HVAC, cooling tower, fire fighting system'],
    ],
  },
  {
    slug: 'sludge-dewatering-screw-press',
    category: 'process-equipment',
    name: 'Sludge Dewatering Screw Press',
    images: ['/images/products/screw-press.png'],
    description: 'An industrial machine used to separate liquids from solids in wastewater treatment sludge.',
    specs: [
      ['Capacity', 'Up to 640 /hr'],
      ['MOC', 'SS304, SS316'],
      ['Features', 'Low maintenance cost, low operating cost'],
    ],
  },
  {
    slug: 'dissolved-air-flotation',
    category: 'process-equipment',
    name: 'Dissolved Air Flotation (DAF)',
    images: ['/images/products/daf.png'],
    description:
      'DAF is a highly efficient physical-chemical water treatment process used to clarify wastewater by removing fats, oils and grease (FOG), total suspended solids (TSS) and low-density contaminants.',
    specs: [],
  },
  {
    slug: 'rotary-bar-screen',
    category: 'process-equipment',
    name: 'Rotary Bar Screen for ETP',
    images: ['/images/products/rotary-bar-screen.png'],
    specs: [
      ['Capacity', 'Made to suit drain size'],
      ['MOC', 'SS304, SS316'],
      ['Features', 'Low maintenance cost, low operating cost'],
      ['Application', 'Automatic removal of large floating debris, suspended solids and fibrous materials'],
    ],
  },
  {
    slug: 'mixing-agitator',
    category: 'process-equipment',
    name: 'Mixing Agitator with Shaft',
    images: ['/images/products/agitator.png', '/images/products/agitator-gearbox.jpg'],
    description: 'A mixing agitator is composed of a drive device (motor and gear), a guiding system for the shaft, and an impeller.',
    specs: [
      ['Speed', '25~200 RPM'],
      ['Motor power', '0.5~10 HP'],
      ['Protection', 'IP55'],
      ['Temperature', '40 °C'],
      ['Application', 'ETP, WTP, STP, chemical mixing, flash mixing, flocculation'],
    ],
  },
  {
    slug: 'electric-motor',
    category: 'process-equipment',
    name: 'Electric Motor',
    images: ['/images/products/electric-motor.png'],
    specs: [
      ['Power', 'Starting from 0.37 kW'],
      ['Pole', '2 pole'],
      ['RPM', '1450 / 2900 rpm'],
      ['Voltage', '380~420 VAC'],
      ['Protection class', 'IP55'],
    ],
  },
  {
    slug: 'online-analyzer',
    category: 'instrumentation',
    name: 'Online Analyzer (pH, DO, TDS, BOD, COD & more)',
    images: ['/images/products/online-analyzer.png'],
    description:
      'An online analyzer controller measures water parameters such as pH, DO, TDS, temperature, chlorine, turbidity and TSS for automatic dosing systems. LCD display with auto-sense ON/OFF programmable illumination.',
    specs: [['Signal output', '4~20 mA, RS485 Modbus for PC / PLC']],
  },
  {
    slug: 'water-test-kit',
    category: 'instrumentation',
    name: 'Water Test Kit',
    images: ['/images/products/water-test-kit.jpg'],
    description: 'Handheld meters for spot checks on the plant and in the field.',
    specs: [
      ['Supplied as', 'pH pen and TDS / EC meter'],
      ['Use', 'Routine operator checks, sampling rounds, commissioning'],
    ],
  },
  {
    slug: 'tube-settler',
    category: 'media',
    name: 'Tube Settler for Clarifier',
    images: ['/images/products/tube-settler.jpg'],
    specs: [
      ['Size', '1 m × 1 m × 1 m'],
      ['Quantity', '20 pcs per m³'],
      ['Aperture', '80 mm, 50 mm'],
    ],
  },
  {
    slug: 'mbbr-media',
    category: 'media',
    name: 'Moving Bed Biofilm Reactor (MBBR) Media',
    images: ['/images/products/mbbr-media.jpg'],
    specs: [['Size', '25 × 10 mm']],
  },
  {
    slug: 'anthracite',
    category: 'media',
    name: 'Anthracite',
    images: ['/images/products/anthracite.jpg'],
    description: 'Low-density filter media used as the top layer of a dual-media filter, above the sand bed.',
    specs: [
      ['Duty', 'Suspended solids removal, higher filtration rate, longer run between backwashes'],
      ['Replaced', 'On rising pressure drop across the filter'],
    ],
  },
  {
    slug: 'activated-carbon',
    category: 'media',
    name: 'Activated Carbon',
    images: ['/images/products/activated-carbon.jpg'],
    description: 'Granular activated carbon for adsorption duty in water treatment and RO pre-treatment.',
    specs: [
      ['Duty', 'Dechlorination ahead of membranes; colour, odour and organics removal'],
      ['Replaced', 'On breakthrough'],
    ],
  },
  {
    slug: 'ion-exchange-resin',
    category: 'media',
    name: 'Ion Exchange Resin',
    images: ['/images/products/ion-exchange-resin.jpg'],
    description: 'Cation and anion exchange resin for softening and demineralisation plants.',
    specs: [
      ['Duty', 'Hardness removal (softener); full demineralisation (cation + anion)'],
      ['Regeneration', 'Brine for softeners; acid and caustic for DM plants'],
      ['Replaced', 'On capacity loss'],
    ],
  },
  {
    slug: 'manganese-dioxide',
    category: 'media',
    name: 'Manganese Dioxide',
    images: ['/images/products/manganese-dioxide.jpg'],
    description: 'Catalytic media for iron and manganese removal from ground and surface water.',
    specs: [
      ['Duty', 'Oxidation and filtration of dissolved iron and manganese'],
      ['Replaced', 'On capacity loss'],
    ],
  },
  {
    slug: 'alum',
    category: 'chemicals',
    name: 'Alum',
    images: ['/images/products/alum.jpg'],
    description: 'Aluminium sulphate coagulant for primary chemical treatment.',
    specs: [
      ['Duty', 'Coagulation of colloidal and suspended solids ahead of clarification'],
      ['Dosing', 'Solution feed via metering pump'],
    ],
  },
  {
    slug: 'poly-aluminium-chloride',
    category: 'chemicals',
    name: 'PAC (Poly Aluminium Chloride)',
    images: ['/images/products/pac.jpg'],
    description: 'Pre-hydrolysed coagulant, effective over a wider pH band than alum and with lower sludge volume.',
    specs: [
      ['Duty', 'Coagulation in ETP and WTP; colour and turbidity reduction'],
      ['Dosing', 'Solution feed via metering pump'],
    ],
  },
  {
    slug: 'polymer',
    category: 'chemicals',
    name: 'Polymer',
    images: ['/images/products/polymer.jpg'],
    description: 'Anionic and cationic polyelectrolyte for flocculation and sludge conditioning.',
    specs: [
      ['Duty', 'Floc build-up before settling; conditioning ahead of the screw press'],
      ['Dosing', 'Prepared in a make-up unit and fed by metering pump'],
    ],
  },
];

export const FEATURED_PRODUCTS = [
  'roots-air-blower',
  'fine-bubble-diffuser',
  'chemical-dosing-pump',
  'electromagnetic-flow-meter',
  'submersible-sewage-pump',
  'sludge-dewatering-screw-press',
  'online-analyzer',
  'mbbr-media',
];

export const CLIENTS = [
  { name: 'Sun Pharma', logo: '/images/clients/sun-pharma.png' },
  { name: 'LGED', logo: '/images/clients/lged.png' },
  { name: 'Dhaka Central International Medical College & Hospital', logo: '/images/clients/dcimch.png' },
  { name: 'IPCOM', logo: '/images/clients/ipcom.jpg' },
  { name: 'East West Property Development (Pvt) Ltd.', logo: '/images/clients/east-west-property.png' },
  { name: 'Skyyroot Real Estate', logo: '/images/clients/skyyroot.png' },
  { name: 'Resilient Slope', logo: '/images/clients/resilient-slope.png' },
  { name: 'Chuti', logo: '/images/clients/chuti.png' },
  { name: 'Poddut Logistics', logo: '/images/clients/poddut-logistics.jpg' },
  { name: 'Shonar Shuta Industries', logo: '/images/clients/shonar-shuta.jpg' },
  { name: 'Data IT', logo: '/images/clients/data-it.jpg' },
  { name: 'Multi Gym Premium', logo: '/images/clients/multi-gym.jpg' },
  { name: 'Mohammadi Developers Ltd.', logo: '/images/clients/mohammadi-developers.png' },
  { name: 'Bonani Bricks Ltd.', logo: '/images/clients/bonani-bricks.png' },
];

// Team, grouped for the About page. The first group also appears on the home page.
export const TEAM = [
  {
    group: 'Management',
    members: [
      { name: 'MD Salim Khan', position: 'Chairman', photo: '/images/team/salim-khan.jpg' },
      { name: 'Sadik Khan, Ph.D., P.E.', position: 'Director', photo: '/images/team/sadik-khan.png' },
      { name: 'Eng. Nusrat Jahan', position: 'Chief Executive Officer (CEO)', photo: '/images/team/nusrat-jahan-ceo.jpg' },
      { name: 'Md Sadat Khan', position: 'Head of IT & Digital Solutions', photo: '/images/team/sadat-khan.png' },
    ],
  },
  {
    group: 'Engineering & Projects',
    members: [
      { name: 'Tanvir Ahmed', position: 'Senior Project Engineer (ETP / STP)', photo: '/images/team/tanvir-ahmed.jpg' },
      { name: 'Sadia Rahman', position: 'Process Engineer — Water Treatment', photo: '/images/team/sadia-rahman.jpg' },
      { name: 'Sadia Islam', position: 'Environmental Engineer', photo: '/images/team/sadia-islam.jpg' },
      { name: 'Rakib Hasan', position: 'Mechanical Engineer', photo: '/images/team/rakib-hasan.jpg' },
      { name: 'Mahfuz Alam', position: 'Electrical & Automation Engineer', photo: '/images/team/mahfuz-alam.jpg' },
      { name: 'Fahim Uddin', position: 'Site Engineer', photo: '/images/team/fahim-uddin.jpg' },
      { name: 'Salauddin Khan Apon', position: 'Service & Maintenance Engineer', photo: '/images/team/salauddin-khan.jpg' },
      { name: 'Mehedi Hasan', position: 'Plant Operations Supervisor', photo: '/images/team/mehedi-hasan.jpg' },
    ],
  },
  {
    group: 'Sales, Finance & Support',
    members: [
      { name: 'Md Mahamudur Rahman', position: 'General Manager', photo: '/images/team/mahamudur-rahman.png' },
      { name: 'Jahangir Bhuiyan', position: 'Head of Sales & Business Development', photo: '/images/team/jahangir-bhuiyan.png' },
      { name: 'Abu Rasel', position: 'Senior Sales Engineer', photo: '/images/team/abu-rasel.png' },
      { name: 'Abdul Mohaimin Patwary', position: 'Finance Manager', photo: '/images/team/abdul-mohaimin-patwary.jpg' },
      { name: 'Rayhan Hamid', position: 'Accounts Manager', photo: '/images/team/rayhan-hamid.png' },
      { name: 'Lima Tabbasum', position: 'Procurement & Logistics Officer', photo: '/images/team/lima-tabbasum.jpg' },
    ],
  },
];

export const FAQS = [
  {
    q: 'What is an Effluent Treatment Plant (ETP)?',
    a: 'An ETP cleans wastewater from factories. It removes harmful materials, chemicals, dirt and other pollutants using physical, chemical and biological methods, so the water can be safely discharged or reused.',
  },
  {
    q: 'What is the difference between an ETP and an STP?',
    a: 'An ETP treats industrial effluent from factories such as textile, leather, food and pharmaceutical plants. An STP treats sewage from homes, hotels, offices, hospitals and other buildings.',
  },
  {
    q: 'Which STP technology is right for my building?',
    a: 'It depends on flow, available space and the required treated-water quality. We design ASP, SBR, MBBR and MBR plants and recommend one after a site survey.',
  },
  {
    q: 'Do you provide full turnkey projects or only equipment?',
    a: 'Both. We design, construct, install and commission complete plants, and we also supply individual machinery, instruments, media and chemicals for existing plants.',
  },
  {
    q: 'Do you offer operation and maintenance after handover?',
    a: 'Yes. We provide spare parts, servicing, plant operation and annual maintenance contracts (AMC).',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We are based in Dhaka and work with industrial, commercial and residential clients across Bangladesh.',
  },
];

export const productBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const solutionBySlug = (slug) => SOLUTIONS.find((s) => s.slug === slug);
