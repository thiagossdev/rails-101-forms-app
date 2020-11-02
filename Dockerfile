FROM node:14.15.0-slim

# Instala Angular CLI
RUN npm install -g @angular/cli

# Seta nosso path
ENV INSTALL_PATH /app

# Cria nosso diretório
RUN mkdir -p $INSTALL_PATH

# Seta o nosso path como o diretório principal
WORKDIR $INSTALL_PATH

# Copia nosso código para dentro do container
COPY . .
