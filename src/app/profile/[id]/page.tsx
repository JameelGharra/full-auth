export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col items-center
        justify-center min-hscreen py-2">
            <h1>Profile</h1>
            <hr/>
            <p className="text-4xl">Profile page</p>
            <span className="p-2 rounded bg-orange-500
            text-black">
                {params.id}
            </span>
        </div>
    )
}