-- DropForeignKey
ALTER TABLE "tecnologies" DROP CONSTRAINT "tecnologies_userId_fkey";

-- CreateIndex
CREATE INDEX "tecnologies_userId_idx" ON "tecnologies"("userId");

-- CreateIndex
CREATE INDEX "tecnologies_id_idx" ON "tecnologies"("id");

-- CreateIndex
CREATE INDEX "users_id_idx" ON "users"("id");

-- AddForeignKey
ALTER TABLE "tecnologies" ADD CONSTRAINT "tecnologies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
