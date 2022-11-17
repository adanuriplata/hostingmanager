// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  console.log(process.env.SUPABASE_ANON_KEY);
  checkLogin().then((result) => {
    // res.status(200).json({ name: 'John Doe' });
    res.status(200).json(result);
  });
}

const checkLogin = async () => {
  const bodyResq = { email: 'wavaki9391@lidely.com', password: 'adminroot' };

  const data = await fetch(
    'https://hxjatvhqnbevmueapann.supabase.co/auth/v1/token?grant_type=password',
    {
      method: 'POST',
      body: JSON.stringify(bodyResq),
      headers: {
        'Content-Type': 'application/json',
        APIKey: process.env.SUPABASE_ANON_KEY,
        Authorization: process.env.SUPABASE_BEARER_TOKEN,
      },
    }
  );
  const result = await data.json();
  console.log(result);
  return result;
};
