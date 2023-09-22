import React from 'react';
import {useTranslation} from "react-i18next";


export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <button  onClick={toggle} >
            Русский / English        
        </button>
    );
};

