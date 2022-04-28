# Monogo-JavaScript-Challenge

Small challenge designed by [Monogo](https://www.monogo.pl/) for the purpose of the competition conducted during [dev.js summit 2022](https://devjssummit.pl/)

## Installation

```bash
npm i
```

## Usage

```bash
node index.js
```

## Testing

Project uses Jest, to run it use:

```bash
npm run test
```

## Rules

The competition task is to write a JS script that will find a specific number based on the input data provided in the text file and the company data available on the Monogo website.

First, you need to load data from the input.txt file (this file can be found at https://www.monogo.pl/competition/input.txt) using JS (do not copy the contents of this file!).

You will get an object with 4 properties: selectedFilters, products, colors and sizes.

You have to group the products according to their color and size options using the ID field (pay attention to the data types!). One product can only have one size and color option (there are no duplicate products and their options).

Then filter the grouped products to match the selected filters and get only those products whose price is higher than 200 (x> 200).

Then get the value by multiplying the lowest and highest prices in the filtered product list. Format the result to be an integer (rounded, no fraction).

Then you need to create an array from the number you got earlier by adding every second digit of that number to the previous one (eg 123456 -> [1 + 2, 3 + 4, 5 + 6] -> [3, 7, 11].

The result will be the result of multiplying the index of the number of the Monogo office building in Lublin in the table from point 5, the value you got in point 4, and the length of the company name "Monogo".

Please put the solution on your GitHub or GitLab repository and send us the link. The script should be executable with node.js, and the result should be presented in the console with console.log ().
