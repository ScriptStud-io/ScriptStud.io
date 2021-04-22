import { Checkbox } from 'semantic-ui-react';
import './SearchBar.css';
import React, { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm'



const SearchBar = (props) => {
    const [search, setSearch] = useForm()

    console.log(search)

    return (
        <div className="flex">
        <form>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={setSearch}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-7 px-2"
          />
          {/* <Checkbox>My Snips</Checkbox> */}
        </form>
        </div>
    )
}

export default SearchBar;