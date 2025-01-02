variable "project" {
  description = "Project name"
  type        = string
  sensitive   = true
}

variable "domain" {
  description = "Domain"
  type        = string
  sensitive   = true
}

variable "s3_static_name" {
  description = "S3 static bucket name"
  type        = string
  sensitive   = true
}

variable "cf_distribution_index" {
  description = "CloudFront index document"
  type        = string
  sensitive   = true
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  sensitive   = true
}

variable "acm_crt" {
  description = "ACM certificate arn for cloudfront domain"
  type        = string
  sensitive   = true
}

# variable "tf_bucket" {
#   description = "TF states bucket name"
#   type        = string
#   sensitive   = true
# }

# variable "tf_key" {
#   description = "TF states file key"
#   type        = string
#   sensitive   = true
# }

# variable "tf_region" {
#   description = "TF states region"
#   type        = string
#   sensitive   = true
# }