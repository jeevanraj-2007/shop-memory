import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
}

const PageHeader = ({ title, showBack }: PageHeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center gap-3 px-5 pt-6 pb-4">
      {showBack && (
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-secondary">
          <ArrowLeft size={24} />
        </button>
      )}
      <h1 className="text-shop-xl font-extrabold text-foreground">{title}</h1>
    </header>
  );
};

export default PageHeader;
