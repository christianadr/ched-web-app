import { useNavigate } from "react-router-dom";

const useRouting = () => {
	const navigate = useNavigate();

	// Function to route to LoginPage
	const navigateToLogin = (opts) => {
		navigate("/login", { state: { ...opts } });
	};

	// Function to route to RegistrationPage
	const navigateToRegistration = (opts) => {
		navigate("/registration", { state: { ...opts } });
	};

	// Function to route to Home
	const navigateToInstitutionsPage = (opts) => {
		navigate("/institutions", { state: { ...opts } });
	};

	const navigateToCreateInstitution = (opts) => {
		navigate("/institutions/create", { state: { ...opts } });
	};

	const navigateToEditInstitution = (opts) => {
		navigate("/institutions/edit", { state: { ...opts } });
	};

	const navigateToEvaluationsPage = (opts) => {
		navigate("/evaluations", { state: { ...opts } });
	};

	const navigateToCreateEvaluation = (opts) => {
		navigate("/evaluations/create", { state: { ...opts } });
	};

	const navigateToEvaluationView = (opts) => {
		navigate("/evaluations/view", { state: { ...opts } });
	};

	const navigateToEvaluationEdit = (opts) => {
		navigate("/evaluations/edit", { state: { ...opts } });
	};

	return {
		navigateToLogin,
		navigateToRegistration,
		navigateToInstitutionsPage,
		navigateToCreateInstitution,
		navigateToEditInstitution,
		navigateToEvaluationsPage,
		navigateToCreateEvaluation,
		navigateToEvaluationView,
		navigateToEvaluationEdit,
	};
};

export default useRouting;
