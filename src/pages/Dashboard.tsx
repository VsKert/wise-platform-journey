import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PartnershipPipeline } from "@/components/dashboard/PartnershipPipeline";
import { ApiCatalog } from "@/components/dashboard/ApiCatalog";
import { SandboxAccess } from "@/components/dashboard/SandboxAccess";
import { CsrGenerator } from "@/components/dashboard/CsrGenerator";
import { SupportChat } from "@/components/dashboard/SupportChat";
import Header from "@/components/Header.tsx";

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
      <Header type="auth" />

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
