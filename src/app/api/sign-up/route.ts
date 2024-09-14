import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import prisma from "@/libs/prisma";
import generateToken from "@/utils/generateToken";
import transporter from "@/libs/nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password, phone, address, username } =
      await req.json();
    if (!fullName || !email || !password || !phone || !address || !username) {
      return NextResponse.json("Invalid Data", { status: 400 });
    }
    const hashedPasword = await bcryptjs.hash(password, 10);
    const verificationToken = generateToken();

    const existedEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    const existedUsername = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existedEmail || existedUsername) {
      return NextResponse.json("email or username already in used", {
        status: 400,
        statusText: "email or username already in used",
      });
    }

    await prisma.user.create({
      data: {
        email: email,
        fullname: fullName,
        password: hashedPasword,
        phone: phone,
        address: address,
        username: username,
        verificationToken: verificationToken,
      },
    });

    const verificationLink = `${process.env.NEXT_PUBLIC_API_PATH}/verify-email?token=${verificationToken}`;

    const mailOption = {
      from: "Creator@gmail.com",
      to: email,
      subject: "Verify your CreatOr account",
      html: `<p>Please click the following link to verify your email:</p>
             <a href="${verificationLink}">${verificationLink}</a>`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      {
        message: "Succes sign-up your account",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
