import React from 'react';
import Avatar from '@components/Avatar/Avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({handleToogle}) => {
    return (
        <nav className="d-flex justify-content-between mx-4 mt-3">
            <div className="d-flex">
                <button type="button" className="border-0 bg-transparent" onClick={handleToogle}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
                <form className="ms-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
            </div>

            <Avatar fullName="Daniel Vera" pathImg="https://avatars.githubusercontent.com/u/59943431?v=4"/>
        </nav>
    );
};

export default Header;
