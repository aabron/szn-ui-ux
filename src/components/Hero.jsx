import React from 'react'
import placeholder from '../images/placeholder.jpg'

function Hero() {
  const topNfts = [
    {
        id: 1,
        name: 'NFT',
        rank: 'great | 80',
        icon: placeholder,
    },
    {
        id: 2,
        name: 'NFT',
        rank: 'great | 80',
        icon: placeholder,
    },
    {
        id: 3,
        name: 'NFT',
        rank: 'great | 80',
        icon: placeholder,
    },
]

return (
    <div name='dashboard' className='flex relative w-[100%] justify-center '>
        <div id="mobileComps" className="mx-12 md:hidden flex flex-col w-5/6">
            <div id="liveGame" className="px-32 py-24 h-10 mt-10 bg-lightgraybg rounded-xl">
                <span>Live Game Stats</span>
            </div>
            <div name='topNfts' className="flex flex-col mt-8">
                {topNfts.map(({ id, name, rank, icon }) => (
                    <div key={id} className="flex flex-row px-32 py-2 mb-5 rounded-xl bg-lightgraybg">
                        <img src={icon} alt={name} className='w-12' />
                        Name: <span>{name}</span>
                        Ranking: <span>{rank}</span>
                    </div>
                ))}
            </div>
            <div id='things' className=''>

            </div>
        </div>


    </div>
)
                }

export default Hero