const dataJson = require('./data.json');

function findCountry(data, name) {
  const alpha2 = (name || '').length === 2;
  const alpha3 = (name || '').length === 3;

  return data.find(data => {
    const dataAlpha2 = (data['ISO3166_1_Alpha_2'] || '').toLowerCase();
    const dataAlpha3 = (data['ISO3166_1_Alpha_3'] || '').toLowerCase();
    const countryName = (data['Country_Name'] || '').toLowerCase();

    if ((alpha2 && dataAlpha2 === name)
      || (alpha3 && dataAlpha3 === name)
      || (countryName === name)
    ) {
      return true;
    }
  })
}

function mulk(name, format) {
  const nameToLowerCase = (name || '').toLowerCase();

  if (format) {
    return findCountry(dataJson, nameToLowerCase)[`${format}`];
  }

  if (nameToLowerCase) {
    return findCountry(dataJson, nameToLowerCase);
  }

  return dataJson;
}

module.exports = mulk;
