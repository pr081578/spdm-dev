'use client';
import { useGlobalContext } from '@context/globalContext';
import { useEffect } from 'react';

export default function Home() {
  const { userId, setUserId, data, setData } = useGlobalContext();

  useEffect(() => {
    setUserId('2');
    setData([
      {
        firstName: 'Perrie',
        email: 'perussell0815@yahoo.com',
        username: 'prussell',
      },
    ]);
  });

  return (
    <main>
      Hello World!!
      <p>User Id: {userId}</p>
      {data.map((e, i) => (
        <>
          <p key={i}>First Name: {e.firstName}</p>
          <p key={i}>Email: {e.email}</p>
          <p key={i}>Username: {e.username}</p>
        </>
      ))}
    </main>
  );
}
