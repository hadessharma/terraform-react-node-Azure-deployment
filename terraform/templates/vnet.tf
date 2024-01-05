resource "azurerm_virtual_network" "@@vnetName@@" {
  name = "@@vnetName@@"
  location = "@@loc@@"
  resource_group_name = "@@rgName@@"
  address_space = ["@@addSpace@@"]
}