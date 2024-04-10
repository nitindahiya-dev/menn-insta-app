'use client'

import Link from 'next/link';
import Image from 'next/image';
import { signIn, useSession, signOut } from 'next-auth/react';
import Modal from 'react-modal';
import { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { HiCamera } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
            <div className='flex justify-between items-center max-w-6xl mx-auto'>
                <Link href={'/'} className='lg:inline-flex hidden'>
                    <Image src="/insta-logo-black.webp" width={96} height={96} alt='instagram logo' />
                </Link>
                <Link href={'/'} className='lg:hidden'>
                    <Image src="/insta-logo.webp" width={96} height={96} alt='instagram logo' />
                </Link>

                <input type="text"
                    placeholder='Search'
                    className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]'
                />

                {session ? (
                    <div className="flex gap-2 items-center">
                        <IoMdAddCircleOutline className='text-2xl cursor-pointer transform hover:scale-125 transition duration-300  hover:text-red-600' onClick={() => setIsOpen(true)} />
                        <img src={session.user.image} alt={session.user.name} className='h-10 w-10 rounded-full object-cover cursor-pointer' onClick={() => signOut()} />
                    </div>
                ) : (
                    <button onClick={() => signIn()} className='font-semibold text-sm text-blue-500'>
                        Log In
                    </button>
                )}

            </div>
            <Modal isOpen={isOpen} className='max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white rounded-md shadow-md border-2' onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
                <div className="flex justify-center items-center flex-col h-[100%]">
                    <HiCamera className='text-5xl text-gray-400' />
                    <input type="text" maxLength='150' placeholder='Please enter your caption...' className='m-4 border-none text-center w-full focus:ring-0 outline-0' />
                    <button disabled className='w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100'>Upload Post</button>
                    <AiOutlineClose className='cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300 hover:scale-125' onClick={() => setIsOpen(false)} />
                </div>
            </Modal>
        </div>
    );
}
