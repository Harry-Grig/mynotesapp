import Header from "@/components/dashboard/header";
import Board from "@/components/dashboard/board";
import { SignOutButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 text-neutral-100">
      <Header />
      <Board />

      <div className="mt-10">
        <SignOutButton>
          <button className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors text-neutral-200">
            Sign out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
