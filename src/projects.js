// Edit file ini untuk menambah, menghapus, atau mengubah project.
// `url` dapat diarahkan ke production URL masing-masing project.
export const projects = [
  {
    number: '01',
    name: 'Location Service',
    kind: { id: 'Public API & Explorer', en: 'Public API & Explorer' },
    year: '2026',
    description: {
      id: 'API wilayah Indonesia yang rapi, cepat, dan mudah dijelajahi langsung dari browser.',
      en: 'A neat, fast, and easy-to-explore Indonesian region API straight from your browser.'
    },
    url: 'https://location-service-do.vercel.app/',
    palette: 'vermillion',
    mark: 'LOC',
    featured: true,
  },
  {
    number: '02',
    name: 'Yourz Itinerary',
    kind: { id: 'Travel Planner', en: 'Travel Planner' },
    year: '2026',
    description: {
      id: 'Ruang kerja untuk menyusun rencana perjalanan tanpa spreadsheet yang berantakan.',
      en: 'A workspace to organize travel plans without messy spreadsheets.'
    },
    url: 'https://github.com/zazhedho/yourz-itinerary',
    palette: 'cobalt',
    mark: 'YI',
  },
  {
    number: '03',
    name: 'Yourz Gift',
    kind: { id: 'Digital Commerce', en: 'Digital Commerce' },
    year: '2026',
    description: {
      id: 'Pengalaman memilih hadiah yang terasa personal, tenang, dan tidak transaksional.',
      en: 'A gift-picking experience that feels personal, calm, and non-transactional.'
    },
    url: 'https://github.com/zazhedho/yourz-gift',
    palette: 'citron',
    mark: 'YG',
  },
  {
    number: '04',
    name: 'Safety Riding',
    kind: { id: 'Operations Platform', en: 'Operations Platform' },
    year: '2025',
    description: {
      id: 'Sistem operasional pelatihan berkendara dengan alur kerja yang jelas untuk setiap peran.',
      en: 'A riding training operational system with clear workflows for every role.'
    },
    url: 'https://github.com/zazhedho/safety-riding',
    palette: 'lavender',
    mark: 'SR',
  },
]
