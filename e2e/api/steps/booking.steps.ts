import { Given, When, Then } from '../../../support/bdd'
import { test, expect } from '@playwright/test';
import { BookingAPI } from '../../../support/bookingApi';

let bookingId: number;
let token: string;
let response: any;

When('I create a new booking', async ({ request }) => {
  const api = new BookingAPI(request);

  response = await api.createBooking({
    firstname: 'John',
    lastname: 'Doe',
    totalprice: 100,
    depositpaid: true,
    bookingdates: {
      checkin: '2025-01-01',
      checkout: '2025-01-05',
    },
  });

  const body = await response.json();
  bookingId = body.bookingid;
});

Then('the booking should be created successfully', async () => {
  expect(response.status()).toBe(200);
});

Given('I have an existing booking', async ({ request }) => {
  const api = new BookingAPI(request);

  const res = await api.createBooking({
    firstname: 'Test',
    lastname: 'User',
    totalprice: 200,
    depositpaid: false,
    bookingdates: {
      checkin: '2025-02-01',
      checkout: '2025-02-05',
    },
  });

  const body = await res.json();
  bookingId = body.bookingid;
});

When('I retrieve the booking', async ({ request }) => {
  const api = new BookingAPI(request);
  response = await api.getBooking(bookingId);
});

Then('the booking details should be returned', async () => {
  expect(response.status()).toBe(200);
});

Given('I have a booking and auth token', async ({ request }) => {
  const api = new BookingAPI(request);

  const tokenRes = await api.createToken();
  token = (await tokenRes.json()).token;

  const bookingRes = await api.createBooking({
    firstname: 'Auth',
    lastname: 'User',
    totalprice: 300,
    depositpaid: true,
    bookingdates: {
      checkin: '2025-03-01',
      checkout: '2025-03-05',
    },
  });

  bookingId = (await bookingRes.json()).bookingid;
});

When('I update the booking', async ({ request }) => {
  const api = new BookingAPI(request);

  response = await api.updateBooking(
    bookingId,
    {
      firstname: 'Updated',
      lastname: 'User',
      totalprice: 500,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-04-01',
        checkout: '2025-04-05',
      },
    },
    token
  );
});

Then('the booking should be updated successfully', async () => {
  expect(response.status()).toBe(200);
});

When('I delete the booking', async ({ request }) => {
  const api = new BookingAPI(request);
  response = await api.deleteBooking(bookingId, token);
});

Then('the booking should be deleted successfully', async () => {
  expect(response.status()).toBe(201);
});
