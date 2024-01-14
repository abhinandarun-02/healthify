-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "languages" TEXT[],
    "rating" DOUBLE PRECISION NOT NULL,
    "reviews" INTEGER NOT NULL,
    "endorsements" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "height" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "bloodType" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_userId_key" ON "Doctor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_userId_key" ON "Patient"("userId");

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
