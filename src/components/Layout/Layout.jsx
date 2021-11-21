import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '@layout/Header';
import Sidebar from '@layout/Sidebar';

const Layout = ({ children }) => {
    const [toggle, setToogle] = useState(true);

    const handleToogle = () => {
        setToogle(!toggle);
    }

    return (
        <Container fluid>
            <div className="row">
                {toggle ?
                    <div className="d-none d-md-block col-md-3 col-lg-2 p-0 m-0">
                        <Sidebar />
                    </div>
                    : ''
                }
                <div className={ `${toggle ? 'col-md-9 col-lg-10' : 'col'} p-0 m-0` } >
                    <Header handleToogle={handleToogle} />
                    <div className="content m-4">{children}</div>
                </div>
            </div>
        </Container>
    );
};

export default Layout;
