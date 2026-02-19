import { APIRequestContext } from '@playwright/test';

export class BookingAPI {
  constructor(private request: APIRequestContext) {}

  async createToken() {
    return this.request.post('/auth', {
      data: {
        username: 'admin',
        password: 'password123',
      },
    });
  }

  async createBooking(payload: any) {
    return this.request.post('/booking', { data: payload });
  }

  async getBooking(id: number) {
    return this.request.get(`/booking/${id}`);
  }

  async updateBooking(id: number, payload: any, token: string) {
    return this.request.put(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`,
      },
      data: payload,
    });
  }

  async deleteBooking(id: number, token: string) {
    return this.request.delete(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
  }
}
