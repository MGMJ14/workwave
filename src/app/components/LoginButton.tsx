'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

type Props = {};

function LogInButton({}: Props) {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <button
          className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </>
  );
}

export default LogInButton;
