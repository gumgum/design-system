import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// Components
import PageHeader from './gdsPageHeader';
import SlideNav from './gdsSlideNav';
import BodyClasses from './gdsBodyClasses';

import SlideMenu from 'data/SlideMenu';
import AvatarMenu from 'data/AvatarMenu';
import getLocation from 'data/getLocation';

class HeaderManager extends React.Component {
    state = {
        avatarMenuOpen: false,
        slideNavOpen: false,
        subMenuOpen: ''
    }

    toggleAvatarMenu = () => {
        this.setState({avatarMenuOpen: !this.state.avatarMenuOpen});
    }

    toggleSlideMenu = () => {
        this.setState({slideNavOpen: !this.state.slideNavOpen});
    }

    toggleSubMenu = (menuName) => {
        if (!this.state.subMenuOpen) {
            this.setState({subMenuOpen: menuName})
        } else {
            this.setState({subMenuOpen: ''});
        }
    }

    render () {
        const pageName = getLocation(this.props.location.pathname);

        return (
            <div>
                <BodyClasses slideNavOpen={ this.state.slideNavOpen } />
                <SlideNav
                    menuTitle="Main Menu"
                    slideMenuData={ SlideMenu }
                    slideNavState={ this.state.slideNavOpen }
                    toggleSubMenu={ this.toggleSubMenu }
                    subMenuState={ this.state.subMenuOpen }
                    toggleSlideNav={ this.toggleSlideMenu }
                    />
                <PageHeader
                    appName="GumGum"
                    currentPageName={ pageName }
                    currentUserName="username"
                    currentUserImage="userimage"
                    avatarMenuData={ AvatarMenu }
                    toggleAvatarMenu={ this.toggleAvatarMenu }
                    toggleSlideNav={ this.toggleSlideMenu }
                    avatarMenuState={ this.state.avatarMenuOpen }/>
                <div className="gds-slide-content">
                    <div className="gds-layout__container">
                       {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
};

HeaderManager.propTypes = {
    children: PropTypes.element
};

export default HeaderManager;
