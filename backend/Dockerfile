FROM node:14-slim

# Where source code is going to live
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into working directory
COPY ./package.json ./
COPY ./package-lock.json ./

# Install all dependecies
RUN npm install

# Copy the rest of the source code into the image
COPY . .

# Where were going to run API server
EXPOSE 4000

CMD ["npm", "start"]