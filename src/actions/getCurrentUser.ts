import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[[...nextauth]]/option";
import prisma from "@/libs/prisma";

export default async function getCurrentUser() {
  try {
    const session = await getServerSession(authOption);

    if (!session?.user?.email) return null;

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    if (!currentUser) return null;

    return currentUser;
  } catch (error) {
    return null;
  }
}
