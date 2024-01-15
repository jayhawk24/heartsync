"use client"
import React, { useState } from 'react'
import Modal from '@/components/Modal';
import Button from './Button';

type Props = {}

const JoinMeetingModal = (props: Props) => {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} heading='join a meeting'>
                {/* <VideoCall /> */}
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Copy your ID and anyone using the same server can use it to call you and vice versa!
                    </p>
                </div>
                <div className="mt-4">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Got it, thanks!
                    </button>
                </div>
            </Modal>
            <div >
                <Button className='w-full' onClick={() => setIsOpen(true)} >
                    join a meeting
                </Button>
            </div>

        </>
    )
}
export default JoinMeetingModal