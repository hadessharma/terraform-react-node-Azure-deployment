resource "azurerm_storage_account" "@@saName@@" {
  name                     = "@@saName@@"
  location                 = "@@loc@@"
  resource_group_name      = "@@rgName@@"
  account_tier             = "@@acTier@@"
  account_replication_type = "@@acRepli@@"

}
