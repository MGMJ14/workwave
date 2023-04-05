import Button from './components/Button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
// src/pages/api/auth/[...nextauth].js

export default async function Home() {
  const session = await getServerSession(authOptions);
  // as AuthOptions
  console.log(session);

  return (

    <main className="bg-slate-800 flex justify-center items-center min-h-screen w-full">
      <h1 className="text-slate-100 text-3xl">Hello :)</h1>
    </main>
  );
}


