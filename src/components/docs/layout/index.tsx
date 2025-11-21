"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/docs/footer";
import { Header } from "@/components/docs/header";
import { GomanticsLogo } from "@/components/logo/gomantics";
import { Navigation } from "@/components/docs/navigation";
import {
  SectionProvider,
  type Section,
} from "@/components/docs/section-provider";
import {
  cfgxNavigation,
  chunkxNavigation,
  defaultNavigation,
  sxNavigation,
} from "@/config/docs";

export function Layout({
  children,
  allSections,
}: {
  children: React.ReactNode;
  allSections: Record<string, Array<Section>>;
}) {
  const pathname = usePathname();
  const library = ["sx", "chunkx", "cfgx", "semantix"].find((lib) =>
    pathname.startsWith(`/${lib}`)
  );

  const navigation = pathname.startsWith("/sx")
    ? sxNavigation
    : pathname.startsWith("/chunkx")
    ? chunkxNavigation
    : pathname.startsWith("/cfgx")
    ? cfgxNavigation
    : defaultNavigation;

  return (
    <SectionProvider sections={allSections[pathname] ?? []}>
      <div className="h-full lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 xl:w-80 lg:dark:border-white/10">
            <div className="hidden lg:flex lg:items-center lg:gap-2">
              <Link href="/" aria-label="Home">
                <GomanticsLogo className="h-8" />
              </Link>
              {library && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">/</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    {library}
                  </span>
                </>
              )}
            </div>
            <Header />
            <Navigation
              navigation={navigation}
              className="hidden lg:mt-10 lg:block"
            />
          </div>
        </motion.header>
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  );
}
