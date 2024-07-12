import Link from "next/link";
import { CircleUserRoundIcon, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeButton } from "./theme-button";
import { HeaderLogo } from "./header-logo";

export function Header() {
  return (
    <header className="MaxWidthWrapper py-4 flex items-center gap-6 justify-between md:py-5">
      <HeaderLogo />

      <div className="flex items-center gap-6">
        <ThemeButton />

        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/cadastro" className="flex items-center gap-2">
            <CircleUserRoundIcon />
            Cadastre-se
          </Link>
        </Button>
      </div>
    </header>
  );
}
