import styles from "@/styles/dashboard.module.css";
import Dashboard from "./dashboard";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles.layout}>
      <Dashboard />
      {children}
    </div>
  );
}
