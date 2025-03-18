export const getRoom = async (roomName: string) => {
    const res = await fetch(`https://excalidraw-clone.onrender.com/room/${roomName}`, {
        method: "GET",
    });

    if (res.ok) {
        const data = await res.json();
        return data.room;
    }

    throw new Error("Something went wrong");
};
