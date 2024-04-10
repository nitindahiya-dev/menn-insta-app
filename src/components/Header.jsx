import Link from 'next/link';
import Image from 'next/image'
export default function Header() {
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

                <button className='font-semibold text-sm text-blue-500'>
                    Log In
                </button>
            </div>
        </div>
    )
}
