# IT Ops deployment guide

Welcome to your quick start guide for navigating, utilizing, and deployment using the ITM Cloud Lab Infrastructure. This guide is designed to help you get started with essential operations like connecting to servers via SSH, using Git, and managing infrastructure with Packer and Terraform. Let's dive in!

## Prerequisite Steps

### 1. University VPN Software
- **Download and Install**: Obtain the SSL VPN Service from iit.edu.
- **Login**: Use your `@hawk.iit.edu` email and portal password.
- **Connect**: Launch the VPN client and connect to `vpn.iit.edu` with your `@hawk` ID and password.

### 2. Install VSCode Plugins
Install the following plugins in VSCode:
- HashiCorp Terraform
- Hashicorp HCL

## Accessing the Cluster

### Network Details
The cluster operates on the `192.168.172.0/24` CIDR block. DNS for each system is available, e.g., `system41.rice.iit.edu` resolves to `192.168.172.41`.

### Connecting to the Build Server via SSH
- **Command**: `ssh -i "<path_to_your_private_key>" your_username@system45.rice.iit.edu`
- **Username**: Use your @hawk ID without the `@hawk`. E.g., `ssh -i "C:\Users\yourname\OneDrive\Personal Vault\id_ed25519_proxmox" yourname@system45.rice.iit.edu`.

### Git Tutorial Process
- Generate an ed25519 key pair on the build server.
- Add the public key to your GitHub account.
- Clone your repositories.

## Building Infrastructure

### 1. Using Packer Templates
Navigate to the `jhajek` GitHub repo for templates. Fill out `variables.pkr.hcl` for the Vault Server and execute `packer init .`, `packer validate .`, and `packer build .`.

### 2. Deploying Instances with Terraform
Automate deployment with Terraform commands: `terraform init`, `terraform validate`, and `terraform apply`.

### 3. Configure Your Vault Server
Set up environment variables on your Vault server and log in to add initial secrets as per the tutorial.

## Final Steps

### Access Proxmox Cluster Management Console
Log into `https://system41.rice.iit.edu:8006/`. Admin access is granted—use it responsibly.

### Additional Networks
The cluster includes `10.0.0.0/16` (Metrics Network) and `10.110.0.0/16` (Meta network) networks.

### Service Guarantee
No service guarantee is provided. Do not store irreplaceable data on these systems.

### Need Help?
Join the Discord channel for assistance: https://discord.gg/HJDgNheUwW