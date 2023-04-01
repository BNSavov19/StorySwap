import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo-black-and-white.svg';
import changeSeedArrow from '../assets/reroll-arrow.svg';
import { useLocation } from 'react-router-dom';
import { PlayerLobbyCardsContainer } from "../components/PlayerLobbyCardsContainer";

import { socket } from "../main";

export function GameLobby()
{
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [seed, setSeed] = React.useState(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    const location = useLocation();
    const { gamePin } = location.state;
    const [players, setPlayers]:any = useState([]);
    const [shouldDisplayPlayers, setShouldDisplayPlayers] = React.useState(true);

    useEffect(() => {
        socket.emit("users_in_room", gamePin);
        socket.on("users_in_room", (args) => {
            setPlayers(args);
        });
    }, [gamePin])

    socket.on("user_ready", async (args) => {
        // fetch user data from api
        console.log(args);

        const newPlayers = players.concat(args);

        console.log(newPlayers)

        setPlayers(newPlayers);
    });

    return (

            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-bg-start to-bg-end">

                {/*
                <div className="tabs-container">
                <div className="game-tab-button">Game</div>
                </div>
            */}
                <div className="flex flex-row items-center justify-center gap-3 mt-16">
                    <div className="bg-white text-2xl text-black font-bold py-3 px-5 rounded-tl-md rounded-tr-md">Players</div>
                    <div className="bg-white text-2xl text-black font-bold py-3 px-5 rounded-tl-md rounded-tr-md">Game</div>
                </div>
                
                <PlayerLobbyCardsContainer players={players}></PlayerLobbyCardsContainer>

                <button className="w-72 h-16 text-2xl text-center text-black bg-white border-black border-4 rounded-md font-bold shadow-solid-primary absolute bottom-12" onClick={() => navigate(`/game/${gamePin}/lobby`)}>Ready</button>
            </div>
    );
}