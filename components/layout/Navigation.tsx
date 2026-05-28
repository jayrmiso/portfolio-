import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {NavigationMenus} from "@/components/layout/NavigationMenu";
import type { NavigationContent } from "@/lib/portfolio-types";

type NavigationProps = {
  content: NavigationContent;
};

export default function Navigation({ content }: NavigationProps) {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1680px] items-center justify-between px-6 py-5 sm:px-8 md:px-12 2xl:px-16">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{content.brandInitials}</AvatarFallback>
          </Avatar>
          <span className="font-bold max-[420px]:hidden">{content.brandName}</span>
        </div>
        <nav className="flex max-w-[68vw] gap-6 overflow-x-auto md:max-w-none">
          <NavigationMenus items={content.headerLinks} />
        </nav>
      </div>
    </header>
  );
}
