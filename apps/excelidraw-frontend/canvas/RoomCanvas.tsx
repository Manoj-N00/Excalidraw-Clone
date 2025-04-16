"use client";

import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";

export const RoomCanvas = ({ roomId, room }: { roomId: string; room: any }) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        // const ws = new WebSocket(`https://excalidraw-clone-1.onrender.com/?token=${token}`);
const ws = new WebSocket(`https://excalidraw-clone-1-9ff5.onrender.com/?token=${token}`);

        ws.onopen = () => {
            setSocket(ws);

            const data = JSON.stringify({
                type: "join_room",
                roomId,
            });

            ws.send(data);
        };

        return () => {
            const leaveData = JSON.stringify({
                type: "leave_room",
            });

            ws.send(leaveData);
            ws.close();
        };
    }, []);

    if (!socket) {
        return <div>Connecting to WebSocket...</div>;
    }

    return <Canvas roomId={roomId} socket={socket} room={room} />;
};
