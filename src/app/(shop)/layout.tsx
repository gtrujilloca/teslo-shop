import { MaxWidthWrapper, Sidebar } from "@/components";
import { TopMenu } from "@/components/ui/top-menu/top-menu";

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />

      <MaxWidthWrapper >
          {children}
      </MaxWidthWrapper>
      {/* <div className="p-0 sm:px-10">
      </div> */}
    </main>
  );
}