###############################################################################
# These are your proxmox API token credentials (not username and password)
# That will be provided to you
###############################################################################
pm_api_url          = "https://system41.rice.iit.edu:8006/api2/json"                         # URL of your Proxmox cluster
pm_api_token_id     = "mpoblete-tf@pve!mpoblete-itmt4302024"                         # This is an API token you have previously created for a specific user
pm_api_token_secret = "9e21ffb0-24d9-4acb-88b4-2cae3c40f673"                         # This is a uuid that is only available when initially creating the token 
target_node         = "system41"             # Promox node to provision VMs
keypath             = "id_ed25519_vault_server_key" # The path to the private key you need to communicate with your instances
###############################################################################
# Debugging information settings
# No need to change these values
###############################################################################
pm_log_enable = true                           # Optional; defaults to false) Enable debug logging, see the section below for logging details
pm_parallel   = 1                              # (Optional; defaults to 4) Allowed simultaneous Proxmox processes (e.g. creating resources).
pm_timeout    = 600                            # (Optional; defaults to 300) Timeout value (seconds) for proxmox API calls.
pm_log_file   = "terraform-plugin-proxmox.log" # (Optional; defaults to terraform-plugin-proxmox.log) If logging is enabled, the log file the provider will write logs to.
###############################################################################
# This is a variable to append to your cloud instances so they have a unique
# FQDN -- this is needed for the gossip based DNS to work
###############################################################################
yourinitials = "team-01o-vault-server" # initials to add to make unique systems
numberofvms  = 1             # quantity of that template to launch
desc         = "Vault Server for spring 2024 team-01o online section"            # What is the purpose of the TF template
###############################################################################
# Name the template your created via Packer for Terraform to use to deploy
# instances from
###############################################################################
template_to_clone = "team01o-vault-server" # The name of the template to clone
###############################################################################
# Customize instance hardware settings
###############################################################################
memory    = 4096  # Memory size of a VM
cores     = 1     # vCPU = cores * sockets
sockets   = 1     # vCPU = cores * sockets
disk_size = "30G" # Disk size of a VM - min size must equal to the disk size of your clone image
