import Button from './components/LoginButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
// src/pages/api/auth/[...nextauth].js

export default async function Home() {
  const session = await getServerSession(authOptions);
  // as AuthOptions
  console.log(session);

  return (
    <main className="bg-orange-100">
      <p className=""></p>
      <p className=""></p>

      <div className="flex flex-wrap justify-center h-screen max-w-6xl mx-auto py-8">
        <div className="w-full md:w-1/2 lg:w-1/3 p-6">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">
                Welcome to WorkWave, {session ? session.user.name : 'Guest'}
              </h2>
              <p className="text-gray-700 text-base">
                Tired of trying to manage and track your jobs? WorkWave is here
                to help. Search, filter, and sort your job applications by
                status to help you stay on top of the application process.
                WorkWave is the best way to manage your jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
