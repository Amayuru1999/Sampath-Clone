import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Amayuru',lastName: 'Amarasinghe'};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
            <div className="root-layout">
              <Image src="/icons/sampath.jpg" width={30} height={30} alt="menu icon"/>
            </div> 
        </div>
        {children}
    </main>
  );
}
