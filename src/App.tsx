import { Routes, Route, Navigate } from "react-router-dom";

function LoginPage() {
  return <div style={{ padding: 24 }}>Login page (placeholder)</div>;
}

function DashboardPage() {
  return <div style={{ padding: 24 }}>Dashboard page (placeholder)</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<div style={{ padding: 24 }}>404</div>} />
    </Routes>
  );
}
