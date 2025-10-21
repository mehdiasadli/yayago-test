import ProfilePageHeader from './profile-sections/profile-page-header';
import PerformanceStats from './profile-sections/performance-stats';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { UsersApi } from '@/features/users/users.api';
import PersonalInformation from './profile-sections/personal-information';
import SupportCard from './profile-sections/support-card';

export const metadata = {
  title: 'My Profile',
  description: 'Manage your YayaGo profile and account settings',
};

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth');
  }

  // fetch user data
  const data = await UsersApi.getUserById({
    id: Number(session.user.id),
  });

  if (!data.success) {
    redirect('/auth');
  }

  const user = data.data;

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <ProfilePageHeader />

      {/* Performance Stats */}
      <PerformanceStats addedCars={user.addedCars} />

      {/* Main Content Grid */}
      <div className='grid lg:grid-cols-3 gap-8'>
        {/* Left Column - Personal Information */}
        <div className='lg:col-span-2 space-y-8'>
          {/* Personal Information Card */}
          <PersonalInformation user={user} />

          {/* Bio Section */}
          {/* <BioSection /> */}

          {/* Reviews & Ratings */}
          {/* <ReviewsRatings /> */}

          {/* Activity Timeline */}
          {/* <RecentActivity /> */}
        </div>

        {/* Right Column */}
        <div className='space-y-8'>
          {/* Account Status Card */}
          {/* <AccountStatus /> */}

          {/* Verification Status */}
          {/* <AccountVerification /> */}

          {/* Achievements */}
          {/* <UserAchievements /> */}

          {/* Monthly Earnings */}
          {/* <MonthlyEarnings /> */}

          {/* Help & Support */}
          <SupportCard email={user.email} />
        </div>
      </div>
    </div>
  );
}
