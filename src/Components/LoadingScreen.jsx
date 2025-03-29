import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import '../Styles/LoadingScreen.css';

const LoadingScreen = () => {
    const { t } = useTranslation();

    return (
        <div className="loading-screen">
            <div className="loader">
                <div className="loading-text">{t('loading.title')}</div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;