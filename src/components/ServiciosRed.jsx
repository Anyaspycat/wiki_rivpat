import './ServiciosRed.css';

const ServiciosRed = () => {
  // Datos generales de los servicios de red
  const datosServicios = {
    servidor: 'SRV-DC01',
    dominio: 'inacap.local',
    servicioDns: 'Activo en el servidor',
    servicioDhcp: 'Instalado y configurado',
    redInterna: 'redlab',
    ipServidor: '192.168.10.10',
    rangoDhcp: '192.168.10.50 a 192.168.10.100',
    mascaraSubred: '255.255.255.0',
    dnsEntregado: '192.168.10.10',
    clientePrueba: 'PC01',
  };

  // Configuración del ámbito DHCP
  const ambitoDhcp = {
    nombre: 'LAN-redlab',
    direccionInicial: '192.168.10.50',
    direccionFinal: '192.168.10.100',
    mascaraSubred: '255.255.255.0',
    servidorDns: '192.168.10.10',
    dominio: 'inacap.local',
  };

  // Secciones de pasos agrupadas
  const secciones = [
    {
      seccion: 'Instalación del Rol DHCP',
      descripcionSeccion:
        'Desde el Administrador del servidor, se instaló el rol Servidor DHCP. Este rol permite que el servidor asigne direcciones IP automáticamente a los equipos clientes conectados a la red interna.',
      pasosList: [
        {
          numero: 1,
          descripcion:
            'Desde el panel del Administrador del servidor, se selecciona Administrar y luego Agregar roles y características.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_1.png',
        },
        {
          numero: 2,
          descripcion: 'En la sección Roles del servidor, se selecciona Servidor DHCP.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_2.png',
        },
        {
          numero: 3,
          descripcion:
            'Se validan las características adicionales que serán incorporadas y se selecciona Agregar características.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_3.png',
        },
        {
          numero: 4,
          descripcion: 'Se selecciona Instalar y se espera a que finalice el proceso de instalación del rol DHCP.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_4.png',
        },
        {
          numero: 5,
          descripcion:
            'Una vez finalizada la instalación, se selecciona la bandera de notificaciones y se ingresa a Completar configuración de DHCP.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_5.png',
        },
        {
          numero: 6,
          descripcion:
            'Se utilizan las credenciales del usuario Administrador para autorizar la configuración del servicio DHCP.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_6.png',
        },
      ],
    },
    {
      seccion: 'Creación del Ámbito DHCP',
      descripcionSeccion:
        'Luego de instalar el rol DHCP, se abrió la consola desde Herramientas → DHCP. Dentro de la consola, se expandió el servidor y se creó un nuevo ámbito en IPv4.',
      pasosList: [
        {
          numero: 7,
          descripcion: 'Desde el menú Herramientas, se selecciona DHCP para abrir la consola de administración.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_7.png',
        },
        {
          numero: 8,
          descripcion: 'Dentro de la consola DHCP, se hace clic derecho sobre IPv4 y se selecciona Nuevo ámbito.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_8.png',
        },
        {
          numero: 9,
          descripcion:
            'Se define el nombre del nuevo ámbito DHCP de acuerdo con la red interna configurada.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_9.png',
        },
        {
          numero: 10,
          descripcion: 'Se configura el intervalo de direcciones IP que será distribuido automáticamente.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_10.png',
        },
        {
          numero: 11,
          descripcion: 'Se verifica que el ámbito DHCP se encuentre activo y confirmando que la configuración fue completada.',
          imagen: 'img_rivpat/05_DHCP/D_Paso_11.png',
        },
      ],
    },
  ];

  return (
    <div className="servicios-container">
      {/* Encabezado */}
      <header className="servicios-header">
        <h1 className="servicios-titulo">Servicios de Red: DNS y DHCP</h1>
      </header>

      {/* Objetivo de la sección */}
      <section className="seccion-objetivo">
        <h2 className="seccion-titulo">Objetivo de la Sección</h2>
        <p>
          En esta sección se documenta la configuración de los servicios de red <strong>DNS</strong> y <strong>DHCP</strong> en
          el servidor <code>SRV-DC01</code>.
        </p>
        <p>
          El objetivo es permitir que el servidor entregue direcciones IP automáticamente a los equipos clientes mediante DHCP
          y que estos puedan localizar correctamente el dominio <code>inacap.local</code> mediante DNS.
        </p>
        <p>
          Esta configuración es necesaria para que el cliente <code>PC01</code> pueda comunicarse con el servidor, recibir una IP
          válida dentro de la red interna <code>redlab</code> y unirse correctamente al dominio.
        </p>
      </section>

      {/* Datos generales de los servicios de red */}
      <section className="seccion-datos">
        <h2 className="seccion-titulo">Datos Generales de los Servicios de Red</h2>
        <table className="tabla-datos-servicios">
          <tbody>
            <tr>
              <td className="etiqueta">Servidor</td>
              <td><code>{datosServicios.servidor}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Dominio</td>
              <td><code>{datosServicios.dominio}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Servicio DNS</td>
              <td>{datosServicios.servicioDns}</td>
            </tr>
            <tr>
              <td className="etiqueta">Servicio DHCP</td>
              <td>{datosServicios.servicioDhcp}</td>
            </tr>
            <tr>
              <td className="etiqueta">Red interna</td>
              <td><code>{datosServicios.redInterna}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">IP del servidor</td>
              <td><code>{datosServicios.ipServidor}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Rango DHCP</td>
              <td><code>{datosServicios.rangoDhcp}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Máscara de subred</td>
              <td><code>{datosServicios.mascaraSubred}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">DNS entregado al cliente</td>
              <td><code>{datosServicios.dnsEntregado}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Cliente de prueba</td>
              <td><code>{datosServicios.clientePrueba}</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Secciones de pasos */}
      {secciones.map((seccionPasos, idx) => (
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

      {/* Configuración del ámbito DHCP */}
      <section className="seccion-ambito">
        <h2 className="seccion-titulo">Configuración del Ámbito DHCP</h2>
        <p>
          El ámbito configurado permite entregar direcciones IP automáticas a los clientes de la red <code>redlab</code>:
        </p>
        <table className="tabla-ambito-dhcp">
          <tbody>
            <tr>
              <td className="etiqueta">Nombre del ámbito</td>
              <td><code>{ambitoDhcp.nombre}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Dirección inicial</td>
              <td><code>{ambitoDhcp.direccionInicial}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Dirección final</td>
              <td><code>{ambitoDhcp.direccionFinal}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Máscara de subred</td>
              <td><code>{ambitoDhcp.mascaraSubred}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Servidor DNS</td>
              <td><code>{ambitoDhcp.servidorDns}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Dominio</td>
              <td><code>{ambitoDhcp.dominio}</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Resultado de la configuración */}
      <section className="seccion-resultado">
        <h2 className="seccion-titulo">Resultado de la Configuración</h2>
        <div className="contenido-resultado">
          <p>
            Al finalizar esta etapa, el servidor <code>SRV-DC01</code> quedó configurado con los servicios DNS y DHCP activos.
          </p>
          <p>
            El servicio DHCP quedó preparado para entregar direcciones IP automáticas dentro del rango{' '}
            <code>192.168.10.50</code> a <code>192.168.10.100</code>, mientras que el DNS quedó configurado para permitir
            la resolución del dominio <code>inacap.local</code>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiciosRed;
