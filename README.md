
# currency-in-word

`currency-in-word` is a lightweight npm library that converts numerical currency values into their corresponding word representations. It's useful for generating invoices, legal documents, or any scenario where a textual representation of currency is required.

## Features
- Converts any currency amount into words.
- Supports various currency formats.
- Lightweight and easy to integrate.
- Customizable for different use cases.

## Installation

```bash
npm install currency-in-word
```

## Usage

```javascript
const currencyInWord = require('currency-in-word');

const amount = 1234.56;
const result = currencyInWord(amount);
console.log(result); // Outputs: "One thousand two hundred thirty-four dollars and fifty-six cents"
```

## Customization

You can customize the output format or even add your own currency symbols and denominations.

## Contributing

Feel free to open issues or pull requests for any bugs, features, or suggestions!
