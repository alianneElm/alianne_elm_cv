// CV data — fixed content for Alianne's personal CV
// The AI tailors the summary; experiences and certs are fixed truths.

export interface Experience {
  id: string
  company: string
  period: string
  location: string
  role: string
  companyDescription: string
  description: string[]
  tech: string
}

export interface Education {
  period: string
  degree: string
  school: string
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'consid',
    company: 'Consid',
    period: 'mar. 2026 – Pågående',
    location: 'Malmö',
    role: 'Systemutvecklare / Fullstack-utvecklare',
    companyDescription:
      'Consid är ett av Sveriges snabbast växande IT-konsultbolag med djup kunskap inom IT, kommunikation och design. Bolaget skapar digitala lösningar som bygger värde och stärker kundrelationer.',
    description: [
      'I rollen som Systemutvecklare arbetar Alianne med utveckling av skräddarsydda digitala lösningar åt Consids kunder. Hon kombinerar sin breda tekniska kompetens inom Java, Python och moderna JavaScript-ramverk med sin erfarenhet av AI-integration och säkerhetskritiska system för att leverera högkvalitativa och skalbara lösningar.',
    ],
    tech:
      'Java · JavaScript · Python · React.js · TypeScript · Spring Boot · PostgreSQL · AWS · Docker · Kubernetes · CI/CD · Scrum · Agile · AI Fluency · Constitutional AI · AI Safety · Human-AI Collaboration · Claude · Copilot · Cursor · AI Integration · Large Language Models · Generativ AI · Claude API',
  },
  {
    id: 'devoteam',
    company: 'Devoteam',
    period: 'okt. 2025 – mar. 2026',
    location: 'Malmö',
    role: 'Fullstack-utvecklare',
    companyDescription:
      'Devoteam är en ledande europeisk IT-konsultfirma specialiserad på digital transformation, molnlösningar och innovativ teknik. Genom att implementera banbrytande lösningar inom AI och molnarkitektur stöttar företaget organisationer i att navigera i ett komplext digitalt landskap för att skapa mätbara affärsresultat.',
    description: [
      'I rollen som Fullstack-utvecklare axlade Alianne ett omfattande ansvar som omfattade både intern produktutveckling och strategisk kompetensuppbyggnad inom framtidens teknologier. En central del av uppdraget innebar att driva och säkerställa en ansvarsfull implementering av AI. Detta inkluderade etisk granskning, strategisk träning av Large Language Models (LLM) samt tekniska utvärderingar av hur generativ AI kunde integreras säkert i komplexa affärssystem.',
      'Alianne verkade i teknikens framkant genom att utforska och implementera lösningar inom AI med hjälp av LangChain. Hennes tekniska ansvar innefattade utveckling av robusta applikationer med en modern stack bestående av Python, React.js, TypeScript och Next.js, fullt integrerat i Microsoft Azures ekosystem. Rollen ställde höga krav på att snabbt sätta sig in i nya ramverk och metoder för att agera rådgivande i affärskritiska projekt.',
      'Alianne höjde framgångsrikt teamets interna kompetensnivå inom generativ AI genom att etablera strukturerade ramverk för etisk modellträning. Genom sitt arbete med Snowflake och Azure DevOps optimerade hon datahantering och utvecklingsflöden. Hennes integration av kvantberäkningsprinciper i tekniska diskussioner gav teamet ett betydande försprång i förståelsen för framtida beräkningsmodeller.',
    ],
    tech:
      'Affärssystem · JavaScript · Agile · Jenkins · JSON · REST · Cloud · CI/CD · Azure · Node.js · Unit testing · GitHub · Docker · Application management · Integration solutions · Requirement Management · TypeScript · Datahantering · Automated processes · Postman · Fullstack · AI · Kubernetes · Cloud Architecture · PostgreSQL · PyTest · E2E-testing · Python · React.js · Azure DevOps · Snowflake · Next.js · GitHub Actions · Scrum · Large Language Models · API-design · Generativ AI',
  },
  {
    id: 'octane',
    company: 'Hulo Consulting AB / Octane (USA)',
    period: 'jun. 2022 – sep. 2025',
    location: 'Malmö',
    role: 'Systemutvecklare / Tech Lead inom Fin-tech',
    companyDescription:
      'Octane är ett snabbväxande amerikanskt fintechbolag som revolutionerar köpprocessen genom digitala lånelösningar och bankintegrationer. Bolaget hanterar extremt känslig finansiell data och agerar mellanhand mellan återförsäljare, konsumenter och stora finansinstitut, vilket ställer högsta krav på säkerhet, skalbarhet och precision.',
    description: [
      'Under sina tre år hos Octane axlade Alianne ett ökande ansvar, från utvecklare till teknisk ledare. Under de inledande två åren var hon del av teamet för Dealer-plattformen och Decisioning-motorn, där hon bidrog till migreringen av legacy-system till en modern hexagonal arkitektur för att öka testbarhet och underhållbarhet. Hon arbetade med komplex logik för att hämta och matcha lånevillkor från olika banker baserat på kundens kreditvärdighet, riskprofil och geografiska placering — i Java och Python beroende på plattform.',
      'Under sitt sista år utsågs Alianne till Technical Lead för Partner-plattformen — en produkt hon själv designade och utvecklade från grunden. Produkten väckte stort intresse bland Octanes partners som ville integrera den i sina egna webbplatser. Som Tech Lead ansvarade hon för hela integrationsprocessen: teknisk design, utveckling och skräddarsydda anpassningar av produkten efter varje partners branding och specifika krav.',
      'I rollen som Tech Lead för Partner-plattformen agerade Alianne direktkontakt mot externa partners, ledde den tekniska onboardingen och förkortade integrationstiden genom tydliga riktlinjer och väldesignade API-lösningar — med bibehållen hög säkerhetsstandard och dataintegritet.',
    ],
    tech:
      'JavaScript · Agile · Frontend · Säkerhet · SQL · Java · Jenkins · jQuery · JSON · Migration · Knockout · AWS · CI/CD · Spring Security · Django · Unit testing · GitHub · Docker · TypeScript · API · Spring Boot · Postman · Backend · Datadog · Hantering av intressenter · Fullstack · AWS Lambda · Riskbedömning · Kubernetes · PostgreSQL · FinTech · E2E-testing · Python · Terraform · React.js · Banktjänster · Technical Leadership · Opsgenie · Cypress · Banking · GitHub Actions · Dataintegritet · React Redux · Playwright · Scrum · Systemmigrering · Skalbarhet · API Design and Implementation',
  },
  {
    id: 'tedsys',
    company: 'Tedsys / Lagerkoll',
    period: 'sep. 2020 – maj 2022',
    location: 'Malmö',
    role: 'Fullstack-utvecklare',
    companyDescription:
      'Tedsys är ett IT-konsultbolag specialiserat på skräddarsydda mjukvarulösningar för logistik och lagerhanteringssystem, med fokus på att optimera varuflöden genom digitalisering.',
    description: [
      'I rollen arbetade Alianne med nyutveckling och modernisering av system för lagerstyrning. Ett av hennes huvudansvar var att genomföra en kritisk migrering av systemets datakommunikation från XML till JavaScript/JSON, vilket innebar en omfattande uppdatering av databasstrukturen samt design och ombyggnad av API:er. Hon jobbade genom hela Java-stacken — från databas och backend-logik till integrationer och frontend.',
      'Migreringen från XML till JavaScript resulterade i ett snabbare och mer skalbart system med förbättrad prestanda i databashanteringen. Genom att modernisera API-strukturen och optimera affärslogiken i Java bidrog Alianne till att underlätta framtida underhåll och förbättra slutanvändarnas operativa effektivitet i lagerprocesserna.',
    ],
    tech:
      'Logistik · Databases · MySQL · HTML · JavaScript · Hibernate · Spring MVC · Agile · Frontend · JUnit · SQL · Java · CSS · Mockito · jQuery · JSON · JPA · Spring Security · IntelliJ IDEA · GitHub · Docker · Underhåll · Trello · Systemarkitektur · Maven · API · Spring Boot · Backend · Digitalisering · Fullstack · PostgreSQL · Lagerhanteringssystem · XML · Scrum · API Design and Implementation',
  },
  {
    id: 'gualda',
    company: 'Gualda Comunicaciones',
    period: 'jan. 2018 – jul. 2020',
    location: 'Logroño, Spanien',
    role: 'Utvecklare',
    companyDescription:
      'Gualda Comunicaciones är ett spanskt företag verksamt inom telekommunikationssektorn som erbjuder digitala tjänster och kommunikationslösningar till en bred kundbas.',
    description: [
      'Alianne ansvarade för design och utveckling av företagets webbplats med fokus på att förbättra kundupplevelsen och driva den digitala försäljningen. I rollen kombinerade hon teknisk utveckling i Java-miljö med strategisk kundbearbetning, vilket resulterade i ökad digital försäljning och stärkt kundlojalitet.',
    ],
    tech: 'HTML · JavaScript · Java · CSS · jQuery · Express.js · Vue.js · Kundrelationer',
  },
  {
    id: 'encaprichate',
    company: 'Encaprichate',
    period: 'jan. 2016 – jan. 2018',
    location: 'Spanien',
    role: 'Grundare & Utvecklare',
    companyDescription:
      'Egenstartad delikatessbutik i Spanien med fokus på att kombinera fysisk handel med en digital närvaro.',
    description: [
      'Som grundare ansvarade Alianne för hela verksamheten, inklusive affärsplanering, bokföring och leverantörsrelationer. Hon tog även sina första steg som utvecklare genom att själv designa och bygga butikens webbplats från grunden, vilket etablerade butikens första digitala plattform och lade grunden för hennes fortsatta karriär inom systemutveckling.',
    ],
    tech: 'HTML · JavaScript · CSS · Affärsplanering · Handel · Bokföring · Entrepreneurship',
  },
]

export const NONPROFIT: Experience = {
  id: 'llegalaluz',
  company: 'Ideell verksamhet – Llego la Luz',
  period: '2014 – Pågående',
  location: '',
  role: 'Grundare & Verksamhetschef',
  companyDescription: 'Ideell organisation som tillhandahåller humanitärt bistånd till utsatta familjer på Kuba.',
  description: [
    'I rollen som grundare leder Alianne organisationens strategiska arbete, biståndsprogram och internationella samarbeten. Hon ansvarar för programledning och operativ samordning av hjälpinsatser, vilket har stärkt hennes förmåga inom ledarskap, komplex logistik och socialt ansvarstagande.',
  ],
  tech: '',
}

export const CERTIFICATIONS = [
  'AWS Certified Cloud Practitioner – in progress',
  'SnowPro Core Certification, Snowflake, 12/2025, giltig t.o.m. 12/2027',
  'Generativ AI (Level 2) – GenAI, 2025',
  'AI Fluency: Framework & Foundations – Anthropic Academy, 2026',
  'AI Capabilities and Limitations – Anthropic Academy, 2026',
  'Claude Code 101 – Anthropic Academy, 2026',
  'Claude Cowork – Anthropic, 2026',
  'Building with the Claude API – Anthropic',
]

export const EDUCATION: Education[] = [
  { period: '2020 – 2022', degree: 'Systemutveckling i Java', school: 'Newton Yrkeshögskola | Sverige' },
  { period: '2012 – 2016', degree: 'Teologi och filosofi', school: 'SEFOVAN | Spanien' },
  { period: '2009 – 2012', degree: 'Statsvetenskap | Svenska', school: 'Stockholms Universitet' },
]

export const LANGUAGES = [
  { lang: 'Spanska', level: 'Modersmål' },
  { lang: 'Svenska', level: 'Flytande' },
  { lang: 'Engelska', level: 'Flytande' },
]

export interface CompetencyGroup {
  category: string
  items: string[]
}

export const COMPETENCY_REGISTER: CompetencyGroup[] = [
  {
    category: 'Programmeringsspråk',
    items: ['Java', 'JavaScript', 'Python', 'TypeScript', 'SQL', 'HTML', 'CSS', 'XML'],
  },
  {
    category: 'Ramverk & Bibliotek',
    items: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Django', 'React.js', 'React Redux', 'Vue.js', 'Next.js', 'Node.js', 'Express.js', 'jQuery', 'Knockout', 'Hibernate', 'JPA', 'JSON', 'REST', 'OAuth2', 'SAML', 'Webhooks'],
  },
  {
    category: 'Cloud & Databaser',
    items: ['AWS', 'AWS Lambda', 'Azure', 'Azure DevOps', 'Cloud Architecture', 'PostgreSQL', 'MySQL', 'Snowflake', 'Apache Kafka'],
  },
  {
    category: 'DevOps & Verktyg',
    items: ['Docker', 'Kubernetes', 'GitHub', 'GitHub Actions', 'Jenkins', 'Terraform', 'CI/CD', 'Maven', 'Postman', 'IntelliJ IDEA', 'Datadog', 'Opsgenie', 'Trello', 'JIRA'],
  },
  {
    category: 'Testning',
    items: ['Unit testing', 'E2E-testing', 'Integrationstest', 'Cypress', 'Playwright', 'JUnit', 'Mockito', 'PyTest'],
  },
  {
    category: 'AI & Emerging Tech',
    items: ['AI', 'Generativ AI', 'Large Language Models', 'Claude', 'Claude API', 'Copilot', 'Cursor', 'AI Integration', 'AI Fluency', 'Constitutional AI', 'AI Safety', 'Human-AI Collaboration'],
  },
  {
    category: 'Arkitektur & Metoder',
    items: ['Agile', 'Scrum', 'Technical Leadership', 'Systemarkitektur', 'API Design and Implementation', 'API-design', 'Systemmigrering', 'Migration', 'Skalbarhet', 'Event-driven Architecture', 'Asynchronous messaging', 'Automated processes', 'Requirement Management', 'Programledning', 'DevOps'],
  },
  {
    category: 'Verksamhet & Branscher',
    items: ['FinTech', 'Banking', 'Banktjänster', 'Säkerhet', 'Logistik', 'Handel', 'Dataintegritet', 'Riskbedömning', 'Hantering av intressenter', 'Kundrelationer', 'Underhåll', 'Digitalisering', 'Application management', 'Datahantering', 'Ledarskap', 'Entrepreneurship', 'Verksamhetsutveckling', 'Affärsplanering'],
  },
]

export const DEFAULT_SUMMARY = {
  professional: `Alianne är en driven Fullstack-utvecklare med 8 års erfarenhet av att designa, utveckla och underhålla skalbara och säkerhetskritiska system. Med en gedigen bakgrund inom fintech har hon haft nyckelroller i affärskritiska projekt där säkerhet och integritet varit högsta prioritet. Hon kombinerar teknisk expertis inom Java, Python och moderna JavaScript-ramverk med en stark förmåga att tillämpa från arkitektur till konkret affärsnytta.`,
  personal: `Som person är Alianne strukturerad, lösningsorienterad och skicklig på att bygga relationer med internationell erfarenhet och en dokumenterad förmåga att driva förändring. Hon bidrar med stark arbetsmoral, djup teknisk kompetens och ett tydligt engagemang för kvalitet och innovation.`,
  bonus: `Ett av Aliannes främsta kännetecken är hennes stora intresse för att ständigt lära sig nya saker. På sin fritid fördjupar hon sig i komplexa ämnen som kvantfysik och Quantum Computing, vilket speglar hennes intellektuella nyfikenhet och passion för framtidens teknik. Utöver tekniken brinner hon för samhällsengagemang och driver en ideell organisation för humanitärt bistånd.`,
}
