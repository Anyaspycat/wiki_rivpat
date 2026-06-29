import './Inicio.css';

const Inicio = () => {
  // Datos generales del proyecto
  const projectData = {
    asignatura: 'TI3V35 — Sistemas Operativos',
    unidad: '2 — Sistema operativo de red: Windows Server',
    estudiante: 'Patricia Riveros Estay',
    proyecto: 'wiki_rivpat',
    carpetaDocumentacion: 'docs_rivpat',
  };

  // Máquinas virtuales del laboratorio
  const virtualMachines = [
    {
      maquina: 'Servidor',
      so: 'Windows Server 2025',
      nombre: 'SRV-DC01',
      configuracion: 'IP fija, Active Directory, DNS y DHCP',
    },
    {
      maquina: 'Cliente',
      so: 'Windows 10 Pro',
      nombre: 'PC01',
      configuracion: 'IP automática por DHCP y unión al dominio',
    },
  ];

  // Servicios configurados
  const serviciosConfigurados = [
    'Instalación y configuración básica del servidor',
    'Creación del dominio inacap.local mediante Active Directory',
    'Creación y administración de objetos del dominio, como unidades organizativas, usuarios y grupos',
    'Incorporación del cliente Windows 10 Pro al dominio',
    'Configuración de servicios DNS y DHCP',
    'Creación, vinculación y validación de una política de grupo GPO',
  ];

  // Secciones de la wiki
  const secciones = [
    {
      archivo: '01_inicio_rivpat.md',
      contenido: 'Portada, objetivo y topología del laboratorio',
    },
    {
      archivo: '02_instalacion_rivpat.md',
      contenido: 'Instalación y configuración básica del servidor',
    },
    {
      archivo: '03_active_directory_rivpat.md',
      contenido: 'Configuración del dominio, OU, usuarios y grupos',
    },
    {
      archivo: '04_cliente_dominio_rivpat.md',
      contenido: 'Incorporación del cliente al dominio',
    },
    {
      archivo: '05_servicios_red_rivpat.md',
      contenido: 'Configuración de DNS y DHCP',
    },
    {
      archivo: '06_gpo_rivpat.md',
      contenido: 'Creación y validación de política de grupo',
    },
    {
      archivo: '07_prompts_rivpat.md',
      contenido: 'Bitácora de uso de inteligencia artificial',
    },
  ];

  const topologia = `+------------------------------------------------------+
|          Red interna VirtualBox: redlab              |
|                                                      |
|   +------------------------+      +----------------+ |
|   | Servidor               |      | Cliente        | |
|   | SRV-DC01               |      | PC01           | |
|   | Windows Server 2025    |      | Windows 10 Pro | |
|   | IP: 192.168.10.10      |      | IP por DHCP    | |
|   | AD + DNS + DHCP        |      | Dominio        | |
|   +------------------------+      +----------------+ |
|                                                      |
|              Dominio: inacap.local                   |
+------------------------------------------------------+`;

  return (
    <div className="inicio-container">
      {/* Encabezado principal */}
      <header className="inicio-header">
        <h1 className="inicio-titulo">Wiki Laboratorio Windows Server</h1>
        <h2 className="inicio-subtitulo">Evaluación Sumativa N°2</h2>
      </header>

      {/* Datos generales */}
      <section className="seccion-datos-generales">
        <h3 className="seccion-titulo">Datos Generales del Proyecto</h3>
        <div className="tarjetas-datos">
          <div className="tarjeta-dato">
            <span className="dato-etiqueta">Asignatura</span>
            <p className="dato-valor">{projectData.asignatura}</p>
          </div>
          <div className="tarjeta-dato">
            <span className="dato-etiqueta">Unidad</span>
            <p className="dato-valor">{projectData.unidad}</p>
          </div>
          <div className="tarjeta-dato">
            <span className="dato-etiqueta">Estudiante</span>
            <p className="dato-valor">{projectData.estudiante}</p>
          </div>
          <div className="tarjeta-dato">
            <span className="dato-etiqueta">Proyecto</span>
            <p className="dato-valor">{projectData.proyecto}</p>
          </div>
          <div className="tarjeta-dato">
            <span className="dato-etiqueta">Carpeta de Documentación</span>
            <p className="dato-valor">{projectData.carpetaDocumentacion}</p>
          </div>
        </div>
      </section>

      {/* Objetivo del laboratorio */}
      <section className="seccion-objetivo">
        <h3 className="seccion-titulo">Objetivo del Laboratorio</h3>
        <div className="contenido-objetivo">
          <p>
            El objetivo de este laboratorio es implementar y documentar una infraestructura básica de red utilizando{' '}
            <strong>Windows Server</strong> en un entorno virtualizado.
          </p>
          <p>
            Durante el desarrollo del trabajo se configura un servidor como <strong>controlador de dominio</strong>,
            incorporando servicios de <strong>Active Directory</strong>, <strong>DNS</strong> y <strong>DHCP</strong>.
            Además, se integra un equipo cliente al dominio para validar el funcionamiento de la red y se aplica una{' '}
            <strong>política de grupo GPO</strong> para comprobar la administración centralizada desde el servidor.
          </p>
          <p>
            La documentación se presenta en formato de <strong>wiki web</strong>, desarrollada con React, utilizando
            archivos Markdown como fuente principal del contenido.
          </p>
        </div>
      </section>

      {/* Descripción general del entorno */}
      <section className="seccion-entorno">
        <h3 className="seccion-titulo">Descripción General del Entorno</h3>
        <p>
          El laboratorio se realiza en <strong>VirtualBox</strong>, utilizando una red interna aislada llamada{' '}
          <code>redlab</code>.
        </p>
        <p>Se utilizan dos máquinas virtuales:</p>
        
        <table className="tabla-vm">
          <thead>
            <tr>
              <th>Máquina</th>
              <th>Sistema Operativo</th>
              <th>Nombre de Equipo</th>
              <th>Configuración Principal</th>
            </tr>
          </thead>
          <tbody>
            {virtualMachines.map((vm, idx) => (
              <tr key={idx}>
                <td>{vm.maquina}</td>
                <td>{vm.so}</td>
                <td><code>{vm.nombre}</code></td>
                <td>{vm.configuracion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Topología del laboratorio */}
      <section className="seccion-topologia">
        <h3 className="seccion-titulo">Topología del Laboratorio</h3>
        <pre className="topologia-bloque">{topologia}</pre>
      </section>

      {/* Servicios configurados */}
      <section className="seccion-servicios">
        <h3 className="seccion-titulo">Servicios Configurados</h3>
        <p>En el laboratorio se documentan las siguientes configuraciones:</p>
        <ol className="lista-servicios">
          {serviciosConfigurados.map((servicio, idx) => (
            <li key={idx}>{servicio}</li>
          ))}
        </ol>
      </section>

      {/* Secciones de la wiki */}
      <section className="seccion-wiki">
        <h3 className="seccion-titulo">Secciones de la Wiki</h3>
        <table className="tabla-secciones">
          <thead>
            <tr>
              <th>Archivo</th>
              <th>Contenido</th>
            </tr>
          </thead>
          <tbody>
            {secciones.map((seccion, idx) => (
              <tr key={idx}>
                <td><code>{seccion.archivo}</code></td>
                <td>{seccion.contenido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Nota sobre evidencias */}
      <section className="seccion-evidencias">
        <p className="nota-evidencias">
          Cada sección de esta wiki contiene una explicación breve de lo realizado, su propósito dentro del laboratorio
          y una captura asociada como evidencia. Las capturas se almacenan en la carpeta <code>img_rivpat/</code>.
        </p>
      </section>
    </div>
  );
};

export default Inicio;
