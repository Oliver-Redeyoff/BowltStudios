import './App.css'
import React, {useEffect, useRef, useState} from 'react'
import BowltSudiosLogo from "./BowltSudiosLogo"

function App() {
    const appRef = useRef<HTMLDivElement>(null)
    const [mousePos, setMousePos] = useState<{x: number | null, y: number | null}>({x: null, y: null})

    useEffect(() => {
        if (appRef.current) {
            appRef.current.addEventListener("mousemove", (event) => {
                setMousePos({x: event.pageX, y: event.pageY})
            })
        }
    }, [appRef])

    return (
        <div ref={appRef} className="App">
            <BowltSudiosLogo mousePos={mousePos} />
            <div className="ComingSoon">Coming Soon...</div>
        </div>
      )
}

export default App
