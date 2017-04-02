FROM hypriot/rpi-node:latest
 
ADD ./ /src
WORKDIR /src
 
RUN npm install
 
EXPOSE 80
 
CMD ["node", "basic/bootstrap"]