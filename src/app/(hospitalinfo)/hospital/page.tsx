import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react"
import { LinearProgress } from "@mui/material";

export default function Hospital() {
    const hospitals = getHospitals()
    
    return (
        <main className="text-center p-5 h-full bg-stone-200 text-black">
            <h1 className="text-xl fint-medium">Select Your Hospital</h1>
            {/* <CardPanel/> */}
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>

            {/* <hr className="my-10"/>
            <h1 className="text-xl font-medium">TRY Client-side Hospital Panel</h1>
            <CardPanel/> */}

        </main>
    )
}