import type { Experience, Education } from '../../lib/cvData'
import { EXPERIENCES, NONPROFIT, CERTIFICATIONS, EDUCATION, LANGUAGES } from '../../lib/cvData'

const NAVY = '#2b4c7e'
const NAVY_DARK = '#3d6098'
const GOLD = '#c5a55a'
const PAGE_W = '210mm'
const FONT = "'Georgia', 'Times New Roman', serif"
const FONT_SANS = "'Helvetica Neue', Arial, sans-serif"

interface GeneratedSummary { professional: string; personal: string; bonus: string }

export interface Competencies {
  Plattformar?: string[]
  Tekniker?: string[]
  Verktyg?: string[]
  'Verksamhet och funktion'?: string[]
}

interface CVDocumentProps {
  summary: GeneratedSummary
  roleTitle: string
  highlightedExperiences?: string[]
  experienceHighlights?: Record<string, string>
  competencies?: Competencies
  editMode?: boolean
}

function E({
  children, style, tag: Tag = 'p', editMode,
}: {
  children: string; style?: React.CSSProperties; tag?: 'p' | 'span' | 'h1' | 'h2'; editMode?: boolean
}) {
  if (!editMode) return <Tag style={style}>{children}</Tag>
  return (
    <Tag
      contentEditable suppressContentEditableWarning className="cv-editable"
      style={{ ...style, outline: 'none', cursor: 'text' }}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

function TechPills({ tech }: { tech: string }) {
  const tags = tech.split(/\s*·\s*/).filter(Boolean)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px' }}>
      {tags.map((tag, i) => (
        <span key={i} style={{
          display: 'inline-block',
          background: '#f0f4f8',
          borderRadius: '10px',
          padding: '3px 9px',
          fontSize: '7.5px',
          color: NAVY,
          fontFamily: FONT_SANS,
          fontWeight: 500,
        }}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function PageHeader() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      marginBottom: '22px', paddingBottom: '12px',
      borderBottom: `1.5px solid ${NAVY}`,
    }}>
      <span style={{ fontFamily: FONT, fontSize: '15px', fontWeight: 700, color: NAVY, letterSpacing: '0.5px' }}>
        Alianne Elm
      </span>
      <span style={{ fontFamily: FONT_SANS, fontSize: '8.5px', color: '#999', letterSpacing: '0.3px' }}>
        alianneelm@yahoo.se
      </span>
    </div>
  )
}

function CoverPage({ summary, roleTitle, competencies, editMode }: {
  summary: GeneratedSummary; roleTitle: string; competencies?: Competencies; editMode?: boolean
}) {
  const competencyCategories = [
    { label: 'Plattformar', items: competencies?.Plattformar ?? [] },
    { label: 'Tekniker', items: competencies?.Tekniker ?? [] },
    { label: 'Verktyg', items: competencies?.Verktyg ?? [] },
    { label: 'Verksamhet och funktion', items: competencies?.['Verksamhet och funktion'] ?? [] },
  ].filter(c => c.items.length > 0)

  return (
    <div style={{
      width: PAGE_W, minHeight: '297mm', background: '#fff',
      pageBreakAfter: 'always', breakAfter: 'page', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
      borderRadius: '20px', overflow: 'hidden',
    }}>
      {/* Two-column body */}
      <div style={{ display: 'flex', flex: 1 }}>

        {/* Left column */}
        <div style={{
          width: '195px', minWidth: '195px', flexShrink: 0,
          background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DARK} 100%)`,
          padding: '36px 20px 28px 20px',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Photo */}
          <div style={{
            width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden',
            border: `3px solid ${GOLD}`,
            margin: '0 auto 20px auto', flexShrink: 0,
          }}>
            <img
              src="/profile.jpg" alt="Alianne Elm"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
          </div>

          {/* Name in sidebar */}
          <p style={{
            fontFamily: FONT, fontSize: '16px', fontWeight: 700, color: '#fff',
            textAlign: 'center', margin: '0 0 2px 0', letterSpacing: '0.3px',
          }}>Alianne Elm</p>
          <p style={{
            fontFamily: FONT_SANS, fontSize: '8px', color: GOLD,
            textAlign: 'center', margin: '0 0 22px 0', textTransform: 'uppercase', letterSpacing: '1.5px',
          }}>Systemutvecklare</p>

          {/* Divider */}
          <div style={{ width: '40px', height: '1px', background: GOLD, margin: '0 auto 22px auto', opacity: 0.5 }} />

          {/* Competencies */}
          {competencyCategories.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {competencyCategories.map(cat => (
                <div key={cat.label}>
                  <p style={{
                    fontFamily: FONT_SANS, fontSize: '7.5px', fontWeight: 700, color: GOLD,
                    margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '1px',
                  }}>
                    {cat.label}
                  </p>
                  {cat.items.map((item, i) => (
                    <p key={i} style={{ fontFamily: FONT_SANS, fontSize: '8px', color: 'rgba(255,255,255,0.8)', margin: '0 0 3px 0', lineHeight: 1.5 }}>
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Contact */}
          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: `1px solid rgba(255,255,255,0.12)` }}>
            <p style={{ fontFamily: FONT_SANS, fontSize: '7.5px', fontWeight: 700, color: GOLD, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Kontakt
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: '8px', color: 'rgba(255,255,255,0.75)', margin: '0 0 3px 0' }}>Malmö, Sverige</p>
            <p style={{ fontFamily: FONT_SANS, fontSize: '8px', color: 'rgba(255,255,255,0.75)', margin: '0 0 3px 0' }}>alianneelm@yahoo.se</p>
          </div>

          {/* Languages */}
          <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: `1px solid rgba(255,255,255,0.12)` }}>
            <p style={{ fontFamily: FONT_SANS, fontSize: '7.5px', fontWeight: 700, color: GOLD, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Språk
            </p>
            {LANGUAGES.map((l, i) => (
              <p key={i} style={{ fontFamily: FONT_SANS, fontSize: '8px', color: 'rgba(255,255,255,0.75)', margin: '0 0 3px 0' }}>
                {l.lang} — {l.level}
              </p>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, padding: '40px 36px 32px 32px' }}>
          <h1 style={{
            fontFamily: FONT, fontSize: '34px', fontWeight: 400, color: NAVY,
            margin: '0 0 6px 0', lineHeight: 1.15, letterSpacing: '-0.3px',
          }}>
            Alianne Elm
          </h1>
          <E tag="p" editMode={editMode} style={{
            fontFamily: FONT_SANS, fontSize: '12px', fontWeight: 600, color: NAVY_DARK,
            margin: '0 0 20px 0', letterSpacing: '0.5px',
          }}>
            {roleTitle}
          </E>

          {/* Gold accent line */}
          <div style={{ width: '50px', height: '2px', background: GOLD, marginBottom: '20px' }} />

          <E tag="p" editMode={editMode} style={{
            fontFamily: FONT_SANS, fontSize: '10px', lineHeight: 1.85, color: '#3a3a3a', margin: '0 0 14px 0',
          }}>
            {summary.professional}
          </E>
          <E tag="p" editMode={editMode} style={{
            fontFamily: FONT_SANS, fontSize: '10px', lineHeight: 1.85, color: '#3a3a3a', margin: '0 0 14px 0',
          }}>
            {summary.personal}
          </E>
          <E tag="p" editMode={editMode} style={{
            fontFamily: FONT_SANS, fontSize: '10px', lineHeight: 1.85, color: '#3a3a3a', margin: 0,
          }}>
            {summary.bonus}
          </E>
        </div>
      </div>
    </div>
  )
}

function ExpEntry({ exp, highlight, editMode }: { exp: Experience; highlight?: string; editMode?: boolean }) {
  return (
    <div style={{ marginBottom: '26px', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '2px' }}>
        <p style={{ fontFamily: FONT_SANS, fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>{exp.company}</p>
        {exp.location && <span style={{ fontFamily: FONT_SANS, fontSize: '8.5px', color: '#999' }}>{exp.location}</span>}
      </div>
      <p style={{ fontFamily: FONT_SANS, fontSize: '8.5px', color: '#999', margin: '0 0 5px 0' }}>{exp.period}</p>
      <p style={{ fontFamily: FONT, fontSize: '11px', fontWeight: 700, fontStyle: 'italic', color: NAVY, margin: '0 0 8px 0' }}>{exp.role}</p>

      {highlight && (
        <div style={{
          background: `${NAVY}08`,
          borderLeft: `2.5px solid ${GOLD}`,
          padding: '6px 10px', marginBottom: '8px', borderRadius: '0 4px 4px 0',
        }}>
          <E tag="p" editMode={editMode} style={{ fontFamily: FONT_SANS, fontSize: '8.5px', fontStyle: 'italic', color: NAVY, margin: 0, lineHeight: 1.6 }}>
            {highlight}
          </E>
        </div>
      )}

      {exp.companyDescription && (
        <E tag="p" editMode={editMode} style={{ fontFamily: FONT_SANS, fontSize: '9px', lineHeight: 1.7, color: '#555', margin: '0 0 6px 0' }}>
          {exp.companyDescription}
        </E>
      )}
      {exp.description.map((para, i) => (
        <E key={i} tag="p" editMode={editMode} style={{ fontFamily: FONT_SANS, fontSize: '9px', lineHeight: 1.7, color: '#333', margin: '0 0 5px 0' }}>
          {para}
        </E>
      ))}
      {exp.tech && <TechPills tech={exp.tech} />}
    </div>
  )
}

function PrintableSection({
  title, children, breakBefore = false,
}: {
  title?: string; children: React.ReactNode; breakBefore?: boolean
}) {
  return (
    <table style={{
      width: PAGE_W, borderCollapse: 'collapse', tableLayout: 'fixed', background: '#fff',
      pageBreakBefore: breakBefore ? 'always' : 'auto',
      breakBefore: breakBefore ? 'page' : 'auto',
      pageBreakAfter: 'always', breakAfter: 'page',
    }}>
      <thead>
        <tr>
          <td style={{ padding: '30px 40px 14px 40px' }}>
            <PageHeader />
            {title && (
              <>
                <h2 style={{
                  fontFamily: FONT, fontSize: '18px', fontWeight: 700, color: NAVY,
                  margin: '0 0 4px 0',
                }}>
                  {title}
                </h2>
                <div style={{ width: '35px', height: '2px', background: GOLD, marginBottom: '14px' }} />
              </>
            )}
          </td>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td style={{ padding: '10px 40px 22px 40px' }}>
            <div style={{ borderTop: `1px solid ${NAVY}20`, paddingTop: '8px', display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: FONT, fontSize: '9px', fontWeight: 700, color: NAVY, fontStyle: 'italic' }}>Alianne Elm</span>
            </div>
          </td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td style={{ padding: '8px 40px 0 40px' }}>{children}</td>
        </tr>
      </tbody>
    </table>
  )
}

function ExperienceSection({ experiences, experienceHighlights, editMode }: {
  experiences: Experience[]; experienceHighlights?: Record<string, string>; editMode?: boolean
}) {
  return (
    <PrintableSection title="Projekt och uppdrag">
      {experiences.map(exp => (
        <ExpEntry key={exp.id} exp={exp} highlight={experienceHighlights?.[exp.id]} editMode={editMode} />
      ))}
    </PrintableSection>
  )
}

const STRIPE_BG = '#f7f9fc'

function CertsSection({ editMode }: { editMode?: boolean }) {
  return (
    <PrintableSection breakBefore>
      <div style={{ marginBottom: '22px', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
        <p style={{ fontFamily: FONT_SANS, fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 1px 0' }}>{NONPROFIT.company}</p>
        <p style={{ fontFamily: FONT_SANS, fontSize: '8.5px', color: '#999', margin: '0 0 5px 0' }}>{NONPROFIT.period}</p>
        <p style={{ fontFamily: FONT, fontSize: '11px', fontWeight: 700, fontStyle: 'italic', color: NAVY, margin: '0 0 8px 0' }}>{NONPROFIT.role}</p>
        {NONPROFIT.description.map((para, i) => (
          <E key={i} tag="p" editMode={editMode} style={{ fontFamily: FONT_SANS, fontSize: '9px', lineHeight: 1.7, color: '#333', margin: '0 0 5px 0' }}>
            {para}
          </E>
        ))}
      </div>

      <div style={{ borderTop: `1px solid ${NAVY}15`, margin: '4px 0 18px 0' }} />

      <h2 style={{ fontFamily: FONT, fontSize: '14px', fontWeight: 700, color: NAVY, margin: '0 0 4px 0' }}>Kurser och Certifieringar</h2>
      <div style={{ width: '30px', height: '2px', background: GOLD, marginBottom: '10px' }} />
      {CERTIFICATIONS.map((cert, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '9px 12px',
          background: i % 2 === 0 ? STRIPE_BG : '#fff',
          borderRadius: '4px',
          pageBreakInside: 'avoid', breakInside: 'avoid',
        }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
          <span style={{ fontFamily: FONT_SANS, fontSize: '9px', color: '#333', lineHeight: 1.55 }}>{cert}</span>
        </div>
      ))}

      <div style={{ borderTop: `1px solid ${NAVY}15`, margin: '18px 0 12px 0' }} />

      <h2 style={{ fontFamily: FONT, fontSize: '14px', fontWeight: 700, color: NAVY, margin: '0 0 4px 0' }}>Utbildningar</h2>
      <div style={{ width: '30px', height: '2px', background: GOLD, marginBottom: '10px' }} />
      {EDUCATION.map((edu: Education, i: number) => (
        <div key={i} style={{
          display: 'flex', gap: '0', alignItems: 'stretch',
          background: i % 2 === 0 ? STRIPE_BG : '#fff',
          borderRadius: '4px',
          pageBreakInside: 'avoid', breakInside: 'avoid',
        }}>
          <span style={{
            fontFamily: FONT_SANS, fontSize: '9.5px', fontWeight: 700, color: NAVY,
            minWidth: '100px', padding: '9px 12px', flexShrink: 0,
          }}>{edu.period}</span>
          <div style={{ padding: '9px 12px' }}>
            <p style={{ fontFamily: FONT_SANS, fontSize: '9.5px', fontWeight: 700, margin: 0, color: '#1a1a1a' }}>{edu.degree}</p>
            <p style={{ fontFamily: FONT_SANS, fontSize: '8.5px', color: '#777', margin: '2px 0 0 0' }}>{edu.school}</p>
          </div>
        </div>
      ))}
    </PrintableSection>
  )
}

export default function CVDocument({
  summary, roleTitle, highlightedExperiences, experienceHighlights,
  competencies, editMode,
}: CVDocumentProps) {
  const ordered = highlightedExperiences?.length
    ? [
        ...EXPERIENCES.filter(e => highlightedExperiences.includes(e.id)),
        ...EXPERIENCES.filter(e => !highlightedExperiences.includes(e.id)),
      ]
    : EXPERIENCES

  return (
    <>
      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { margin: 0 !important; background: #fff !important; }
          #cv-document * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          thead { display: table-header-group; }
          tfoot { display: table-footer-group; }
          tbody { display: table-row-group; }
          .cv-editable { outline: none !important; box-shadow: none !important; }
        }
        .cv-editable:hover { outline: 1px dashed ${NAVY}50 !important; border-radius: 2px; }
        .cv-editable:focus { outline: 1px solid ${NAVY}90 !important; border-radius: 2px; background: ${NAVY}06; }
      `}</style>
      <div id="cv-document" style={{ fontFamily: FONT_SANS, background: '#fff' }}>
        <CoverPage summary={summary} roleTitle={roleTitle} competencies={competencies} editMode={editMode} />
        <ExperienceSection experiences={ordered} experienceHighlights={experienceHighlights} editMode={editMode} />
        <CertsSection editMode={editMode} />
      </div>
    </>
  )
}
