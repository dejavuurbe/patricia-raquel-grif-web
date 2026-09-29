export type SiteLevel = 1 | 2 | 3;
export type PendingState = 'confirmed' | 'pending' | 'omitted';
export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x' | 'linkedin' | 'web';

type Link = { label: string; url: string };
type Social = { platform: SocialPlatform; label: string; state: PendingState; url?: string };
type ActivityItem = { title: string; type: string; source: string; url: string; description: string };

const works = [
  {
    id: 'capitan-emanuel',
    title: 'Las aventuras del Capitán Emanuel',
    subtitle: 'Cuento con formato inclusivo',
    cover: '/images/capitan-emanuel.jpg',
    coverState: 'confirmed' as PendingState,
    synopsis: 'Una propuesta de literatura infantil accesible que reúne lectura convencional con recursos inclusivos: letra ampliada, texto en Braille, figuras táctiles y acceso a una narración en lengua de señas. La edición busca ampliar las formas de acercarse a una misma historia.',
    genre: 'Literatura infantil accesible',
    year: '',
    pages: '',
    isbn: '',
    publisher: 'Editorial Uno del Oeste',
    editorialState: {
      genre: 'confirmed' as PendingState,
      year: 'pending' as PendingState,
      pages: 'pending' as PendingState,
      isbn: 'pending' as PendingState,
      publisher: 'confirmed' as PendingState,
    },
    sampleUrl: '',
    purchaseLinks: [
      { label: 'Ver el libro en Editorial Uno del Oeste', url: 'https://editorialunodeloeste.empretienda.com.ar/cuentos/las-aventuras-del-capitan-emanuel' },
    ] as Link[],
    purchaseState: 'confirmed' as PendingState,
    featured: true,
    aliases: ['Las aventuras del capitán Emanuel', 'Capitán Emanuel'] as string[],
  },
];

export const site = {
  level: 1 as SiteLevel,
  name: 'Patricia Raquel Grif',
  canonicalName: 'Patricia Raquel Grif',
  searchVariants: ['Patricia Griff', 'Patricia Raquel Griff', 'Raquel Griff'] as string[],
  role: 'Escritora y artista',
  tagline: 'Escritura, arte e inclusión en una obra pensada para ampliar las formas de leer.',
  description: 'Sitio de Patricia Raquel Grif, autora de Las aventuras del Capitán Emanuel, libro infantil accesible publicado por Editorial Uno del Oeste.',
  url: 'https://dejavuurbe.github.io/patricia-raquel-grif-web/',
  email: 'patricia.r.griff@gmail.com',
  emailState: 'confirmed' as PendingState,
  location: 'La Matanza, Buenos Aires, Argentina',
  footerLine: 'Escritora · La Matanza, Buenos Aires',
  credit: { enabled: true, label: 'Diseño y desarrollo web por', url: 'https://dejavuurbe.github.io/pierre-menard-web/proyecto/' },
  social: [
    { platform: 'instagram', label: 'Instagram', state: 'confirmed', url: 'https://www.instagram.com/griffraquel/' },
    { platform: 'facebook', label: 'Facebook', state: 'confirmed', url: 'https://www.facebook.com/profile.php?id=61580198333813' },
  ] as Social[],
  author: {
    shortBio: 'Escritora, artista plástica, payamédica y psicóloga social.',
    longBio: 'Patricia Raquel Grif es escritora y artista plástica. En su presentación pública también se define como payamédica, psicóloga social, A.T. y operadora social de calle. Su recorrido reúne creación artística, trabajo comunitario e inclusión. Es autora de Las aventuras del Capitán Emanuel, una edición infantil accesible desarrollada junto a Editorial Uno del Oeste.',
    photo: '/images/patricia-raquel-griff.jpg',
    photoState: 'confirmed' as PendingState,
    bioState: 'confirmed' as PendingState,
  },
  works,
  featuredBook: works.find((work) => work.featured) ?? works[0],
  activity: [
    { title: 'Presentación en la Biblioteca Argentina para Ciegos', type: 'presentación', source: 'Actividad pública verificada', url: 'https://bac.org.ar/libros-en-tinta-y-braille/', description: 'El 22 de agosto de 2026 presentó y exhibió Las aventuras del Capitán Emanuel en una actividad vinculada a Editorial Uno del Oeste en la Biblioteca Argentina para Ciegos, en Almagro.' },
    { title: 'Presentación de libros en Isidro Casanova', type: 'actividad cultural', source: 'Biblioteca Popular Rotaria', url: 'https://bibliotecapopularrotaria.blogspot.com/2026/06/invitacion_045393494.html', description: 'El 4 de julio de 2026 participó de una presentación de libros en la Biblioteca Popular Rotaria de Isidro Casanova, La Matanza.' },
    { title: 'XX Festival Internacional de poesía Palabra en el Mundo', type: 'encuentro literario', source: 'Frente de Creación Literaria Oficio Puro', url: 'https://oficiopuro2013.blogspot.com/2026/05/fip-palabra-en-el-mundo-xx-edicion.html', description: 'El 30 de mayo de 2026 participó, como Raquel Griff, de un encuentro literario realizado en San Justo dentro de la programación del festival.' },
  ] as ActivityItem[],
  activityState: 'confirmed' as PendingState,
  lifecycle: { infrastructure: 'PUBLICADA', delivery: 'EN CONSTRUCCIÓN' },
  recovery: {
    incompleteRecall: ['Raquel + Capitán Emanuel', 'Patricia + Capitán Emanuel', 'Grif + Capitán Emanuel'] as string[],
    spellingVariants: ['Patricia Griff', 'Patricia Raquel Griff', 'Raquel Griff'] as string[],
    disambiguationNotes: ['La obra y Editorial Uno del Oeste son los principales desambiguadores públicos de la identidad autoral.'] as string[],
  },
  faq: [
    { question: '¿Quién es Patricia Raquel Grif?', answer: 'Es escritora y artista, autora de Las aventuras del Capitán Emanuel.' },
    { question: '¿Qué distingue a Las aventuras del Capitán Emanuel?', answer: 'Su edición incorpora recursos de accesibilidad como letra ampliada, Braille, elementos táctiles y acceso a una narración en lengua de señas.' },
  ] as { question: string; answer: string }[],
};

export type SiteData = typeof site;
