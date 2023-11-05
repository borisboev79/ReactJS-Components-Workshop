const SearchBar = () => {
    return(
        <form className="search-form">
        <h2>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          <span>Users</span>
        </h2>
        <div className="search-input-container">
          <input type="text" placeholder="Please, select the search criteria" name="search" />

          {/* <!-- Show the clear button only if input field length !== 0 --> */}

          <button className="btn close-btn">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
          </button>

          <button className="btn" title="Please, select the search criteria">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
          </button>
        </div>

        <div className="filter">
          <span>Search Criteria:</span>
          <select name="criteria" className="criteria">
            <option value="">Not selected</option>
            <option value="">First Name</option>
            <option value="">Last Name</option>
            <option value="">Email</option>
            <option value="">Phone</option>
          </select>
        </div>
      </form>
    );
};

export default SearchBar;