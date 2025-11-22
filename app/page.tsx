import DashboardClient from "@/components/dashboard/dashboard-client";
import BoardWrapper from "@/components/dashboard/board-wrapper";

export default function DashboardPage() {
  return <DashboardClient board={<BoardWrapper />} />;
}
