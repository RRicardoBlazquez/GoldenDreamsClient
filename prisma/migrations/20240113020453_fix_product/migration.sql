/*
  Warnings:

  - You are about to drop the `_ProductToSizes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToSizes" DROP CONSTRAINT "_ProductToSizes_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToSizes" DROP CONSTRAINT "_ProductToSizes_B_fkey";

-- DropTable
DROP TABLE "_ProductToSizes";
