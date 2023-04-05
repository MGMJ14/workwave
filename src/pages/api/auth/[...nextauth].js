import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/prisma';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: 'jwt',
  // },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      console.log('account provider: ', account.provider === 'google');
      if (account.provider === 'google') {
        if (profile.email_verified && profile.email.endsWith('@gmail.com')) {
          try {
            let currentUser = await prisma.user.findUnique({
              where: {
                email: profile.email,
              },
            });
            if (!currentUser) {
              currentUser = await prisma.user.create({
                data: {
                  name: profile.name,
                  email: profile.email,
                  image: profile.picture,
                },
              });
            }
            console.log(currentUser);
            return true;
          } catch (error) {
            console.error('Error: ', error);
          }
          console.log('currentUser: ', currentUser);
        }
      }
      return false;
    },

    jwt: async ({ token, user, account, profile, isNewUser }) => {
      try {
        const currentUser = await prisma.user.findUnique({
          where: {
            email: token.email,
          },
        });

        return {
          ...token,
          id: currentUser.id,
        };
      } catch (error) {
        console.log('Error: ', error);
      }

      return token;
    },

    session: async ({ session, user, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
};

export default NextAuth(authOptions);

// find or create user on sign in

// add another provider?
// email credentials
