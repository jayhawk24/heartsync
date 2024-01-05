import Nav from "@/components/Nav";
import { auth } from "@clerk/nextjs";
import Image from "next/image";

interface StartLayoutProps {
  children: React.ReactNode
}

export default function StartLayout({ children }: StartLayoutProps) {
  const { userId } = auth()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-screen">
      <div className="hidden sm:flex">
        <div className="relative h-full w-full object-cover ">
          <Image src="/banner.jpg" alt="Vercel Logo" layout="fill" />
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        {children}
        {userId && <Nav />}
      </div>
    </div>
  )
}