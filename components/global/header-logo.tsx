"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function HeaderLogo() {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <Link href="/">
      {theme === "dark" ? (
        <Image src="/assets/images/logo-dark.svg" alt="I9 Questões" width="72" height="40" />
      ) : (
        <Image src="/assets/images/logo-light.svg" alt="I9 Questões" width="72" height="40" />
      )}
    </Link>
  );
}
