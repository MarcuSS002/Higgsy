-- Add missing column required by the current Prisma schema and client.
ALTER TABLE "AvatarImage"
ADD COLUMN IF NOT EXISTS "cloudinaryPublicId" TEXT NOT NULL DEFAULT '';