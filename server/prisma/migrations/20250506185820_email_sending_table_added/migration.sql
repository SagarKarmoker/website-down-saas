-- CreateTable
CREATE TABLE "EmailSending" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "url_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "sendAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailSending_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmailSending" ADD CONSTRAINT "EmailSending_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailSending" ADD CONSTRAINT "EmailSending_url_id_fkey" FOREIGN KEY ("url_id") REFERENCES "Url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
