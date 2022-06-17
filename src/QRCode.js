import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

export default function Canvas({text}) {

    const refCanvas = useRef()
    useEffect(() => {
        QRCode.toCanvas(refCanvas.current,text,(error) => {
            console.error(error);
        })
    },[text])
    return (
    <div>
        <canvas ref={refCanvas} id="canvas"></canvas>
    </div>
    )
}