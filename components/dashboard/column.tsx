import TaskCard from "@/components/dashboard/taskcard";

interface Props {
  title: string;
  count: number;
}

export default function Column({ title, count }: Props) {
  return (
    <section className="w-[330px] min-w-[280px] bg-white rounded-2xl p-4 shadow-sm flex flex-col border">
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="px-2 py-0.5 text-sm bg-indigo-100 text-indigo-700 rounded-md">
          {count}
        </span>
      </header>

      <div className="flex flex-col gap-3">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </section>
  );
}
