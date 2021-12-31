function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="w-16 h-16 rounded-full border p-[2px]" src='https://i.ibb.co/PrCpRTB/profile111.jpg' alt="" />

            <div className="flex-1 mx-4">
                <h2 className="font-bold">sahinur_dev</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>

            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
