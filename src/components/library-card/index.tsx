"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionValue,
} from "framer-motion";
import { GridPattern } from "@/components/grid-pattern";
import type { LucideIcon } from "lucide-react";

interface LibraryCardProps {
  lib: {
    name: string;
    path: string;
    description: string;
    icon: LucideIcon;
  };
  pattern: {
    y: number;
    squares: Array<[x: number, y: number]>;
  };
}

function LibraryIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-inset ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-emerald-600/10 group-hover:ring-emerald-600/30 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-400/10 dark:group-hover:ring-emerald-400/30">
      <Icon
        className="h-5 w-5 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-emerald-600 dark:stroke-zinc-400 dark:group-hover:stroke-emerald-400"
        strokeWidth={2}
      />
    </div>
  );
}

function LibraryPattern({
  mouseX,
  mouseY,
  ...gridProps
}: {
  y: number;
  squares: Array<[x: number, y: number]>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-emerald-950/30 dark:to-green-950/30"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-emerald-600/20 stroke-emerald-700/30 dark:fill-emerald-400/5 dark:stroke-emerald-300/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

export function LibraryCard({ lib, pattern }: LibraryCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-zinc-900 dark:hover:shadow-black/5"
    >
      <LibraryPattern {...pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-emerald-600/20 dark:ring-white/10 dark:group-hover:ring-emerald-400/30" />
      <div className="relative rounded-2xl px-6 pb-6 pt-16">
        <LibraryIcon icon={lib.icon} />
        <h3 className="mt-4 text-xl font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors dark:text-white dark:group-hover:text-emerald-400">
          <Link href={lib.path}>
            <span className="absolute inset-0 rounded-2xl" />
            {lib.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {lib.description}
        </p>
      </div>
    </div>
  );
}
