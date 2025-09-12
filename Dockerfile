
FROM node:20-bullseye-slim

RUN apt-get update && apt-get install -y python3 python3-pip git nginx \
    && npm install -g @angular/cli@20.3.1 \
    && pip3 install --no-cache-dir ansible \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY frontend/ ./frontend

WORKDIR /app/frontend
RUN npm install --legacy-peer-deps
RUN npm run build

WORKDIR /workspace

COPY ansible/ /workspace/ansible

WORKDIR /workspace/ansible

CMD ["ansible-playbook", "-i", "inventory.ini", "playbook.yml", "-vvv"]
