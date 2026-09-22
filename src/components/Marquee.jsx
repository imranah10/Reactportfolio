const ITEMS = [
  'REACT 18',
  'NEXT.JS 16',
  'TYPESCRIPT',
  'AI & LLMs',
  'THREE.JS',
  'FRAMER MOTION',
  'NODE.JS',
  'TAILWIND CSS 4',
  'PRISMA',
  'PLAYWRIGHT',
];

const Row = ({ reverse = false }) => (
  <div className="flex overflow-hidden mask-fade-x" aria-hidden="true">
    <div className={`flex shrink-0 items-center gap-10 pr-10 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="flex items-center gap-10 shrink-0">
          <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-stroke whitespace-nowrap">
            {item}
          </span>
          <span className={`w-2 h-2 rotate-45 ${i % 2 ? 'bg-magenta/60' : 'bg-cyan/60'}`} />
        </span>
      ))}
    </div>
  </div>
);

const Marquee = () => (
  <div className="relative py-8 border-y border-line bg-surface/40">
    <Row />
  </div>
);

export default Marquee;
