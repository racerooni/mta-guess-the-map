/*import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { getAuth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Navbar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req);

  if (!userId) {
    return (
      <div className="h-3 flex justify-end gap-2">
        <Button asChild variant={"outline"}>
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button asChild variant={"destructive"}>
          <Link href="/sign-up">Register</Link>
        </Button>
      </div>
    );
  } else {
    return <UserButton afterSignOutUrl="/" />;
  }
}
*/
