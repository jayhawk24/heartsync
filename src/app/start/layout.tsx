import Image from "next/image";

interface StartLayoutProps {
  children: React.ReactNode
}

export default function StartLayout({ children }: StartLayoutProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-screen">
      <div className="hidden sm:flex">
        <div className="relative h-full w-full ">
          <Image src="/banner.jpg" alt="Vercel Logo" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}