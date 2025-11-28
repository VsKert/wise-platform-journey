// src/components/Header.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const navigate = useNavigate();
    const companyName = localStorage.getItem("companyName");

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="src/components/image.svg" alt="Logo" onClick={() => navigate("/")}/>
                    {companyName && (
                        <span className="text-sm text-muted-foreground">
              {companyName}
            </span>
                    )}
                </div>

                {/* Right-side actions depending on header type */}
                <div className="flex items-center space-x-4">
                    {type === "landing" && (
                        <>
                            <Button variant="ghost" onClick={() => navigate("/login")}>
                                Login
                            </Button>

                            <Button onClick={() => navigate("/signup")}>
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </>
                    )}

                    {type === "auth" && (
                        <Button variant="outline" onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
