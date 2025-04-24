import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
};

export default Layout;