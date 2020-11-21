import React, { useState } from 'react'
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Vye Agra',
            url: 'https://png.pngitem.com/pimgs/s/180-1801369_the-greatest-lessons-through-the-inspiring-png-download.png',
        },
        {
            name: 'Tiny Kox',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Dill Doe',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Mike Oxmaul',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Anita Hanjaab',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Annie Position',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Clee Torres',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Dixie Rect',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'E. Norma Scock',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Hans Omaicok',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Stella Virgin',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Neil Down',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Ivana Fuccu',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Harry Kuntz',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Wot Di Fuk',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Biggus Dickus',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
        {
            name: 'Sum Ting Wong',
            url: 'https://png.pngitem.com/pimgs/s/180-1801413_sticker-other-elon-musk-joint-beuh-elon-musk.png',
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div 
                        style={{ backgroundImage: `url(${person.url})` }} 
                        className="card"
                        >
                        <h3>{person.name}</h3>
                        </div>
                </TinderCard>
            ))}
                </div>            
        </div>
    )
}

export default TinderCards
