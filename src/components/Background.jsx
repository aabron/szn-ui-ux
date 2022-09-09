import React from 'react';
import Hero from './Hero';

function Background(){

    return(
        <div>
            <div className='flex h-screen relative justify-center'>
                <div className='bg-darkgraybg w-screen max-w-screen-xl md:ml-60 md:mr-12 h-[80rem] top-[-3rem] md:top-[-5.4rem] rounded-xl relative z-[-1]'>
                    <Hero />
                </div>
            </div>
        </div>
    );
};

export default Background;