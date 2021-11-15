import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    @_davadev
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample09"
                    aria-controls="navbarsExample09"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                    </ul>
                    <form>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
