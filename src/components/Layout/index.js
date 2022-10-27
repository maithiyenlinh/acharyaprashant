import Header from "../Header";
import PropTypes from 'prop-types';
import Footer from "../Footer";
import Sticky from "react-sticky-el";
import SubHeading from "../SubHeading";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <SubHeading />
            <div className='relative mx-auto max-w-2xl'>
                { children }
            </div>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;