"use client";

import { useEffect, useState } from "react";

interface Room {
    id: string;
    roomName: string;
    shape: [];
    userId: string;
}

export const useRoomByName = (roomName: string) => {
    const [room, setRoom] = useState<Room>();

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchRoom = async () => {
            try {
                // const response = await fetch(`https://excalidraw-clone.onrender.com/room/${roomName}`, {
const response = await fetch(`http://localhost:3001/room/${roomName}`, {
                    method: "GET",
                    headers: {
                        "authorization": `${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                const data: Room = await response.json();
                console.log(data);
                setRoom(data);
            } catch (err: any) {
                console.log(err.message);
            }
        };

        fetchRoom();
    }, []);

    return room;
};
