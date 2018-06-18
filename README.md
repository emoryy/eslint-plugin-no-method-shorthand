# eslint-plugin-no-method-shorthand

Don&#39;t allow method shorthands in object literals.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-method-shorthand`:

```
$ npm install eslint-plugin-no-method-shorthand --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-method-shorthand` globally.

## Usage

Add `no-method-shorthand` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-method-shorthand"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-method-shorthand/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





