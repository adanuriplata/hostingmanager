import type { NextApiRequest, NextApiResponse } from 'next';
import { AuthUser } from '../../../types/api/IUser';

type Data = { message: string } | AuthUser;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void | Promise<void> {
  switch (req.method) {
    case 'POST':
      return checkLogin(req, res);

    default:
      return res.status(400).json({ message: 'Bad request not allowed' });
  }
}

const checkLogin = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const { email = '', password = '' } = req.body;
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('APIKey', process.env.SUPABASE_ANON_KEY as string);
  requestHeaders.set(
    'Authorization',
    process.env.SUPABASE_BEARER_TOKEN as string
  );

  const data = await fetch(
    'https://hxjatvhqnbevmueapann.supabase.co/auth/v1/token?grant_type=password',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: requestHeaders,
    }
  );
  const result = await data.json();
  if (data.status !== 200) return res.status(400).json(result);

  return res.status(200).json(result);
};
