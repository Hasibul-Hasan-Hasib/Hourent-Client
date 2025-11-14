// Application Defualt Routes Outlet

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;