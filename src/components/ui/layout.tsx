import styles from "@/styles/dashboard.module.css";
import Dashboard from "./dashboard";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={styles.layout}>
      <Dashboard />
      {children}
    </div>
  );
}
