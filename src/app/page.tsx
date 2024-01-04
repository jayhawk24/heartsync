import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-screen">
      <div className="bg-blue-500 hidden sm:flex">
        <div className="relative h-full w-full ">
          <Image src="/banner.jpg" alt="Vercel Logo" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-col">
          <div className="flex flex-col items-center">
            <Image src="/logo.jpg" className="rounded-xl" alt="Heartsync Logo" width={200} height={200} />
            <h1 className="text-5xl font-bold my-10">
              heart sync
            </h1>
          </div>
          <div className="flex-row">
            <div>
              <Button className="w-full">
                join a meeting
              </Button>
            </div>
            <div className="flex justify-center">
              <Button className="ml-3">
                login
              </Button>
              <Button >
                sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
