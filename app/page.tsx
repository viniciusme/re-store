import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateAccountForm from "@/components/auth/create-account-form";
import LoginAccountForm from "@/components/auth/login.account-form";

export default async function Home() {
  let loggedIn = false;

  try {
    const supabase = createServerComponentClient({ cookies });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) loggedIn = true;
  } catch (error) {
    console.log("Home", error);
  } finally {
    if (loggedIn) redirect("/user-app", RedirectType.replace);
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Tabs
        defaultValue="create-account"
        className="w-[400px] rounded-md border pb-4 shadow-2xl"
      >
        <TabsList className="flex h-14 items-center justify-around rounded-b-none">
          <TabsTrigger
            value="create-account"
            className="transition-all delay-150"
          >
            Account
          </TabsTrigger>
          <TabsTrigger value="login" className="transition-all delay-150">
            Login
          </TabsTrigger>
        </TabsList>
        <TabsContent value="create-account">
          <CreateAccountForm />
        </TabsContent>
        <TabsContent value="login">
          <LoginAccountForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
