import Column from "./column";

export default function BoardWrapper() {
  return (
    <main className="flex gap-6 overflow-x-auto pb-6">
      <Column title="To Do" count={3} status="TODO" />
      <Column title="In Progress" count={1} status="IN_PROGRESS" />
      <Column title="Done" count={2} status="DONE" />
    </main>
  );
}
