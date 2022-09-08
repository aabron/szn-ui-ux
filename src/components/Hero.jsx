import React from 'react'
import placeholder from '../images/placeholder.jpg'
//import Variables from './Variables.jsx'

function Hero() {

  var team1 = 'Falcons ';
  var team2 = 'Hunters ';
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
    const liveGameStats = [
    {
        id:'CurrentGame ',
        name: 'Stats ',
        team1: team1,
        team2: team2,
        team1Score: null,
        team2score: null,
        currentHalf: null,
    }
]
    const overallStats = [
    {
        id: 1,
        name: "Total Wins",
        value: null,

    },
    {
        id:2,
        name:"Total Losses",
        value: null,
    },
    {
        id:3,
        name:"Games Played",
        value: null
    },
    {
        id:4,
        name:"Overall Rank",
        value: null,
    },
    {
        id:5,
        name: "LeaderBoard Position",
        value: null,
    },
    {
        id:6,
        name: "Placeholder",
        value: null
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
            <div id='mobileStats' className=''>

            </div>
        </div>

        <div id="pcComps" className=" hidden md:flex mx-12 flex-col w-5/6">
            <div name='topNfts' className="flex flex-row mt-8 justify-center ">
                {topNfts.map(({ id, name, rank, icon }) => (
                    <div key={id} className="flex flex-row w-40 py-2 mb-5 mx-12 h-60 rounded-xl bg-lightgraybg flex-wrap">
                        <img src={icon} alt={name} className='w-12' />
                        Name: <span>{name}</span>
                        Ranking: <span>{rank}</span>
                    </div>
                ))}
            </div>
            <div id='pcStats' className='inline-grid grid-cols-2'>
                <div name='liveGameStats' className="px-32 py-24 h-32 mt-10 w-auto bg-lightgraybg rounded-xl">
                    {liveGameStats.map(({team1, team2, team1Score, team2Score, currentHalf, id}) => (
                        <div key={id} className="flex flex-wrap justify-center my-[-1.5rem]">
                            team1: <span>{team1}</span>
                            team2: <span>{team2}</span>
                            team1Score: <span>{team1Score}</span>
                            team2Score: <span>{team2Score}</span>
                            currentHalf: <span>{currentHalf}</span>
                        </div>
                    ))}
                </div>
                <div id='overallStats' className='inline-grid grid-rows-2 grid-cols-3'>
                    {overallStats.map(({id, name, value}) => (
                        <div key={id} className='flex flex-grid my-6 h-24 ml-5 rounded-xl bg-lightgraybg flex-wrap'>
                            Name: <span>{name}</span>
                            Value: <span>{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div id='pcCalenderSocials'>

            </div>
        </div>

    </div>
)
                }

export default Hero