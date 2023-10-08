const countryListQuery = `query ExampleQuery {
  countries {
    code
  }
}`;
const countryQuery = (selectedCountry) => {
  return `query Query {
    country(code: "${selectedCountry}") {
      name
      native
      capital
      currency
      phone
      states {
        code
        name
      }
    }
  }`;
};

export { countryListQuery, countryQuery };
