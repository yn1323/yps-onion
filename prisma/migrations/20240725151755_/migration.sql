/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Announce" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Operation" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Organization" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "OrganizationShopBelonging" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();

-- AlterTable
ALTER TABLE "Request" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "done" SET DEFAULT false,
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Shop" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "ShopUserBelonging" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "StableShift" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "TemporaryClosed" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "TimeCard" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "UnstableShift" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "role",
ALTER COLUMN "id" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "userId" SET DEFAULT uuid_generate_v4(),
ALTER COLUMN "avatar" SET DEFAULT '',
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Invitation" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "invitedByShopId" UUID NOT NULL,
    "targetUserId" UUID NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_invitedByShopId_fkey" FOREIGN KEY ("invitedByShopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
