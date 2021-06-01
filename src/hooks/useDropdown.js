import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
    const [state, updateState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
    const Dropdown = () => (
        <select value={state} onChange={e => updateState(e.target.value)} onBlur={e => updateState(e.target.value)}>
            <option value='false'>No</option>
            <option value='true'>No</option>
        </select>
    )
}