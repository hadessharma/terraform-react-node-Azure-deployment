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
  # subscription_id = "@@subscription_id@@"
  # tenant_id       = "@@tenant_id@@"
  # client_id       = "@@client_id@@"
  # client_secret   = "@@client_secret@@"
  subscription_id = "bb857866-a9d7-400e-998c-383f3e1cf10b"
  tenant_id       = "9a9503cf-8d47-4e05-914d-d4aeb2eea714"
  client_id       = "b339ff0f-4b45-4c54-8d89-904ea4e10a72"
  client_secret   = "LUs8Q~rMexuRzqVy-wr68BSZY9oN31IEdvCWPb5e"
}

