import PageWrapper from "@/components/common/PageWrapper";
import SocialButton from "@/components/auth/SocialButton";
import Image from "next/image";

export default function LoginPage() {
  return (
    <PageWrapper
      hasBottomNav={false}
      hasTopHeader={false}
      className="flex flex-col items-center justify-center pt-55"
    >
      {/* 로고 이미지 */}
      <Image
        src="/icons/logo-icon.svg"
        width={110}
        height={110}
        alt="logo image"
      />
      {/* 로고 텍스트 */}
      <div className="flex flex-col items-center gap-2 text-accent">
        <p className="font-logo-kor text-6xl">트게더</p>
        <div className="flex items-center gap-1.5 font-logo-eng text-primary-dark">
          <p className="text-4xl">T</p>
          <div className="flex flex-col text-sm font-bold">
            <p>rip</p>
            <p>ogether</p>
          </div>
        </div>
      </div>

      {/* 소셜로그인 버튼 */}
      <div className="flex flex-col items-center gap-3 pt-30 w-full max-w-[320px] mt-10">
        <SocialButton provider="kakao" />
        <SocialButton provider="google" />
      </div>
    </PageWrapper>
  );
}
