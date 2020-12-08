# Create image based on the official Node 6 image from the dockerhub
FROM node:10

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json .

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . .
RUN chmod +x /usr/src/app/wait-for.sh

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]