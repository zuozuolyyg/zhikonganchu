
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
// import { Toaster } from "@/components/ui/sonner" // Assuming shadcn structure or standard toast

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-primary-950 font-sans text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* <Toaster /> */}
    </div>
  );
}
