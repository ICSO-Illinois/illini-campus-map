FROM node:12.13.1
RUN ["npm", "run", "build"]
RUN ["npm", "run", "deploy"]
