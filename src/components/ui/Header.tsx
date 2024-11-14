import React from "react";
import { useLayout } from "../../hooks/useLayout";
import { useMovies } from "../../hooks/useMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { title, showFavourites, showSearch } = useLayout();
  const { favourites, setSearchText } = useMovies();

  return (
    <header>
      <div className="container">
        <div />
        {title && !showSearch ? (
          <div>
            <h1>{title}</h1>
          </div>
        ) : (
          <div className="search-wrapper">
            <input
              type="text"
              name="searchBox"
              id="searchBox"
              placeholder="What do you want to watch?"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        )}
        <div className="favourites-wrapper">
          {showFavourites && (
            <>
              <span>Favoriler:</span> {favourites.length}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
