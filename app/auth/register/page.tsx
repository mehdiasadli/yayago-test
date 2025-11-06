import RegisterForm from './register-form';

interface RegisterPageProps {
  searchParams: Promise<{
    callbackUrl?: string;
  }>;
}
export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const { callbackUrl = '/' } = await searchParams;

  return <RegisterForm callbackUrl={decodeURIComponent(callbackUrl)} />;
}
