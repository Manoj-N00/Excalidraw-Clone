"use server"

import { LoginSchema } from "@repo/common/types"
import { z } from "zod"

export const login = async (values: z.infer<typeof LoginSchema>) => {
    // const res = await fetch("https://excalidraw-clone.onrender.com/signin", {
const res = await fetch("https://excalidraw-clone-d5sx.onrender.com/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });

    if (res.ok) {
        return res.json();
    }

    throw new Error("Something Went Wrong");
};
