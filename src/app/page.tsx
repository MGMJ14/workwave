import Button from './components/Button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
// src/pages/api/auth/[...nextauth].js

export default async function Home() {
  const session = await getServerSession(authOptions);
  // as AuthOptions
  console.log(session);

  return (

    <main className="bg-slate-800 flex min-h-screen w-full flex-col">
      <h1 className="text-slate-100 text-3xl self-center border-2 p-16 rounded-xl w-2/3 text-center h-screen sticky top-0 bg-slate-500 z-10 border-white">WorkWave</h1>
      <p className='z-20 border-2 border-white self-end bg-slate-950 h-screen w-4/5 sticky top-40 text-slate-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus convallis justo sollicitudin fermentum. Nulla euismod id elit nec commodo. Nullam elementum, tortor quis facilisis rutrum, turpis nunc condimentum arcu, eget tincidunt diam odio in mi. Curabitur ligula nulla, tempor quis mattis nec, suscipit eu elit. Pellentesque fermentum tellus nisi, dictum mollis quam facilisis id. Sed ultrices vitae dolor eu cursus. Donec tristique, arcu sit amet maximus interdum, risus ligula malesuada justo, vitae convallis lorem arcu ac sapien. Aliquam at arcu eget diam tristique sagittis. Morbi accumsan auctor elit, eget blandit sapien sagittis quis. Nam efficitur nulla id metus sodales, ac feugiat sem fermentum. Nam sit amet magna ut eros elementum gravida. Cras neque tortor, viverra at metus fermentum, porttitor sagittis justo. Aliquam facilisis tellus felis, vitae posuere erat consectetur quis. Cras quis diam porta, pellentesque lectus non, porttitor sapien. Praesent faucibus purus id lacus imperdiet, quis luctus risus auctor.</p>
      <p className='z-40 border-2 border-white self-start bg-slate-400 h-screen w-4/5 sticky top-40 text-slate-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus convallis justo sollicitudin fermentum. Nulla euismod id elit nec commodo. Nullam elementum, tortor quis facilisis rutrum, turpis nunc condimentum arcu, eget tincidunt diam odio in mi. Curabitur ligula nulla, tempor quis mattis nec, suscipit eu elit. Pellentesque fermentum tellus nisi, dictum mollis quam facilisis id. Sed ultrices vitae dolor eu cursus. Donec tristique, arcu sit amet maximus interdum, risus ligula malesuada justo, vitae convallis lorem arcu ac sapien. Aliquam at arcu eget diam tristique sagittis. Morbi accumsan auctor elit, eget blandit sapien sagittis quis. Nam efficitur nulla id metus sodales, ac feugiat sem fermentum. Nam sit amet magna ut eros elementum gravida. Cras neque tortor, viverra at metus fermentum, porttitor sagittis justo. Aliquam facilisis tellus felis, vitae posuere erat consectetur quis. Cras quis diam porta, pellentesque lectus non, porttitor sapien. Praesent faucibus purus id lacus imperdiet, quis luctus risus auctor.</p>
    </main>
  );
}


