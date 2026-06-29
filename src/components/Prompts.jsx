import './Prompts.css';

const Prompts = () => {
  // Datos generales
  const datosGenerales = {
    proyecto: 'wiki_rivpat',
    archivo: '07_prompts_rivpat.md',
    herramientaUtilizada: 'ChatGPT / GitHub Copilot',
    objetivo: 'Apoyo en estructura, redacción y corrección de la wiki',
  };

  // Registro de prompts
  const registroPrompts = [
    {
      numero: 1,
      herramienta: 'ChatGPT',
      seccion: '01_inicio_rivpat.md',
      prompt:
        'Necesito un Markdown base para la introducción de este trabajo, tomando como contexto la guía física digitalizada.',
      resultado: 'Se creó una portada con objetivo, topología del laboratorio y datos generales del proyecto.',
    },
    {
      numero: 2,
      herramienta: 'ChatGPT',
      seccion: '02_instalacion_rivpat.md',
      prompt:
        'Necesito un Markdown para el apartado de instalación y configuración del servidor, tomando como contexto la guía física digitalizada.',
      resultado:
        'Se generó una estructura inicial para documentar la instalación de Windows Server, red interna, nombre del equipo, IP fija y firewall.',
    },
    {
      numero: 3,
      herramienta: 'ChatGPT',
      seccion: '03_active_directory_rivpat.md',
      prompt:
        'Necesito un Markdown para el apartado de Active Directory y objetos del dominio, tomando como contexto la guía física digitalizada.',
      resultado:
        'Se generó una estructura para documentar la instalación del rol AD DS, promoción a controlador de dominio, creación del dominio inacap.local, OU, usuarios y grupo.',
    },
    {
      numero: 4,
      herramienta: 'ChatGPT',
      seccion: '04_cliente_dominio_rivpat.md',
      prompt:
        'Necesito un Markdown para el apartado de incorporación del cliente al dominio, tomando como contexto la guía física digitalizada.',
      resultado:
        'Se generó una estructura para documentar la creación del cliente PC01, verificación de IP por DHCP, unión al dominio inacap.local e inicio de sesión con usuario de dominio.',
    },
    {
      numero: 5,
      herramienta: 'ChatGPT',
      seccion: '05_servicios_red_rivpat.md',
      prompt:
        'Necesito un Markdown para el apartado de servicios de red DNS y DHCP, tomando como contexto la guía física digitalizada.',
      resultado:
        'Se generó una estructura para documentar la revisión del servicio DNS, instalación del rol DHCP, creación del ámbito y validación de IP automática.',
    },
    {
      numero: 6,
      herramienta: 'ChatGPT',
      seccion: '06_gpo_rivpat.md',
      prompt:
        'Necesito un Markdown para el apartado de políticas de grupo GPO, tomando como contexto la guía física digitalizada.',
      resultado:
        'Se generó una estructura para documentar la creación de la GPO GPO-Ventas, su vinculación a la OU Ventas y la configuración de bloqueo del Panel de control.',
    },
    {
      numero: 7,
      herramienta: 'GitHub Copilot',
      seccion: 'Inicio.jsx',
      prompt:
        'Crea el componente React Inicio.jsx para una wiki básica del proyecto wiki_rivpat, usando como base el archivo 01_inicio_rivpat.md. Convierte el contenido Markdown en estructura de datos JavaScript.',
      resultado:
        'Se generó el componente inicial de la wiki con portada, datos generales del laboratorio, objetivo, descripción del entorno, topología, servicios configurados y tabla de secciones.',
    },
    {
      numero: 8,
      herramienta: 'GitHub Copilot',
      seccion: 'Instalacion.jsx',
      prompt:
        'Crea el componente React Instalacion.jsx usando como base el archivo 02_instalacion_rivpat.md. Convierte el contenido del Markdown en data JavaScript interna.',
      resultado:
        'Se generó el componente de instalación y configuración básica del servidor, organizando la información en tablas, secciones paso a paso e imágenes de evidencia.',
    },
    {
      numero: 9,
      herramienta: 'GitHub Copilot',
      seccion: 'ActiveDirectory.jsx',
      prompt:
        'Crea el componente React ActiveDirectory.jsx usando como base el archivo 03_active_directory_rivpat.md. Convierte el Markdown en data JavaScript interna.',
      resultado:
        'Se generó el componente de Active Directory, estructurando la instalación del rol AD DS, creación del dominio inacap.local, unidad organizativa, usuario y grupo del dominio.',
    },
    {
      numero: 10,
      herramienta: 'GitHub Copilot',
      seccion: 'Cliente.jsx',
      prompt:
        'Crea el componente React Cliente.jsx usando como base el archivo 04_cliente_dominio_rivpat.md. Convierte el contenido Markdown en data JavaScript interna.',
      resultado:
        'Se generó el componente del cliente, documentando la configuración de PC01, validación de conectividad, unión al dominio e inicio de sesión con usuario de dominio.',
    },
    {
      numero: 11,
      herramienta: 'GitHub Copilot',
      seccion: 'ServiciosRed.jsx',
      prompt:
        'Crea el componente React ServiciosRed.jsx usando como base el archivo 05_servicios_red_rivpat.md. Convierte el Markdown en data JavaScript interna.',
      resultado:
        'Se generó el componente de servicios de red, organizando la configuración de DNS y DHCP, el ámbito LAN-redlab y las evidencias de instalación y activación del servicio.',
    },
    {
      numero: 12,
      herramienta: 'GitHub Copilot',
      seccion: 'Gpo.jsx',
      prompt:
        'Crea el componente React Gpo.jsx usando como base el archivo 06_gpo_rivpat.md. Convierte el contenido Markdown en data JavaScript interna.',
      resultado:
        'Se generó el componente de políticas de grupo, documentando la creación de GPO-Ventas, su vinculación a la OU Ventas y la restricción del Panel de control en el cliente.',
    },
    {
      numero: 13,
      herramienta: 'GitHub Copilot',
      seccion: 'Prompts.jsx',
      prompt:
        'Crea el componente React Prompts.jsx usando como base el archivo 07_prompts_rivpat.md. Convierte la bitácora de uso de IA en data JavaScript interna.',
      resultado:
        'Se generó el componente de bitácora de inteligencia artificial, permitiendo visualizar los prompts utilizados durante el desarrollo de la documentación y la wiki.',
    },
    {
      numero: 14,
      herramienta: 'GitHub Copilot',
      seccion: 'App.jsx',
      prompt:
        'Reemplaza el contenido actual de App.jsx por una estructura de wiki básica en React. Importa los componentes Inicio, Instalacion, ActiveDirectory, Cliente, ServiciosRed, Gpo y Prompts. Elimina la plantilla inicial de Vite, usa useState para controlar la sección activa y crea una navegación con botones.',
      resultado:
        'Se reemplazó la plantilla inicial de Vite por una aplicación tipo wiki, agregando navegación entre secciones y visualización dinámica del componente seleccionado.',
    },
    {
      numero: 15,
      herramienta: 'GitHub Copilot',
      seccion: 'App.css',
      prompt:
        'Reemplaza el CSS actual por estilos para una wiki básica en React. Crea estilos para layout general, barra lateral, botones de navegación, botón activo, contenido principal, tablas, tarjetas de pasos, imágenes responsivas y bloques de código.',
      resultado:
        'Se generaron estilos visuales para la wiki, mejorando la distribución, lectura del contenido, presentación de tablas, evidencias e interacción con el menú de navegación.',
    },
  ];

  return (
    <div className="prompts-container">
      {/* Encabezado */}
      <header className="prompts-header">
        <h1 className="prompts-titulo">Bitácora de Uso de Inteligencia Artificial</h1>
      </header>

      {/* Datos generales */}
      <section className="seccion-datos-generales">
        <h2 className="seccion-titulo">Datos Generales</h2>
        <table className="tabla-datos-generales">
          <tbody>
            <tr>
              <td className="etiqueta">Proyecto</td>
              <td>
                <code>{datosGenerales.proyecto}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Archivo</td>
              <td>
                <code>{datosGenerales.archivo}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Herramienta utilizada</td>
              <td>{datosGenerales.herramientaUtilizada}</td>
            </tr>
            <tr>
              <td className="etiqueta">Objetivo</td>
              <td>{datosGenerales.objetivo}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Registro de prompts */}
      <section className="seccion-registro">
        <h2 className="seccion-titulo">Registro de Prompts</h2>
        <div className="tabla-responsive">
          <table className="tabla-prompts">
            <thead>
              <tr>
                <th className="col-numero">N°</th>
                <th className="col-herramienta">Herramienta</th>
                <th className="col-seccion">Sección</th>
                <th className="col-prompt">Prompt Utilizado</th>
                <th className="col-resultado">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {registroPrompts.map((registro) => (
                <tr key={registro.numero}>
                  <td className="col-numero">
                    <strong>{registro.numero}</strong>
                  </td>
                  <td className="col-herramienta">
                    <span className={`badge badge-${registro.herramienta.toLowerCase().replace(' ', '-')}`}>
                      {registro.herramienta}
                    </span>
                  </td>
                  <td className="col-seccion">
                    <code>{registro.seccion}</code>
                  </td>
                  <td className="col-prompt">
                    <p className="texto-prompt">{registro.prompt}</p>
                  </td>
                  <td className="col-resultado">
                    <p className="texto-resultado">{registro.resultado}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Resumen */}
      <section className="seccion-resumen">
        <h2 className="seccion-titulo">Resumen</h2>
        <div className="contenido-resumen">
          <p>
            Se utilizaron herramientas de inteligencia artificial durante el desarrollo del proyecto <code>wiki_rivpat</code> para
            optimizar la estructura, redacción y corrección de la documentación.
          </p>
          <p>
            Un total de <strong>{registroPrompts.length} prompts</strong> fueron empleados:
            <br />
            <strong>6 prompts</strong> con ChatGPT para la creación de la estructura inicial de la documentación Markdown.
            <br />
            <strong>7 prompts</strong> con GitHub Copilot para la generación de componentes React.
          </p>
          <p>
            Estas herramientas permitieron agilizar el proceso de desarrollo manteniendo la calidad y coherencia del proyecto.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Prompts;
