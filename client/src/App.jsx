import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LessonPage from './pages/LessonPage';
import ProtectedRoute from './components/ProtectedRoute';
import ReceptionLandingPage from './pages/ReceptionLandingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ReceptionLandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/module/:slug"
        element={
          <ProtectedRoute>
            <LessonPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
