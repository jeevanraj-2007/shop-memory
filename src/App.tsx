import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import Dashboard from "./pages/Dashboard";
import AddOrder from "./pages/AddOrder";
import PaymentTracking from "./pages/PaymentTracking";
import CustomerHistory from "./pages/CustomerHistory";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/payments" element={<PaymentTracking />} />
        <Route path="/customers" element={<CustomerHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
