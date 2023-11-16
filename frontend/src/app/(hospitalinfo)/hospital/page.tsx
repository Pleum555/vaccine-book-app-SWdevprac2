import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react"
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import AddHospitalForm from "@/components/AddHospitalForm";
import Hospital from "@/db/models/Hospital"
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function HospitalPage() {
    const hospitals = getHospitals()

    const addHospital = async (addHospitalForm:FormData) => {
        "use server"
        const name = addHospitalForm.get("name")
        const address = addHospitalForm.get("address")
        const district = addHospitalForm.get("district")
        const province = addHospitalForm.get("province")
        const postalcode = addHospitalForm.get("postalcode")
        const tel = addHospitalForm.get("tel")
        const picture = addHospitalForm.get("picture")

        try{
            await dbConnect()
            const hospital = await Hospital.create({
                "name": name,
                "address": address,
                "district": district,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture,
            })
        } catch(error) {
            console.log(error)
        }
        revalidateTag("hospitals")
        redirect("/hospital")
    }

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token)
    return (
        <main id='hospital-catalog' className="text-center p-5 h-full bg-stone-200 text-black">
            <h1 className="text-xl font-medium">Select Your Hospital</h1>
            {/* <CardPanel/> */}
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
        </main>
    )
    
    const profile = await getUserProfile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt)
    
    return (
        <main id='hospital-catalog' className="text-center p-5 h-full bg-stone-200 text-black">
            <h1 className="text-xl font-medium">Select Your Hospital</h1>
            {/* <CardPanel/> */}
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
                
            {
                (profile.data.role=="admin")?
                <AddHospitalForm action={addHospital}/>
                : null
            }

            </Suspense>

            {/* <hr className="my-10"/>
            <h1 className="text-xl font-medium">TRY Client-side Hospital Panel</h1>
            <CardPanel/> */}

        </main>
    )
}