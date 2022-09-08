
import placeholder from '../images/placeholder.jpg'

function Variables() {
    var team1 = 'Falcons';
    var team2 = 'Eagles';
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
    return(topNfts,liveGameStats, team1, team2);
}


export default Variables;