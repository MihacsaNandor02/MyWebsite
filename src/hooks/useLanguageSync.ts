import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useLanguageSync = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    
    if (path.startsWith('/en')) {
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
        localStorage.setItem('preferred_language', 'en');
      }
    } else {
      if (i18n.language !== 'ro') {
        i18n.changeLanguage('ro');
        localStorage.setItem('preferred_language', 'ro');
      }
    }
  }, [location.pathname, i18n]);

  return { currentLang: i18n.language };
};
