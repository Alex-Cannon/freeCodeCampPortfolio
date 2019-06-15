# Build from Docker Image node:10
# This includes node v10 and npm
FROM node:10

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