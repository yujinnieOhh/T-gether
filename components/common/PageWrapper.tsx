import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  hasTopHeader?: boolean;
  hasBottomNav?: boolean;
}

export default function PageWrapper({
  children,
  className,
  hasTopHeader = true,
  hasBottomNav = true,
}: PageWrapperProps) {
  return (
    /* max-w-[430px]로 모바일 규격 고정, mx-auto로 중앙 정렬 */
    <main className="relative mx-auto min-h-dvh max-w-[430px] bg-background shadow-sm overflow-x-hidden">
      <div
        className={cn(
          "flex flex-col w-full h-full px-16 py-24", // 기본 여백 16px, 상하 24px
          hasTopHeader ? "pt-[72px]" : "",
          hasBottomNav ? "pb-[78px]" : "", // 하단바 높이만큼 여분
          className
        )}
      >
        {children}
      </div>
    </main>
  );
}
