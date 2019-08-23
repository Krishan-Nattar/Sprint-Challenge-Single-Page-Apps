import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  const [name, setName] = useState('');

  const handleInputChange = (e) =>{
    // console.log(e.target.value);
    setName(e.target.value);
  }


  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="Search"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
