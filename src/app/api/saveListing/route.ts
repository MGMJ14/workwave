import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function GET(request: Request) {
  const req = await request.json();
  const session = await getServerSession(authOptions);
  console.log(session);

  const userData = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      JobPost: true,
    },
  });

  return NextResponse.json({ userData });
}

export async function POST(request: Request, response: NextResponse) {
  const req = await request.json();
  const { item, session } = req;

  try {
    const newSavedJob = await prisma.jobPost.create({
      data: {
        job_id: item.id,
        company: item.company.display_name,
        title: item.title,
        description: item.description,
        location: item.location.display_name,
        status: 'Saved',
        index: 0,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return NextResponse.json({ newSavedJob });
  } catch (err) {
    throw new Error(`Error saving job: ${err}`);
  }
}
