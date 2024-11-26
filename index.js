import countries from "./countries.json";
import currency from "currency.js";

export function currencyInWords(
  amount = 0,
  currency = "IN",
  fallBackCurrency = "IN"
) {
  function checkAndConvertToNumber(value) {
    if (typeof value === "number") {
      return value; // If the value is already a number, return it as is
    } else if (typeof value === "string" && !isNaN(value)) {
      return Number(value); // If the value is a string representation of a number, convert it to a number
    } else {
      return 0;
    }
  }

  const roundedAmount = Math.round(checkAndConvertToNumber(amount) * 100) / 100;
  const numbersInWords = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tensInWords = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertLessThan100(num) {
    if (num < 20) {
      return numbersInWords[num];
    }

    const tens = Math.floor(num / 10);
    const ones = num % 10;
    return tensInWords[tens] + (ones ? "-" + numbersInWords[ones] : "");
  }

  function convertLessThan1000(num) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;

    let result = "";

    if (hundreds) {
      result += numbersInWords[hundreds] + " Hundred";
    }

    if (remainder) {
      result += " " + convertLessThan100(remainder);
    }

    return result.trim();
  }

  function convertNumberToWords(num) {
    if (num === 0) {
      return "Zero";
    }
    let result = "";
    if (fallBackCurrency == "INR") {
      const crores = Math.floor(num / 10000000);
      const lakhs = Math.floor((num % 10000000) / 100000);
      const thousands = Math.floor((num % 100000) / 1000);
      const remainder = num % 1000;

      if (crores) {
        result += convertLessThan1000(crores) + " Crores ";
      }

      if (lakhs) {
        result += convertLessThan1000(lakhs) + " Lakhs ";
      }

      if (thousands) {
        result += convertLessThan1000(thousands) + " Thousand ";
      }

      if (remainder) {
        result += convertLessThan1000(remainder);
      }
    } else {
      const billions = Math.floor(num / 1000000000);
      const millions = Math.floor((num % 1000000000) / 1000000);
      const thousands = Math.floor((num % 1000000) / 1000);
      const remainder = num % 1000;

      if (billions) {
        result += convertLessThan1000(billions) + " Billion ";
      }

      if (millions) {
        result += convertLessThan1000(millions) + " Million ";
      }

      if (thousands) {
        result += convertLessThan1000(thousands) + " Thousand ";
      }

      if (remainder) {
        result += convertLessThan1000(remainder);
      }
    }

    return result.trim();
  }

  const integerPart = Math.floor(roundedAmount);
  const decimalPart = Math.round((roundedAmount - integerPart) * 100);
  const integerPartInWords = convertNumberToWords(integerPart);
  const decimalPartInWords = convertLessThan100(decimalPart);

  let country;

  for (let i = 0; i < countries.length; i++) {
    const element = countries[i];

    if (element["code"] == currency) {
      country = element;
      break;
    } else continue;
  }

  let amountInWordsString = `${integerPartInWords} ${
    country?.["currency"] || ""
  } `;
  amountInWordsString =
    amountInWordsString +
    (decimalPart
      ? ` and ${decimalPartInWords} ${
          country?.["currency_smallest_value"] ||
          ` Hundredths ${fallBackCurrency}`
        }`
      : "");
  amountInWordsString = amountInWordsString + " only";

  return amountInWordsString;
}

// Format currency
export function formatCurrency(amount) {
  return currency(amount, {
    symbol: "",
    separator: ",",
    decimal: ".",
  }).format();
}
