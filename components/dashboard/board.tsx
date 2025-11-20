import Column from "@/components/dashboard/column";

export default function Board() {
  return (
    <main className="flex gap-6 overflow-x-auto pb-6">
      <Column title="To Do" count={3} />
      <Column title="In Progress" count={1} />
      <Column title="Done" count={2} />
    </main>
  );
}
