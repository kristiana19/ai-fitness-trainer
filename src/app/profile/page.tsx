"use client";

import { useUser } from "@clerk/nextjs";
import ProfileHeader from "@/components/ProfileHeader";
import NoFitnessPlan from "@/components/NoFitnessPlan";

export const dynamic = "force-dynamic";

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
      <ProfileHeader user={user} />
      <NoFitnessPlan />
    </section>
  );
}