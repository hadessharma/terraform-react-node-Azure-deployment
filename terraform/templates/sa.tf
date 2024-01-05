resource "azurerm_storage_account" "@@resourceName@@" {
  name                     = "@@resourceName@@"
  location                 = "@@loc@@"
  resource_group_name      = "@@rgName@@"
  account_tier             = "@@saTier@@"
  account_replication_type = "@@saRepli@@"

}
