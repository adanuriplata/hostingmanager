import { useState } from 'react';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const onSubmitLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const resp = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();
      setUser(data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return { isError: error, isLoading, user: user || [], onSubmitLogin };
};
