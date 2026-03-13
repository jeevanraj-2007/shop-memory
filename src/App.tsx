import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import Dashboard from "./pages/Dashboard";
import AddOrder from "./pages/AddOrder";
import PaymentTracking from "./pages/PaymentTracking";
import CustomerHistory from "./pages/CustomerHistory";
import SelectShopType from "./pages/SelectShopType";
import NotFound from "./pages/NotFound";
import { getSelectedCategory } from "@/lib/shopCategories";

const AppRoutes = () => {
  const category = getSelectedCategory();

  if (!category) {
    return (
      <Routes>
        <Route path="/select-shop" element={<SelectShopType />} />
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
        <Route path="/select-shop" element={<SelectShopType />} />
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
