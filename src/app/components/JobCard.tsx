import { Job } from '../interface/interfaces';
import SaveListing from './SaveListing';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function JobCard(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  const res = await fetch(
    'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d4457f4f&app_key=c2e8c1326acb7c2f447b9aef84ff463e&what=Software%20Engineer'
  );
  const data = await res.json();

  return (
    <div className="h-screen overflow-auto ">
      {data.results?.map((item: Job, i: number) => (
        <div
          key={i}
          style={{ transform: `translate(${i * 25}px, ${i * 50}px)` }}
          className={`${
            i % 2 === 0 ? 'bg-slate-500' : 'bg-slate-300'
          } sticky top-0 hover:translate-x-10 w-1/2 border-2 h-fit flex-col flex justify-center border-black`}
        >
          <h2 className="text-8xl">{item.title}</h2>
          <SaveListing item={item} index={i} session={session} />
          <p className="text-2xl">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
