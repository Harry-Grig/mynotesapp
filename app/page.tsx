"use client";
import { useState } from "react";
import Header from "@/components/dashboard/header";
import Board from "@/components/dashboard/board";
import TaskModal from "@/components/dashboard/taskmodal";
import { SignOutButton } from "@clerk/nextjs";

export default function DashboardPage() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <Header onNewTask={() => setIsTaskModalOpen(true)} />
      <Board />

      <TaskModal
        open={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
      />

      <SignOutButton>
        <button className="mt-10 text-sm opacity-70 hover:opacity-100 transition">
          Sign Out
        </button>
      </SignOutButton>
    </div>
  );
}
