import Select from "react-select";
import countries from "world-countries";

const countryOption = countries
  .map((country) => ({
    value: country.cca2,
    label: country.name.common,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

export default function CountrySelect({ value, onChange }) {
  return (
    <div className="input-container">
      <label>Country</label>
      <Select
        options={countryOption}
        value={countryOption.find((option) => option.value === value) || null}
        onChange={(selected) => onChange(selected ? selected.value : "")}
        placeholder="Select your country"
        isSearchable
        className="country-select"
      />
    </div>
  );
}
