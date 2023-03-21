import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="primary-button">
              {children}
            </button>
        </div>
    );
};

export default PrimaryButton;