import Store from 'pages/store/Store';
import AboutUs from 'pages/about/AboutUs';
import Contact from 'pages/contact/Contact';
import {
    Routes,
    Route
} from 'react-router-dom';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default AppRoutes;
