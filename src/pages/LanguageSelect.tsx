import { useNavigate } from 'react-router-dom';
import { languages, getLanguage, setLanguage, t } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import { Check } from 'lucide-react';

const LanguageSelect = () => {
  const navigate = useNavigate();
  const current = getLanguage();

  const handleSelect = (code: string) => {
    setLanguage(code as any);
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto min-h-screen pb-28">
      <PageHeader title={t('chooseLanguage')} showBack />

      <div className="px-5 space-y-3">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`w-full bg-card rounded-2xl p-5 border-2 flex items-center justify-between transition-all active:scale-[0.98] ${
              current === lang.code
                ? 'border-primary shadow-md'
                : 'border-border hover:border-primary/40'
            }`}
          >
            <div className="text-left">
              <p className="text-shop-lg font-bold text-foreground">{lang.nativeLabel}</p>
              <p className="text-shop-sm text-muted-foreground font-semibold">{lang.label}</p>
            </div>
            {current === lang.code && (
              <div className="bg-primary text-primary-foreground rounded-full p-1.5">
                <Check size={20} />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
