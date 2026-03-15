import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { sendEmailSignup } from "@/lib/resend";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // When user signs in with Google, capture their email
      if (account?.provider === "google" && user.email) {
        console.log('Google OAuth signup:', {
          email: user.email,
          name: user.name,
          provider: 'google'
        });
        
        // Send notification email about new signup
        try {
          await sendEmailSignup(user.email, user.name || 'Google User');
        } catch (error) {
          console.error('Failed to send signup notification:', error);
        }
      }
      return true;
    },
  },
  pages: {
    signIn: '/', // Redirect to homepage after sign in
  },
});

export { handler as GET, handler as POST };


