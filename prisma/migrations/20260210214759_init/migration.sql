-- CreateTable
CREATE TABLE "Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serviceName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "bookingTime" DATETIME NOT NULL,
    "customerEmail" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
