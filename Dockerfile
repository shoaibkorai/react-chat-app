# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Vite app for production
RUN npm run build

# Use Nginx to serve the built app
FROM nginx:alpine

# Copy the built files from the previous stage to the Nginx directory    
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
