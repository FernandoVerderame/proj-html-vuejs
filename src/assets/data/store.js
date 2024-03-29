import { reactive } from "vue";

export const store = reactive({
    // * header data
    headerLinks: [
        {
            id: 1,
            text: 'Home',
            url: '#',
            current: false,
        },
        {
            id: 2,
            text: 'Fixtures & results',
            url: '#',
            current: true,
        },
        {
            id: 3,
            text: 'league table',
            url: '#',
            current: false,
        },
        {
            id: 4,
            text: 'players',
            url: '#',
            current: false,
        },
        {
            id: 5,
            text: 'gallery',
            url: '#',
            current: false,
        },
        {
            id: 6,
            text: 'blog',
            url: '#',
            current: false,
        },
        {
            id: 7,
            text: 'contact',
            url: '#',
            current: false,
        },
    ],
    slider: [
        {
            id: 1,
            image: 'slider1-1.jpg',
            primaryText: 'Welcome To Football Club',
            description: 'Live match fix types and results'
        },
        {
            id: 2,
            image: 'slider2-1.jpg',
            primaryText: 'Football Club Sport Club',
            description: 'Football is a head game'
        },
        {
            id: 3,
            image: 'slider3.jpg',
            primaryText: 'Professional Football Football Club',
            description: 'Football is the poetry of movement'
        },
        {
            id: 4,
            image: 'slider4.jpg',
            primaryText: 'Football Club Sport Club',
            description: 'Football is a head game'
        },

    ],
    // *main data
    teams: [
        {
            id: 1,
            name: "Istanbul Sports",
            logo: "league-club-1",
            win: 18,
            draw: 2,
            lose: 0,
            points: 42
        },
        {
            id: 2,
            name: "United Fs Club",
            logo: "league-club-2",
            win: 14,
            draw: 2,
            lose: 1,
            points: 35
        },
        {
            id: 3,
            name: "Schalke Club",
            logo: "league-club-3",
            win: 13,
            draw: 3,
            lose: 0,
            points: 32
        },
        {
            id: 4,
            name: "Inter Club",
            logo: "league-club-4",
            win: 13,
            draw: 2,
            lose: 1,
            points: 31
        },
        {
            id: 5,
            name: "Madrid Club",
            logo: "league-club-5",
            win: 12,
            draw: 1,
            lose: 2,
            points: 30
        },
        {
            id: 6,
            name: "Schalke Club",
            logo: "league-club-6",
            win: 11,
            draw: 0,
            lose: 3,
            points: 28
        },
        {
            id: 7,
            name: "Arsenal Club",
            logo: "league-club-7",
            win: 10,
            draw: 5,
            lose: 0,
            points: 26
        },
        {
            id: 8,
            name: "Bayern Club",
            logo: "league-club-8",
            win: 10,
            draw: 2,
            lose: 2,
            points: 24
        },
        {
            id: 9,
            name: "Atletico Club",
            logo: "league-club-9",
            win: 9,
            draw: 0,
            lose: 4,
            points: 20
        }
    ],
    // matches data
    spotlightCalendar: [
        {
            id: 1,
            team1ID: 1,
            team2ID: 2,
            date: "May 21, 2022 18:05 pm",
            stadium: "Expert Stadium"
        },
        {
            id: 2,
            team1ID: 1,
            team2ID: 2,
            date: "June 12, 2022 09:00 am",
            stadium: "Expert Stadium"
        },
        {
            id: 3,
            team1ID: 7,
            team2ID: 9,
            date: "July 8, 2022 12:00 pm",
            stadium: "Expert Stadium"
        },
        {
            id: 4,
            team1ID: 2,
            team2ID: 8,
            date: "August 3, 2022 19:00 pm",
            stadium: "Expert Stadium"
        },
        {
            id: 5,
            team1ID: 9,
            team2ID: 6,
            date: "September 18, 2022 21:00 pm",
            stadium: "Expert Stadium"
        },
        {
            id: 6,
            team1ID: 3,
            team2ID: 4,
            date: "October 20, 2022 17:00 pm",
            stadium: "Expert Stadium"
        },
    ],
    // players data
    players: [{
        name: 'Adam Brown', role: 'Forwarder', shirtNumber: 7, src: 'player1.jpg', id: 1,
    }, {
        name: 'Michael Kayn', role: 'Forwarder', shirtNumber: 9, src: 'player2.jpg', id: 2,
    }, {
        name: 'Micheal Lee', role: 'Forwarder', shirtNumber: 11, src: 'player3.jpg', id: 3,
    }, {
        name: 'Ethan Smith', role: 'Midfielder', shirtNumber: 15, src: 'player4.jpg', id: 4,
    }],
    // ranking data
    baseCalendar: [
        {
            id: 1,
            team1ID: 1,
            team2ID: 2
        },
        {
            id: 2,
            team1ID: 3,
            team2ID: 4
        },
        {
            id: 3,
            team1ID: 5,
            team2ID: 6
        },
        {
            id: 4,
            team1ID: 7,
            team2ID: 8
        },
        {
            id: 5,
            team1ID: 9,
            team2ID: 1
        },
        {
            id: 6,
            team1ID: 2,
            team2ID: 3
        },
        {
            id: 7,
            team1ID: 4,
            team2ID: 5
        },
        {
            id: 8,
            team1ID: 6,
            team2ID: 7
        },
        {
            id: 9,
            team1ID: 8,
            team2ID: 9
        }
    ],
    articles: [
        {
            id: 1,
            image: 'news1-1-150x150.png',
            date: '29.05.2022 - Football',
            title: 'What is Football?',
            text: 'Football is a sport that is known as a ball game and is loved by [...]'
        },
        {
            id: 2,
            image: 'news3-1-150x150.png',
            date: '29.05.2022 - Football',
            title: 'Football Rules',
            text: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]'
        },
        {
            id: 3,
            image: 'news2-1-150x150.png',
            date: '29.05.2022 - Football',
            title: 'Football Features',
            text: 'Football: It is an aerobic-based anaerobic sport in which jumps, kicks, turns, running with changing [...]'
        },
        {
            id: 4,
            image: 'news4-1-150x150.png',
            date: '29.05.2022 - Football',
            title: 'Football Terms',
            text: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]'
        },
        {
            id: 5,
            image: 'news6-1-150x150.png',
            date: '29.05.2022 - Football',
            title: 'How many football players are there in the world?',
            text: 'According to this report, there are more than 301 thousand football clubs, over 1.752 million [...]'
        },
    ],
    // sponsor data
    sponsors: [
        {
            id: 1,
            name: 'Regula 32',
            image: 'client2.png'
        },
        {
            id: 2,
            name: 'Relans Konsept',
            image: 'client3.png'
        },
        {
            id: 3,
            name: 'Standards and Partners',
            image: 'client4.png'
        },
        {
            id: 4,
            name: 'Elit Eva Sanayi',
            image: 'client7.png'
        },
        {
            id: 5,
            name: 'Nizam Turizm',
            image: 'client9.png'
        },
        {
            id: 6,
            name: 'Zylkade Turizm',
            image: 'client10.png'
        }
    ],
    // * footer data
    educationLinks: [
        {
            text: 'fixtures & results',
            url: '#',
            id: 1
        },
        {
            text: 'league table',
            url: '#',
            id: 2
        },
        {
            text: 'players',
            url: '#',
            id: 3
        },
        {
            text: 'gallery',
            url: '#',
            id: 4
        }],
    quickLinks: [
        {
            text: 'home',
            url: '#',
            id: 5
        },
        {
            text: 'blog',
            url: '#',
            id: 6
        },
        {
            text: 'gallery',
            url: '#',
            id: 7
        },
        {
            text: 'contact',
            url: '#',
            id: 8
        }]
})
