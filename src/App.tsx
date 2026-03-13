import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import Dashboard from "./pages/Dashboard";
import AddOrder from "./pages/AddOrder";
import PaymentTracking from "./pages/PaymentTracking";
import CustomerHistory from "./pages/CustomerHistory";
import SelectShopType from "./pages/SelectShopType";
import LanguageSelect from "./pages/LanguageSelect";
import Reminders from "./pages/Reminders";
import OrderDetail from "./pages/OrderDetail";
import NotFound from "./pages/NotFound";
import { getSelectedCategory } from "@/lib/shopCategories";

const AppRoutes = () => {
  const category = getSelectedCategory();

  if (!category) {
    return (
      <Routes>
        <Route path="/select-shop" element={<SelectShopType />} />
        <Route path="/language" element={<LanguageSelect />} />
        <Route path="*" element={<Navigate to="/select-shop" replace />} />
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/payments" element={<PaymentTracking />} />
        <Route path="/customers" element={<CustomerHistory />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/order/:id" element={<OrderDetail />} />
        <Route path="/select-shop" element={<SelectShopType />} />
        <Route path="/language" element={<LanguageSelect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </>
  );
};

const App = () => (
  <TooltipProvider>
    <Sonner />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
