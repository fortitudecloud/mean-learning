FROM hypriot/rpi-node:latest
 
ADD ./ /src
WORKDIR /src

# Install Typescript
RUN npm install -g typescript

# Install Project
RUN npm install
 
# Build Project
RUN tsc -p .

EXPOSE 3000
 
CMD ["node", "Basic/bootstrap"]