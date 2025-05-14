import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=" max-w-screen h-screen flex-col">
      <Header />
      <main className="flex-center wrapper">{children}</main>
      <Footer />
    </div>
  );
}
