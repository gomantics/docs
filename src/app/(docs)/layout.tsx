import glob from "fast-glob";

import { Layout } from "@/components/docs/layout";
import { type Section } from "@/components/docs/section-provider";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await glob("**/*.mdx", { cwd: "src/app" });
  const allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => {
      // Dynamic import needs to be relative to the file where it's called (src/app/(docs)/layout.tsx)
      // But the glob is relative to src/app
      // So if filename is (docs)/sx/page.mdx, the import should be ../${filename}
      try {
        const importedPage = await import(`../${filename}`);
        return [
          "/" +
            filename
              .split("/")
              .filter(
                (segment) => !segment.startsWith("(") || !segment.endsWith(")")
              )
              .join("/")
              .replace(/(^|\/)page\.mdx$/, ""),
          importedPage.sections,
        ];
      } catch (e) {
        console.error(`Failed to load sections for ${filename}`, e);
        return null;
      }
    })
  )) as Array<[string, Array<Section>] | null>;

  const allSections = Object.fromEntries(
    allSectionsEntries.filter(
      (entry): entry is [string, Array<Section>] => entry !== null
    )
  );

  return (
    <div className="flex min-h-full">
      <div className="w-full">
        <Layout allSections={allSections}>{children}</Layout>
      </div>
    </div>
  );
}
