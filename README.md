# mulk
Get data of all the countries

# Usage

## Installation
`npm i mulk`

## In Node.js
`const mulk = require('mulk');`
or `import mulk from 'mulk';`

## Get all the list of countries with data
`mulk();`

## Get single country
`mulk('pakistan');`
or `mulk('pk');`
or `mulk('pak');`

#### Output
```
{
  Capital: 'Islamabad',
  Continent: 'AS',
  Country_Name: 'Pakistan',
  DS: 'PK',
  Dial: '92',
  EDGAR: 'R0',
  FIFA: 'PAK',
  FIPS: 'PK',
  GAUL: '188',
  Geo_Name_ID: '1168579',
  IOC: 'PAK',
  ISO3166_1_Alpha_2: 'PK',
  ISO3166_1_Alpha_3: 'PAK',
  ISO4217_Currency_Alphabetic_Code: 'PKR',
  ISO4217_Currency_Country_Name: 'PAKISTAN',
  ISO4217_Currency_Minor_Unit: 2,
  ISO4217_Currency_Name: 'Pakistan Rupee',
  ISO4217_Currency_Numeric_Code: 586,
  ITU: 'PAK',
  Is_Independent: 'Yes',
  Languages: 'ur-PK,en-PK,pa,sd,ps,brh',
  M49: 586,
  MARC: 'pk',
  Official_Name_English: 'Pakistan',
  TLD: '.pk',
  WMO: 'PK'
}
```

## Get country's specific data
`mulk('pakistan', 'Capital');`
or `mulk('pakistan', 'Continent');`
