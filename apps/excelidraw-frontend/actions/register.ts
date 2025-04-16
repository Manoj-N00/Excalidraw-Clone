"use server"
import { RegisterSchema } from "@repo/common/types"
import { redirect } from "next/navigation"
import { z } from "zod"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // const res = await fetch("https://excalidraw-clone.onrender.com/signup", {
const res = await fetch("https://excalidraw-clone-d5sx.onrender.com/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });

    if (res.ok) {
        return res.json();
    }

    throw new Error("Something went wrong");
};
