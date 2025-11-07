// --- Configurarea Jocului ---
const POINTS_PER_LEVEL = 10;
const MAX_LEVEL = 5;

// --- Date Harta (Țări și Vecinătăți) ---
const TEST_COUNTRIES = [
    // Europa de Est / Centrală
    { code: 'RO', name: 'România', neighbors: ['HU', 'BG', 'UA', 'MD', 'RS'] },
    { code: 'HU', name: 'Ungaria', neighbors: ['RO', 'AT', 'SK', 'UA', 'RS', 'HR', 'SI'] },
    { code: 'BG', name: 'Bulgaria', neighbors: ['RO', 'GR', 'TR', 'MK', 'RS'] },
    { code: 'CZ', name: 'Cehia', neighbors: ['AT', 'DE', 'SK', 'PL'] },
    { code: 'SK', name: 'Slovacia', neighbors: ['CZ', 'HU', 'AT', 'PL', 'UA'] },
    { code: 'PL', name: 'Polonia', neighbors: ['CZ', 'DE', 'SK', 'UA', 'BY', 'LT'] },
    { code: 'HR', name: 'Croația', neighbors: ['HU', 'SI', 'BA', 'ME', 'RS'] },
    { code: 'UA', name: 'Ucraina', neighbors: ['RO', 'HU', 'SK', 'PL', 'MD'] },
    { code: 'MD', name: 'Moldova', neighbors: ['RO', 'UA'] },
    // Europa de Vest / Sud
    { code: 'DE', name: 'Germania', neighbors: ['CZ', 'PL', 'AT', 'CH', 'FR', 'BE', 'NL', 'DK'] },
    { code: 'AT', name: 'Austria', neighbors: ['HU', 'CZ', 'SK', 'DE', 'CH', 'IT', 'SI'] },
    { code: 'IT', name: 'Italia', neighbors: ['AT', 'CH', 'FR', 'SI'] },
    { code: 'FR', name: 'Franța', neighbors: ['DE', 'IT', 'ES', 'BE', 'CH', 'LU'] },
    { code: 'ES', name: 'Spania', neighbors: ['FR', 'PT'] },
    { code: 'GR', name: 'Grecia', neighbors: ['BG', 'TR', 'MK', 'AL'] },
    { code: 'CH', name: 'Elveția', neighbors: ['AT', 'DE', 'FR', 'IT'] },
    { code: 'BE', name: 'Belgia', neighbors: ['FR', 'NL', 'DE', 'LU'] },
    { code: 'NL', name: 'Olanda', neighbors: ['BE', 'DE'] },
    { code: 'PT', name: 'Portugalia', neighbors: ['ES'] } // Adaugat Portugalia
];

// --- Structura Insignelor (cu Icon-uri) ---
const ALL_BADGES = [
    { id: 'Unitatea', name: 'Unitatea UE', description: 'Cunoștințe despre istoria și instituțiile UE.', icon: 'https://cdn-icons-png.flaticon.com/512/330/330560.png' }, 
    { id: 'Olimpus', name: 'Geografie & Sport', description: 'Cunoștințe despre relief, fluvii și sporturile naționale.', icon: 'https://cdn-icons-png.