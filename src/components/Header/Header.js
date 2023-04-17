import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [searchText, setSearchText] = useState("");
  const [searchTextOnFocus, setSearchTextOnFocus] = useState(false);

  const writeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const resetSearchText = (e) => {
    setSearchText("");
  };
  const toggleSearchTextOnFocus = (e) => {
    setSearchTextOnFocus(!searchTextOnFocus);
  };

  return (
    <>
      <header>
        <div className="header">
          <Link to="/">
            <div>
              <img src="/images/logo.svg" />
            </div>
          </Link>
          <div className="search-area">
            <input
              type="text"
              placeholder="축제 검색"
              value={searchText}
              onChange={writeSearchText}
              onFocus={toggleSearchTextOnFocus}
              onBlur={toggleSearchTextOnFocus}
            />
            <button
              className={
                "search-delete " +
                (searchText.length > 0 && searchTextOnFocus
                  ? "search-delete-show"
                  : "search-delete-no")
              }
              onClick={resetSearchText}
            />
          </div>
          <div className="header-right">
            <p>무언가</p>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
