import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import LandingPage from "./views/LandingPage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import RegistrationPage from "./views/RegistrationPage.jsx";
import InstitutionPage from "./views/institutions/InstitutionPage.jsx";
import NewInstitution from "./views/institutions/NewInstitution.jsx";
import EvaluationPage from "./views/evaluations/EvaluationPage.jsx";
import NewEvaluation from "./views/evaluations/NewEvaluation.jsx";
import EvaluationView from "./views/evaluations/EvaluationView.jsx";
import EvaluationEdit from "./views/evaluations/EvaluationEdit.jsx";
import InstitutionEdit from "./views/institutions/InstitutionEdit.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Layout withHeader={<LoginPage />} />} />
				<Route
					path="/registration"
					element={<Layout withHeader={<RegistrationPage />} />}
				/>
				<Route
					path="/institutions"
					index
					element={<Layout withHeader={<InstitutionPage />} />}
				/>
				<Route
					path="/institutions/create"
					element={<Layout withHeader={<NewInstitution />} />}
				/>
				<Route
					path="/institutions/edit"
					element={<Layout withHeader={<InstitutionEdit />} />}
				/>
				<Route
					path="/evaluations"
					element={<Layout withHeader={<EvaluationPage />} />}
				/>
				<Route
					path="/evaluations/create"
					element={<Layout withHeader={<NewEvaluation />} />}
				/>
				<Route
					path="/evaluations/view"
					element={<Layout withHeader={<EvaluationView />} />}
				/>
				<Route
					path="evaluations/edit"
					element={<Layout withHeader={<EvaluationEdit />} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
