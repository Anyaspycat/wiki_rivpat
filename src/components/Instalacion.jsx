import './Instalacion.css';

const Instalacion = () => {
  // Requisitos previos con enlaces
  const requisitos = [
    {
      id: 1,
      nombre: 'VirtualBox',
      descripcion: 'Aplicación de virtualización para emular el servidor y cliente',
      enlace: 'https://www.virtualbox.org/wiki/Downloads',
      imagen: 'img_rivpat/01_Requisitos/VirtualBox_Download.png',
    },
    {
      id: 2,
      nombre: 'Windows Server 2025',
      descripcion: 'Sistema operativo para el servidor principal del laboratorio',
      enlace: 'https://www.microsoft.com/en-us/evalcenter/download-windows-server-2025',
      imagen: 'img_rivpat/01_Requisitos/WindowsServer_Download.png',
    },
    {
      id: 3,
      nombre: 'Windows 10 Pro',
      descripcion: 'Sistema operativo para la máquina cliente (usando MediaCreationTool_22H2.exe)',
      enlace: 'https://www.microsoft.com/es-es/software-download/windows10',
      imagen: 'img_rivpat/01_Requisitos/Windows10Pro_Download.png',
    },
  ];

  // Datos generales del servidor
  const datosServidor = {
    maquinaVirtual: 'Servidor',
    nombreEquipo: 'SRV-DC01',
    sistemaOperativo: 'Windows Server 2025',
    tipoRed: 'Red interna VirtualBox',
    nombreRed: 'redlab',
    direccionIP: '192.168.10.10',
    mascaraSubred: '255.255.255.0',
    puertaEnlace: 'Sin configurar',
    dnsPreferido: '127.0.0.1',
    funcionEsperada: 'Servidor principal del laboratorio',
  };

  // Pasos agrupados por sección
  const pasos = [
    {
      seccion: 'Configuración VirtualBox',
      descripcionSeccion:
        'Se creó una máquina virtual en VirtualBox para instalar el sistema operativo Windows Server 2025. La máquina virtual fue configurada con los recursos necesarios para ejecutar el servidor dentro del laboratorio.',
      pasosList: [
        {
          numero: 1,
          descripcion: 'Se asigna el nombre SRV-DC01 a la máquina virtual y se selecciona la imagen ISO de Windows Server 2025.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_1.png',
        },
        {
          numero: 2,
          descripcion: 'Se configura la memoria RAM con 4 GB y se asignan 2 núcleos de CPU.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_2.png',
        },
        {
          numero: 3,
          descripcion: 'Se define un disco duro virtual de 50 GB para la instalación del sistema operativo.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_3.png',
        },
        {
          numero: 4,
          descripcion: 'Se configura el adaptador de red en modo red interna, utilizando el nombre redlab.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_4.png',
        },
      ],
    },
    {
      seccion: 'Instalación de Windows Server 2025',
      descripcionSeccion:
        'Se inició la máquina virtual utilizando la imagen ISO de Windows Server 2025. Se seleccionó la edición con experiencia de escritorio para trabajar con una interfaz gráfica.',
      pasosList: [
        {
          numero: 5,
          descripcion: 'Se inicia la máquina virtual y se configura el idioma, formato de hora y distribución del teclado.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_5.png',
        },
        {
          numero: 6,
          descripcion: 'Se selecciona la instalación de Windows Server 2025, autorizando la eliminación de archivos existentes.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_6.png',
        },
        {
          numero: 7,
          descripcion:
            'Se selecciona la edición Standard Evaluation (experiencia de escritorio), que incluye interfaz gráfica.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_7.png',
        },
        {
          numero: 8,
          descripcion: 'Se selecciona el espacio disponible del disco virtual para instalar el sistema operativo.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_8.png',
        },
        {
          numero: 9,
          descripcion: 'Se configura la contraseña del usuario local Administrador.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_9.png',
        },
        {
          numero: 10,
          descripcion: 'Se visualiza la ventana del Administrador del servidor, evidenciando que la instalación se completó.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_10.png',
        },
      ],
    },
    {
      seccion: 'Cambio de Nombre del Equipo',
      descripcionSeccion:
        'Se modificó el nombre del equipo servidor a SRV-DC01. Este nombre permite identificar claramente al servidor principal que será utilizado como controlador de dominio.',
      pasosList: [
        {
          numero: 11,
          descripcion: 'Desde el Administrador del servidor, se ingresa a Servidor local y se selecciona el nombre actual.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_11.png',
        },
        {
          numero: 12,
          descripcion: 'Se selecciona la opción para cambiar el nombre del equipo y se establece el nombre SRV-DC01.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_12.png',
        },
      ],
    },
    {
      seccion: 'Configuración de Red',
      descripcionSeccion:
        'Se configuró una dirección IP fija en el adaptador de red del servidor. Esta configuración es importante porque el servidor entregará servicios de red al dominio.',
      pasosList: [
        {
          numero: 13,
          descripcion: 'Desde Servidor local, se selecciona la opción correspondiente al adaptador de red Ethernet.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_13.png',
        },
        {
          numero: 14,
          descripcion: 'Se hace clic derecho sobre el adaptador Ethernet y se selecciona Propiedades.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_14.png',
        },
        {
          numero: 15,
          descripcion:
            'Se selecciona Protocolo de Internet versión 4 (TCP/IPv4) y se ingresa a Propiedades.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_15.png',
        },
        {
          numero: 16,
          descripcion:
            'Se configuran los parámetros de red: dirección IP, máscara de subred y DNS definidos para el servidor.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_16.png',
        },
        {
          numero: 17,
          descripcion: 'Se verifica en Servidor local que la dirección IP haya sido modificada correctamente.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_17.png',
        },
      ],
    },
    {
      seccion: 'Verificación del Firewall',
      descripcionSeccion:
        'Se verificó que el firewall de Windows se encontrara activado. El firewall se mantiene habilitado para conservar la seguridad del servidor.',
      pasosList: [
        {
          numero: 18,
          descripcion: 'Desde el buscador de Windows, se escribe Firewall y se selecciona Firewall de Windows Defender.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_18.png',
        },
        {
          numero: 19,
          descripcion:
            'Se verifica que el Firewall de Windows se encuentre activo para que posteriormente habilite puertos según servicios.',
          imagen: 'img_rivpat/02_Instalacion_Configuracion/A_Paso_19.png',
        },
      ],
    },
  ];

  return (
    <div className="instalacion-container">
      {/* Encabezado */}
      <header className="instalacion-header">
        <h1 className="instalacion-titulo">Instalación y Configuración Básica del Servidor</h1>
      </header>

      {/* Objetivo de la sección */}
      <section className="seccion-objetivo">
        <h2 className="seccion-titulo">Objetivo de la Sección</h2>
        <p>
          En esta sección se documenta la instalación y configuración inicial del servidor que será utilizado como base
          del laboratorio de Windows Server.
        </p>
        <p>
          El servidor se configura como una máquina virtual en VirtualBox, con el sistema operativo{' '}
          <strong>Windows Server 2025</strong>, conectado a una red interna llamada <code>redlab</code>. Además, se
          asigna un nombre de equipo, una dirección IP fija y se verifica el estado del firewall.
        </p>
        <p>
          Esta configuración es necesaria para que el servidor pueda cumplir posteriormente los roles de{' '}
          <strong>Active Directory</strong>, <strong>DNS</strong> y <strong>DHCP</strong> dentro del dominio{' '}
          <code>inacap.local</code>.
        </p>
      </section>

      {/* Requisitos previos */}
      <section className="seccion-requisitos">
        <h2 className="seccion-titulo">Requisitos Previos</h2>
        <p>Debemos tener instaladas las siguientes aplicaciones y sistemas operativos:</p>
        <div className="requisitos-grid">
          {requisitos.map((req) => (
            <div key={req.id} className="tarjeta-requisito">
              <h3>{req.nombre}</h3>
              <p className="desc-requisito">{req.descripcion}</p>
              <a href={req.enlace} target="_blank" rel="noopener noreferrer" className="btn-enlace">
                Descargar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Datos generales del servidor */}
      <section className="seccion-datos">
        <h2 className="seccion-titulo">Datos Generales del Servidor</h2>
        <table className="tabla-datos">
          <tbody>
            <tr>
              <td className="etiqueta">Máquina virtual</td>
              <td>{datosServidor.maquinaVirtual}</td>
            </tr>
            <tr>
              <td className="etiqueta">Nombre del equipo</td>
              <td>
                <code>{datosServidor.nombreEquipo}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Sistema operativo</td>
              <td>{datosServidor.sistemaOperativo}</td>
            </tr>
            <tr>
              <td className="etiqueta">Tipo de red</td>
              <td>{datosServidor.tipoRed}</td>
            </tr>
            <tr>
              <td className="etiqueta">Nombre de red interna</td>
              <td>
                <code>{datosServidor.nombreRed}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Dirección IP</td>
              <td>
                <code>{datosServidor.direccionIP}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Máscara de subred</td>
              <td>
                <code>{datosServidor.mascaraSubred}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Puerta de enlace</td>
              <td>{datosServidor.puertaEnlace}</td>
            </tr>
            <tr>
              <td className="etiqueta">DNS preferido</td>
              <td>
                <code>{datosServidor.dnsPreferido}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Función esperada</td>
              <td>{datosServidor.funcionEsperada}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Pasos por sección */}
      {pasos.map((seccionPasos, idx) => (
        <section key={idx} className="seccion-pasos">
          <h2 className="seccion-titulo">{seccionPasos.seccion}</h2>
          <p className="desc-seccion">{seccionPasos.descripcionSeccion}</p>

          <div className="pasos-lista">
            {seccionPasos.pasosList.map((paso) => (
              <div key={paso.numero} className="paso-item">
                <div className="paso-header">
                  <span className="paso-numero">{paso.numero}</span>
                  <p className="paso-descripcion">{paso.descripcion}</p>
                </div>
                <div className="paso-imagen-container">
                  <img src={paso.imagen} alt={`Paso ${paso.numero}`} className="paso-imagen" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Resultado de la configuración */}
      <section className="seccion-resultado">
        <h2 className="seccion-titulo">Resultado de la Configuración</h2>
        <div className="contenido-resultado">
          <p>
            Al finalizar esta etapa, el servidor quedó instalado y configurado con los parámetros iniciales requeridos
            para continuar con el laboratorio.
          </p>
          <p>
            El equipo <code>SRV-DC01</code> quedó preparado para la instalación de los roles de servidor, principalmente
            <strong> Active Directory</strong>, <strong>DNS</strong> y <strong>DHCP</strong>, los cuales permitirán
            crear y administrar el dominio <code>inacap.local</code>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Instalacion;


