import React from 'react';

function Search(props) {
    return (
        <form>
            <div style = {{display:"flex"}}>
                <label>
                    Search
                </label>
                <input
                onChange={props.handleInputChange}
                value={props.value}
                name="Search"
                type="text"
                placeholder="Search Employees"
                id="Search"
                />
                <button onClick={props.handleFormSubmit} className = "btn btn-primary">
                    Search
                </button>
                <button onClick={props.refresh} className = "btn btn-primary">
                    Reset
                </button>

            </div>
        </form>
    );
}

export default Search;