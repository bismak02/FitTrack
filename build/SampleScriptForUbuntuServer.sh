# Sample script for ubuntu server

# Define a path to generate a log file
LOGFILE="/home/ubuntu/installation_log.log"

# Redirect output to the logfile
exec &> "$LOGFILE"

# these are commands for debugging
# set -e will exit if a command exits with a non zero status, like an error
# set -v will print commands as they are executed in the script which should help debugging
set -e
set -v


sudo apt update
sudo apt install git -y

sudo apt-get update
sudo apt install nginx

# Enable and start Nginx service
sudo systemctl enable nginx
sudo systemctl start nginx



cd ~

# Need to either have the config file in the image already or create in the script
# Same for the github key either it has to be in the image or we have to find another way to insert it, for example using vault
git clone git@github.com:illinoistech-itm/mpoblete.git

# incase there are access errors
# sudo chmod a+x /home /home/vagrant /home/vagrant/team01o-2024 /home/vagrant/team01o-2024/design /home/vagrant/team01o-2024/design/code

# need to edit the sites-available file 
cd /etc/nginx/sites-available/
sudo vim team01o_website.conf

sudo nginx -t
sudo systemctl reload nginx

sudo ln -s /etc/nginx/sites-available/team01o_website.conf /etc/nginx/sites-enabled/

sudo nginx -t
sudo systemctl reload nginx

sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --reload
sudo firewall-cmd --reload
sudo firewall-cmd --zone=public --list-all

sudo nginx -t
sudo systemctl reload nginx

