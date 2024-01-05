import React from 'react'
import Button from "@/components/Button";
import Image from "next/image";
import { auth } from '@clerk/nextjs';
import NewMeetingModal from '@/components/NewMeetingModal';
import JoinMeetingModal from '@/components/JoinMeetingModal';

type Props = {}

export default function StartPage(props: Props) {
    const { userId } = auth();

    return (
        <>
            <div className="flex-col">
                <div className="flex flex-col items-center">
                    <Image src="/logo.jpg" className="rounded-xl" alt="Heartsync Logo" width={200} height={200} />
                    <h1 className="text-5xl font-bold my-10">
                        heart sync
                    </h1>
                </div>
                <div className="flex-row">
                    <JoinMeetingModal />
                    {
                        userId ?
                            (
                                <NewMeetingModal />
                            )
                            :
                            <div className="flex justify-center">
                                <Button className="ml-3" link="/start/login">
                                    login
                                </Button>
                                <Button link="/start/signup">
                                    sign up
                                </Button>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}