-- CreateTable
CREATE TABLE "Technology" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255),
    "deadline" DATE,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "username" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
