import Link from "next/link";

export default function SxDocs() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 mb-8"
        >
          ← Back to home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
            sx
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            String extensions for Go
          </p>
          <a
            href="https://github.com/gomantics/sx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h2>Documentation coming soon</h2>
          <p>This page is under construction. Check back later for full documentation.</p>
        </div>
      </main>
    </div>
  );
}

