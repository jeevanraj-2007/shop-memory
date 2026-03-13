import { useNavigate } from 'react-router-dom';
import { shopCategories, setSelectedCategory } from '@/lib/shopCategories';
import { t } from '@/lib/i18n';

const SelectShopType = () => {
  const navigate = useNavigate();

  const handleSelect = (id: string) => {
    setSelectedCategory(id);
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto min-h-screen flex flex-col justify-center px-6 py-10">
      <div className="text-center mb-8">
        <h1 className="text-shop-2xl font-extrabold text-foreground mb-2">🏪 {t('shopMemory')}</h1>
        <p className="text-shop-base text-muted-foreground font-semibold">
          {t('whatBusiness')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {shopCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => handleSelect(cat.id)}
            className="bg-card border-2 border-border rounded-2xl p-5 flex flex-col items-center gap-2 hover:border-primary hover:shadow-md transition-all active:scale-[0.97]"
          >
            <span className="text-4xl">{cat.emoji}</span>
            <span className="text-shop-base font-bold text-foreground">{t(`cat.${cat.id}`)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectShopType;
