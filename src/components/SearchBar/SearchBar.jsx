import { Checkbox } from 'semantic-ui-react';
import './SearchBar.css';


const SearchBar = (props) => {
     
    return (
        <div className="flex">
        {/* <form ref={formRef} onSubmit={handleSubmit}> */}
        <form>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            name="text"
            id="search"
            onChange={props.setSearch}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-7 px-2"
          />
          {/* <Checkbox>My Snips</Checkbox> */}
        </form>
        </div>
    )
}

export default SearchBar;