"use client";

import { gomanticsLibraries } from "@/lib/utils";
import { LibraryCard } from "@/components/library-card";
import { GomanticsLogo } from "@/components/logo/gomantics";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

const libraryPatterns: Array<{
  y: number;
  squares: Array<[x: number, y: number]>;
}> = [
  {
    y: 16,
    squares: [
      [0, 1],
      [1, 3],
    ],
  },
  {
    y: -6,
    squares: [
      [-1, 2],
      [1, 3],
    ],
  },
  {
    y: 32,
    squares: [
      [0, 2],
      [1, 4],
    ],
  },
  {
    y: 22,
    squares: [[0, 1]],
  },
];

export default function Home() {
  return (
    <div className="min-h-svh relative bg-white dark:bg-zinc-950 flex flex-col items-center justify-center">
      <BackgroundBeams className="absolute inset-0" />

      <main className="flex z-10 flex-1 py-16 flex-col items-center justify-center max-w-5xl mx-auto px-2">
        {/* Logo Section - Centered */}
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div>
            <GomanticsLogo className="h-12" />
          </div>
          <p className="text-sm text-zinc-600 text-center sm:max-w-2xl max-w-xs dark:text-zinc-400">
            thoughtfully crafted Go libraries that make your code smarter, your
            workflow smoother, and your development more delightful
          </p>
        </div>

        {/* Libraries Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {gomanticsLibraries.map((lib, index) => (
            <div key={lib.name}>
              <LibraryCard
                lib={lib}
                pattern={libraryPatterns[index % libraryPatterns.length]}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center dark:border-white/10">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            built by{" "}
            <a
              href="https://github.com/karngyan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3 hover:text-zinc-900 transition-colors dark:hover:text-zinc-100"
            >
              karn
            </a>
            ,{" "}
            <a
              href="https://github.com/rpuneet"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3 hover:text-zinc-900 transition-colors dark:hover:text-zinc-100"
            >
              puneet
            </a>{" "}
            and{" "}
            <a
              href="https://cursor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3 hover:text-zinc-900 transition-colors dark:hover:text-zinc-100"
            >
              cursor
            </a>{" "}
            in 🇮🇳 &sdot;the source code is available on{" "}
            <a
              href="https://github.com/gomantics"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3 hover:text-zinc-900 transition-colors dark:hover:text-zinc-100"
            >
              GitHub
            </a>
            {process.env.NEXT_PUBLIC_GIT_SHA && (
              <>
                {" "}
                &sdot;{" "}
                <a
                  href={`https://github.com/gomantics/docs/tree/${process.env.NEXT_PUBLIC_GIT_SHA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs underline underline-offset-3 hover:text-zinc-900 transition-colors dark:hover:text-zinc-100"
                >
                  {process.env.NEXT_PUBLIC_GIT_SHA}
                </a>
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
