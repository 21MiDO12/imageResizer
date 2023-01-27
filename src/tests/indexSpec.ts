import supertest from 'supertest';
import app from '..';

const req = supertest(app);

describe('Testing api', () => {
  try {
    it('Testing accessing the server http://localhost:1234', async () => {
      const res = await req.get('/');
      expect(res.status).toBe(200);
    });

    it('Testing unValidAPI usage by NOT giving an image to get', async () => {
      const res = await req.get('/GetMyImage');
      expect(res.status).toBe(400);
    });
    it('Testing usage of the demo api (http://localhost:1234/GetMyImage?image=yourImageName&&width=yourSize&&height=yourSize)', async () => {
      const res = await req.get(
        '/GetMyImage?image=yourImageName&&width=yourSize&&height=yourSize'
      );
      expect(res.status).toBe(402);
    });

    it('Testing geting lara.jpg with invalid size (http://localhost:1234/GetMyImage?image=lara&&width=yourSize&&height=yourSize)', async () => {
      const res = await req.get(
        '/GetMyImage?image=lara&&width=yourSize&&height=yourSize'
      );
      expect(res.status).toBe(402);
    });
  } catch (err) {
    console.error(err);
  }
});
