import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/")

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      {children}
    </div>
  );
}
