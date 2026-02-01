"use client";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  provider: "kakao" | "google";
}

export default function SocialButton({ provider }: SocialButtonProps) {
  const supabase = createClient();

  const config = {
    kakao: {
      src: "/icons/kakao-login.png",
      alt: "카카오 로그인",
    },
    google: {
      src: "/icons/google-login.svg",
      bgColor: "bg-[#F2F2F2]",
      alt: "구글 로그인",
    },
  };

  const { src, alt, bgColor } = config[provider];

  // 로그인 로직
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/callback`,
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className={cn(
        "relative w-full h-[56px] flex items-center justify-center overflow-hidden active:opacity-90 transition-opacity",
        bgColor
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority={provider === "kakao"}
      />
    </button>
  );
}
