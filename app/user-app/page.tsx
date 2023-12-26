import { UserNav } from '@/components/common/user-nav';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { RedirectType } from 'next/dist/client/components/redirect';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const UserApp = async () => {
  let loggedIn = false;

  try {
    const supabase = createServerComponentClient({ cookies });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) loggedIn = true;
  } catch (error) {
    console.log('UserApp', error);
  } finally {
    if (!loggedIn) redirect('/', RedirectType.replace);
  }

  return (
    <div>
      <UserNav />
    </div>
  );
};

export default UserApp;
