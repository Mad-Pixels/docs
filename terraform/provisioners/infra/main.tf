module "s3" {
  source = "../../modules/s3"

  bucket_name = var.s3_static_name
  project     = var.project
  domain      = var.domain 

  index_document = "index.html"
  is_website     = true

  shared_tags = {
    "Github"  = "https://github.com/Mad-Pixels/docs",
  }
}

module "cf" {
  source = "../../modules/cloudfront"

  bucket_id     = module.s3.id
  bucket_arn    = module.s3.arn
  bucket_domain = module.s3.domain

  project             = var.project
  description         = "MadPixels docs"
  acm_certificate_arn = var.acm_crt
  domain_aliases      = [var.domain]
  index_document      = var.cf_distribution_index

  error_responses = {
    403 = {
      response_code      = 200
      response_page_path = "/${var.cf_distribution_index}"
    }
    404 = {
      response_code      = 200
      response_page_path = "/${var.cf_distribution_index}"
    }
  }

  shared_tags = {
    "Github"  = "https://github.com/Mad-Pixels/docs",
  }

  depends_on = [ module.s3 ]
}