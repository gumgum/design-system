import React, { PropTypes } from 'react';

class BodyClasses extends React.Component {

    componentDidMount() {
        document.body.classList.toggle('gds-slide-out', this.props.slideNavOpen);
    }

    componentWillReceiveProps(nextProps) {
        document.body.classList.toggle('gds-slide-out', nextProps.slideNavOpen);
    }

    componentWillUnmount() {
        document.body.classList.remove('gds-slide-out');
    }

    render() {
        return null;
    }
}

BodyClasses.propTypes = {
    slideNavOpen: PropTypes.bool
};

export default BodyClasses;
