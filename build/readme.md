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
Navigate to the group GitHub repo and go into team01o-2024\build\proxmox-cloud-production-templates\packer for packer templates and team01o-2024\build\proxmox-cloud-production-templates\terraform for the terraform files needed to deploy said templated. Fill out `template-for-variables.pkr.hcl` for the packer templates then rename it to `variables.pkr.hcl` you can then execute `packer init .`, `packer validate .`, and `packer build .`.

But first to make sure that you enter the right variables for the packer template, you should ssh into our vault server with the following command 

ssh -i `path-to-your-authorized-vault-ssh-key` vagrant@system86.rice.iit.edu 

If you cant ssh in contact the PM or the previous IT Ops person.

Once you are inside the vault server theres a few things you may have to do:

- If the vault server is sealed, make sure to unseal it using 3 keys, ask the PM or the previous IT Ops person for this
- If vault is denying your access to the secret but it isnt sealed, chances are the user tokens expired and new ones must be made, or you mistyped your user token in your .bashrc file
- If everything is working you may add secrets to the vault, use the syntax in chapter 13.6 found in the vault tooling assignment

So concerning the vault setup for a new IT Ops person, you want to ssh into vault as early as possible, then create your user token with permission to the teams secrets with the following command:

`vault token create -ttl=21600m -policy=team01o-policy`

the output will look something like this:

```
User token
Key                  Value
---                  -----
token                hvs.CAESILKPfgdiKVYCIvRY_ENKciEBtoiqcaqm4gfwFIBM7UbGGh4KHGh2cy5qZmNvbFNzRmEwMmJBSGFmWktIZjVwMVc
token_accessor       4pitf1xzh87oNChbXOJExtxD
token_duration       360h
token_renewable      true
token_policies       ["default" "team01o-policy"]
identity_policies    []
policies             ["default" "team01o-policy"]
```
Save the output somewhere safe and then copy the token value, in this case `hvs.CAESILKPfgdiKVYCIvRY_ENKciEBtoiqcaqm4gfwFIBM7UbGGh4KHGh2cy5qZmNvbFNzRmEwMmJBSGFmWktIZjVwMVc`

Then you will exti the vault server by typing `exit`

Go to your home directory, `cd ~`

Then edit your bashrc file `vim .bashrc`

and add these lines at the bottom:

```
export VAULT_ADDR='https://team-01o-vault-server-vm0.service.consul:8200'
export VAULT_SKIP_VERIFY="true"
export VAULT_TOKEN="hvs.CAESILKPfgdiKVYCIvRY_ENKciEBtoiqcaqm4gfwFIBM7UbGGh4KHGh2cy5qZmNvbFNzRmEwMmJBSGFmWktIZjVwMVc"
```
make sure you replace the vault_token value with the user token you just generated

after this you will have a connection to the vault server so the packer templates can properly pull for the vault secrets. Just make sure you are pulling the right secrets, the templates should be pulling the correct ones but check just incase.

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