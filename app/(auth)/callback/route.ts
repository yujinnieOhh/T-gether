import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server"; // 서버용 클라이언트는 별도 설정 필요

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // 코드가 있으면 세션으로 교환하고, 없으면 다음 페이지로 이동시킵니다.
  const next = searchParams.get("next") ?? "/map";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // 에러 발생 시 로그인 페이지로 리다이렉트
  return NextResponse.redirect(
    `${origin}/login?message=Could not authenticate user`
  );
}
