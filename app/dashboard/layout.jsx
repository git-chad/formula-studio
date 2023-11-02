import Sidebar from "../components/dashboard-module/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      {children}
    </section>
  );
}
