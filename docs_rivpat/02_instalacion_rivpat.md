# Instalación y configuración básica del servidor

## Objetivo de la sección

En esta sección se documenta la instalación y configuración inicial del servidor que será utilizado como base del laboratorio de Windows Server.

El servidor se configura como una máquina virtual en VirtualBox, con el sistema operativo **Windows Server 2025**, conectado a una red interna llamada `redlab`. Además, se asigna un nombre de equipo, una dirección IP fija y se verifica el estado del firewall.

Esta configuración es necesaria para que el servidor pueda cumplir posteriormente los roles de **Active Directory**, **DNS** y **DHCP** dentro del dominio `inacap.local`.

---

## Requisitos previos

Debemos de tener instalado previamente la aplicación VirtualBox para emular tanto el servidor como el PC del usuario que se conectará.

Link oficial de VirtualBox: https://www.virtualbox.org/wiki/Downloads

![Link oficial de VirtualBox](img_rivpat/01_Requisitos/VirtualBox_Download.png)

Adicionalmente tener en nuestro dispositivo las ISO de Windows Server 2025 y Windows 10 Pro para la instalación, configuración y uso de las mismas desde VirtualBox.

Link oficial de Windows Server 2025: https://www.microsoft.com/en-us/evalcenter/download-windows-server-2025?msockid=35659f089f9d6b2121a88f909e226a72

![Link oficial de Windows Server 2025](img_rivpat/01_Requisitos/WindowsServer_Download.png)

Link oficial de Windows 10 Pro (usando MediaCreationTool_22H2.exe): https://www.microsoft.com/es-es/software-download/windows10?msockid=35659f089f9d6b2121a88f909e226a72

![Link oficial de Windows 10 Pro](img_rivpat/01_Requisitos/Windows10Pro_Download.png)

---

## Datos generales del servidor

| Elemento              | Configuración                      |
| --------------------- | ---------------------------------- |
| Máquina virtual       | Servidor                           |
| Nombre del equipo     | `SRV-DC01`                         |
| Sistema operativo     | Windows Server 2025                |
| Tipo de red           | Red interna VirtualBox             |
| Nombre de red interna | `redlab`                           |
| Dirección IP          | `192.168.10.10`                    |
| Máscara de subred     | `255.255.255.0`                    |
| Puerta de enlace      | Sin configurar                     |
| DNS preferido         | `127.0.0.1`                        |
| Función esperada      | Servidor principal del laboratorio |

---


## Paso a Paso Configuración VirtualBox

Se creó una máquina virtual en VirtualBox para instalar el sistema operativo Windows Server 2025.

La máquina virtual fue configurada con los recursos necesarios para ejecutar el servidor dentro del laboratorio, incluyendo memoria RAM, almacenamiento dinámico y una tarjeta de red conectada a una red interna.

Paso a Paso:

1. Se asigna el nombre `SRV-DC01` a la máquina virtual y se selecciona la imagen ISO de Windows Server 2025.
![A_Paso_1](img_rivpat/02_Instalacion_Configuracion/A_Paso_1.png)

2. Se configura la memoria RAM con 4 GB y se asignan 2 núcleos de CPU.
![A_Paso_2](img_rivpat/02_Instalacion_Configuracion/A_Paso_2.png)

3. Se define un disco duro virtual de 50 GB para la instalación del sistema operativo.
![A_Paso_3](img_rivpat/02_Instalacion_Configuracion/A_Paso_3.png)

4. Se configura el adaptador de red en modo red interna, utilizando el nombre `redlab`.
![A_Paso_4](img_rivpat/02_Instalacion_Configuracion/A_Paso_4.png)

---

## Paso a Paso Instalación de Windows Server 2025

Se inició la máquina virtual utilizando la imagen ISO de Windows Server 2025.

Durante la instalación se seleccionó la edición con experiencia de escritorio, ya que esta permite trabajar con una interfaz gráfica para administrar el servidor de forma más sencilla.

Al finalizar la instalación, se configuró la contraseña del usuario administrador local.

Paso a Paso:

1. Se inicia la máquina virtual y se configura el idioma, formato de hora y distribución del teclado.
![A_Paso_5](img_rivpat/02_Instalacion_Configuracion/A_Paso_5.png)

2. Se selecciona la instalación de Windows Server 2025, autorizando la eliminación de archivos existentes en el disco virtual.
![A_Paso_6](img_rivpat/02_Instalacion_Configuracion/A_Paso_6.png)

3. Se selecciona la edición `Standard Evaluation (experiencia de escritorio)`, la cual incluye una interfaz gráfica para la administración del servidor.
![A_Paso_7](img_rivpat/02_Instalacion_Configuracion/A_Paso_7.png)

4. Se selecciona el espacio disponible del disco virtual para instalar el sistema operativo.
![A_Paso_8](img_rivpat/02_Instalacion_Configuracion/A_Paso_8.png)

5. Se configura la contraseña del usuario local `Administrador`.
![A_Paso_9](img_rivpat/02_Instalacion_Configuracion/A_Paso_9.png)

6. Finalmente, se visualiza la ventana del Administrador del servidor, evidenciando que la instalación se completó correctamente.
![A_Paso_10](img_rivpat/02_Instalacion_Configuracion/A_Paso_10.png)

---

## Paso a Paso Cambio de nombre del equipo

Luego de instalar el sistema operativo, se modificó el nombre del equipo servidor `SRV-DC01`.

Este nombre permite identificar claramente al servidor principal del laboratorio, el cual será utilizado como controlador de dominio.

Después de aplicar el cambio de nombre, se reinició el sistema para que la configuración quedara activa.

Paso a Paso:

1. Desde el Administrador del servidor, se ingresa a la opción **Servidor local** y se selecciona el nombre actual del equipo.
![A_Paso_11](img_rivpat/02_Instalacion_Configuracion/A_Paso_11.png)

2. Se selecciona la opción para cambiar el nombre del equipo y se establece el nombre `SRV-DC01`.
![A_Paso_12](img_rivpat/02_Instalacion_Configuracion/A_Paso_12.png)

---

## Paso a Paso Configuración de red

Se configuró una dirección IP fija en el adaptador de red del servidor.

La configuración aplicada fue la siguiente:

| Parámetro         | Valor           |
| ----------------- | --------------- |
| Dirección IP      | `192.168.10.10` |
| Máscara de subred | `255.255.255.0` |
| Puerta de enlace  | Vacía           |
| DNS preferido     | `127.0.0.1`     |

La dirección IP fija es importante porque el servidor entregará servicios de red al dominio, por lo tanto, debe mantener siempre la misma dirección.

El DNS preferido se configuró como `127.0.0.1`, ya que el servidor se utilizará posteriormente como servidor DNS del dominio.

Paso a Paso:

1. Desde **Servidor local**, se selecciona la opción correspondiente al adaptador de red Ethernet.
![A_Paso_13](img_rivpat/02_Instalacion_Configuracion/A_Paso_13.png)

2. Se hace clic derecho sobre el adaptador Ethernet y se selecciona la opción **Propiedades**.
![A_Paso_14](img_rivpat/02_Instalacion_Configuracion/A_Paso_14.png)

3. Se selecciona la opción `Protocolo de Internet versión 4 (TCP/IPv4)` y luego se ingresa a **Propiedades**.
![A_Paso_15](img_rivpat/02_Instalacion_Configuracion/A_Paso_15.png)

4. Se configuran los parámetros de red de acuerdo con la dirección IP, máscara de subred y DNS definidos para el servidor.
![A_Paso_16](img_rivpat/02_Instalacion_Configuracion/A_Paso_16.png)

5. Se vuelve a la ventana de **Servidor local** y se verifica que la dirección IP haya sido modificada correctamente.
![A_Paso_17](img_rivpat/02_Instalacion_Configuracion/A_Paso_17.png)

---

## Paso a Paso Verificación del firewall

Se verificó que el firewall de Windows se encontrara activado.

El firewall se mantiene habilitado para conservar la seguridad del servidor. Posteriormente, los roles instalados en Windows Server abrirán los puertos necesarios según los servicios configurados.

Paso a Paso:

1. Desde el buscador de Windows, se escribe `Firewall` y se selecciona la opción **Firewall de Windows Defender**.
![A_Paso_18](img_rivpat/02_Instalacion_Configuracion/A_Paso_18.png)

2. Se verifica que el Firewall de Windows se encuentre activo, permitiendo que posteriormente cada rol habilite los puertos correspondientes según los servicios configurados.
![A_Paso_19](img_rivpat/02_Instalacion_Configuracion/A_Paso_19.png)

---

## Resultado de la configuración

Al finalizar esta etapa, el servidor quedó instalado y configurado con los parámetros iniciales requeridos para continuar con el laboratorio.

El equipo `SRV-DC01` quedó preparado para la instalación de los roles de servidor, principalmente Active Directory, DNS y DHCP, los cuales permitirán crear y administrar el dominio `inacap.local`.
