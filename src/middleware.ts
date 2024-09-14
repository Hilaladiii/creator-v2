import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: [
    "/form-event/speakers/:path*",
    "/form-event/sponsors/:path*",
    "/transaction",
    "/waiting-payment",
  ],
};
