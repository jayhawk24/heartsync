import Nav from "@/components/Nav";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import groupSvg from "../../../../public/undraw_business_chat_re_gg4h.svg";

interface StartLayoutProps {
    children: React.ReactNode
}

export default function ProfileLayout({ children }: StartLayoutProps) {
    const { userId } = auth()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 h-screen w-screen">
            <div className="hidden sm:flex">
                <div className="relative h-full w-full object-contain ">
                    <Image src={groupSvg} alt="Group logo" layout="fill" />
                </div>
            </div>
            <div className="flex items-center justify-center relative col-span-2">
                {children}
                {userId && <Nav />}
            </div>
        </div>
    )
}