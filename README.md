# textlint-rule-gc-product-name

[![ci](https://github.com/danishi/textlint-rule-gc-product-name/actions/workflows/ci.yml/badge.svg)](https://github.com/danishi/textlint-rule-gc-product-name/actions/workflows/ci.yml)
[![Contributors](https://img.shields.io/github/contributors/danishi/textlint-rule-gc-product-name)](https://github.com/danishi/textlint-rule-gc-product-name/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/danishi/textlint-rule-gc-product-name)](https://github.com/danishi/textlint-rule-gc-product-name/last-commit)
[![Open Issues](https://img.shields.io/github/issues-raw/danishi/textlint-rule-gc-product-name)](https://github.com/danishi/textlint-rule-gc-product-name/issues)
[![LRepo-size](https://img.shields.io/github/repo-size/danishi/textlint-rule-gc-product-name)](https://github.com/danishi/textlint-rule-gc-product-name/repo-size)
[![MIT](https://img.shields.io/github/license/danishi/textlint-rule-gc-product-name)](https://github.com/danishi/textlint-rule-gc-product-name/blob/master/LICENSE)
![NPM Downloads 18m](https://img.shields.io/npm/d18m/textlint-rule-gc-product-name)
![NPM Downloads week](https://img.shields.io/npm/dw/textlint-rule-gc-product-name)
![NPM Downloads month](https://img.shields.io/npm/dm/textlint-rule-gc-product-name)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/danishi)

This rule checks Google Cloud product names.  
The names of products are obtained from [this API](https://github.com/danishi/gc-service-list-api).

## Install

Install with [npm](https://www.npmjs.com/package/textlint-rule-gc-product-name):

    npm install textlint-rule-gc-product-name

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "gc-product-name": true
    }
}
```

Via CLI

```
textlint --rule gc-product-name README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © danishi
