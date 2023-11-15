"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import React from "react"

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = React.useState("nothing")
    const getUserDetails = async () => {
        const response = await axios.get('api/users/me')
        console.log(response.data)
        setData(response.data.data._id)
    }
    const logout = async () => {
        try {
            await axios.get("api/users/logout")
            toast.success("Logout successful")
            router.push("/login")
        } catch(error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    return (
        <div className="flex flex-col items-center
        justify-center min-hscreen py-2">
            <h1>Profile</h1>
            <hr/>
            <p>Profile page</p>
            <h2 className="p-1 rounded bg-green-500">
                {data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>
                    {data}
                    </Link>}
            </h2>
            <hr />
            <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700
                text-white font-bold py-2 px-4 rounded"
            >
                Logout
            </button>
            <button
                onClick={getUserDetails}
                className="bg-green-800 mt-4 hover:bg-blue-700
                text-white font-bold py-2 px-4 rounded"
            >
                Get details
            </button>
        </div>
    )
}