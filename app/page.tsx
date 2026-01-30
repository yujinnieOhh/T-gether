import TopHeader from "@/components/common/TopHeader";
import BottomNav from "@/components/common/BottomNav";
import PageWrapper from "@/components/common/PageWrapper";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <PageWrapper>
        <div>
          <p>메인 화면</p>
        </div>
      </PageWrapper>
      <BottomNav />
    </main>
  );
}
