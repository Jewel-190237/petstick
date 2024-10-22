import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='!bg-[#FFE6E4]'>
            <div className='pet-container py-12 md:py-16 lg:py-20 xl:py-24'>
                <div className='flex flex-row md:flex-col md:gap-10 lg:gap-20 xl:gap-24'>
                    <div className='w-full md:w-[25%]'>
                        <Image src='/logo.svg' width={118} height={43} alt='Logo' />
                        <p className='mt-10 font-4xl '>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, rem! Numquam consectetur eos sapiente placeat eum soluta assumenda maxime temporibus quas accusamus non deserunt ab dolorem, ullam earum incidunt veniam!
                        </p>
                    </div>
                    <div className='w-full md:w-[75%]'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;