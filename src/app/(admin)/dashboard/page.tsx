"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  // console.log(session);
  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //   }
  //   if (status === "authenticated" && session?.user.role !== "admin") {
  //     router.push("/");
  //   }
  // }, [router, session?.user.role, status]);
  return (
    <div className="w-full h-24 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>Dashboard</h1>
    </div>
  );
}
