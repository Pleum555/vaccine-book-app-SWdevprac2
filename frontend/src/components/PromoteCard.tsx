'use client'
import { useWindowListener } from "@/hooks/useWindowListener"
import { VideoPlayer } from "./VideoPlayer"
import { useState } from "react"

export function PromoteCard() {
    
    const [playing, setPlaying] = useState(true)
    // const [pointerPosition, setPointPosition] = useState({x:0, y:0})
    
    // useWindowListener('pointermove', (e)=>{
    //     setPointPosition( {x: (e as PointerEvent).clientX , y:(e as PointerEvent).clientY} )
    // })

    useWindowListener('contextmenu', (e)=>{
        e.preventDefault()  
    })

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 ring-1
        flex flex-row">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div className="m-5 text-black">
                Get your vaccine today.
                {/* ( {pointerPosition.x}, {pointerPosition.y}) */}
                <button className='block rounded-md bg-sky-600 hover:bg-indigo-600 px-6 py-2 my-2 
                text-white shadow-sm'
                onClick={()=>{ setPlaying(!playing) }}>
                    { playing? 'Pause':'Play' }
                </button>
            </div>
        </div>
    )
}