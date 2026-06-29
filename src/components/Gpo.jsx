import './Gpo.css';

const Gpo = () => {
  // Datos generales de la GPO
  const datosGpo = {
    servidor: 'SRV-DC01',
    dominio: 'inacap.local',
    unidadOrganizativa: 'Ventas',
    nombreGpo: 'GPO-Ventas',
    tipoConfiguracion: 'Configuración de usuario',
    restriccionAplicada: 'Bloqueo de Panel de control y Configuración de PC',
    clientePrueba: 'PC01',
    usuarioPrueba: 'INACAP\\rivpat',
  };

  // Ruta de configuración de la GPO
  const rutaConfiguracion = `Configuración de usuario
→ Directivas
→ Plantillas administrativas
→ Panel de control`;

  // Secciones de pasos agrupadas
  const secciones = [
    {
      seccion: 'Creación de la GPO',
      descripcionSeccion:
        'Dentro de la consola de Administración de directivas de grupo, se ubicó la unidad organizativa Ventas. Se creó una nueva GPO GPO-Ventas y se vinculó directamente a la OU.',
      pasosList: [
        {
          numero: 1,
          descripcion: 'Desde el menú Herramientas, se selecciona Administración de directivas de grupo.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_1.png',
        },
        {
          numero: 2,
          descripcion:
            'Se selecciona la unidad organizativa Ventas y se crea una nueva GPO, vinculándola directamente a dicha OU.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_2.png',
        },
        {
          numero: 3,
          descripcion: 'Se define el nombre de la nueva GPO como GPO-Ventas.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_3.png',
        },
      ],
    },
    {
      seccion: 'Edición de la GPO',
      descripcionSeccion:
        'Luego de crear la política, se editó GPO-Ventas para acceder al editor de directivas. Se habilitó la política para prohibir acceso al Panel de control y Configuración de PC.',
      pasosList: [
        {
          numero: 4,
          descripcion: 'Se hace clic derecho sobre GPO-Ventas y se selecciona Editar.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_4.png',
        },
        {
          numero: 5,
          descripcion:
            'Dentro del editor de directivas, se accede a la configuración para definir restricciones de Panel de control.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_5.png',
        },
        {
          numero: 6,
          descripcion:
            'Se habilita la directiva Prohibir el acceso al Panel de control y a la configuración de PC.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_6.png',
        },
      ],
    },
    {
      seccion: 'Aplicación de la Política en el Cliente',
      descripcionSeccion:
        'En el equipo cliente PC01, se inició sesión con el usuario INACAP\\rivpat. Se ejecutó gpupdate /force para forzar la actualización de políticas de grupo y se validó la restricción.',
      pasosList: [
        {
          numero: 7,
          descripcion:
            'Se inicia sesión en PC01 con el usuario de dominio y se intenta acceder al Panel de control.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_7.png',
        },
        {
          numero: 8,
          descripcion: 'Se ejecuta gpupdate /force para forzar la actualización de las directivas de grupo.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_8.png',
        },
        {
          numero: 9,
          descripcion: 'Se reinicia el equipo y se intenta abrir nuevamente el Panel de control.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_9.png',
        },
        {
          numero: 10,
          descripcion:
            'Se visualiza el mensaje de restricción, confirmando que la GPO fue aplicada correctamente.',
          imagen: 'img_rivpat/07_PoliticasGrupo/F_Paso_10.png',
        },
      ],
    },
  ];

  return (
    <div className="gpo-container">
      {/* Encabezado */}
      <header className="gpo-header">
        <h1 className="gpo-titulo">Políticas de Grupo GPO</h1>
      </header>

      {/* Objetivo de la sección */}
      <section className="seccion-objetivo">
        <h2 className="seccion-titulo">Objetivo de la Sección</h2>
        <p>
          En esta sección se documenta la creación, vinculación y validación de una <strong>Política de Grupo (GPO)</strong> dentro
          del dominio <code>inacap.local</code>.
        </p>
        <p>
          El objetivo es aplicar una configuración centralizada sobre los usuarios de la unidad organizativa <code>Ventas</code>,
          utilizando el servidor <code>SRV-DC01</code> como controlador de dominio.
        </p>
        <p>
          La política configurada permite restringir el acceso al <strong>Panel de control</strong> y a la <strong>Configuración de PC</strong> en
          el equipo cliente <code>PC01</code>, comprobando así que las directivas del dominio se aplican correctamente.
        </p>
      </section>

      {/* Datos generales de la GPO */}
      <section className="seccion-datos">
        <h2 className="seccion-titulo">Datos Generales de la GPO</h2>
        <table className="tabla-datos-gpo">
          <tbody>
            <tr>
              <td className="etiqueta">Servidor</td>
              <td>
                <code>{datosGpo.servidor}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Dominio</td>
              <td>
                <code>{datosGpo.dominio}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Unidad organizativa</td>
              <td>
                <code>{datosGpo.unidadOrganizativa}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Nombre de la GPO</td>
              <td>
                <code>{datosGpo.nombreGpo}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Tipo de configuración</td>
              <td>{datosGpo.tipoConfiguracion}</td>
            </tr>
            <tr>
              <td className="etiqueta">Restricción aplicada</td>
              <td>{datosGpo.restriccionAplicada}</td>
            </tr>
            <tr>
              <td className="etiqueta">Cliente de prueba</td>
              <td>
                <code>{datosGpo.clientePrueba}</code>
              </td>
            </tr>
            <tr>
              <td className="etiqueta">Usuario de prueba</td>
              <td>
                <code>{datosGpo.usuarioPrueba}</code>
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

      {/* Ruta de configuración */}
      <section className="seccion-ruta">
        <h2 className="seccion-titulo">Ruta de Configuración de la GPO</h2>
        <p>
          La directiva <strong>Prohibir el acceso al Panel de control y a la configuración de PC</strong> se encuentra en
          la siguiente ruta:
        </p>
        <pre className="ruta-bloque">{rutaConfiguracion}</pre>
      </section>

      {/* Resultado de la configuración */}
      <section className="seccion-resultado">
        <h2 className="seccion-titulo">Resultado de la Configuración</h2>
        <div className="contenido-resultado">
          <p>
            Al finalizar esta etapa, se creó y vinculó correctamente la GPO <code>GPO-Ventas</code> sobre la unidad organizativa
            <code> Ventas</code>.
          </p>
          <p>
            Se comprobó desde el cliente <code>PC01</code> que el acceso al Panel de control y a la Configuración de PC quedó
            restringido para el usuario del dominio.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gpo;
