import React, { useState, useEffect } from "react";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  const [name, setName] = useState('');

  const handleInputChange = (e) =>{
    setName(e.target.value);
  }

  useEffect(()=>{
    // console.log(name);
    onSearch(name);
  },[name]);


  return (
    <section className="search-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleInputChange}
          placeholder="Search"
          value={name}
          name="name"
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </section>
  );
}
