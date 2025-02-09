import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center items-center h-screen">
      <Sidebar />
      <div className="w-full h-full md:h-screen flex flex-col md:flex-row px-4 sm:py-12 pb-4 sm:px-64 gap-16 justify-evenly">
        {children}
      </div>
    </main>
  );
}
