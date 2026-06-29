import './Cliente.css';

const Cliente = () => {
  // Datos generales del cliente
  const datosCliente = {
    maquinaVirtual: 'Cliente',
    nombreEquipo: 'PC01',
    sistemaOperativo: 'Windows 10 Pro',
    tipoRed: 'Red interna VirtualBox',
    nombreRed: 'redlab',
    direccionIP: 'Automática por DHCP',
    rangoEsperado: '192.168.10.50 a 192.168.10.100',
    dnsEsperado: '192.168.10.10',
    dominio: 'inacap.local',
    usuarioDominio: 'INACAP\\priveros',
  };

  // Secciones de pasos agrupadas
  const secciones = [
    {
      seccion: 'Creación de la Máquina Virtual Cliente',
      descripcionSeccion:
        'Se creó una máquina virtual en VirtualBox para instalar Windows 10 Pro. La máquina virtual fue configurada con una tarjeta de red conectada a la misma red interna redlab utilizada por el servidor.',
      pasosList: [
        {
          numero: 1,
          descripcion:
            'Se crea una nueva máquina virtual en VirtualBox con el nombre PC01 y se selecciona la imagen ISO de Windows 10 Pro.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_1.png',
        },
        {
          numero: 2,
          descripcion: 'Se configura la memoria RAM con 4 GB y se asignan 2 núcleos de CPU.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_2.png',
        },
        {
          numero: 3,
          descripcion: 'Se define un disco duro virtual de 50 GB para la instalación del sistema operativo.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_3.png',
        },
        {
          numero: 4,
          descripcion: 'Se configura el adaptador de red en modo red interna, utilizando el nombre redlab.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_4.png',
        },
      ],
    },
    {
      seccion: 'Instalación de Windows 10 Pro',
      descripcionSeccion:
        'Se inició la máquina virtual utilizando la imagen ISO de Windows 10 Pro. Durante la instalación se configuró una cuenta local, ya que el equipo aún no se encontraba unido al dominio.',
      pasosList: [
        {
          numero: 5,
          descripcion: 'Se selecciona el idioma, el formato de fecha y la distribución del teclado.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_5.png',
        },
        {
          numero: 6,
          descripcion: 'Se selecciona la edición Windows 10 Pro, necesaria para incorporación al dominio.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_6.png',
        },
        {
          numero: 7,
          descripcion: 'Se selecciona la opción de instalación personalizada para definir manualmente el disco.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_7.png',
        },
        {
          numero: 8,
          descripcion: 'Se selecciona el espacio disponible del disco virtual configurado previamente.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_8.png',
        },
        {
          numero: 9,
          descripcion: 'Se crea un usuario local temporal para acceder inicialmente al sistema operativo.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_9.png',
        },
      ],
    },
    {
      seccion: 'Verificación de Configuración IP',
      descripcionSeccion:
        'Antes de unir el cliente al dominio, se verificó la configuración de red obtenida desde el servidor DHCP. Se ejecutaron comandos ipconfig y ping para validar conectividad.',
      pasosList: [
        {
          numero: 10,
          descripcion: 'Se abre una ventana de comandos mediante CMD para revisar la configuración de red.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_10.png',
        },
        {
          numero: 11,
          descripcion:
            'Mediante ipconfig se valida que el equipo recibió configuración DHCP. Se ejecuta ping 192.168.10.10 para comprobar conectividad.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_11.png',
        },
      ],
    },
    {
      seccion: 'Unión del Cliente al Dominio',
      descripcionSeccion:
        'Se abrió la ventana de propiedades del sistema para cambiar el nombre del equipo o dominio. Se ingresó inacap.local como dominio y se utilizaron credenciales de administrador para autorizar.',
      pasosList: [
        {
          numero: 12,
          descripcion: 'Se abre la ventana Ejecutar para acceder a las propiedades del sistema.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_12.png',
        },
        {
          numero: 13,
          descripcion: 'Se ingresa el comando sysdm.cpl para abrir la configuración avanzada del sistema.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_13.png',
        },
        {
          numero: 14,
          descripcion:
            'Se selecciona la opción para cambiar el nombre del equipo o modificar su pertenencia a un dominio.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_14.png',
        },
        {
          numero: 15,
          descripcion:
            'En la sección Miembro de, se selecciona Dominio y se ingresa el nombre inacap.local.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_15.png',
        },
        {
          numero: 16,
          descripcion:
            'Se confirman los cambios ingresando las credenciales del usuario administrador del dominio.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_16.png',
        },
      ],
    },
    {
      seccion: 'Inicio de Sesión con Usuario de Dominio',
      descripcionSeccion:
        'Después del reinicio, se inició sesión en el equipo cliente utilizando un usuario creado en Active Directory. Se utilizó el formato INACAP\\priveros para autenticación.',
      pasosList: [
        {
          numero: 17,
          descripcion:
            'Se cierra la sesión actual y se selecciona Otro usuario para iniciar sesión con una cuenta del dominio.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_17.png',
        },
        {
          numero: 18,
          descripcion: 'Se verifica que el usuario de dominio haya iniciado sesión correctamente.',
          imagen: 'img_rivpat/06_Cliente_Dominio/E_Paso_18.png',
        },
      ],
    },
  ];

  return (
    <div className="cliente-container">
      {/* Encabezado */}
      <header className="cliente-header">
        <h1 className="cliente-titulo">Incorporación del Cliente al Dominio</h1>
      </header>

      {/* Objetivo de la sección */}
      <section className="seccion-objetivo">
        <h2 className="seccion-titulo">Objetivo de la Sección</h2>
        <p>
          En esta sección se documenta la creación y configuración del equipo cliente <code>PC01</code>, el cual será
          incorporado al dominio <code>inacap.local</code>.
        </p>
        <p>
          El objetivo es validar que el cliente Windows 10 Pro pueda obtener configuración de red desde el servidor
          mediante DHCP, resolver el dominio utilizando DNS y unirse correctamente al dominio administrado por el
          servidor <code>SRV-DC01</code>.
        </p>
        <p>
          Esta configuración permite comprobar que el servidor se encuentra funcionando correctamente como controlador
          de dominio y que los usuarios creados en Active Directory pueden iniciar sesión desde un equipo cliente.
        </p>
      </section>

      {/* Datos generales del cliente */}
      <section className="seccion-datos">
        <h2 className="seccion-titulo">Datos Generales del Cliente</h2>
        <table className="tabla-datos-cliente">
          <tbody>
            <tr>
              <td className="etiqueta">Máquina virtual</td>
              <td>{datosCliente.maquinaVirtual}</td>
            </tr>
            <tr>
              <td className="etiqueta">Nombre del equipo</td>
              <td>
                <code>{datosCliente.nombreEquipo}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Sistema operativo</td>
              <td>{datosCliente.sistemaOperativo}</td>
            </tr>
            <tr>
              <td className="etiqueta">Tipo de red</td>
              <td>{datosCliente.tipoRed}</td>
            </tr>
            <tr>
              <td className="etiqueta">Nombre de red interna</td>
              <td>
                <code>{datosCliente.nombreRed}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Dirección IP</td>
              <td>{datosCliente.direccionIP}</td>
            </tr>
            <tr>
              <td className="etiqueta">Rango esperado</td>
              <td>
                <code>{datosCliente.rangoEsperado}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">DNS esperado</td>
              <td>
                <code>{datosCliente.dnsEsperado}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Dominio</td>
              <td>
                <code>{datosCliente.dominio}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Usuario de dominio</td>
              <td>
                <code>{datosCliente.usuarioDominio}</code>
              </td>
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

      {/* Resultado de la configuración */}
      <section className="seccion-resultado">
        <h2 className="seccion-titulo">Resultado de la Configuración</h2>
        <div className="contenido-resultado">
          <p>
            Al finalizar esta etapa, el equipo cliente <code>PC01</code> quedó incorporado correctamente al dominio
            <code> inacap.local</code>.
          </p>
          <p>
            Se verificó que el cliente recibiera configuración de red desde DHCP, utilizara como DNS al servidor
            <code> SRV-DC01</code> y pudiera iniciar sesión con un usuario del dominio.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cliente;


