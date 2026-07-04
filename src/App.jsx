import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import College from "./pages/College";
import HostelPage from "./pages/Hostel";
import PG from "./pages/PG";
import InstitutePage from "./pages/Institutes";
import HowItWorksPage from "./pages/HowItWorks";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SuperAdmin from "./superadmin/superadmin";
import SuperAdminLogin from "./superadmin/superadminlogin";
import SuperAdminDashboard from "./superadmin/superadmindashboard";
import ProtectedRoute from "./superadmin/ProtectedRoute";

import AddEntity from "./superadmin/AddEntity";
import ManageListings from "./superadmin/ManageListing";

import EntityList from "./superadmin/EntityList";
import EntityDetails from "./superadmin/EntityDetails";

function App() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith(
    "/superadmin"
  );

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* ================= WEBSITE ================= */}

        <Route path="/" element={<Home />} />

        <Route
          path="/colleges"
          element={<College />}
        />

        <Route
          path="/hostels"
          element={<HostelPage />}
        />

        <Route
          path="/paying-guests"
          element={<PG />}
        />

        <Route
          path="/coaching"
          element={<InstitutePage />}
        />

        <Route
          path="/how-it-works"
          element={<HowItWorksPage />}
        />

        {/* ================= DYNAMIC LISTINGS ================= */}

        <Route
          path="/listings"
          element={<EntityList />}
        />

        <Route
          path="/listing/:id"
          element={<EntityDetails />}
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/superadmin"
          element={<SuperAdmin />}
        />

        <Route
          path="/superadmin/login"
          element={<SuperAdminLogin />}
        />

        <Route
          path="/superadmin/dashboard"
          element={
            <ProtectedRoute>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/superadmin/dashboard/add/:category"
          element={
            <ProtectedRoute>
              <AddEntity />
            </ProtectedRoute>
          }
        />

        <Route
          path="/superadmin/manage-listings"
          element={
            <ProtectedRoute>
              <ManageListings />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;