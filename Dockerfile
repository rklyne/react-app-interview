# Dockerfile for running two applications concurrently

# Use Node.js as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the ports for both apps
EXPOSE 3001
EXPOSE 5800

# Start both applications concurrently by running npm start
CMD ["npm", "run", "start"]
