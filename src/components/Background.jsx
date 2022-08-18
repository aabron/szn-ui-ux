import React from 'react';
import Hero from './Hero';

function Background(){

    return(
        <div>
            <div className='flex h-screen relative justify-center'>
                <div className='bg-darkgraybg w-screen max-w-screen-xl mx-2 h-full top-[-3rem] md:top-[-5.4rem] rounded-xl relative z-[-1]'>
                    <Hero />
                </div>
            </div>
        </div>
    );
};

export default Background;