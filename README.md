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
import { currencyInWords } from "currency-in-word";

const amount = 1234.56;
const currency = "US";
const fallBackCurrency = "US";
const result = currencyInWords(amount, currency, fallBackCurrency);
console.log(result);
Outputs: "One thousand two hundred thirty-four dollars and fifty-six cents";
```

```javascript
import { formatCurrency } from "currency-in-word";

const amount = 365022.3;
const result = formatCurrency(amount);
console.log(result);
Outputs: 365,022.30;
```

## Customization

You can customize the output format or even add your own currency symbols and denominations.

## Contributing

Feel free to open issues or pull requests for any bugs, features, or suggestions!
