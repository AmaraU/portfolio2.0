'use client'; // Indicate that this is a client-side rendered component
import { useState } from 'react'; // Import useState and useEffect hooks from React
import { Dialog, DialogPanel } from '@headlessui/react'; // Import Dialog and DialogPanel components from Headless UI
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import icons from Heroicons
import Link from 'next/link'; // Import Link from Next.js
import { navigation } from '@/constants/navigation';

const Navbar = () => {
    // State to control the mobile menu open/close
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <header className='fixed inset-x-0 top-0 z-50'>
                <nav aria-label="Global" className="bg-background flex items-center justify-between p-5 xl:px-36">
                    <div className="flex lg:flex-1">
                        {/* Company logo */}
                        <Link href="/" className="-m-1.5 p-1.5">
                            <h1 className='font-extrabold text-xl text-gray-300 font-sans'>Amara<span className='text-accent font-bold'> Ude</span></h1>
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        {/* Button to open mobile menu on small screens */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className='text-gray-600 font-light font-sans leading-6 hover:text-black'>
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a className="scroll" href="mailto:amaraude01@gmail.com">\
                            <span>Let's Work Together</span>
                            <i></i>
                        </a>
                    </div>
                </nav>


                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-secondary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                {/* <span className="sr-only">Your Company</span> */}
                                <h1 className='font-extrabold text-gray-400'>Amara<span className='font-extrabold text-accent'> Ude</span></h1>
                            </Link>

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-white"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className=" h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className='-mx-3 block rounded-lg px-3 py-2 text-zinc-400 font-semibold leading-7 hover:text-gray-900 hover:bg-gray-400'>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <a className="scroll2" href="mailto:amaraude01@gmail.com"><span>Let's Work Together</span><i></i></a>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    );
};

export default Navbar;
