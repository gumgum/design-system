import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// Components
import NavOption from './NavOption';

const SlideNav = (props) => {
    return (
        <nav className={ props.slideNavState ? 'gds-slide-nav gds-page-header__menu--open' : 'gds-slide-nav' } >
            <div className="gds-slide-nav__group">
                <label className="gds-slide-nav__label">{ props.menuTitle }</label>
                <ul className="gds-slide-nav__list">
                    { props.slideMenuData.map((o) => (
                        <NavOption
                            key={ o.name }
                            path={ o.path }
                            name={ o.name }
                            toggleSubMenu={ props.toggleSubMenu }
                            toggleSlideNav={ props.toggleSlideNav }
                            subMenuState={ props.subMenuState }
                            options={ o.options }/>
                    )) }
                </ul>
            </div>
        </nav>
    );
};

SlideNav.propTypes = {
    menuTitle: PropTypes.string,
    slideNavState: PropTypes.bool,
    subMenuState: PropTypes.string,
    slideMenuData: PropTypes.array,
    toggleSubMenu: PropTypes.func,
    toggleSlideNav: PropTypes.func
};

export default SlideNav;
