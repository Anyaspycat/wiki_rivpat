# Wiki Laboratorio Windows Server 2025

## Evaluación Sumativa N°2

**Asignatura:** TI3V35 — Sistemas Operativos  
**Unidad:** 2 — Sistema operativo de red: Windows Server  
**Estudiante:** Patricia Riveros Estay  
**Proyecto:** `wiki_rivpat`  

---

## Descripción del proyecto

Este repositorio contiene una wiki web desarrollada en **React + Vite**, cuyo objetivo es documentar la instalación, configuración y validación de una infraestructura básica de red utilizando **Windows Server 2025**.

El laboratorio fue implementado en un entorno virtualizado mediante **VirtualBox**, utilizando una red interna llamada `redlab`. La solución considera un servidor configurado como controlador de dominio y un equipo cliente unido al dominio para validar el funcionamiento de los servicios configurados.

---

## Objetivo del laboratorio

Implementar y documentar una infraestructura básica de red con Windows Server, incorporando los siguientes elementos:

- Instalación y configuración inicial del servidor.
- Configuración de red interna en VirtualBox.
- Instalación de Active Directory Domain Services.
- Creación del dominio `inacap.local`.
- Administración de unidades organizativas, usuarios y grupos.
- Configuración de servicios DNS y DHCP.
- Incorporación de un cliente Windows 10 Pro al dominio.
- Creación, vinculación y validación de una política de grupo GPO.
- Registro de prompts utilizados con herramientas de inteligencia artificial.

---

## Tecnologías utilizadas

| Tecnología | Uso |
| ---------- | --- |
| React | Desarrollo de la interfaz web |
| Vite | Entorno de desarrollo frontend |
| JavaScript | Lógica de componentes y renderizado |
| CSS | Estilos visuales de la wiki |
| Markdown | Documentación base del proyecto |
| VirtualBox | Virtualización del laboratorio |
| Windows Server 2025 | Servidor principal |
| Windows 10 Pro | Cliente del dominio |

---

## Entorno del laboratorio

| Máquina | Sistema operativo | Nombre de equipo | Configuración principal |
| ------- | ----------------- | ---------------- | ----------------------- |
| Servidor | Windows Server 2025 | `SRV-DC01` | IP fija, Active Directory, DNS y DHCP |
| Cliente | Windows 10 Pro | `PC01` | IP automática por DHCP y unión al dominio |

---

## Topología general

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

## Estructura del repositorio

```text
wiki_rivpat/
├─ public/
│  └─ img_rivpat/
│     ├─ 01_Requisitos/
│     ├─ 02_Instalacion_Configuracion/
│     ├─ 03_ActiveDirectory_DNS/
│     ├─ 04_ObjetosDominio/
│     ├─ 05_DHCP/
│     ├─ 06_Cliente_Dominio/
│     └─ 07_PoliticasGrupo/
├─ src/
│  ├─ components/
│  │  ├─ Inicio.jsx
│  │  ├─ Instalacion.jsx
│  │  ├─ ActiveDirectory.jsx
│  │  ├─ Cliente.jsx
│  │  ├─ ServiciosRed.jsx
│  │  ├─ Gpo.jsx
│  │  └─ Prompts.jsx
│  ├─ App.jsx
│  ├─ App.css
│  └─ main.jsx
├─ docs_rivpat/
│  ├─ 01_inicio_rivpat.md
│  ├─ 02_instalacion_rivpat.md
│  ├─ 03_active_directory_rivpat.md
│  ├─ 04_cliente_dominio_rivpat.md
│  ├─ 05_servicios_red_rivpat.md
│  ├─ 06_gpo_rivpat.md
│  └─ 07_prompts_rivpat.md
├─ package.json
└─ README.md
```

---

## Secciones de la wiki

| Sección            | Descripción                                                        |
| ------------------ | ------------------------------------------------------------------ |
| Inicio             | Portada, objetivo general, entorno y topología del laboratorio     |
| Instalación        | Instalación y configuración básica del servidor                    |
| Active Directory   | Configuración del dominio, OU, usuarios y grupos                   |
| Cliente al dominio | Creación del cliente, validación de red e incorporación al dominio |
| DNS y DHCP         | Configuración de servicios de red                                  |
| GPO                | Creación, edición y validación de políticas de grupo               |
| Bitácora IA        | Registro de prompts utilizados durante el desarrollo               |

---

## Instalación y ejecución del proyecto

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
```

### 2. Ingresar al proyecto

```bash
cd wiki_rivpat
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### 5. Abrir la aplicación en el navegador

```text
http://localhost:5173
```

---

## Evidencias

Las evidencias visuales del laboratorio se encuentran en la carpeta:

```text
public/img_rivpat/
```

Cada componente de la wiki utiliza estas imágenes para respaldar los pasos realizados durante la instalación, configuración y validación del entorno.

---

## Uso de inteligencia artificial

Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial como apoyo para:

* Estructurar documentación en formato Markdown.
* Redactar secciones técnicas de la wiki.
* Generar componentes React a partir de la documentación.
* Organizar información en tablas y secciones.
* Mejorar la presentación visual del proyecto.
* Registrar una bitácora de prompts utilizados.

La sección **Bitácora IA** documenta los prompts principales empleados durante el desarrollo.

---

## Resultado final

El resultado final corresponde a una wiki web funcional que documenta el proceso completo de implementación de un entorno básico de red con Windows Server 2025, incluyendo servidor, dominio, cliente, servicios de red y políticas de grupo.

---

## Autora

**Patricia Riveros Estay**
Proyecto académico — Sistemas Operativos

```
```
