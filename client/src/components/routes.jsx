import { useNavigate } from "react-router-dom";

const useRouting = () => {
  const navigate = useNavigate();

  // Function to route to LoginPage
  const navigateToLogin = () => {
    navigate("/login");
  };

  // Function to route to RegistrationPage
  const navigateToRegistration = () => {
    navigate("/registration");
  };

  // Function to route to Home
  const navigateToHome = () => {
    navigate("/home");
  };

  // Function to route to Home
  const navigateToEvaluation = () => {
    navigate("/evaluations");
  };

  return {
    navigateToLogin,
    navigateToRegistration,
    navigateToHome,
  };
};

export default useRouting;
