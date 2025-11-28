import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PartnershipPipeline } from "@/components/dashboard/PartnershipPipeline";
import { ApiCatalog } from "@/components/dashboard/ApiCatalog";
import { SandboxAccess } from "@/components/dashboard/SandboxAccess";
import { CsrGenerator } from "@/components/dashboard/CsrGenerator";
import { SupportChat } from "@/components/dashboard/SupportChat";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showSupport, setShowSupport] = useState(false);
  const companyName = localStorage.getItem("companyName") || "Your Company";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Wise Platform</h1>
                <p className="text-sm text-muted-foreground">{companyName}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Partnership Dashboard</h2>
          <p className="text-muted-foreground">
            Track your onboarding progress and access development tools
          </p>
        </div>

        {/* Partnership Pipeline */}
        <PartnershipPipeline />

        {/* API Catalog */}
        <ApiCatalog />

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          <SandboxAccess />
          <CsrGenerator />
        </div>
      </main>

      {/* Support Chat Toggle */}
      <Button
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg"
        onClick={() => setShowSupport(!showSupport)}
      >
        <span className="text-2xl">💬</span>
      </Button>

      {/* Support Chat */}
      {showSupport && <SupportChat onClose={() => setShowSupport(false)} />}
    </div>
  );
};

export default Dashboard;
