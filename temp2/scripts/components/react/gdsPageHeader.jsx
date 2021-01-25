import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const PageHeader = (props) => {

    return (
        <div>
            <header className="gds-page-header">
                { /* LEFT SECTION */ }
                <div className="gds-page-header__product-bar">
                    <h6 className="gds-page-header__product-name gds-page-header__product-name--expanded">{ props.appName }</h6>
                    <img className="gds-page-header__logo gds-page-header__logo--expanded" src="https://assets.ggops.com/images/svg/logo-white.svg" />
                </div>
                <div className="gds-page-header__nav-bar">
                    <div className="gds-page-header__primary-nav" onClick={ props.toggleSlideNav }>
                        <button className="gds-page-header__menu">
                            <span className="gds-page-header__menu-line" />
                            <span className="gds-page-header__menu-line" />
                            <span className="gds-page-header__menu-line" />
                            <span className="gds-page-header__menu-line" />
                        </button>
                        <h4 className="gds-page-header__page-name">{ props.currentPageName }</h4>
                    </div>
                    { /* RIGHT SECTION */ }
                    <div className="gds-page-header__secondary-nav">
                        <div className={ props.avatarMenuState ? 'gds-avatar gds-avatar--menu-open' : 'gds-avatar' } onClick={ props.toggleAvatarMenu }>
                            <div className="gds-avatar__image">
                                <img src={ props.currentUserImage } height="100%" alt={ props.currentUserName }/>
                            </div>
                            <div className="gds-avatar__menu">
                                <ul className="gds-avatar__menu-list">
                                    <li className="gds-avatar__menu-list-item -color-tx-lt-5 -ellipsis -p-h-3 -p-v-2">{ props.currentUserName }</li>
                                    <li className="gds-avatar__menu-list-divider" />
                                    { props.avatarMenuData.map((o) => (
                                        <li key={ Math.random() } className="gds-avatar__menu-list-item -ellipsis"><Link to={ o.path } className="gds-avatar__menu-list-link" href="#">{ o.name }</Link></li>
                                    )) }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="-clear-both" />
                </div>
            </header>
        </div>
    );
};

PageHeader.propTypes = {
    appName: PropTypes.string,
    currentPageName: PropTypes.string,
    currentUserName: PropTypes.string,
    currentUserImage: PropTypes.string,
    avatarMenuData: PropTypes.array,
    avatarMenuState: PropTypes.bool,
    toggleAvatarMenu: PropTypes.func.isRequired,
    toggleSlideNav: PropTypes.func.isRequired
};


export default PageHeader;
