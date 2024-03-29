import Error from "./Error";
import { isEmpty, map } from "lodash";
import Abbr from "./fomr-elements/Abbr";
import ArrowDown from "./iconCheckOut/ArrowDown";

const CountrySelection = ({ input, handleOnChange, countries, isShipping }) => {
  const { country, errors } = input || {};

  const inputId = `country-${isShipping ? "shipping" : "billing"}`;

  return (
    <div className="mb-3">
      <label className="text-sm leading-7 text-gray-700" htmlFor={inputId}>
        País
        <Abbr required />
      </label>
      <div className="relative w-full border-none">
        <select
          onChange={handleOnChange}
          value={country}
          name="country"
          className="inline-block w-full appearance-none rounded border border-gray-500 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
          id={inputId}
        >
          <option value="">Seleccione un país...</option>
          {!isEmpty(countries) &&
            map(countries, (country) => (
              <option
                key={country?.countryCode}
                data-countrycode={country?.countryCode}
                value={country?.countryCode}
              >
                {country?.countryName}
              </option>
            ))}
        </select>
        <span
          className="absolute right-0 mr-1 text-gray-500"
          style={{ top: "25%" }}
        >
          <ArrowDown width={24} height={24} className="fill-current" />
        </span>
      </div>
      <Error errors={errors} fieldName={"country"} />
    </div>
  );
};

export default CountrySelection;
