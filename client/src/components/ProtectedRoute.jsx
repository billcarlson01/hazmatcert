// client/src/components/ProtectedRoute.jsx
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div className="text-center p-6">Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
}
