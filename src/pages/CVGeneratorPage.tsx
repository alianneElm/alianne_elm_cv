import { useState, useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Download, Loader2, Sparkles, FileCheck, Pencil, Eye } from 'lucide-react'
import CVDocument from '../components/CVDocument/CVDocument'
import type { Competencies } from '../components/CVDocument/CVDocument'
import { DEFAULT_SUMMARY } from '../lib/cvData'

interface GeneratedSummary {
  professional: string
  personal: string
  bonus: string
}

export default function CVGeneratorPage() {
  const [searchParams] = useSearchParams()
  const [roleInput, setRoleInput] = useState(() => searchParams.get('role') ?? '')
  const [roleTitle, setRoleTitle] = useState('Systemutvecklare / Fullstack-utvecklare')
  const [summary, setSummary] = useState<GeneratedSummary>(DEFAULT_SUMMARY)
  const [highlightedExperiences, setHighlightedExperiences] = useState<string[]>([])
  const [experienceHighlights, setExperienceHighlights] = useState<Record<string, string>>({})
  const [competencies, setCompetencies] = useState<Competencies>({})
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState('')

  const cvRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const roleFromUrl = searchParams.get('role')
    if (roleFromUrl && roleFromUrl.trim()) {
      generate(roleFromUrl.trim())
    } else {
      setTimeout(() => textareaRef.current?.focus(), 120)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `Alianne Elm CV - ${roleTitle}`,
    pageStyle: `
      @page { size: A4; margin: 0; }
      @media print {
        body { margin: 0; padding: 0; }
        .cv-page { page-break-after: always; width: 210mm; min-height: 297mm; box-sizing: border-box; background: white !important; }
        .cv-page:last-child { page-break-after: avoid; }
      }
    `,
  })

  const generate = async (overrideText?: string) => {
    const text = (overrideText ?? roleInput).trim()
    if (!text) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/generate-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roleDescription: text }),
      })
      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      setSummary(data.summary)
      setRoleTitle(data.roleTitle || 'Systemutvecklare / Fullstack-utvecklare')
      setHighlightedExperiences(data.highlightedExperiences || [])
      setExperienceHighlights(data.experienceHighlights || {})
      setCompetencies(data.competencies || {})
      setGenerated(true)
    } catch {
      setError('Något gick fel. Försök igen.')
    } finally {
      setLoading(false)
    }
  }

  const ACCENT = '#2b4c7e'

  return (
    <div className="cvgen-root">
      <style>{`
        .cvgen-root {
          min-height: 100vh;
          background: #f5f5f5;
          font-family: Arial, Helvetica, sans-serif;
        }
        .cvgen-topbar {
          background: #fff;
          border-bottom: 1px solid #e0e0e0;
          padding: 20px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          gap: 12px;
        }
        .cvgen-topbar-left {
          display: flex;
          align-items: center;
          gap: 20px;
          min-width: 0;
        }
        .cvgen-topbar-back {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #555;
          text-decoration: none;
          font-size: 14px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cvgen-topbar-title {
          font-size: 16px;
          font-weight: 700;
          color: ${ACCENT};
          letter-spacing: 1px;
        }
        .cvgen-topbar-subtitle {
          color: #bbb;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cvgen-download-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: none;
          border-radius: 8px;
          padding: 11px 22px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cvgen-layout {
          display: flex;
          min-height: calc(100vh - 68px);
        }
        .cvgen-sidebar {
          width: 420px;
          min-width: 420px;
          background: #fff;
          border-right: 1px solid #e0e0e0;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .cvgen-preview {
          flex: 1;
          overflow: auto;
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .cvgen-preview-hint {
          background: ${ACCENT}0a;
          border: 1px dashed ${ACCENT}33;
          border-radius: 12px;
          padding: 16px 22px;
          margin-bottom: 8px;
          font-size: 12px;
          color: ${ACCENT};
          max-width: 794px;
          width: 100%;
          box-sizing: border-box;
        }
        .cvgen-doc-wrapper {
          width: 794px;
          zoom: 1.5;
        }
        .cvgen-mobile-success {
          display: none;
          width: 100%;
          background: #fff;
          border: 1px solid #d4edda;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          box-sizing: border-box;
        }
        .cvgen-input {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          color: #333;
          outline: none;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }
        .cvgen-input:focus { border-color: ${ACCENT}; }
        .cvgen-textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          line-height: 1.6;
          color: #333;
          resize: vertical;
          outline: none;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }
        .cvgen-textarea:focus { border-color: ${ACCENT}; }
        .cvgen-generate-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          border-radius: 10px;
          padding: 14px;
          font-size: 15px;
          font-weight: 600;
          transition: background 0.2s;
          width: 100%;
        }
        .cvgen-success-box {
          background: #f0f7f0;
          border: 1px solid #b8ddb8;
          border-radius: 8px;
          padding: 14px;
          font-size: 14px;
          color: #2d6a2d;
          line-height: 1.5;
        }
        .cvgen-disclaimer {
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
          font-size: 13px;
          color: #aaa;
          margin: 0;
          line-height: 1.6;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .cvgen-sidebar {
            width: 280px;
            min-width: 280px;
            padding: 22px 18px;
          }
          .cvgen-preview { padding: 20px 12px; }
          .cvgen-topbar-subtitle { display: none; }
        }
        @media (max-width: 640px) {
          .cvgen-topbar { padding: 12px 16px; }
          .cvgen-topbar-subtitle { display: none; }
          .cvgen-download-btn { padding: 9px 14px; font-size: 12px; }
          .cvgen-download-btn span { display: none; }
          .cvgen-layout { flex-direction: column; }
          .cvgen-sidebar {
            width: 100%;
            min-width: unset;
            border-right: none;
            border-bottom: 1px solid #e0e0e0;
            padding: 20px 16px;
          }
          .cvgen-preview { display: none; }
          .cvgen-mobile-panel { padding: 16px; }
          .cvgen-mobile-success { display: flex; }
        }
      `}</style>

      {/* Top bar */}
      <div className="cvgen-topbar">
        <div className="cvgen-topbar-left">
          <Link to="/" className="cvgen-topbar-back">
            <ArrowLeft size={15} />
            Tillbaka
          </Link>
          <span className="cvgen-topbar-title">AE</span>
          <span className="cvgen-topbar-subtitle">CV-generator · Alianne Elm</span>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {generated && (
            <button
              onClick={() => setEditMode(m => !m)}
              className="cvgen-download-btn"
              style={{
                background: editMode ? `${ACCENT}1a` : 'rgba(0,0,0,0.05)',
                color: editMode ? ACCENT : '#555',
                border: editMode ? `1px solid ${ACCENT}59` : '1px solid #ddd',
              }}
            >
              {editMode ? <Eye size={15} /> : <Pencil size={15} />}
              <span>{editMode ? 'Förhandsgranska' : 'Redigera'}</span>
            </button>
          )}
          <button
            onClick={handlePrint}
            className="cvgen-download-btn"
            style={{ background: ACCENT, color: '#fff', cursor: 'pointer' }}
          >
            <Download size={15} />
            <span>Ladda ner PDF</span>
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div className="cvgen-layout">

        {/* Sidebar / form */}
        <div className="cvgen-sidebar">
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px 0' }}>
              Generera anpassat CV
            </h2>
            <p style={{ fontSize: '14px', color: '#888', margin: 0, lineHeight: 1.6 }}>
              Beskriv rollen du söker så anpassar AI:n sammanfattningen och lyfter fram rätt erfarenheter.
            </p>
          </div>

          <div>
            <label style={{ fontSize: '14px', fontWeight: 600, color: '#444', display: 'block', marginBottom: '8px' }}>
              Beskriv rollen
            </label>
            <textarea
              ref={textareaRef}
              value={roleInput}
              onChange={e => setRoleInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) generate() }}
              placeholder="Ex: Java-backendutvecklare med Spring Boot till ett fintechbolag i Stockholm, 6 månader. Krav: erfarenhet av AWS, säkerhetskritiska system och Agile."
              rows={6}
              className="cvgen-textarea"
            />
          </div>

          <p style={{ fontSize: '13px', color: '#bbb', margin: '-12px 0 0 0' }}>Cmd + Enter för att generera</p>

          {error && (
            <p style={{ fontSize: '14px', color: '#c0392b', margin: 0 }}>{error}</p>
          )}

          <button
            onClick={() => generate()}
            disabled={loading || !roleInput.trim()}
            className="cvgen-generate-btn"
            style={{
              background: roleInput.trim() && !loading ? ACCENT : '#ccc',
              color: '#fff',
              cursor: roleInput.trim() && !loading ? 'pointer' : 'not-allowed',
            }}
          >
            {loading
              ? <><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Genererar...</>
              : <><Sparkles size={15} /> Generera CV</>
            }
          </button>

          {generated && (
            <div className="cvgen-success-box">
              CV anpassat för: <strong>{roleTitle}</strong>. Klicka på "Ladda ner PDF" för att spara.
            </div>
          )}

          <p className="cvgen-disclaimer">
            AI:n skriver om sammanfattningen och prioriterar relevant erfarenhet. Teknisk data och erfarenheter ändras aldrig.
          </p>
        </div>

        {/* Mobile success card */}
        <div className="cvgen-mobile-panel" style={{ background: '#f5f5f5' }}>
          <div className="cvgen-mobile-success" style={{ display: generated ? undefined : 'none' }}>
            <FileCheck size={40} style={{ color: '#2d6a2d' }} />
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#1a1a1a', margin: '0 0 4px 0' }}>
                CV klart!
              </p>
              <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>
                Anpassat för: <strong>{roleTitle}</strong>
              </p>
            </div>
            <button
              onClick={handlePrint}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: ACCENT, color: '#fff', border: 'none',
                borderRadius: '8px', padding: '12px 24px',
                fontSize: '14px', fontWeight: 600, cursor: 'pointer',
              }}
            >
              <Download size={16} />
              Ladda ner PDF
            </button>
            <p style={{ fontSize: '11px', color: '#aaa', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
              Förhandsvisningen av CV:t är tillgänglig på desktop. På mobil kan du ladda ner direkt.
            </p>
          </div>
        </div>

        {/* Desktop CV preview */}
        <div className="cvgen-preview">
          {!generated && (
            <div className="cvgen-preview-hint">
              <strong>Förhandsgranskning</strong> — CV:t visas nedan med standardinnehåll. Beskriv rollen till vänster och klicka "Generera CV" för ett skräddarsytt resultat.
            </div>
          )}
          {editMode && (
            <div style={{
              background: `${ACCENT}0f`,
              border: `1px solid ${ACCENT}40`,
              borderRadius: '10px',
              padding: '10px 16px',
              fontSize: '12px',
              color: ACCENT,
              maxWidth: '794px',
              width: '100%',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <Pencil size={13} />
              <span><strong>Redigeringsläge</strong> — Klicka på valfri text i CV:t för att redigera den direkt. Ändringarna sparas automatiskt i PDF:en.</span>
            </div>
          )}
          <div className="cvgen-doc-wrapper">
            <div ref={cvRef}>
              <CVDocument
                summary={summary}
                roleTitle={roleTitle}
                highlightedExperiences={highlightedExperiences}
                experienceHighlights={experienceHighlights}
                competencies={competencies}
                editMode={editMode}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
