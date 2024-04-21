#!/bin/bash

# Install and prepare frontend web server - Example for ExpressJS/NodeJS

sudo apt-get update
sudo apt-get install -y curl rsync

# Steps to add NodeJS repository to your Ubuntu Server for Node and NPM installation
# Remove and or replace with your required webserver stack
# https://github.com/nodesource/distributions/blob/master/README.md#using-ubuntu-2
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm@9.6.0

# Change directory to the location of your JS code
cd /home/vagrant/team01o-2024/design/code/client/

# Downloading necessary react scripts
sudo npm install react-scripts

# Making an optimized build of the react app
sudo npm run build

# Installing pm2 to keep our server running
sudo npm install pm2@latest -g

# installing serve so we can serve the webapp properly
sudo npm install -g serve

# Running our server with pm2 and serve
pm2 serve build 3000 --spa

# Saving this setup so pm2 runs on startup
sudo pm2 startup

pm2 save






###############################################################################
# Using Find and Replace via sed to add in the secrets to connect to MySQL
# There is a .env file containing an empty template of secrets -- essentially
# this is a hack to pass environment variables into the vm instances
###############################################################################

sudo sed -i "s/FQDN=/FQDN=$FQDN/" /home/vagrant/team01o-2024/build/proxmox-cloud-production-templates/code/express-static-app/.env
sudo sed -i "s/DBUSER=/DBUSER=$DBUSER/" /home/vagrant/team01o-2024/build/proxmox-cloud-production-templates/code/express-static-app/.env
sudo sed -i "s/DBPASS=/DBPASS=$DBPASS/" /home/vagrant/team01o-2024/build/proxmox-cloud-production-templates/code/express-static-app/.env
sudo sed -i "s/DATABASE=/DATABASE=$DATABASE/" /home/vagrant/team01o-2024/build/proxmox-cloud-production-templates/code/express-static-app/.env
