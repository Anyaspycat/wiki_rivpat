import './ActiveDirectory.css';

const ActiveDirectory = () => {
  // Datos generales de Active Directory
  const datosAD = {
    servidor: 'SRV-DC01',
    sistemaOperativo: 'Windows Server 2025',
    rolPrincipal: 'Active Directory Domain Services',
    dominiCreado: 'inacap.local',
    tipoDominio: 'Nuevo bosque',
    dns: 'Instalado automáticamente junto con AD DS',
    unidadOrganizativa: 'Ventas',
    grupo: 'G-Ventas',
    usuarioPrincipal: 'priveros',
  };

  // Secciones de pasos agrupadas
  const secciones = [
    {
      seccion: 'Instalación del rol AD DS',
      descripcionSeccion:
        'Desde el Administrador del servidor, se instaló el rol Servicios de dominio de Active Directory (AD DS). Este rol permite que el servidor administre un dominio, usuarios, grupos, equipos y otros objetos de red.',
      pasosList: [
        {
          numero: 1,
          descripcion:
            'Desde el Administrador del servidor, se ingresa a Administrar y se selecciona Agregar roles y características.',
          imagen: 'img_rivpat/03_ActiveDirectory_DNS/B_Paso_1.png',
        },
        {
          numero: 2,
          descripcion: 'En la sección Roles del servidor, se selecciona Servicios de dominio de Active Directory.',
          imagen: 'img_rivpat/03_ActiveDirectory_DNS/B_Paso_2.png',
        },
        {
          numero: 3,
          descripcion:
            'Se validan las características adicionales que serán incorporadas y se selecciona Agregar características.',
          imagen: 'img_rivpat/03_ActiveDirectory_DNS/B_Paso_3.png',
        },
        {
          numero: 4,
          descripcion: 'Se selecciona Instalar para iniciar el proceso de instalación del rol AD DS.',
          imagen: 'img_rivpat/03_ActiveDirectory_DNS/B_Paso_4.png',
        },
      ],
    },
    {
      seccion: 'Promoción del Servidor a Controlador de Dominio',
      descripcionSeccion:
        'Después de instalar el rol AD DS, se promovió el servidor a controlador de dominio. Se seleccionó crear un nuevo bosque con el nombre de dominio inacap.local. Windows Server instaló automáticamente el servicio DNS.',
      pasosList: [
        {
          numero: 5,
          descripcion:
            'Una vez finalizada la instalación del rol AD DS, se selecciona la notificación del Administrador del servidor y luego Promover este servidor a controlador de dominio.',
          imagen: 'img_rivpat/03_ActiveDirectory_DNS/B_Paso_5.png',
        },
        {
          numero: 6,
          descripcion:
            'Se selecciona Agregar un nuevo bosque y se define el dominio raíz con el nombre inacap.local.',
          imagen: 'img_rivpat/03_ActiveDirectory_DNS/B_Paso_6.png',
        },
        {
          numero: 7,
          descripcion:
            'Se ingresa la contraseña para el modo de restauración de servicios de directorio y se continúa hasta completar la configuración.',
          imagen: 'img_rivpat/03_ActiveDirectory_DNS/B_Paso_7.png',
        },
      ],
    },
    {
      seccion: 'Validación del Dominio',
      descripcionSeccion:
        'Después del reinicio, se validó que el servidor formaba parte del dominio inacap.local y que Active Directory se encontraba activo. Desde este punto, el servidor quedó preparado para administrar usuarios, grupos y equipos.',
      pasosList: [
        {
          numero: 8,
          descripcion:
            'Se verifica que el dominio INACAP aparezca disponible en la pantalla de inicio de sesión, validando que el dominio fue configurado correctamente.',
          imagen: 'img_rivpat/03_ActiveDirectory_DNS/B_Paso_8.png',
        },
      ],
    },
    {
      seccion: 'Creación de Unidad Organizativa',
      descripcionSeccion:
        'Desde Administrador del servidor, se accedió a Herramientas → Usuarios y equipos de Active Directory. Dentro del dominio inacap.local, se creó la unidad organizativa Ventas para ordenar objetos del dominio.',
      pasosList: [
        {
          numero: 9,
          descripcion: 'Desde el Administrador del servidor, se ingresa a Herramientas y se selecciona Usuarios y equipos de Active Directory.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_1.png',
        },
        {
          numero: 10,
          descripcion:
            'Dentro del dominio inacap.local, se hace clic derecho y se selecciona la opción para crear una nueva Unidad organizativa.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_2.png',
        },
        {
          numero: 11,
          descripcion: 'Se crea una nueva unidad organizativa con el nombre Ventas.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_3.png',
        },
      ],
    },
    {
      seccion: 'Creación de Usuarios',
      descripcionSeccion:
        'Dentro de la unidad organizativa Ventas, se crearon usuarios del dominio. El usuario principal creado fue priveros, con contraseña inicial configurada para permitir inicio de sesión directo en el equipo cliente.',
      pasosList: [
        {
          numero: 12,
          descripcion: 'Se selecciona la unidad organizativa Ventas, se hace clic derecho y se crea un nuevo usuario.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_4.png',
        },
        {
          numero: 13,
          descripcion: 'Se ingresan los datos del usuario que iniciará sesión desde el equipo cliente del laboratorio.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_5.png',
        },
        {
          numero: 14,
          descripcion: 'Se configura la contraseña inicial del usuario.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_6.png',
        },
      ],
    },
    {
      seccion: 'Creación de Grupo',
      descripcionSeccion:
        'Dentro de la unidad organizativa Ventas, se creó el grupo G-Ventas. Posteriormente, se agregaron usuarios como miembros del grupo para facilitar la administración de permisos y políticas.',
      pasosList: [
        {
          numero: 15,
          descripcion: 'Se selecciona la unidad organizativa Ventas, se hace clic derecho y se crea un nuevo grupo.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_7.png',
        },
        {
          numero: 16,
          descripcion: 'Se define un nuevo grupo con el nombre G-Ventas.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_8.png',
        },
        {
          numero: 17,
          descripcion: 'Se selecciona el usuario creado anteriormente y se ingresa a sus Propiedades.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_9.png',
        },
        {
          numero: 18,
          descripcion:
            'Dentro de las propiedades del usuario, se accede a la pestaña Miembro de y se selecciona la opción para agregar un nuevo grupo.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_10.png',
        },
        {
          numero: 19,
          descripcion: 'Se agrega el grupo G-Ventas creado anteriormente y se confirma la selección.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_11.png',
        },
        {
          numero: 20,
          descripcion: 'Se valida que el grupo haya sido asignado correctamente al usuario.',
          imagen: 'img_rivpat/04_ObjetosDominio/C_Paso_12.png',
        },
      ],
    },
  ];

  return (
    <div className="ad-container">
      {/* Encabezado */}
      <header className="ad-header">
        <h1 className="ad-titulo">Active Directory y Objetos del Dominio</h1>
      </header>

      {/* Objetivo de la sección */}
      <section className="seccion-objetivo">
        <h2 className="seccion-titulo">Objetivo de la Sección</h2>
        <p>
          En esta sección se documenta la instalación y configuración inicial de <strong>Active Directory Domain Services (AD DS)</strong> en el servidor <code>SRV-DC01</code>.
        </p>
        <p>
          El objetivo es transformar el servidor en un <strong>controlador de dominio</strong>, creando el dominio <code>inacap.local</code> y configurando los objetos principales del dominio, como unidades organizativas, usuarios y grupos.
        </p>
        <p>
          Esta configuración permite administrar de forma centralizada los recursos, usuarios, equipos y políticas dentro de la red del laboratorio.
        </p>
      </section>

      {/* Datos generales de Active Directory */}
      <section className="seccion-datos">
        <h2 className="seccion-titulo">Datos Generales de Active Directory</h2>
        <table className="tabla-datos-ad">
          <tbody>
            <tr>
              <td className="etiqueta">Servidor</td>
              <td><code>{datosAD.servidor}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Sistema operativo</td>
              <td>{datosAD.sistemaOperativo}</td>
            </tr>
            <tr>
              <td className="etiqueta">Rol principal</td>
              <td>{datosAD.rolPrincipal}</td>
            </tr>
            <tr>
              <td className="etiqueta">Dominio creado</td>
              <td><code>{datosAD.dominiCreado}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Tipo de dominio</td>
              <td>{datosAD.tipoDominio}</td>
            </tr>
            <tr>
              <td className="etiqueta">DNS</td>
              <td>{datosAD.dns}</td>
            </tr>
            <tr>
              <td className="etiqueta">Unidad organizativa</td>
              <td><code>{datosAD.unidadOrganizativa}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Grupo</td>
              <td><code>{datosAD.grupo}</code></td>
            </tr>
            <tr>
              <td className="etiqueta">Usuario principal</td>
              <td><code>{datosAD.usuarioPrincipal}</code></td>
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
            Al finalizar esta etapa, el servidor <code>SRV-DC01</code> quedó configurado como controlador de dominio del laboratorio.
          </p>
          <p>
            Se creó el dominio <code>inacap.local</code>, la unidad organizativa <code>Ventas</code>, usuarios del dominio y el grupo <code>G-Ventas</code>.
          </p>
          <p>
            Esta configuración permite continuar con la incorporación del equipo cliente al dominio y con la administración centralizada mediante Active Directory.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ActiveDirectory;


