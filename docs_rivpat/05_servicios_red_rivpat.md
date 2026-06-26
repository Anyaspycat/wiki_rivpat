# Servicios de red: DNS y DHCP

## Objetivo de la sección

En esta sección se documenta la configuración de los servicios de red **DNS** y **DHCP** en el servidor `SRV-DC01`.

El objetivo es permitir que el servidor entregue direcciones IP automáticamente a los equipos clientes mediante DHCP y que estos puedan localizar correctamente el dominio `inacap.local` mediante DNS.

Esta configuración es necesaria para que el cliente `PC01` pueda comunicarse con el servidor, recibir una IP válida dentro de la red interna `redlab` y unirse correctamente al dominio.

---

## Datos generales de los servicios de red

| Elemento                 | Configuración                      |
| ------------------------ | ---------------------------------- |
| Servidor                 | `SRV-DC01`                         |
| Dominio                  | `inacap.local`                     |
| Servicio DNS             | Activo en el servidor              |
| Servicio DHCP            | Instalado y configurado            |
| Red interna              | `redlab`                           |
| IP del servidor          | `192.168.10.10`                    |
| Rango DHCP               | `192.168.10.50` a `192.168.10.100` |
| Máscara de subred        | `255.255.255.0`                    |
| DNS entregado al cliente | `192.168.10.10`                    |
| Cliente de prueba        | `PC01`                             |

---

## Paso a Paso Revisión del servicio DNS

El servicio DNS fue instalado junto con Active Directory, ya que es necesario para el funcionamiento del dominio `inacap.local`.

Este servicio permite que los equipos de la red puedan resolver nombres del dominio y localizar el controlador de dominio `SRV-DC01`.

La configuración DNS es importante porque, sin ella, el cliente podría recibir una IP válida, pero no podría encontrar correctamente el dominio para unirse a `inacap.local`.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Instalación del rol DHCP

Desde el **Administrador del servidor**, se ingresó a la opción `Administrar → Agregar roles y características`.

En el asistente se seleccionó el rol `Servidor DHCP`.

Este rol permite que el servidor asigne direcciones IP automáticamente a los equipos clientes conectados a la red interna.

Al finalizar la instalación del rol DHCP, se completó la configuración posterior desde la bandera de notificación del Administrador del servidor.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Creación del ámbito DHCP

Luego de instalar el rol DHCP, se abrió la consola desde `Herramientas → DHCP`:

Dentro de la consola DHCP, se expandió el servidor y se creó un nuevo ámbito en IPv4.

El ámbito configurado permite entregar direcciones IP automáticas a los clientes de la red `redlab`.

La configuración aplicada fue la siguiente:

| Parámetro         | Valor            |
| ----------------- | ---------------- |
| Nombre del ámbito | `LAN-redlab`     |
| Dirección inicial | `192.168.10.50`  |
| Dirección final   | `192.168.10.100` |
| Máscara de subred | `255.255.255.0`  |
| Servidor DNS      | `192.168.10.10`  |
| Dominio           | `inacap.local`   |

WIP - Imágenes Paso a Paso

---

## Paso a Paso Activación del ámbito DHCP

Después de crear el ámbito, se activó para que el servidor pudiera comenzar a entregar direcciones IP a los equipos clientes.

La activación del ámbito es necesaria porque, aunque el rango esté creado, si no se encuentra activo el cliente no recibirá configuración IP automáticamente.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Validación desde el cliente

En el equipo cliente `PC01`, se verificó la configuración de red obtenida automáticamente desde el servidor DHCP.

Para esto, se abrió una ventana de comandos y se ejecutó `ipconfig`.

El cliente debe recibir una dirección IP dentro del rango configurado, entre `192.168.10.50 y 192.168.10.100`:

Además, debe utilizar como servidor DNS la IP del servidor `192.168.10.10`:

Si el cliente recibe una dirección `169.254.x.x`, significa que no obtuvo IP desde DHCP, por lo que se debe revisar que ambas máquinas estén conectadas a la misma red interna `redlab` y que el ámbito DHCP esté activo.

WIP - Imágenes Paso a Paso

---

## Paso a Paso Prueba de conectividad

Para comprobar la comunicación entre el cliente y el servidor, se ejecutó una prueba de conectividad hacia la IP del servidor, usando `ping 192.168.10.10`:

Esta prueba permite validar que el cliente puede comunicarse correctamente con el servidor dentro de la red interna.

WIP - Imágenes Paso a Paso

---

## Resultado de la configuración

Al finalizar esta etapa, el servidor `SRV-DC01` quedó configurado con los servicios DNS y DHCP activos.

El servicio DHCP quedó preparado para entregar direcciones IP automáticas dentro del rango `192.168.10.50` a `192.168.10.100`, mientras que el DNS quedó configurado para permitir la resolución del dominio `inacap.local`.
