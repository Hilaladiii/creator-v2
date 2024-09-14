import { storage } from "@/libs/firebase";
import prisma from "@/libs/prisma";
import { uploaderGetUrl } from "@/utils/uploader";
import { TProposal } from "@/validation/proposal";
import { ref } from "firebase/storage";

export async function applyProposal(data: TProposal) {
  try {
    const proposalRef = ref(storage, `proposal/${data.proposal.name}`);
    const proposalUrl = await uploaderGetUrl(proposalRef, data.proposal);
    const res = await prisma.proposal.create({
      data: {
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        subject: data.subject,
        proposal: proposalUrl,
        company: {
          connect: {
            id: data.companyId,
          },
        },
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
    return {
      status: 201,
      message: "Success apply proposal",
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
      data: null,
    };
  }
}

export async function getProposals(userId: string, currentPage: number) {
  try {
    const offset = (currentPage - 1) / 5;
    const proposals = await prisma.proposal.findMany({
      where: {
        userId: {
          equals: userId,
        },
      },
      include: {
        company: {
          select: {
            name: true,
          },
        },
      },
      skip: offset,
      take: 5,
    });
    if (proposals.length <= 0) {
      return {
        status: 404,
        message: "Orders empty",
        data: [],
      };
    }

    return {
      status: 200,
      message: "Success get proposals",
      data: proposals,
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
      data: [],
    };
  }
}

export async function getProposalPages(userId: string) {
  try {
    const proposals = await prisma.proposal.count({
      where: {
        userId: {
          equals: userId,
        },
      },
    });
    return proposals;
  } catch (error) {
    return 0;
  }
}
