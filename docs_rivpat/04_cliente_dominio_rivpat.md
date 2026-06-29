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

Paso a Paso:

1. Se crea una nueva máquina virtual en VirtualBox con el nombre `PC01` y se selecciona la imagen ISO correspondiente a Windows 10 Pro.
![E\_Paso\_1](img_rivpat/06_Cliente_Dominio/E_Paso_1.png)

2. Se configura la memoria RAM con 4 GB y se asignan 2 núcleos de CPU.
![E\_Paso\_2](img_rivpat/06_Cliente_Dominio/E_Paso_2.png)

3. Se define un disco duro virtual de 50 GB para la instalación del sistema operativo.
![E\_Paso\_3](img_rivpat/06_Cliente_Dominio/E_Paso_3.png)

4. Se configura el adaptador de red en modo red interna, utilizando el nombre `redlab`.
![E\_Paso\_4](img_rivpat/06_Cliente_Dominio/E_Paso_4.png)

---

## Paso a Paso Instalación de Windows 10 Pro

Se inició la máquina virtual utilizando la imagen ISO de Windows 10 Pro.

Durante la instalación se configuró el sistema operativo con una cuenta local, ya que el equipo aún no se encontraba unido al dominio.

Una vez finalizada la instalación, el equipo cliente quedó disponible para realizar las validaciones de red y posteriormente incorporarlo al dominio `inacap.local`.

Paso a Paso:

1. Se selecciona el idioma, el formato de fecha y la distribución del teclado para la instalación.
![E\_Paso\_5](img_rivpat/06_Cliente_Dominio/E_Paso_5.png)

2. Se selecciona la edición **Windows 10 Pro**, necesaria para permitir la incorporación del equipo al dominio.
![E\_Paso\_6](img_rivpat/06_Cliente_Dominio/E_Paso_6.png)

3. Se selecciona la opción de instalación personalizada para definir manualmente el disco de instalación.
![E\_Paso\_7](img_rivpat/06_Cliente_Dominio/E_Paso_7.png)

4. Se selecciona el espacio disponible del disco virtual configurado previamente en VirtualBox.
![E\_Paso\_8](img_rivpat/06_Cliente_Dominio/E_Paso_8.png)

5. Se crea un usuario local temporal para acceder inicialmente al sistema operativo antes de unir el equipo al dominio.
![E\_Paso\_9](img_rivpat/06_Cliente_Dominio/E_Paso_9.png)

---

## Paso a Paso Verificación de configuración IP

Antes de unir el cliente al dominio, se verificó la configuración de red obtenida desde el servidor DHCP.

Para esto, se abrió una ventana de comandos y se ejecutó `ipconfig`.

El cliente debe recibir una dirección IP dentro del rango configurado en el servidor DHCP `192.168.10.50 - 192.168.10.100`:

Además, el servidor DNS debe aparecer como `192.168.10.10`:

Si el cliente recibe una dirección del tipo `169.254.x.x`, significa que no obtuvo una IP desde DHCP, por lo que se debe revisar la red interna y la configuración del ámbito DHCP.

Luego de verificar la configuración IP, se realizó una prueba de conectividad hacia el servidor `SRV-DC01`.

Para esto, se ejecutó el siguiente comando `ping 192.168.10.10`:

Esta prueba permite confirmar que el equipo cliente puede comunicarse con el servidor dentro de la red interna `redlab`.

Paso a Paso:

1. Se abre una ventana de comandos mediante **CMD** para revisar la configuración de red del equipo cliente.
![E\_Paso\_10](img_rivpat/06_Cliente_Dominio/E_Paso_10.png)

2. Mediante el comando `ipconfig`, se valida que el equipo cliente haya recibido correctamente la configuración de red desde el servidor DHCP. Además, se ejecuta el comando `ping 192.168.10.10` para comprobar la conectividad con el servidor.
![E\_Paso\_11](img_rivpat/06_Cliente_Dominio/E_Paso_11.png)

---

## Paso a Paso Unión del cliente al dominio

Para unir el cliente al dominio, se abrió la ventana de propiedades del sistema mediante el comando `sysdm.cpl`:

Luego se ingresó a la opción para cambiar el nombre del equipo o dominio, seleccionando la opción **Dominio** e ingresando `inacap.local`:

Para autorizar la unión al dominio, se utilizaron credenciales de administrador del dominio `INACAP\Administrador`:

Una vez aceptada la incorporación al dominio, el sistema solicitó reiniciar el equipo para aplicar los cambios.

Paso a Paso:

1. Se abre la ventana **Ejecutar** para acceder a las propiedades del sistema.
![E\_Paso\_12](img_rivpat/06_Cliente_Dominio/E_Paso_12.png)

2. Se ingresa el comando `sysdm.cpl` para abrir la configuración avanzada del sistema.
![E\_Paso\_13](img_rivpat/06_Cliente_Dominio/E_Paso_13.png)

3. Se selecciona la opción para cambiar el nombre del equipo o modificar su pertenencia a un dominio.
![E\_Paso\_14](img_rivpat/06_Cliente_Dominio/E_Paso_14.png)

4. En la sección **Miembro de**, se selecciona la opción **Dominio** y se ingresa el nombre `inacap.local`.
![E\_Paso\_15](img_rivpat/06_Cliente_Dominio/E_Paso_15.png)

5. Se confirman los cambios ingresando las credenciales del usuario administrador del dominio.
![E\_Paso\_16](img_rivpat/06_Cliente_Dominio/E_Paso_16.png)

---

## Paso a Paso Inicio de sesión con usuario de dominio

Después del reinicio, se inició sesión en el equipo cliente utilizando un usuario creado previamente en Active Directory.

El formato utilizado para iniciar sesión fue `INACAP\priveros`:

Esto permitió validar que el usuario del dominio podía autenticarse correctamente desde el equipo cliente `PC01`.

Paso a Paso:

1. Se cierra la sesión actual y se selecciona la opción **Otro usuario** para iniciar sesión con una cuenta del dominio **INACAP**.
![E\_Paso\_17](img_rivpat/06_Cliente_Dominio/E_Paso_17.png)

2. Se verifica que el usuario de dominio haya iniciado sesión correctamente en el equipo cliente.
![E\_Paso\_18](img_rivpat/06_Cliente_Dominio/E_Paso_18.png)

---

## Resultado de la configuración

Al finalizar esta etapa, el equipo cliente `PC01` quedó incorporado correctamente al dominio `inacap.local`.

Además, se verificó que el cliente recibiera configuración de red desde DHCP, utilizara como DNS al servidor `SRV-DC01` y pudiera iniciar sesión con un usuario del dominio.
