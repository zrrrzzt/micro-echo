# Setting the base to nodejs 8.9.1
FROM node:8.15.1-alpine@sha256:8e9987a6d91d783c56980f1bd4b23b4c05f9f6076d513d6350fef8fe09ed01fd

# Maintainer
MAINTAINER Geir Gåsodden

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

ENV NODE_ENV production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start