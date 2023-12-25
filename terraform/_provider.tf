terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.5"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = "@@subscription_id@@"
  tenant_id       = "@@tenant_id@@"
  client_id       = "@@client_id@@"
  client_secret   = "@@client_secret@@"
}

