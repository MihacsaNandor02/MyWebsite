import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    let newPath = location.pathname;
    
    if (lng === 'en') {
      if (!newPath.startsWith('/en')) {
        newPath = `/en${newPath === '/' ? '' : newPath}`;
      }
    } else {
      if (newPath.startsWith('/en')) {
        newPath = newPath.replace(/^\/en/, '');
        if (newPath === '') newPath = '/';
      }
    }
    
    i18n.changeLanguage(lng);
    localStorage.setItem('preferred_language', lng);
    navigate(newPath);
  };

  const isEn = i18n.language === 'en';
  const isRo = i18n.language === 'ro';

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span
        onClick={() => changeLanguage('ro')}
        className={`cursor-pointer transition-colors ${
          isRo ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        RO
      </span>
      <span className="text-muted-foreground/30">|</span>
      <span
        onClick={() => changeLanguage('en')}
        className={`cursor-pointer transition-colors ${
          isEn ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;
