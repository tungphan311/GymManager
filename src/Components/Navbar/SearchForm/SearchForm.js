import React from "react";

function SearchForm() {
  return (
    <form className="navbar-left navbar-form nav-search mr-md-3">
      <div className="input-group">
        <div className="input-group-prepend">
          <button type="submit" className="btn btn-search pr-1">
            <i className="fa fa-search search-icon"></i>
          </button>
        </div>
        <input type="text" placeholder="Search ..." className="form-control" />
      </div>
    </form>
  );
}

export default SearchForm;
