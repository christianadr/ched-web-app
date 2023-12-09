import React from "react";
import { logo, chedbg, teamLogo } from "../assets/index";
import AppButtonContained from "../components/utils/AppButtonContained";
import AppButtonOutlined from "../components/utils/AppButtonOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    const proceedToLogin = () => {
        navigate("/login");
    };

    return (
        <div
            className="flex justify-center items-center h-screen text-white font-inter relative"
            style={{
                backgroundImage: `url(${chedbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-accent opacity-60"></div>
            <div className="flex flex-col gap-10 text-center z-10 relative bg-primary p-10 rounded-lg">
                <div>
                    <img src={logo} width={300} alt={"Unable to load logo."} />
                    <div className="font-medium text-black">
                        Developed for CHED-TC CpE
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <AppButtonContained
                        label="Login"
                        onClick={() => proceedToLogin()}
                    />
                    <AppButtonOutlined label="Register" />
                    <div className="flex flex-row justify-center items-center font-medium text-black pt-6">
                        Developed by{" "}
                        <img
                            src={teamLogo}
                            width={100}
                            alt={"Unable to load team logo."}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
