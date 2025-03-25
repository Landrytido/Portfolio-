// src/components/LanguageSwitcher.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import '../Styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { language, switchLanguage } = useContext(LanguageContext);

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
                onClick={() => switchLanguage('fr')}
                aria-label="Passer en français"
            >
                FR
            </button>
            <span className="lang-separator">|</span>
            <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => switchLanguage('en')}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;