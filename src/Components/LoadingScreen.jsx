// src/Components/LoadingScreen.jsx - Nouveau composant
import React from 'react';
import '../Styles/LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loader">
                <div className="loading-text">CREA<span className="loading-highlight">TIF</span></div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
