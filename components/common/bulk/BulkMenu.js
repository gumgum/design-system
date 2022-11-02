import { useState } from 'react';

export default function BulkMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="gds-flex">
            <div className="gds-flex__item gds-button-group gds-button-group--xs -m-r-2">
                <button
                    className="gds-button-group__button gds-button--outline gds-button--xs -pointer-events--none"
                    style={{ width: '50px' }}
                    type="button">
                    <div className="gds-form-group">
                        <div className="gds-form-group__checkbox gds-form-group__checkbox--xs">
                            <label className="gds-form-group__checkbox-label -m-l-2">
                                <input
                                    type="checkbox"
                                    className="gds-form-group__checkbox-input -pointer-events--auto"
                                    name="In-Screen"
                                    value="on"
                                />
                                <span className="gds-form-group__checkbox-indicator" />
                            </label>
                        </div>
                    </div>
                </button>
                <button
                    className="gds-button-group__button gds-button--default gds-button--xs -color-bg-white -pointer-events--none"
                    style={{ minWidth: '70px' }}
                    type="button">
                    0 selected
                </button>
                <div
                    className={`gds-button-dropdown gds-button-dropdown--sm gds-button-dropdown--in-group ${
                        menuOpen ? 'gds-button-dropdown--active' : ''
                    }`}>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="gds-button-dropdown__button gds-button--primary gds-button--xs"
                        type="button"
                        style={{ width: '75px' }}>
                        Action
                    </button>
                    <ul
                        className="gds-button-dropdown__menu -color-bg-white"
                        style={{ width: '200px' }}>
                        <li className="gds-button-dropdown__menu-item gds-text--body-xs">
                            <div
                                className="gds-button-dropdown__menu-link -color-tx-dk-5"
                                onClick={() => setMenuOpen(!menuOpen)}
                                style={{ fontSize: '.7rem' }}>
                                Bulk Action Item
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
