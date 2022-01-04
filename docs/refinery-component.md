---
id: refinery-component
title: Refinery
sidebar_label: Refinery
section: organisms
---

The refinery component is intended to house controls to filter content. The contents of this component can be customized based on the developer's requirements. Breakpoints for the housing are predefined, but internal inputs should be wrapped by columns to ensure they fill the space properly across all sizes. It can persist between sections of a single page app or be exclusive to a single page of a multi-page app.

<p style="margin-bottom: 0.8em">
    <a href="https://ds.gumgum.com/stable/index.html#gds-refinery" target="_blank">Prototypes Page</a>
</p>

```html
<div className="gds-refinery" data-gds-refinery>
  <div className="gds-refinery__container">
    <div className="gds-refinery__menu">
      <h1 className="gds-text--header-xs -m-t-1 -float-left -color-tx-dk-5">
        Global Filters
      </h1>
      <div
        className="gds-form-group -m-t-1 -float-right"
        data-gds-form-group="0"
      >
        <div className="gds-form-group__toggleswitch">
          <span className="gds-form-group__label">Disable All</span>
          <label className="gds-form-group__toggleswitch-label">
            <input
              className="gds-form-group__toggleswitch-input"
              type="checkbox"
              value=""
              data-gds-toggle-filters
            />
            <span className="gds-form-group__toggleswitch-indicator"></span>
          </label>
        </div>
      </div>
      <div className="gds-divider -m-b-0">
        <span className="gds-divider__line"></span>
      </div>
      <div className="gds-layout__row">
        <div
          className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1"
        >
          <div className="gds-form-group">
            <label className="gds-form-group__label">Brands</label>
            <div
              className="gds-search-select"
              data-gds-search-select="multi"
              data-gds-search-select-size="sm"
            >
              <div
                className="gds-search-select__control"
                data-gds-search-select-control=""
              >
                <input
                  id="searcchselect-input-0"
                  type="text"
                  placeholder="Choose a State..."
                  className="gds-search-select__input gds-search-select__input--sm"
                  data-gds-search-select-input=""
                  autocomplete="off"
                />
                <button
                  className="gds-search-select__toggle-button"
                  data-gds-search-select-toggle=""
                ></button>
              </div>
              <div
                className="gds-search-select__tag-holder gds-search-select__tag-holder--bubble gds-search-select__tag-holder--bubble-sm"
                data-gds-search-select-tag-holder=""
              ></div>
              <div
                className="gds-search-select__menu"
                data-gds-search-select-menu=""
              >
                <ul
                  className="gds-search-select__menu-items"
                  data-gds-search-select-list=""
                >
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="0"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Alaska
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="1"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Arizona
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="2"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Arkansas
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="3"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >California
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="4"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Connecticut
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="5"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Deleware
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="6"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >DC
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="7"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Florida
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="8"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Georgia
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="9"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Hawaii
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="10"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Idaho
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="11"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Illinois
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="12"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Indiana
                  </li>
                  <li
                    className="gds-search-select__menu-item"
                    data-gds-search-select-item="13"
                  >
                    <label className="gds-search-select__checkbox">
                      <input
                        className="gds-search-select__checkbox-input"
                        type="checkbox"
                        value=""
                      />
                      <span
                        className="gds-search-select__checkbox-indicator"
                      ></span> </label
                    >Iowa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1"
        >
          <div className="gds-form-group">
            <label className="gds-form-group__label">Account Type</label>
            <div
              className="gds-multi-select gds-multi-select--sm"
              data-gds-dropdown=""
            >
              <div
                className="gds-multi-select__button gds-multi-select__button--sm"
                data-gds-dropdown-button=""
              >
                Multi-select
              </div>
              <ul className="gds-multi-select__menu">
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Check All
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 1
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 4
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1"
        >
          <div className="gds-form-group">
            <label className="gds-form-group__label">Network</label>
            <div
              className="gds-multi-select gds-multi-select--sm"
              data-gds-dropdown=""
            >
              <div
                className="gds-multi-select__button gds-multi-select__button--sm"
                data-gds-dropdown-button=""
              >
                Multi-select
              </div>
              <ul className="gds-multi-select__menu">
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Check All
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 1
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 4
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-1"
        >
          <div className="gds-form-group">
            <label className="gds-form-group__label">Event</label>
            <div
              className="gds-multi-select gds-multi-select--sm"
              data-gds-dropdown=""
            >
              <div
                className="gds-multi-select__button gds-multi-select__button--sm"
                data-gds-dropdown-button=""
              >
                Multi-select
              </div>
              <ul className="gds-multi-select__menu">
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Check All
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 1
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="gds-multi-select__menu-item">
                  <div className="gds-multi-select__menu-link">
                    <div
                      className="gds-form-group gds-multi-select__option"
                      data-gds-form-group=""
                    >
                      <div className="gds-form-group__checkbox">
                        <label
                          className="gds-form-group__checkbox-label"
                          data-gds-label=""
                        >
                          <input
                            className="gds-form-group__checkbox-input"
                            type="checkbox"
                            value=""
                            data-gds-input=""
                          />
                          <span
                            className="gds-form-group__checkbox-indicator"
                          ></span
                          >Checkbox Option 4
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-2-sm -m-b-2"
        >
          <div className="gds-form-group">
            <label className="gds-form-group__label">Start Date</label>
            <div className="gds-form-group__input-group">
              <input
                className="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge"
                type="text"
                placeholder="12/01/15"
              />
              <button
                className="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"
              >
                <i className="fa fa-calendar"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className="gds-layout__column--xl-4 gds-layout__column--lg-4 gds-layout__column--md-6 -m-b-3-sm -m-b-2"
        >
          <div className="gds-form-group">
            <label className="gds-form-group__label">End Date</label>
            <div className="gds-form-group__input-group">
              <input
                className="gds-form-group__text-input gds-form-group__text-input--sm gds-form-group__text-input--right-edge"
                type="text"
                placeholder="12/01/16"
              />
              <button
                className="gds-button gds-button--primary gds-button--button-cap gds-button--button-cap-sm"
              >
                <i className="fa fa-calendar"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className="gds-divider gds-divider--collapsible -p-h-2 -m-b-2"
          data-gds-divider="10"
        >
          <span className="gds-divider__label gds-form-group__label"
            >Active Filters</span
          >
          <span className="gds-divider__line"></span>
          <span className="gds-divider__arrow" data-gds-arrow=""></span>
        </div>
        <div className="gds-segment -p-h-2" data-gds-segment="10">
          <div
            className="gds-tag gds-tag--green gds-tag--with-button-sm gds-tag--sm gds-button--block-sm"
          >
            <span className="gds-form-group__label -color-tx-white -m-b-0"
              >Location:</span
            >
            Los Angeles<button
              className="gds-tag__button gds-tag__button--sm gds-tag__button--primary"
            ></button>
          </div>
          <div
            className="gds-tag gds-tag--red gds-tag--with-button-sm gds-tag--sm gds-button--block-sm"
          >
            <span className="gds-form-group__label -color-tx-white -m-b-0"
              >Start Date:</span
            >
            12/01/15<button
              className="gds-tag__button gds-tag__button--sm gds-tag__button--primary"
            ></button>
          </div>
          <div
            className="gds-tag gds-tag--red gds-tag--with-button-sm gds-tag--sm gds-button--block-sm"
          >
            <span className="gds-form-group__label -color-tx-white -m-b-0"
              >End Date:</span
            >
            12/01/16<button
              className="gds-tag__button gds-tag__button--sm gds-tag__button--primary"
            ></button>
          </div>
          <div
            className="gds-tag gds-tag--blue gds-tag--with-button-sm gds-tag--sm gds-button--block-sm"
          >
            <span className="gds-form-group__label -color-tx-white -m-b-0"
              >Keyword:</span
            >
            #cocacola<button
              className="gds-tag__button gds-tag__button--sm gds-tag__button--primary"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      data-gds-refinery-tab
      className="gds-refinery__button gds-button gds-button--primary"
    >
      <i className="gds-refinery__open-icon fa fa-angle-double-up -m-r-1"></i>
      <i className="gds-refinery__close-icon fa fa-angle-double-down -m-r-2"></i
      >Filters
      <span className="gds-badge gds-badge--danger-inverse">1</span>
    </button>
  </div>
</div>
```

**Optional classes:**

- `gds-refinery--menu-open`
- `gds-refinery--menu-disabled`
