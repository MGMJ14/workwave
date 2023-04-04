'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

type Props = {};

function Button({}: Props) {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}

export default Button;
