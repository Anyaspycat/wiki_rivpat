import { useEffect, useMemo, useState } from 'react'
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

function App() {
  const [activeSection, setActiveSection] = useState(null)

  // Cargar todas las imágenes de img_pasos (Vite import.meta.glob)
  const grouped = useMemo(() => {
    const modules = import.meta.glob('./assets/img_pasos/**', { eager: true })
    const groups = {}
    Object.keys(modules).forEach((p) => {
      // p example: /src/assets/img_pasos/Paso_A/A_Paso_1.png
      const parts = p.split('/')
      const folder = parts[parts.length - 2]
      const filename = parts[parts.length - 1]
      const url = modules[p].default
      if (!groups[folder]) groups[folder] = []
      groups[folder].push({ url, filename })
    })
    // sort keys for stable order
    const ordered = Object.keys(groups)
      .sort()
      .map((k) => ({ section: k, images: groups[k].sort((a, b) => a.filename.localeCompare(b.filename)) }))
    return ordered
  }, [])

  useEffect(() => {
    if (activeSection === null && grouped.length > 0) {
      setActiveSection(grouped[0].section)
    }
  }, [activeSection, grouped])

  return (
    <div className="wiki-root">
      <aside className="wiki-sidebar">
        <h2>Secciones</h2>
        <ul>
          {grouped.map((g) => (
            <li key={g.section}>
              <button className={g.section === activeSection ? 'active' : ''} onClick={() => setActiveSection(g.section)}>
                {g.section}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="wiki-main">
        <header className="wiki-header">
          <h1>Wiki de pasos</h1>
          <p>Secciones generadas automáticamente desde <code>src/assets/img_pasos</code></p>
        </header>

        {grouped.map((g) => (
          <section key={g.section} className={`wiki-section ${g.section === activeSection ? 'visible' : 'hidden'}`} id={g.section}>
            <h2>{g.section}</h2>
            <div className="gallery">
              {g.images.map((img) => (
                <figure key={img.filename} className="thumb">
                  <img src={img.url} alt={img.filename} />
                  <figcaption>
                    <strong>{makeTitle(img.filename)}</strong>
                    <p>Descripción: Imagen automatically generated from filename.</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
