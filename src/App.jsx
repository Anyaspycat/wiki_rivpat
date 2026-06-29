import { useState } from 'react';
import Inicio from './components/Inicio';
import Instalacion from './components/Instalacion';
import ActiveDirectory from './components/ActiveDirectory';
import Cliente from './components/Cliente';
import ServiciosRed from './components/ServiciosRed';
import Gpo from './components/Gpo';
import Prompts from './components/Prompts';
import './App.css';

function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  const secciones = [
    { id: 'inicio', titulo: 'Inicio', componente: <Inicio /> },
    { id: 'instalacion', titulo: 'Instalación', componente: <Instalacion /> },
    { id: 'active-directory', titulo: 'Active Directory', componente: <ActiveDirectory /> },
    { id: 'cliente', titulo: 'Cliente al Dominio', componente: <Cliente /> },
    { id: 'servicios-red', titulo: 'DNS y DHCP', componente: <ServiciosRed /> },
    { id: 'gpo', titulo: 'GPO', componente: <Gpo /> },
    { id: 'prompts', titulo: 'Bitácora IA', componente: <Prompts /> },
  ];

  const seccionSeleccionada = secciones.find((s) => s.id === seccionActiva);

  return (
    <div className="app">
      {/* Navegación Lateral */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Wiki RIVPAT</h1>
          <p className="subtitle">Windows Server 2025</p>
        </div>
        <nav className="nav-menu">
          {secciones.map((seccion) => (
            <button
              key={seccion.id}
              className={`nav-button ${seccionActiva === seccion.id ? 'nav-button-active' : ''}`}
              onClick={() => setSeccionActiva(seccion.id)}
            >
              {seccion.titulo}
            </button>
          ))}
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="content">
        {seccionSeleccionada && seccionSeleccionada.componente}
      </main>
    </div>
  );
}

export default App;