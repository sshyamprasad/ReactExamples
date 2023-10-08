import logo from "./logo.svg";
import "./App.css";
import Asnc from "./Asnc";
import useFetch from "./useFetch";
import { countryListQuery, countryQuery } from "./queries";
import { useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState();
  const { data: countryList } = useFetch(countryListQuery);
  const { data: country } = useFetch(countryQuery(selectedCountry));
  return (
    <div>
      {/* <Asnc /> */}
      <div>
        <select
          id="myList"
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
        >
          <option>Select</option>
          {countryList?.countries.map((c) => {
            return <option key={c.code}>{c.code}</option>;
          })}
        </select>
        {country?.country?.name && (
          <ul>
            <li>Country Name: {country?.country?.name}</li>
            <li>Country Name: {country?.country?.native}</li>
            <li>Country Capital: {country?.country?.capital}</li>
            <li>Country Name: {country?.country?.currency}</li>
            <li>Country Phone: {country?.country?.phone}</li>
            <li>
              Country States:{" "}
              <ol>
                {country?.country?.states?.map((state) => (
                  <li key={state.code}>{state.name}</li>
                ))}
              </ol>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
