import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminSidebar from './admin-sidebar';
import AdminNavbar from './admin-navbar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  const isAdmin = session.user.role === 'ADMIN';

  // Redirect if not authenticated or not admin
  if (!isAdmin) {
    redirect('/profile');
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Admin Navbar */}
      <AdminNavbar name={session.user.fullName} />

      <div className='flex pt-[73px] min-h-screen'>
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className='flex-1 ml-56 py-8 pr-4 min-h-screen'>{children}</main>
      </div>
    </div>
  );
}
