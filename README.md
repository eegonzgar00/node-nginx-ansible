# Node.js + Nginx + Ansible

Este proyecto contiene un contenedor listo para ejecutar Node.js con Nginx y tareas básicas de Ansible. Está pensado para desarrollo, pruebas o enseñanza de automatización.

---


## Estructura del proyecto

```
node-nginx-ansible/
├── Dockerfile              # Contenedor único: Node.js + Nginx + Ansible
├── docker/
│   └── app.js              # Servidor Node.js de ejemplo
├── ansible/
│   ├── inventory.ini       # Inventario para Ansible
│   └── playbook.yml        # Playbook de configuración mínima
└── nginx/
    └── nginx.conf          # Configuración Nginx como reverse proxy
```

---

## Pasos para descargar y ejecutar

### 1️⃣ Descargar el proyecto

Clona o descarga el repositorio:

```bash
git clone https://github.com/eegonzgar00/node-nginx-ansible.git
cd node-nginx-ansible
```

O descarga el ZIP y descomprímelo.

### 2️⃣ Construir la imagen Docker

```bash
docker build -t node-nginx-ansible .
```

### 3️⃣ Ejecutar el contenedor

```bash
docker run --rm -it -p 80:80 -p 3000:3000 node-nginx-ansible
```

* **Puerto 80:** Nginx
* **Puerto 3000:** Node.js

El contenedor ejecuta automáticamente:

1. Playbook de Ansible
2. Nginx
3. Servidor Node.js

### 4️⃣ Acceder a la aplicación

* Node.js: [http://localhost:3000](http://localhost:3000)
* Nginx: [http://localhost](http://localhost)

---

✅ Con estos pasos, el proyecto queda descargado, construido y ejecutándose en un solo contenedor de forma funcional.
