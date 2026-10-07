-- One booking (pending hold or confirmed) per start time.
-- Expired pending holds are deleted before inserting, so they never block a time.
-- If this fails on an existing database, clear old test bookings first:
--   DELETE FROM "Booking" WHERE "status" = 'pending';
CREATE UNIQUE INDEX "Booking_bookingTime_key" ON "Booking"("bookingTime");
