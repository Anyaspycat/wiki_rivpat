# Incorporación del cliente al dominio

## Objetivo de la sección

En esta sección se documenta la creación y configuración del equipo cliente `PC01`, el cual será incorporado al dominio `inacap.local`.

El objetivo es validar que el cliente Windows 10 Pro pueda obtener configuración de red desde el servidor mediante DHCP, resolver el dominio utilizando DNS y unirse correctamente al dominio administrado por el servidor `SRV-DC01`.

Esta configuración permite comprobar que el servidor se encuentra funcionando correctamente como controlador de dominio y que los usuarios creados en Active Directory pueden iniciar sesión desde un equipo cliente.

---

## Datos generales del cliente

| Elemento              | Configuración                      |
| --------------------- | ---------------------------------- |
| Máquina virtual       | Cliente                            |
| Nombre del equipo     | `PC01`                             |
| Sistema operativo     | Windows 10 Pro                     |
| Tipo de red           | Red interna VirtualBox             |
| Nombre de red interna | `redlab`                           |
| Dirección IP          | Automática por DHCP                |
| Rango esperado        | `192.168.10.50` a `192.168.10.100` |
| DNS esperado          | `192.168.10.10`                    |
| Dominio               | `inacap.local`                     |
| Usuario de dominio    | `INACAP\rivpat`                    |

---

## Paso a Paso Creación de la máquina virtual cliente

Se creó una máquina virtual en VirtualBox para instalar el sistema operativo **Windows 10 Pro**.

La máquina virtual fue configurada con una tarjeta de red conectada a la misma red interna `redlab` utilizada por el servidor.

Es importante que tanto el servidor como el cliente utilicen exactamente el mismo nombre de red interna, ya que de lo contrario quedarían en redes distintas y no existiría conectividad entre ambos equipos.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Instalación de Windows 10 Pro

Se inició la máquina virtual utilizando la imagen ISO de Windows 10 Pro.

Durante la instalación se configuró el sistema operativo con una cuenta local, ya que el equipo aún no se encontraba unido al dominio.

Una vez finalizada la instalación, el equipo cliente quedó disponible para realizar las validaciones de red y posteriormente incorporarlo al dominio `inacap.local`.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Verificación de configuración IP

Antes de unir el cliente al dominio, se verificó la configuración de red obtenida desde el servidor DHCP.

Para esto, se abrió una ventana de comandos y se ejecutó `ipconfig`.

El cliente debe recibir una dirección IP dentro del rango configurado en el servidor DHCP `192.168.10.50 - 192.168.10.100`:

Además, el servidor DNS debe aparecer como `192.168.10.10`:

Si el cliente recibe una dirección del tipo `169.254.x.x`, significa que no obtuvo una IP desde DHCP, por lo que se debe revisar la red interna y la configuración del ámbito DHCP.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Prueba de conectividad con el servidor

Luego de verificar la configuración IP, se realizó una prueba de conectividad hacia el servidor `SRV-DC01`.

Para esto, se ejecutó el siguiente comando `ping 192.168.10.10`:

Esta prueba permite confirmar que el equipo cliente puede comunicarse con el servidor dentro de la red interna `redlab`.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Verificación de fecha y hora

Antes de unir el equipo al dominio, se verificó que la fecha, hora y zona horaria del cliente coincidieran con las configuradas en el servidor.

Esta validación es importante porque una diferencia considerable de hora entre cliente y servidor puede generar errores de autenticación al momento de unirse al dominio.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Unión del cliente al dominio

Para unir el cliente al dominio, se abrió la ventana de propiedades del sistema mediante el comando `sysdm.cpl`:

Luego se ingresó a la opción para cambiar el nombre del equipo o dominio, seleccionando la opción **Dominio** e ingresando `inacap.local`:

Para autorizar la unión al dominio, se utilizaron credenciales de administrador del dominio `INACAP\Administrador`:

Una vez aceptada la incorporación al dominio, el sistema solicitó reiniciar el equipo para aplicar los cambios.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Inicio de sesión con usuario de dominio

Después del reinicio, se inició sesión en el equipo cliente utilizando un usuario creado previamente en Active Directory.

El formato utilizado para iniciar sesión fue `INACAP\priveros`:

Esto permitió validar que el usuario del dominio podía autenticarse correctamente desde el equipo cliente `PC01`.

WIP - Imágenes Paso a Paso

---

## Resultado de la configuración

Al finalizar esta etapa, el equipo cliente `PC01` quedó incorporado correctamente al dominio `inacap.local`.

Además, se verificó que el cliente recibiera configuración de red desde DHCP, utilizara como DNS al servidor `SRV-DC01` y pudiera iniciar sesión con un usuario del dominio.
