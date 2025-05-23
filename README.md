<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Mad-Pixels/.github/raw/main/profile/banner.png">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/Mad-Pixels/.github/raw/main/profile/banner.png">
    <img
        alt="MadPixels"
        src="https://github.com/Mad-Pixels/.github/raw/main/profile/banner.png">
</picture>

# MadPixels Community docs

Static multi-language [site](http://docs.madpixels.io) with community docs and instructions.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Required Variables
```terraform
domain       = "example.com"
project      = "my-project"
tf_bucket    = "terraform-state-bucket"
tf_key       = "path/to/state.tfstate"
acm_crt      = "..."
aws_region   = "ap-southeast-1"
```

# Contributing
We're open to any new ideas and contributions. We also have some rules and taboos here, so please read this page and our [Code of Conduct](/CODE_OF_CONDUCT.md) carefully.

## I want to report an issue
If you've found an issue and want to report it, please check our [Issues](https://github.com/Mad-Pixels/docs/issues) page.
