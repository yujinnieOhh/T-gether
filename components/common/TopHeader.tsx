"use client";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface TopHeaderProps {
  showBackButton?: boolean;
}

export default function TopHeader({ showBackButton = true }: TopHeaderProps) {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex w-full h-[72px] justify-between items-center px-16 bg-background backdrop-blur-md">
      <div>
        {showBackButton && (
          <button onClick={() => router.back()}>
            <ChevronLeft size={32} className="text-text-main" />
          </button>
        )}
      </div>
      <div className="flex items-center">
        <Image src="/logo-icon.svg" width={40} height={40} alt="logo icon" />
        <p className="font-logo-kor text-accent text-3xl">트게더</p>
      </div>
      <div>
        <p className="font-logo-eng text-primary-dark text-base">
          Trip Together
        </p>
      </div>
    </header>
  );
}

//뒤로가기 버튼 없게 할 때는 <TopHeader showBackButton={false} /> 이렇게 넣으면 됨
