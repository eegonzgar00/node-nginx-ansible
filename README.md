# Angular + Nginx + Ansible en Docker

Este proyecto muestra cómo desplegar una aplicación **Angular (con Vite)** usando **Nginx** como servidor web, y gestionando la configuración mediante **Ansible** dentro de un único contenedor Docker.  

Está diseñado para ser muy fácil de descargar, construir y ejecutar en local.

---

## 📥 Descargar el proyecto

Sin necesidad de `git`, descarga el ZIP directamente:

```bash
curl -L https://github.com/eegonzgar00/node-nginx-ansible/archive/refs/heads/main.zip -o node-nginx-ansible.zip
unzip node-nginx-ansible.zip
cd rnode-nginx-ansible-main
```

O si prefieres, descárgalo manualmente desde:  
👉 [Descargar ZIP](https://github.com/eegonzgar00/node-nginx-ansible/archive/refs/heads/main.zip)

---

## 🛠️ Construir la imagen Docker

Ejecuta:

```bash
docker build -t node-nginx-ansible .
```

---

## 🚀 Levantar el contenedor

```bash
docker run --rm -it -p 80:80 node-nginx-ansible
```

---

## 🌍 Acceder a la aplicación

Una vez desplegado:

- Frontend Angular: [http://localhost](http://localhost)  
- Nginx actúa como servidor web estático.  
- Ansible automatiza la configuración (plantilla `nginx.conf.j2`).  

---

## ⚙️ ¿Qué hace Ansible?

El **playbook** (`ansible/playbook.yml`) se encarga de:

1. Instalar Nginx dentro del contenedor.  
2. Renderizar la configuración de `templates/nginx.conf.j2`.  
3. Copiar la build de Angular (`dist/`) al directorio de Nginx.  
4. Arrancar Nginx como servicio.  

---

✅ Con estos pasos podrás **descargar, construir y ejecutar** todo en un único contenedor, sin dependencias externas aparte de Docker.
