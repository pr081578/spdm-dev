import { authOptions } from '@lib/authOptions';
import { getServerSession } from 'next-auth';
import { User } from '../../user';
import { LogInButton, LogOutButton } from './login';

async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div>Testing Auth</div>
      <LogInButton />
      <LogOutButton />
      <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>Client Call Session</h2>
      <User />
    </main>
  );
}

export default Page;
