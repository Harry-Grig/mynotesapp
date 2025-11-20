import TaskCard from "@/components/dashboard/taskcard";

interface Props {
  title: string;
  count: number;
}

export default function Column({ title, count }: Props) {
  return (
    <section className="w-[330px] min-w-[280px] bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-4 shadow-md shadow-black/30 flex flex-col transition-all hover:border-neutral-700">
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg text-neutral-200">{title}</h2>
        <span className="px-2 py-0.5 text-sm rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
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
