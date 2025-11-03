import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ProfileHeader from './profile-header';

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  // Redirect if not authenticated
  if (!session?.user) {
    redirect('/auth');
  }

  const fullName = session.user.fullName;
  const isAdmin = session.user.role === 'ADMIN';
  const userId = Number(session.user.id);
  const avatarUrl = session.user.avatarUrl;

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
      {/* Profile Header */}
      <ProfileHeader
        name={fullName}
        createdAt={session.user.createdAt}
        isAdmin={isAdmin}
        userId={userId}
        avatarUrl={avatarUrl}
      />

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>{children}</div>
    </div>
  );
}
