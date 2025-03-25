// src/components/ThemeSwitcher.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../Styles/ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="theme-switcher"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
        >
            {theme === 'dark' ? (
                <FaSun className="theme-icon" />
            ) : (
                <FaMoon className="theme-icon" />
            )}
        </button>
    );
};

export default ThemeSwitcher;