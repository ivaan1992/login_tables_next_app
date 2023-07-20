import { AuthProvider } from "@/components/AuthProvider";
import { authOptions } from "@/server/auth";
import { Session, getServerSession } from "next-auth";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children?: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <body>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
