import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {NavigationMenus} from "@/components/NavigationMenu";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-8">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <span className="font-bold max-[420px]:hidden">Arjay</span>
        </div>
        <nav className="flex max-w-[68vw] gap-6 overflow-x-auto md:max-w-none">
          <NavigationMenus/>
        </nav>
      </div>
    </header>
  );
}
