# Políticas de grupo GPO

## Objetivo de la sección

En esta sección se documenta la creación, vinculación y validación de una **Política de Grupo (GPO)** dentro del dominio `inacap.local`.

El objetivo es aplicar una configuración centralizada sobre los usuarios de la unidad organizativa `Ventas`, utilizando el servidor `SRV-DC01` como controlador de dominio.

La política configurada permite restringir el acceso al **Panel de control** y a la **Configuración de PC** en el equipo cliente `PC01`, comprobando así que las directivas del dominio se aplican correctamente sobre los usuarios.

---

## Datos generales de la GPO

| Elemento              | Configuración                                     |
| --------------------- | ------------------------------------------------- |
| Servidor              | `SRV-DC01`                                        |
| Dominio               | `inacap.local`                                    |
| Unidad organizativa   | `Ventas`                                          |
| Nombre de la GPO      | `GPO-Ventas`                                      |
| Tipo de configuración | Configuración de usuario                          |
| Restricción aplicada  | Bloqueo de Panel de control y Configuración de PC |
| Cliente de prueba     | `PC01`                                            |
| Usuario de prueba     | `INACAP\rivpat`                                   |

---

## Paso a Paso Acceso a Administración de directivas de grupo

Desde el servidor `SRV-DC01`, se ingresó al **Administrador del servidor** y luego a la opción `Herramientas → Administración de directivas de grupo`:

Esta herramienta permite crear, editar y vincular políticas de grupo dentro del dominio.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Creación de la GPO

Dentro de la consola de Administración de directivas de grupo, se ubicó la unidad organizativa `Ventas`.

Luego se seleccionó la opción para crear una nueva GPO `GPO-Ventas` en este dominio y vincularla directamente a la OU.

Vincular la GPO a la OU permite que la configuración se aplique a los usuarios o equipos contenidos dentro de dicha unidad organizativa.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Edición de la GPO

Luego de crear la política, se hizo clic derecho sobre `GPO-Ventas` y se seleccionó la opción **Editar**.

Dentro del editor de directivas, se ingresó a la siguiente ruta:

```text
Configuración de usuario
→ Directivas
→ Plantillas administrativas
→ Panel de control
```

En esta sección se habilitó la política `Prohibir el acceso al Panel de control y a la configuración de PC`:

Esta configuración impide que el usuario pueda abrir el Panel de control o acceder a la configuración del sistema desde el cliente.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Aplicación de la política en el cliente

En el equipo cliente `PC01`, se inició sesión con el usuario del dominio `INACAP\rivpat`.

Para forzar la actualización de las políticas de grupo, se abrió una ventana de comandos y se ejecutó `gpupdate /force`.

Luego se cerró la sesión y se volvió a iniciar sesión con el mismo usuario del dominio para asegurar que la política quedara aplicada correctamente.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Validación de la GPO

Después de aplicar la política, se intentó acceder al Panel de control desde el cliente `PC01`.

El sistema bloqueó el acceso, validando que la GPO `GPO-Ventas` fue aplicada correctamente sobre el usuario del dominio.

Esta comprobación permite confirmar que la administración centralizada mediante políticas de grupo está funcionando dentro del dominio `inacap.local`.

WIP - Imágenes Paso a Paso

---

## Resultado de la configuración

Al finalizar esta etapa, se creó y vinculó correctamente la GPO `GPO-Ventas` sobre la unidad organizativa `Ventas`.

Además, se comprobó desde el cliente `PC01` que el acceso al Panel de control y a la Configuración de PC quedó restringido para el usuario del dominio.
