import React from 'react';

const Sidebar = () => {
    return (
        <nav className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ height: '100vh', position: 'fixed'}}
        >
            <a href="/" className="text-decoration-none text-white">
                <span className="fs-5">React Dashboard</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#home" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#speedometer2" />
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#table" />
                        </svg>
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#grid" />
                        </svg>
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#people-circle" />
                        </svg>
                        Customers
                    </a>
                </li>
            </ul>   
        </nav>
    );
};

export default Sidebar;
