# Base Node.js oficial (ya incluye Node.js y npm)
FROM node:20-bullseye-slim

# Instalar Nginx y Ansible
RUN apt-get update && apt-get install -y nginx \
    && npm install -g ansible \
    && rm -rf /var/lib/apt/lists/*

# Directorio de trabajo
WORKDIR /workspace

# Copiar aplicación Node.js
COPY docker/ /workspace/docker

# Copiar configuración de Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copiar playbooks de Ansible si los necesitas
COPY ansible/ /workspace/ansible

WORKDIR /workspace/ansible

# Exponer puertos
EXPOSE 80 3000

# Comando por defecto: levantar Nginx y Node.js
CMD service nginx start && node /workspace/docker/app.js
