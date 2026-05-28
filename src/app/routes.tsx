import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { CandidateDashboard } from "./pages/CandidateDashboard";
import { CompanyDashboard } from "./pages/CompanyDashboard";
import { LoginPage } from "./pages/LoginPage";
import { TalentPoolPage } from "./pages/TalentPoolPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { CompanySettingsPage } from "./pages/CompanySettingsPage";
import { CandidateJobsPage } from "./pages/CandidateJobsPage";
import { CandidateTestsPage } from "./pages/CandidateTestsPage";
import { CandidateCommunityPage } from "./pages/CandidateCommunityPage";
import { CandidateSettingsPage } from "./pages/CandidateSettingsPage";
import { NewJobPage } from "./pages/NewJobPage";
import { SignupPage } from "./pages/SignupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/cadastro",
    Component: SignupPage,
  },
  {
    path: "/dashboard/candidata",
    Component: CandidateDashboard,
  },
  {
    path: "/dashboard/candidata/vagas",
    Component: CandidateJobsPage,
  },
  {
    path: "/dashboard/candidata/testes",
    Component: CandidateTestsPage,
  },
  {
    path: "/dashboard/candidata/comunidade",
    Component: CandidateCommunityPage,
  },
  {
    path: "/dashboard/candidata/config",
    Component: CandidateSettingsPage,
  },
  {
    path: "/dashboard/empresa",
    Component: CompanyDashboard,
  },
  {
    path: "/dashboard/empresa/talentos",
    Component: TalentPoolPage,
  },
  {
    path: "/dashboard/empresa/analytics",
    Component: AnalyticsPage,
  },
  {
    path: "/dashboard/empresa/config",
    Component: CompanySettingsPage,
  },
  {
    path: "/dashboard/empresa/nova-vaga",
    Component: NewJobPage,
  },
]);
