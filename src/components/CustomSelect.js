import React, { useState } from "react";


// To build the option tags, you looped through the data set via props to construct it before rendering it as part of the select tag.
// The state of the tag (the currently selected option) is stored locally and updated and sent back as an output when it changes via the local function handleChange()
function CustomSelect(props) {
  const [data] = useState(props.data);
  const [selectedData, updateSelectedData] = useState("");

  function handleChange(event) {
    updateSelectedData(event.target.value);
    if (props.onSelectChange) props.onSelectChange(selectedData);
  }

  let options = data.map(data => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <select
      name="customSearch"
      className="custom-search-select"
      onChange={handleChange}
    >
      <option>Select Item</option>
      {options}
    </select>
  );
}

export default CustomSelect;
