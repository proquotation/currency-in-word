const countries = [
  {
    name: "Afghanistan",
    code: "AF",
    isocode: "AFN",
    currency: "Afghani",
    currency_smallest_value: "Pul",
  },
  {
    name: "Åland Islands",
    code: "AX",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Albania",
    code: "AL",
    isocode: "ALL",
    currency: "Lek",
    currency_smallest_value: "Qindarka",
  },
  {
    name: "Algeria",
    code: "DZ",
    isocode: "DZD",
    currency: "Algerian Dinar",
    currency_smallest_value: "Centime",
  },
  {
    name: "American Samoa",
    code: "AS",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Andorra",
    code: "AD",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Angola",
    code: "AO",
    isocode: "AOA",
    currency: "Angolan Kwanza",
    currency_smallest_value: "Cêntimo",
  },
  {
    name: "Anguilla",
    code: "AI",
    isocode: "XCD",
    currency: "East Caribbean Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Antarctica",
    code: "AQ",
    isocode: "AAD",
    currency: "Special Drawing Rights",
    currency_smallest_value: "Cent",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    isocode: "XCD",
    currency: "East Caribbean Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Argentina",
    code: "AR",
    isocode: "ARS",
    currency: "Argentine Peso",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Armenia",
    code: "AM",
    isocode: "AMD",
    currency: "Armenian Dram",
    currency_smallest_value: "Luma",
  },
  {
    name: "Aruba",
    code: "AW",
    isocode: "AWG",
    currency: "Aruban Florin",
    currency_smallest_value: "Cent",
  },
  {
    name: "Australia",
    code: "AU",
    isocode: "AUD",
    currency: "Australian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Austria",
    code: "AT",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    isocode: "AZN",
    currency: "Azerbaijani Manat",
    currency_smallest_value: "Qəpik",
  },
  {
    name: "Bahamas",
    code: "BS",
    isocode: "BSD",
    currency: "Bahamian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Bahrain",
    code: "BH",
    isocode: "BHD",
    currency: "Bahraini Dinar",
    currency_smallest_value: "Fils",
  },
  {
    name: "Bangladesh",
    code: "BD",
    isocode: "BDT",
    currency: "Bangladeshi Taka",
    currency_smallest_value: "Paisa",
  },
  {
    name: "Barbados",
    code: "BB",
    isocode: "BBD",
    currency: "Barbadian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Belarus",
    code: "BY",
    isocode: "BYN",
    currency: "Belarusian Ruble",
    currency_smallest_value: "Kapeyka",
  },
  {
    name: "Belgium",
    code: "BE",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Belize",
    code: "BZ",
    isocode: "BZD",
    currency: "Belize Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Benin",
    code: "BJ",
    isocode: "XOF",
    currency: "West African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Bermuda",
    code: "BM",
    isocode: "BMD",
    currency: "Bermudian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Bhutan",
    code: "BT",
    isocode: "BTN",
    currency: "Bhutanese Ngultrum",
    currency_smallest_value: "Chertrum",
  },
  {
    name: "Bolivia (Plurinational State of)",
    code: "BO",
    isocode: "BOB",
    currency: "Bolivian Boliviano",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "BQ",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    isocode: "BAM",
    currency: "Bosnia-Herzegovina Convertible Mark",
    currency_smallest_value: "Fening",
  },
  {
    name: "Botswana",
    code: "BW",
    isocode: "BWP",
    currency: "Botswana Pula",
    currency_smallest_value: "Thebe",
  },
  {
    name: "Bouvet Island",
    code: "BV",
    isocode: "NOK",
    currency: "Norwegian Krone",
    currency_smallest_value: "Øre",
  },
  {
    name: "Brazil",
    code: "BR",
    isocode: "BRL",
    currency: "Brazilian Real",
    currency_smallest_value: "Centavo",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
    isocode: "BND",
    currency: "Brunei Dollar",
    currency_smallest_value: "Sen",
  },
  {
    name: "Bulgaria",
    code: "BG",
    isocode: "BGN",
    currency: "Bulgarian Lev",
    currency_smallest_value: "Stotinka",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    isocode: "XOF",
    currency: "West African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Burundi",
    code: "BI",
    isocode: "BIF",
    currency: "Burundian Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Cabo Verde",
    code: "CV",
    isocode: "CVE",
    currency: "Cape Verdean Escudo",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Cambodia",
    code: "KH",
    isocode: "KHR",
    currency: "Cambodian Riel",
    currency_smallest_value: "Sen",
  },
  {
    name: "Cameroon",
    code: "CM",
    isocode: "XAF",
    currency: "Central African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Canada",
    code: "CA",
    isocode: "CAD",
    currency: "Canadian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    isocode: "KYD",
    currency: "Cayman Islands Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Central African Republic",
    code: "CF",
    isocode: "XAF",
    currency: "Central African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Chad",
    code: "TD",
    isocode: "XAF",
    currency: "Central African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Chile",
    code: "CL",
    isocode: "CLP",
    currency: "Chilean Peso",
    currency_smallest_value: "Centavo",
  },
  {
    name: "China",
    code: "CN",
    isocode: "CNY",
    currency: "Chinese Yuan",
    currency_smallest_value: "Fēn",
  },
  {
    name: "Christmas Island",
    code: "CX",
    isocode: "AUD",
    currency: "Australian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    isocode: "AUD",
    currency: "Australian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Colombia",
    code: "CO",
    isocode: "COP",
    currency: "Colombian Peso",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Comoros",
    code: "KM",
    isocode: "KMF",
    currency: "Comorian Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Congo",
    code: "CG",
    isocode: "XAF",
    currency: "Central African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Congo (Democratic Republic of the)",
    code: "CD",
    isocode: "CDF",
    currency: "Congolese Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Cook Islands",
    code: "CK",
    isocode: "NZD",
    currency: "New Zealand Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Costa Rica",
    code: "CR",
    isocode: "CRC",
    currency: "Costa Rican Colón",
    currency_smallest_value: "Céntimo",
  },
  {
    name: "Côte d'Ivoire",
    code: "CI",
    isocode: "XOF",
    currency: "West African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Croatia",
    code: "HR",
    isocode: "HRK",
    currency: "Croatian Kuna",
    currency_smallest_value: "Lipa",
  },
  {
    name: "Cuba",
    code: "CU",
    isocode: "CUP",
    currency: "Cuban Peso",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Curaçao",
    code: "CW",
    isocode: "ANG",
    currency: "Netherlands Antillean Guilder",
    currency_smallest_value: "Cent",
  },
  {
    name: "Cyprus",
    code: "CY",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    isocode: "CZK",
    currency: "Czech Koruna",
    currency_smallest_value: "Haléř",
  },
  {
    name: "Denmark",
    code: "DK",
    isocode: "DKK",
    currency: "Danish Krone",
    currency_smallest_value: "Øre",
  },
  {
    name: "Djibouti",
    code: "DJ",
    isocode: "DJF",
    currency: "Djiboutian Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Dominica",
    code: "DM",
    isocode: "XCD",
    currency: "East Caribbean Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    isocode: "DOP",
    currency: "Dominican Peso",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Ecuador",
    code: "EC",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Egypt",
    code: "EG",
    isocode: "EGP",
    currency: "Egyptian Pound",
    currency_smallest_value: "Piastre",
  },
  {
    name: "El Salvador",
    code: "SV",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    isocode: "XAF",
    currency: "Central African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Eritrea",
    code: "ER",
    isocode: "ERN",
    currency: "Eritrean Nakfa",
    currency_smallest_value: "Cent",
  },
  {
    name: "Estonia",
    code: "EE",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Eswatini",
    code: "SZ",
    isocode: "SZL",
    currency: "Swazi Lilangeni",
    currency_smallest_value: "Cent",
  },
  {
    name: "Ethiopia",
    code: "ET",
    isocode: "ETB",
    currency: "Ethiopian Birr",
    currency_smallest_value: "Santim",
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
    isocode: "FKP",
    currency: "Falkland Islands Pound",
    currency_smallest_value: "Penny",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    isocode: "DKK",
    currency: "Danish Krone",
    currency_smallest_value: "Øre",
  },
  {
    name: "Fiji",
    code: "FJ",
    isocode: "FJD",
    currency: "Fijian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Finland",
    code: "FI",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "France",
    code: "FR",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "French Guiana",
    code: "GF",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "French Polynesia",
    code: "PF",
    isocode: "XPF",
    currency: "CFP Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "French Southern Territories",
    code: "TF",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Gabon",
    code: "GA",
    isocode: "XAF",
    currency: "Central African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Gambia",
    code: "GM",
    isocode: "GMD",
    currency: "Gambian Dalasi",
    currency_smallest_value: "Butut",
  },
  {
    name: "Georgia",
    code: "GE",
    isocode: "GEL",
    currency: "Georgian Lari",
    currency_smallest_value: "Tetri",
  },
  {
    name: "Germany",
    code: "DE",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Ghana",
    code: "GH",
    isocode: "GHS",
    currency: "Ghanaian Cedi",
    currency_smallest_value: "Pesewa",
  },
  {
    name: "Gibraltar",
    code: "GI",
    isocode: "GIP",
    currency: "Gibraltar Pound",
    currency_smallest_value: "Penny",
  },
  {
    name: "Greece",
    code: "GR",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Greenland",
    code: "GL",
    isocode: "DKK",
    currency: "Danish Krone",
    currency_smallest_value: "Øre",
  },
  {
    name: "Grenada",
    code: "GD",
    isocode: "XCD",
    currency: "East Caribbean Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Guam",
    code: "GU",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Guatemala",
    code: "GT",
    isocode: "GTQ",
    currency: "Guatemalan Quetzal",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Guernsey",
    code: "GG",
    isocode: "GBP",
    currency: "British Pound Sterling",
    currency_smallest_value: "Penny",
  },
  {
    name: "Guinea",
    code: "GN",
    isocode: "GNF",
    currency: "Guinean Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    isocode: "XOF",
    currency: "West African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Guyana",
    code: "GY",
    isocode: "GYD",
    currency: "Guyanaese Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Haiti",
    code: "HT",
    isocode: "HTG",
    currency: "Haitian Gourde",
    currency_smallest_value: "Centime",
  },
  {
    name: "Heard Island and McDonald Islands",
    code: "HM",
    isocode: "AUD",
    currency: "Australian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Holy See",
    code: "VA",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Honduras",
    code: "HN",
    isocode: "HNL",
    currency: "Honduran Lempira",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Hong Kong",
    code: "HK",
    isocode: "HKD",
    currency: "Hong Kong Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Hungary",
    code: "HU",
    isocode: "HUF",
    currency: "Hungarian Forint",
    currency_smallest_value: "Fillér",
  },
  {
    name: "Iceland",
    code: "IS",
    isocode: "ISK",
    currency: "Icelandic Króna",
    currency_smallest_value: "Eyrir",
  },
  {
    name: "India",
    code: "IN",
    isocode: "INR",
    currency: "Indian Rupee",
    currency_smallest_value: "Paisa",
  },
  {
    name: "Indonesia",
    code: "ID",
    isocode: "IDR",
    currency: "Indonesian Rupiah",
    currency_smallest_value: "Sen",
  },
  {
    name: "Iran (Islamic Republic of)",
    code: "IR",
    isocode: "IRR",
    currency: "Iranian Rial",
    currency_smallest_value: "Dinar",
  },
  {
    name: "Iraq",
    code: "IQ",
    isocode: "IQD",
    currency: "Iraqi Dinar",
    currency_smallest_value: "Fils",
  },
  {
    name: "Ireland",
    code: "IE",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Isle of Man",
    code: "IM",
    isocode: "GBP",
    currency: "British Pound Sterling",
    currency_smallest_value: "Penny",
  },
  {
    name: "Israel",
    code: "IL",
    isocode: "ILS",
    currency: "Israeli New Shekel",
    currency_smallest_value: "Agora",
  },
  {
    name: "Italy",
    code: "IT",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Jamaica",
    code: "JM",
    isocode: "JMD",
    currency: "Jamaican Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Japan",
    code: "JP",
    isocode: "JPY",
    currency: "Japanese Yen",
    currency_smallest_value: "Sen",
  },
  {
    name: "Jersey",
    code: "JE",
    isocode: "GBP",
    currency: "British Pound Sterling",
    currency_smallest_value: "Penny",
  },
  {
    name: "Jordan",
    code: "JO",
    isocode: "JOD",
    currency: "Jordanian Dinar",
    currency_smallest_value: "Piastre",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    isocode: "KZT",
    currency: "Kazakhstani Tenge",
    currency_smallest_value: "Tiyn",
  },
  {
    name: "Kenya",
    code: "KE",
    isocode: "KES",
    currency: "Kenyan Shilling",
    currency_smallest_value: "Cent",
  },
  {
    name: "Kiribati",
    code: "KI",
    isocode: "AUD",
    currency: "Australian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Korea (Democratic People's Republic of)",
    code: "KP",
    isocode: "KPW",
    currency: "North Korean Won",
    currency_smallest_value: "Chon",
  },
  {
    name: "Korea (Republic of)",
    code: "KR",
    isocode: "KRW",
    currency: "South Korean Won",
    currency_smallest_value: "Jeon",
  },
  {
    name: "Kuwait",
    code: "KW",
    isocode: "KWD",
    currency: "Kuwaiti Dinar",
    currency_smallest_value: "Fils",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    isocode: "KGS",
    currency: "Kyrgyzstani Som",
    currency_smallest_value: "Tyiyn",
  },
  {
    name: "Lao People's Democratic Republic",
    code: "LA",
    isocode: "LAK",
    currency: "Lao Kip",
    currency_smallest_value: "Att",
  },
  {
    name: "Latvia",
    code: "LV",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Lebanon",
    code: "LB",
    isocode: "LBP",
    currency: "Lebanese Pound",
    currency_smallest_value: "Piastre",
  },
  {
    name: "Lesotho",
    code: "LS",
    isocode: "LSL",
    currency: "Lesotho Loti",
    currency_smallest_value: "Sente",
  },
  {
    name: "Liberia",
    code: "LR",
    isocode: "LRD",
    currency: "Liberian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Libya",
    code: "LY",
    isocode: "LYD",
    currency: "Libyan Dinar",
    currency_smallest_value: "Dirham",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    isocode: "CHF",
    currency: "Swiss Franc",
    currency_smallest_value: "Rappen",
  },
  {
    name: "Lithuania",
    code: "LT",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Luxembourg",
    code: "LU",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Macao",
    code: "MO",
    isocode: "MOP",
    currency: "Macanese Pataca",
    currency_smallest_value: "Avo",
  },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    code: "MK",
    isocode: "MKD",
    currency: "Macedonian Denar",
    currency_smallest_value: "Deni",
  },
  {
    name: "Madagascar",
    code: "MG",
    isocode: "MGA",
    currency: "Malagasy Ariary",
    currency_smallest_value: "Iraimbilanja",
  },
  {
    name: "Malawi",
    code: "MW",
    isocode: "MWK",
    currency: "Malawian Kwacha",
    currency_smallest_value: "Tambala",
  },
  {
    name: "Malaysia",
    code: "MY",
    isocode: "MYR",
    currency: "Malaysian Ringgit",
    currency_smallest_value: "Sen",
  },
  {
    name: "Maldives",
    code: "MV",
    isocode: "MVR",
    currency: "Maldivian Rufiyaa",
    currency_smallest_value: "Laari",
  },
  {
    name: "Mali",
    code: "ML",
    isocode: "XOF",
    currency: "West African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Malta",
    code: "MT",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Martinique",
    code: "MQ",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Mauritania",
    code: "MR",
    isocode: "MRU",
    currency: "Mauritanian Ouguiya",
    currency_smallest_value: "Khoums",
  },
  {
    name: "Mauritius",
    code: "MU",
    isocode: "MUR",
    currency: "Mauritian Rupee",
    currency_smallest_value: "Cent",
  },
  {
    name: "Mayotte",
    code: "YT",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Mexico",
    code: "MX",
    isocode: "MXN",
    currency: "Mexican Peso",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Micronesia (Federated States of)",
    code: "FM",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Moldova (Republic of)",
    code: "MD",
    isocode: "MDL",
    currency: "Moldovan Leu",
    currency_smallest_value: "Ban",
  },
  {
    name: "Monaco",
    code: "MC",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Mongolia",
    code: "MN",
    isocode: "MNT",
    currency: "Mongolian Tögrög",
    currency_smallest_value: "Möngö",
  },
  {
    name: "Montenegro",
    code: "ME",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Montserrat",
    code: "MS",
    isocode: "XCD",
    currency: "East Caribbean Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Morocco",
    code: "MA",
    isocode: "MAD",
    currency: "Moroccan Dirham",
    currency_smallest_value: "Santim",
  },
  {
    name: "Mozambique",
    code: "MZ",
    isocode: "MZN",
    currency: "Mozambican Metical",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Myanmar",
    code: "MM",
    isocode: "MMK",
    currency: "Burmese Kyat",
    currency_smallest_value: "Pya",
  },
  {
    name: "Namibia",
    code: "NA",
    isocode: "NAD",
    currency: "Namibian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Nauru",
    code: "NR",
    isocode: "AUD",
    currency: "Australian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Nepal",
    code: "NP",
    isocode: "NPR",
    currency: "Nepalese Rupee",
    currency_smallest_value: "Paisa",
  },
  {
    name: "Netherlands",
    code: "NL",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "New Caledonia",
    code: "NC",
    isocode: "XPF",
    currency: "CFP Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "New Zealand",
    code: "NZ",
    isocode: "NZD",
    currency: "New Zealand Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Nicaragua",
    code: "NI",
    isocode: "NIO",
    currency: "Nicaraguan Córdoba",
    currency_smallest_value: "Centavo",
  },
  {
    name: "Niger",
    code: "NE",
    isocode: "XOF",
    currency: "West African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Nigeria",
    code: "NG",
    isocode: "NGN",
    currency: "Nigerian Naira",
    currency_smallest_value: "Kobo",
  },
  {
    name: "Niue",
    code: "NU",
    isocode: "NZD",
    currency: "New Zealand Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    isocode: "AUD",
    currency: "Australian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Norway",
    code: "NO",
    isocode: "NOK",
    currency: "Norwegian Krone",
    currency_smallest_value: "Øre",
  },
  {
    name: "Oman",
    code: "OM",
    isocode: "OMR",
    currency: "Omani Rial",
    currency_smallest_value: "Baisa",
  },
  {
    name: "Pakistan",
    code: "PK",
    isocode: "PKR",
    currency: "Pakistani Rupee",
    currency_smallest_value: "Paisa",
  },
  {
    name: "Palau",
    code: "PW",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Palestine, State of",
    code: "PS",
    isocode: "ILS",
    currency: "Israeli New Shekel",
    currency_smallest_value: "Agora",
  },
  {
    name: "Panama",
    code: "PA",
    isocode: "PAB",
    currency: "Panamanian Balboa",
    currency_smallest_value: "Centésimo",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    isocode: "PGK",
    currency: "Papua New Guinean Kina",
    currency_smallest_value: "Toea",
  },
  {
    name: "Paraguay",
    code: "PY",
    isocode: "PYG",
    currency: "Paraguayan Guarani",
    currency_smallest_value: "Céntimo",
  },
  {
    name: "Peru",
    code: "PE",
    isocode: "PEN",
    currency: "Peruvian Nuevo Sol",
    currency_smallest_value: "Céntimo",
  },
  {
    name: "Philippines",
    code: "PH",
    isocode: "PHP",
    currency: "Philippine Peso",
    currency_smallest_value: "Sentimo",
  },
  {
    name: "Pitcairn",
    code: "PN",
    isocode: "NZD",
    currency: "New Zealand Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Poland",
    code: "PL",
    isocode: "PLN",
    currency: "Polish Złoty",
    currency_smallest_value: "Grosz",
  },
  {
    name: "Portugal",
    code: "PT",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Qatar",
    code: "QA",
    isocode: "QAR",
    currency: "Qatari Riyal",
    currency_smallest_value: "Dirham",
  },
  {
    name: "Republic of Kosovo",
    code: "XK",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Réunion",
    code: "RE",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Romania",
    code: "RO",
    isocode: "RON",
    currency: "Romanian Leu",
    currency_smallest_value: "Ban",
  },
  {
    name: "Russian Federation",
    code: "RU",
    isocode: "RUB",
    currency: "Russian Ruble",
    currency_smallest_value: "Kopek",
  },
  {
    name: "Rwanda",
    code: "RW",
    isocode: "RWF",
    currency: "Rwandan Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Saint Barthélemy",
    code: "BL",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    code: "SH",
    isocode: "SHP",
    currency: "Saint Helena Pound",
    currency_smallest_value: "Penny",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    isocode: "XCD",
    currency: "East Caribbean Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Saint Lucia",
    code: "LC",
    isocode: "XCD",
    currency: "East Caribbean Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Saint Martin (French part)",
    code: "MF",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    isocode: "XCD",
    currency: "East Caribbean Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Samoa",
    code: "WS",
    isocode: "WST",
    currency: "Samoan Tala",
    currency_smallest_value: "Sene",
  },
  {
    name: "San Marino",
    code: "SM",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    isocode: "STN",
    currency: "São Tomé and Príncipe Dobra",
    currency_smallest_value: "Cêntimo",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    isocode: "SAR",
    currency: "Saudi Riyal",
    currency_smallest_value: "Halala",
  },
  {
    name: "Senegal",
    code: "SN",
    isocode: "XOF",
    currency: "West African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Serbia",
    code: "RS",
    isocode: "RSD",
    currency: "Serbian Dinar",
    currency_smallest_value: "Para",
  },
  {
    name: "Seychelles",
    code: "SC",
    isocode: "SCR",
    currency: "Seychellois Rupee",
    currency_smallest_value: "Cent",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    isocode: "SLL",
    currency: "Sierra Leonean Leone",
    currency_smallest_value: "Cent",
  },
  {
    name: "Singapore",
    code: "SG",
    isocode: "SGD",
    currency: "Singapore Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Sint Maarten (Dutch part)",
    code: "SX",
    isocode: "ANG",
    currency: "Netherlands Antillean Guilder",
    currency_smallest_value: "Cent",
  },
  {
    name: "Slovakia",
    code: "SK",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Slovenia",
    code: "SI",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    isocode: "SBD",
    currency: "Solomon Islands Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Somalia",
    code: "SO",
    isocode: "SOS",
    currency: "Somali Shilling",
    currency_smallest_value: "Cent",
  },
  {
    name: "South Africa",
    code: "ZA",
    isocode: "ZAR",
    currency: "South African Rand",
    currency_smallest_value: "Cent",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS",
    isocode: "GBP",
    currency: "British Pound Sterling",
    currency_smallest_value: "Penny",
  },
  {
    name: "South Sudan",
    code: "SS",
    isocode: "SSP",
    currency: "South Sudanese Pound",
    currency_smallest_value: "Piaster",
  },
  {
    name: "Spain",
    code: "ES",
    isocode: "EUR",
    currency: "Euro",
    currency_smallest_value: "Cent",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    isocode: "LKR",
    currency: "Sri Lankan Rupee",
    currency_smallest_value: "Cent",
  },
  {
    name: "Sudan",
    code: "SD",
    isocode: "SDG",
    currency: "Sudanese Pound",
    currency_smallest_value: "Piastre",
  },
  {
    name: "Suriname",
    code: "SR",
    isocode: "SRD",
    currency: "Surinamese Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ",
    isocode: "NOK",
    currency: "Norwegian Krone",
    currency_smallest_value: "Øre",
  },
  {
    name: "Sweden",
    code: "SE",
    isocode: "SEK",
    currency: "Swedish Krona",
    currency_smallest_value: "Öre",
  },
  {
    name: "Switzerland",
    code: "CH",
    isocode: "CHF",
    currency: "Swiss Franc",
    currency_smallest_value: "Rappen",
  },
  {
    name: "Syrian Arab Republic",
    code: "SY",
    isocode: "SYP",
    currency: "Syrian Pound",
    currency_smallest_value: "Piastre",
  },
  {
    name: "Taiwan",
    code: "TW",
    isocode: "TWD",
    currency: "New Taiwan Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    isocode: "TJS",
    currency: "Tajikistani Somoni",
    currency_smallest_value: "Diram",
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
    isocode: "TZS",
    currency: "Tanzanian Shilling",
    currency_smallest_value: "Cent",
  },
  {
    name: "Thailand",
    code: "TH",
    isocode: "THB",
    currency: "Thai Baht",
    currency_smallest_value: "Satang",
  },
  {
    name: "Timor-Leste",
    code: "TL",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Togo",
    code: "TG",
    isocode: "XOF",
    currency: "West African CFA Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Tokelau",
    code: "TK",
    isocode: "NZD",
    currency: "New Zealand Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Tonga",
    code: "TO",
    isocode: "TOP",
    currency: "Tongan Paʻanga",
    currency_smallest_value: "Seniti",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    isocode: "TTD",
    currency: "Trinidad and Tobago Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Tunisia",
    code: "TN",
    isocode: "TND",
    currency: "Tunisian Dinar",
    currency_smallest_value: "Millime",
  },
  {
    name: "Turkey",
    code: "TR",
    isocode: "TRY",
    currency: "Turkish Lira",
    currency_smallest_value: "Kuruş",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    isocode: "TMT",
    currency: "Turkmenistan Manat",
    currency_smallest_value: "Tennesi",
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Tuvalu",
    code: "TV",
    isocode: "AUD",
    currency: "Australian Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Uganda",
    code: "UG",
    isocode: "UGX",
    currency: "Ugandan Shilling",
    currency_smallest_value: "Cent",
  },
  {
    name: "Ukraine",
    code: "UA",
    isocode: "UAH",
    currency: "Ukrainian Hryvnia",
    currency_smallest_value: "Kopiyka",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    isocode: "AED",
    currency: "United Arab Emirates Dirham",
    currency_smallest_value: "Fils",
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    code: "GB",
    isocode: "GBP",
    currency: "British Pound Sterling",
    currency_smallest_value: "Penny",
  },
  {
    name: "United States of America",
    code: "US",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Uruguay",
    code: "UY",
    isocode: "UYU",
    currency: "Uruguayan Peso",
    currency_smallest_value: "Centésimo",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    isocode: "UZS",
    currency: "Uzbekistani Som",
    currency_smallest_value: "Tiyin",
  },
  {
    name: "Vanuatu",
    code: "VU",
    isocode: "VUV",
    currency: "Vanuatu Vatu",
    currency_smallest_value: "None",
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    code: "VE",
    isocode: "VES",
    currency: "Venezuelan Bolívar",
    currency_smallest_value: "Céntimo",
  },
  {
    name: "Viet Nam",
    code: "VN",
    isocode: "VND",
    currency: "Vietnamese Đồng",
    currency_smallest_value: "Hào",
  },
  {
    name: "Virgin Islands (British)",
    code: "VG",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Virgin Islands (U.S.)",
    code: "VI",
    isocode: "USD",
    currency: "United States Dollar",
    currency_smallest_value: "Cent",
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    isocode: "XPF",
    currency: "CFP Franc",
    currency_smallest_value: "Centime",
  },
  {
    name: "Western Sahara",
    code: "EH",
    isocode: "MAD",
    currency: "Moroccan Dirham",
    currency_smallest_value: "Santim",
  },
  {
    name: "Yemen",
    code: "YE",
    isocode: "YER",
    currency: "Yemeni Rial",
    currency_smallest_value: "Fils",
  },
  {
    name: "Zambia",
    code: "ZM",
    isocode: "ZMW",
    currency: "Zambian Kwacha",
    currency_smallest_value: "Ngwee",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    isocode: "ZWL",
    currency: "Zimbabwean Dollar",
    currency_smallest_value: "Cent",
  },
];

export async function currencyInWords(amount = 0, currency ="INR", fallBackCurrency = "INR") {
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


