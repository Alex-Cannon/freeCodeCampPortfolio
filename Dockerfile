# Build from Docker Image node:10
# This includes node v10 and npm
FROM node:10

# Install Docker
RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
  && tar xzvf docker-17.04.0-ce.tgz \
  && mv docker/docker /usr/local/bin \
  && rm -r docker docker-17.04.0-ce.tgz

# Set Git Repo directory for your application
WORKDIR /home/alex/Desktop/dev/freeCodeCampPortfolio

# Install Dependencies
COPY package*.json ./

RUN npm install
# If you are building for production,
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]