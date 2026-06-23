import { useEffect, useMemo, useState } from 'react'
import { descripcionesPasos } from './data/descripcionesPasos'
import './App.css'

function makeTitle(filename) {
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/_/g, ' ')
    .replace(/\bpaso\b/gi, 'Paso')
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function naturalSort(a, b) {
  const numberPattern = /\d+/g
  const aParts = a.split(numberPattern).filter(Boolean)
  const bParts = b.split(numberPattern).filter(Boolean)
  const aNumbers = a.match(numberPattern) || []
  const bNumbers = b.match(numberPattern) || []

  for (let i = 0; i < Math.min(aParts.length, bParts.length); i += 1) {
    const left = aParts[i].localeCompare(bParts[i], undefined, { sensitivity: 'base' })
    if (left !== 0) return left

    const leftNum = Number(aNumbers[i] ?? 0)
    const rightNum = Number(bNumbers[i] ?? 0)
    if (leftNum !== rightNum) return leftNum - rightNum
  }

  return a.localeCompare(b, undefined, { sensitivity: 'base' })
}

function getDescription(section, title) {
  const sectionDescriptions = descripcionesPasos[section]
  if (!sectionDescriptions) return 'Descripción no definida. Edita src/data/descripcionesPasos.js para personalizar esta entrada.'
  return sectionDescriptions[title] || 'Descripción no definida. Edita src/data/descripcionesPasos.js para personalizar esta entrada.'
}

function App() {
  const [activeSection, setActiveSection] = useState(null)
  const [activePhoto, setActivePhoto] = useState({ section: null, index: 0 })

  const grouped = useMemo(() => {
    const modules = import.meta.glob('./assets/img_pasos/**', { eager: true })
    const groups = {}
    Object.keys(modules).forEach((p) => {
      const parts = p.split('/')
      const folder = parts[parts.length - 2]
      const filename = parts[parts.length - 1]
      const url = modules[p].default
      if (!groups[folder]) groups[folder] = []
      groups[folder].push({ url, filename })
    })
    return Object.keys(groups)
      .sort()
      .map((section) => ({
        section,
        images: groups[section].sort((a, b) => naturalSort(a.filename, b.filename)),
      }))
  }, [])

  useEffect(() => {
    if (activeSection === null && grouped.length > 0) {
      setActiveSection(grouped[0].section)
    }
  }, [activeSection, grouped])

  useEffect(() => {
    if (!activeSection) return
    setActivePhoto((current) =>
      current.section === activeSection ? current : { section: activeSection, index: 0 }
    )
  }, [activeSection])

  useEffect(() => {
    const section = grouped.find((group) => group.section === activeSection)
    if (!section) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActivePhoto((current) => {
          if (current.section !== activeSection) return current
          return {
            section: current.section,
            index: (current.index - 1 + section.images.length) % section.images.length,
          }
        })
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActivePhoto((current) => {
          if (current.section !== activeSection) return current
          return {
            section: current.section,
            index: (current.index + 1) % section.images.length,
          }
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSection, grouped])

  const activeGroup = grouped.find((group) => group.section === activeSection)
  const activeIndex = activeGroup ? Math.min(activePhoto.index, activeGroup.images.length - 1) : 0
  const activeImage = activeGroup?.images[activeIndex] || null

  const changePhoto = (offset) => {
    if (!activeGroup) return
    setActivePhoto({
      section: activeGroup.section,
      index: (activeIndex + offset + activeGroup.images.length) % activeGroup.images.length,
    })
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>Secciones</h2>
        <ul>
          {grouped.map((group) => (
            <li key={group.section}>
              <button
                className={group.section === activeSection ? 'active' : ''}
                onClick={() => setActiveSection(group.section)}
                type="button"
              >
                {group.section}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="main-content">
        <header className="wiki-header">
          <div className="header-inner">
            <h1 className="wiki-title">
              <span>Wiki - Instalación y Configuración</span>
              <span>Windows Server 2025</span>
            </h1>
          </div>
        </header>

        <div className="carousel-container">
          {activeGroup && activeImage ? (
            <div className="carousel-inner" id={activeGroup.section}>
              <div className="carousel-arrows">
                <button className="carousel-arrow" type="button" onClick={() => changePhoto(-1)} aria-label="Anterior">
                  ‹
                </button>
                <button className="carousel-arrow" type="button" onClick={() => changePhoto(1)} aria-label="Siguiente">
                  ›
                </button>
              </div>

              <div className="step-title">
                <h2>{makeTitle(activeImage.filename)}</h2>
              </div>

              <div className="step-image">
                <img src={activeImage.url} alt={makeTitle(activeImage.filename)} />
              </div>

              <div className="step-footer">
                <div className="step-description">
                  <p>{getDescription(activeGroup.section, makeTitle(activeImage.filename))}</p>
                </div>
                <div className="step-counter">
                  {activeIndex + 1} / {activeGroup.images.length}
                </div>
              </div>
            </div>
          ) : (
            <p className="empty-state">Selecciona una sección para comenzar.</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
