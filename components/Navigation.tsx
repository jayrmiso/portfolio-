import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {NavigationMenus} from "@/components/NavigationMenu";

export default function Navigation() {
  return (
    <header className="w-full border-b-2 border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-8">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-bold">Arjay</span>
        </div>
        <nav className="flex gap-6">
          <NavigationMenus/>
        </nav>
      </div>
    </header>
  );
}