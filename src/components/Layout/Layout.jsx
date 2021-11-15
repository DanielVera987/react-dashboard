import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '@layout/Header';
import Sidebar from '@layout/Sidebar';

const Layout = ({ children }) => {
    return (
        <Container fluid>
            <div className="d-flex flex-direction-row align-items-start">
                <Sidebar />
                <div className="flex-fill">
                    <Header />
                    <div className="content mt-4">{children}</div>
                </div>
            </div>
        </Container>
    );
};

export default Layout;
