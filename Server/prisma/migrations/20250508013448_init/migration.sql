-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "quantityInStock" INTEGER NOT NULL,
    "isPromoted" BOOLEAN NOT NULL,
    "Brand" TEXT NOT NULL
);
