'use client';

import { useUsernameState } from './GlobalProvider';

export default function Dashboard() {
  const [username] = useUsernameState();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome, {username || 'Guest'}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}
