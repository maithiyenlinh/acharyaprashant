import Header from "../Header";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{ children }</div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;