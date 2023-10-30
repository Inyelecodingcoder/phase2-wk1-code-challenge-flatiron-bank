import React from 'react'
import { useEffect, useState } from 'react';



function Searchbar () {
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then(res => res.json())
        .then(transactions => {
          setSearchInput(transactions)})
      },[])

      const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
    //   if (searchInput.length > 0) {
    //       transactions.filter((description) => {
    //       return description.name.match(searchInput);
     // });
     // }
    return (
        <>

 

        <input type='text' placeholder="Search" onChange={handleChange} />
        </>
    )
}
export default Searchbar