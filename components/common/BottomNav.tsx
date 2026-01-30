"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, FolderHeart, Sun, NotebookPen, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "MAP", label: "지도", path: "/map", icon: Map },
  { id: "SCR", label: "수집", path: "/scrap", icon: FolderHeart },
  { id: "TDY", label: "투데이", path: "/today", icon: Sun },
  { id: "DIR", label: "일기", path: "/diary", icon: NotebookPen },
  { id: "MY", label: "마이", path: "/mypage", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full h-[78px] bg-background border-t border-border flex items-center justify-around px-8 z-50">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname.startsWith(item.path);
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.path}
            className="flex flex-col items-center justify-center gap-4 w-full h-full"
          >
            <Icon
              size={24}
              className={cn(
                "transition-colors",
                isActive ? "text-text-main" : "text-text-sub"
              )}
            />
            <span
              className={cn(
                "text-sm transition-colors",
                isActive ? "text-text-main" : "text-text-sub"
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
