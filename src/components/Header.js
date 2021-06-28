import React from 'react';

const Header = ({ handleDarkMode }) => {
    return (
        <div className="header">
            <h1>mazNotes</h1>
            <button onClick={() => handleDarkMode((preDarkMode) => !preDarkMode)} className="save">Toggle Mode</button>
        </div>
    )
}

export default Header;
