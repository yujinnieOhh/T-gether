import { Rubik, Gowun_Dodum, Gamja_Flower, Do_Hyeon } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// 로고용
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const dohyeon = Do_Hyeon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dohyeon",
});
// 일기 본문용
const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gowun",
});
// 일기 공유 이미지용
const gamjaFlower = Gamja_Flower({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gamja",
});
// 기본 폰트 (Pretendard)
const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${rubik.variable} ${dohyeon.variable} ${gowunDodum.variable} ${gamjaFlower.variable}`}
    >
      <body className="font-main bg-background text-text-main">{children}</body>
    </html>
  );
}
