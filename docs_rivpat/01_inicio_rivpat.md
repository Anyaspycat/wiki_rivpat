# Wiki Laboratorio Windows Server

## Evaluación Sumativa N°2

**Asignatura:** TI3V35 — Sistemas Operativos
**Unidad:** 2 — Sistema operativo de red: Windows Server
**Estudiante:** Patricia Riveros Estay
**Proyecto:** `wiki_rivpat`
**Carpeta de documentación:** `docs_rivpat`

---

## Objetivo del laboratorio

El objetivo de este laboratorio es implementar y documentar una infraestructura básica de red utilizando **Windows Server** en un entorno virtualizado.

Durante el desarrollo del trabajo se configura un servidor como **controlador de dominio**, incorporando servicios de **Active Directory**, **DNS** y **DHCP**. Además, se integra un equipo cliente al dominio para validar el funcionamiento de la red y se aplica una **política de grupo GPO** para comprobar la administración centralizada desde el servidor.

La documentación se presenta en formato de **wiki web**, desarrollada con React, utilizando archivos Markdown como fuente principal del contenido.

---

## Descripción general del entorno

El laboratorio se realiza en **VirtualBox**, utilizando una red interna aislada llamada `redlab`.

Se utilizan dos máquinas virtuales:

| Máquina  | Sistema operativo   | Nombre de equipo | Configuración principal                   |
| -------- | ------------------- | ---------------- | ----------------------------------------- |
| Servidor | Windows Server 2025 | `SRV-DC01`       | IP fija, Active Directory, DNS y DHCP     |
| Cliente  | Windows 10 Pro      | `PC01`           | IP automática por DHCP y unión al dominio |

---

## Topología del laboratorio

```text
+------------------------------------------------------+
|          Red interna VirtualBox: redlab              |
|                                                      |
|   +------------------------+      +----------------+ |
|   | Servidor               |      | Cliente        | |
|   | SRV-DC01               |      | PC01           | |
|   | Windows Server 2025    |      | Windows 10 Pro | |
|   | IP: 192.168.10.10      |      | IP por DHCP    | |
|   | AD + DNS + DHCP        |      | Dominio        | |
|   +------------------------+      +----------------+ |
|                                                      |
|              Dominio: inacap.local                   |
+------------------------------------------------------+
```

---

## Servicios configurados

En el laboratorio se documentan las siguientes configuraciones:

1. Instalación y configuración básica del servidor.
2. Creación del dominio `inacap.local` mediante Active Directory.
3. Creación y administración de objetos del dominio, como unidades organizativas, usuarios y grupos.
4. Incorporación del cliente Windows 10 Pro al dominio.
5. Configuración de servicios DNS y DHCP.
6. Creación, vinculación y validación de una política de grupo GPO.

---

## Evidencias del trabajo

Cada sección de esta wiki contiene una explicación breve de lo realizado, su propósito dentro del laboratorio y una captura asociada como evidencia.

Las capturas se almacenan en la carpeta:

```text
img_rivpat/
```

---

## Secciones de la wiki

| Archivo                         | Contenido                                        |
| ------------------------------- | ------------------------------------------------ |
| `01_inicio_rivpat.md`           | Portada, objetivo y topología del laboratorio    |
| `02_instalacion_rivpat.md`      | Instalación y configuración básica del servidor  |
| `03_active_directory_rivpat.md` | Configuración del dominio, OU, usuarios y grupos |
| `04_cliente_dominio_rivpat.md`  | Incorporación del cliente al dominio             |
| `05_servicios_red_rivpat.md`    | Configuración de DNS y DHCP                      |
| `06_gpo_rivpat.md`              | Creación y validación de política de grupo       |
| `07_prompts_rivpat.md`          | Bitácora de uso de inteligencia artificial       |
