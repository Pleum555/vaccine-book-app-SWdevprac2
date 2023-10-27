export default function AddHospitalForm({action}: {action:(addHospitalForm: FormData)=>Promise<never>}) {
    return(
        <form action={action} className="block ring-1 rounded-lg mx-6 my-6 bg-sky-50 shadow-lg p-4">
            <div className="text-xl text-blue-700">Create Hospital</div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 px-4" htmlFor="name">
                    Name</label>
                <input type="text" required id="name" name="name" placeholder="Hospital Name"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 px-4" htmlFor="address">
                    Address</label>
                <input type="text" required id="address" name="address" placeholder="Hospital Address"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 px-4" htmlFor="district">
                    District</label>
                <input type="text" required id="district" name="district" placeholder="Hospital District"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 px-4" htmlFor="province">
                    Province</label>
                <input type="text" required id="province" name="province" placeholder="Hospital Province"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-36 block text-gray-700 px-4" htmlFor="postalcode">
                    Postal Code</label>
                <input type="text" required id="postalcode" name="postalcode" placeholder="Hospital Postal Code"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 px-4" htmlFor="tel">
                    Tel.</label>
                <input type="text" required id="tel" name="tel" placeholder="Hospital Telephone"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 px-4" htmlFor="picture">
                    Picture</label>
                <input type="text" required id="picture" name="picture" placeholder="URL"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 block mx-4 my-2
            text-white p-2 rounded">Add New Hospital</button>
        </form>
    )
}