import LoginForm from './login-form';

interface AuthPageProps {
  searchParams: Promise<{
    callbackUrl?: string;
  }>;
}

export default async function LoginPage({ searchParams }: AuthPageProps) {
  const { callbackUrl = '/' } = await searchParams;

  return <LoginForm callbackUrl={decodeURIComponent(callbackUrl)} />;
}
