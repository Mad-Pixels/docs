variable "project" {
  description = "Project name"
  type        = string
  sensitive   = true
}

variable "description" {
  description = "CloudFront description."
  type        = string
  sensitive   = true
}

variable "bucket_arn" {
  description = "CloudFront distribution S3 bucket ARN."
  type        = string
  sensitive   = true
}

variable "bucket_id" {
  description = "CloudFront distribution S3 bucket ID."
  type        = string
  sensitive   = true
}

variable "bucket_domain" {
  description = "CloudFront distribution S3 bucket domain."
  type        = string
  sensitive   = true
}

variable "acm_certificate_arn" {
  description = "CloudFront certificate arn."
  type        = string
  sensitive   = true
}

variable "domain_aliases" {
  description = "CloudFront domain aliases."
  type        = list(string)
  default     = []
  sensitive   = true
}

variable "index_document" {
  description = "Name of the index document for the S3 static site."
  type        = string
  default     = "index.html"
  sensitive   = true
}

variable "error_responses" {
  description = "Error responses configuration"
  type        = map(object({
    response_code      = number
    response_page_path = string
  }))
  default     = {}
}

variable "shared_tags" {
  description = "Shared labels to add to all resources."
  type        = map(string)
  default     = {}
  sensitive   = true
}

variable "query_string" {
  description = "Forward query strings to the origin."
  type        = bool
  default     = false
  sensitive   = true
}

variable "query_string_cache_keys" {
  description = "List of queries params for cache."
  type        = list(string)
  default     = []
  sensitive   = true
}

variable "req_func_list" {
  description = "List of viewer-request functions"
  type = list(object({
    function_arn = string
  }))
  default = []
}

variable "resp_func_list" {
  description = "List of viewer-response functions"
  type = list(object({
    function_arn = string
  }))
  default = []
}

locals {
  error_responses_list = [
    for error_code, response in var.error_responses : {
      error_code         = error_code
      response_code      = response.response_code
      response_page_path = response.response_page_path
    }
  ]
}