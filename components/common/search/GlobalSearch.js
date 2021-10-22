import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "../../../context/state";

export default function GlobalSearch() {
  const [inputValue, setInputValue] = useState("Summ");
  const { globalSearch, setGlobalSearch } = useAppContext();

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setGlobalSearch(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return (
    <div className={`gds-search ${globalSearch ? "gds-search--shown" : null}`}>
      <button
        className="gds-button--close-x"
        onClick={() => setGlobalSearch(!globalSearch)}
      ></button>
      <div className="gds-search__input-holder">
        <div className="gds-form-group gds-search__form-group">
          <div className="gds-form-group__input-group">
            <input
              className="gds-form-group__text-input -bor-rad-b-0"
              type="text"
              placeholder="Search..."
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </div>
        </div>

        <ul className="gds-search__typeahead">
          <ul className="gds-search__filter-items">
            <li
              className="gds-search__typeahead-item"
              // onClick={() => addFilter("Advertiser")}
            >
              <div className="gds-search__result-icon">
                <i className="fas fa-fw fa-user"></i>
              </div>
              <div className="gds-search__result-name">
                Summer Hot Show Q1 2021
              </div>
              <div className="gds-search__result-type">
                <span className="gds-badge">Advertiser</span>
              </div>
            </li>
            <li className="gds-search__typeahead-item">
              <div className="gds-search__result-icon">
                <i className="fas fa-fw fa-user"></i>
              </div>
              <div className="gds-search__result-name">2023 Summer Jam</div>
              <div className="gds-search__result-type">
                <span className="gds-badge">Advertiser</span>
              </div>
            </li>
            <li className="gds-search__typeahead-item">
              <div className="gds-search__result-icon">
                <i className="fas fa-fw fa-users"></i>
              </div>
              <div className="gds-search__result-name">72 &amp; Summer</div>
              <div className="gds-search__result-type">
                <span className="gds-badge">Agency</span>
              </div>
            </li>
            <li className="gds-search__typeahead-item">
              <div className="gds-search__result-icon">
                <i className="fas fa-fw fa-tag"></i>
              </div>
              <div className="gds-search__result-name">Summer 2021</div>
              <div className="gds-search__result-type">
                <span className="gds-badge">Tag</span>
              </div>
            </li>
            <li className="gds-search__typeahead-item">
              <div className="gds-search__result-icon">
                <i className="fas fa-fw fa-bullhorn"></i>
              </div>
              <div className="gds-search__result-name">Summer</div>
              <div className="gds-search__result-type">
                <span className="gds-badge">Campaign Type</span>
              </div>
            </li>
            <li className="gds-search__typeahead-item">
              <div className="gds-search__result-icon">
                <i className="fas fa-fw fa-ad"></i>
              </div>
              <div className="gds-search__result-name">Summer</div>
              <div className="gds-search__result-type">
                <span className="gds-badge">Unit Type</span>
              </div>
            </li>
            <li className="gds-search__typeahead-item">
              <div className="gds-search__result-icon">
                <i className="fas fa-fw fa-industry"></i>
              </div>
              <div className="gds-search__result-name">Summer</div>
              <div className="gds-search__result-type">
                <span className="gds-badge">Industry</span>
              </div>
            </li>
            <li className="gds-search__typeahead-item">
              <div className="gds-search__result-icon">
                <i className="fas fa-fw fa-briefcase"></i>
              </div>
              <div className="gds-search__result-name">Summer</div>
              <div className="gds-search__result-type">
                <span className="gds-badge">Business Unit</span>
              </div>
            </li>
          </ul>
          <li className="gds-search__typeahead-item gds-search__typeahead-item--filter">
            <div className="gds-search__result-icon">
              <i className="fas fa-fw fa-search"></i>
            </div>
            <div className="gds-search__result-name">Summer</div>
            <div className="gds-search__result-type">
              <span className="gds-badge gds-badge--dark -color-bg-dk-5">
                enter ⏎
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
