'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

type Props = {};

function Button({ }: Props) {
  const { data: session } = useSession();
  // console.log(session?.user);
  return (
    <>
      {session?.user ?
        <button className='text-2xl' onClick={() => signIn()}>Sign In</button> :

        <button className='text-2xl' onClick={() => signOut()}>Sign Out</button>}
    </>
  );
}

export default Button
