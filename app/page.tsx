import Header from "@/components/dashboard/header";
import Board from "@/components/dashboard/board";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <Board />
    </div>
  );
}
