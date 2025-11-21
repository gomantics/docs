import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

import { GomanticsLogo } from "@/components/logo/gomantics";
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from "@/components/docs/mobile-navigation";
import { MobileSearch, Search } from "@/components/docs/search";
import { ThemeToggle } from "@/components/docs/theme-toggle";
import { CloseButton } from "@headlessui/react";
import { cn } from "@/lib/utils";

function TopLevelNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm/5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

export const Header = forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithoutRef<typeof motion.div>
>(function Header({ className, ...props }, ref) {
  const { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
  const isInsideMobileNavigation = useIsInsideMobileNavigation();

  const pathname = usePathname();
  const library = ["sx", "chunkx", "cfgx", "semantix"].find((lib) =>
    pathname.startsWith(`/${lib}`)
  );
  const { scrollY } = useScroll();
  const bgOpacityLight = useTransform(scrollY, [0, 72], ["50%", "90%"]);
  const bgOpacityDark = useTransform(scrollY, [0, 72], ["20%", "80%"]);

  return (
    <motion.div
      {...props}
      ref={ref}
      className={cn(
        className,
        "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80",
        !isInsideMobileNavigation &&
          "backdrop-blur-xs lg:left-72 xl:left-80 dark:backdrop-blur-sm",
        isInsideMobileNavigation
          ? "bg-white dark:bg-zinc-900"
          : "bg-white/(--bg-opacity-light) dark:bg-zinc-900/(--bg-opacity-dark)"
      )}
      style={
        {
          "--bg-opacity-light": bgOpacityLight,
          "--bg-opacity-dark": bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "absolute inset-x-0 top-full h-px transition",
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            "bg-zinc-900/7.5 dark:bg-white/7.5"
        )}
      />
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <CloseButton
          as={Link}
          href="/"
          aria-label="Home"
          className="flex items-center gap-2"
        >
          <GomanticsLogo className="h-6" />
          {library && (
            <>
              <span className="text-zinc-300 dark:text-zinc-600">/</span>
              <span className="font-semibold text-zinc-900 dark:text-white">
                {library}
              </span>
            </>
          )}
        </CloseButton>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem
              href={`mailto:karn@gomantics.dev?subject=${encodeURIComponent(
                `Support Request for ${library || "Gomantics Docs"}`
              )}`}
            >
              Support
            </TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  );
});
