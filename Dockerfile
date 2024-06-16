# Use the official Node.js 14 image as a base image
FROM node:21

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port your app runs on (assuming your app runs on port 8080)
EXPOSE 8080

# Command to run your application with nodemon
CMD ["npm", "start"]

ENV FIREBASE_API_KEY=AIzaSyDwyW6cP6JsDfy3Ax_-_0BBkfr8PXFIS0w
ENV FIREBASE_AUTH_DOMAIN=wira-wicara.firebaseapp.com
ENV FIREBASE_PROJECT_ID=wira-wicara
ENV FIREBASE_STORAGE_BUCKET=wira-wicara.appspot.com
ENV FIREBASE_MESSAGING_SENDER_ID=292861095320
ENV FIREBASE_APP_ID=1:292861095320:web:4320b03a2c6777a2cecfed
