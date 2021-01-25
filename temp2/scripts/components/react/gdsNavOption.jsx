import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const NavOption = (props) => {

    const _toggleSubMenu = (event) => {
        event.preventDefault();
        props.toggleSubMenu(props.name);
    };

    const _toggleSlideNav = (event) => {
        event.preventDefault();
        props.toggleSlideNav();
    };

    const baseClasses = 'gds-slide-nav__list-item gds-slide-nav__list-item--primary',
        classesWithChildren = `${baseClasses} gds-slide-nav__list-item--has-children`,
        classesWithChildrenOpenLi = `${classesWithChildren} gds-slide-nav__list--expanded`,
        classesWithChildrenUl = 'gds-slide-nav__list gds-slide-nav__list--nested',
        classesWithChildrenOpenUl = `${classesWithChildrenUl} gds-slide-nav__list--expanded`,
        classesWithChildrenSpan = 'gds-slide-nav__link gds-slide-nav__link--expandable',
        classesWithChildrenOpenSpan = `${classesWithChildrenSpan} gds-slide-nav__link--expanded`;
    return (
        <div>
            { !props.options &&
                <li className={ baseClasses } onClick={ _toggleSlideNav }><Link to={ props.path } className="gds-slide-nav__link">{ props.name }</Link></li>
            }
            { props.options &&
                <li className={ props.subMenuState === props.name ? classesWithChildrenOpenLi : classesWithChildren } onClick={ _toggleSubMenu }>
                    <span className={ props.subMenuState === props.name ? classesWithChildrenOpenSpan : classesWithChildrenSpan }>{ props.name }</span>
                    <ul className={ props.subMenuState === props.name ? classesWithChildrenOpenUl : classesWithChildrenUl }>
                        { props.options.map((o) => (
                            <NavOption key={ o.name } path={ o.path } name={ o.name } toggleSlideNav={ props.toggleSlideNav }/>
                        )) }
                    </ul>
                </li>
            }
        </div>
    );
};

NavOption.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
    toggleSubMenu: PropTypes.func,
    toggleSlideNav: PropTypes.func,
    subMenuState: PropTypes.string,
    options: PropTypes.array
};

export default NavOption;
