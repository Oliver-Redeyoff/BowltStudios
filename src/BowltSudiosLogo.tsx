import "./BowltStudiosLogo.css"
import {useEffect, useRef, useState} from "react";

type VectorPNull = {x: number | null, y: number | null}
type Vector = {x: number, y: number}

export default function BowltSudiosLogo({ mousePos }: { mousePos: VectorPNull }) {
    const rightEyeIris = useRef<SVGPathElement>(null)
    const [rightEyeIrisOffset, setRightEyeIrisOffset] = useState<Vector>({x: 0, y: 0})
    const leftEyeIris = useRef<SVGPathElement>(null)
    const [leftEyeIrisOffset, setLeftEyeIrisOffset] = useState<Vector>({x: 0, y: 0})

    useEffect(() => {
        if (rightEyeIris.current && leftEyeIris.current) {
            if (mousePos.x && mousePos.y) {
                const rightEyeCoords = {
                    x: rightEyeIris.current.getBoundingClientRect().x,
                    y: rightEyeIris.current.getBoundingClientRect().y,
                }
                const newRightEyeCoords = pointOnCircle(rightEyeCoords, 35, mousePos as Vector)
                setRightEyeIrisOffset({
                    x: newRightEyeCoords.x - rightEyeCoords.x,
                    y: newRightEyeCoords.y - rightEyeCoords.y,
                })

                const leftEyeCoords = {
                    x: leftEyeIris.current.getBoundingClientRect().x,
                    y: leftEyeIris.current.getBoundingClientRect().y,
                }
                const newLeftEyeCoords = pointOnCircle(leftEyeCoords, 35, mousePos as Vector)
                setLeftEyeIrisOffset({
                    x: newLeftEyeCoords.x - leftEyeCoords.x,
                    y: newLeftEyeCoords.y - leftEyeCoords.y,
                })
            }
        }
    }, [mousePos])

    function pointOnCircle(center: Vector, radius: number, target: Vector) {
        const dx = target.x - center.x;
        const dy = target.y - center.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= radius) {
            return target; // Cursor is within the allowed radius
        }

        const scale = radius / distance;
        return {
            x: center.x + dx * scale,
            y: center.y + dy * scale,
        };
    }

    return <div className="BowltSudiosLogo">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="247.000000pt" height="247.000000pt"
             viewBox="0 0 247.000000 247.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,247.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path className="dash"
                    d="M872 2048 c2 -83 7 -133 14 -135 6 -2 23 26 39 62 15 36 31 65 36 65 5 0 15 -24 24 -53 31 -109 57 -113 94 -16 14 35 34 89 47 119 21 53 22 70 4 70 -4 0 -24 -46 -44 -103 -45 -125 -53 -139 -61 -112 -20 61 -52 129 -63 133 -7 2 -22 -19 -37 -52 -14 -31 -28 -56 -31 -56 -4 0 -4 33 0 73 7 76 0 137 -16 137 -5 0 -7 -58 -6 -132z"/>
                <path
                    d="M613 2138 c-65 -81 -56 -190 20 -254 35 -30 53 -28 80 8 32 43 35 126 6 182 -13 26 -28 51 -34 56 -20 17 -61 22 -72 8z m83 -72 c27 -57 29 -78 13 -127 -21 -62 -34 -67 -70 -28 -41 44 -52 75 -44 127 5 31 12 45 27 51 16 6 18 10 9 16 -11 6 -11 9 0 15 22 14 41 -2 65 -54z"/>
                <path
                    d="M1281 2024 c-30 -61 -51 -119 -48 -126 3 -8 32 -24 64 -36 42 -15 63 -29 71 -47 12 -26 26 -32 37 -16 11 19 -54 78 -100 91 -25 7 -45 17 -45 21 0 5 20 51 45 102 25 52 45 99 45 105 0 35 -21 6 -69 -94z"/>
                <path
                    d="M1580 1974 c0 -12 24 -51 48 -77 l26 -27 -21 -15 c-22 -16 -153 -169 -153 -179 0 -16 23 -2 57 36 21 23 60 66 87 95 l50 54 42 -42 c29 -28 44 -37 49 -29 5 8 -25 44 -84 101 -88 85 -101 96 -101 83z"/>
                <path
                    d="M328 1929 c-17 -10 -27 -42 -32 -113 -2 -35 3 -45 62 -112 36 -41 70 -74 76 -74 28 1 104 121 106 166 0 19 -48 64 -69 64 -11 0 -34 -12 -52 -27 l-32 -28 7 28 c12 48 -34 114 -66 96z m42 -121 c0 -73 -8 -83 -34 -43 -18 28 -21 81 -5 122 10 27 11 27 25 9 9 -13 14 -45 14 -88z m136 -3 c9 -35 -2 -68 -32 -104 -31 -38 -43 -38 -74 -6 -18 20 -21 28 -12 37 7 7 12 18 12 26 0 8 9 27 21 43 27 39 76 41 85 4z"/>
                <path
                    d="M887 1740 c-94 -16 -158 -60 -216 -147 -22 -33 -51 -71 -64 -84 -41 -43 -95 -195 -103 -290 -10 -111 -5 -121 71 -158 64 -32 68 -33 180 -29 63 1 115 0 115 -3 0 -3 -9 -41 -21 -85 -69 -261 -69 -265 -36 -297 18 -19 41 -25 142 -36 66 -7 128 -9 138 -6 14 6 17 2 17 -21 l1 -29 15 27 c8 15 23 32 34 38 17 9 20 8 20 -10 0 -14 5 -20 13 -16 6 3 20 9 29 12 10 3 20 14 23 25 4 11 12 16 21 12 9 -3 14 2 14 15 0 11 3 29 7 39 6 16 5 16 -10 4 -15 -12 -17 -11 -17 7 0 14 5 20 14 16 8 -3 17 0 22 7 4 7 2 15 -4 17 -7 2 -12 10 -12 17 0 8 -6 18 -13 22 -14 9 -39 80 -57 160 -6 28 -23 66 -36 84 -29 39 -26 41 69 59 50 9 71 9 81 1 10 -9 15 -8 19 3 3 8 21 22 40 31 50 23 64 43 82 110 18 70 19 157 2 203 -17 46 -129 184 -177 217 -22 15 -84 43 -137 61 -102 35 -164 41 -266 24z m193 -31 c30 -11 76 -26 102 -33 26 -8 63 -24 83 -36 34 -21 155 -161 155 -179 0 -6 -11 -6 -30 0 -21 8 -44 33 -82 95 -81 129 -94 104 -15 -29 42 -72 61 -87 117 -96 l35 -6 3 -62 c3 -60 2 -61 -31 -82 -29 -18 -62 -71 -80 -131 -5 -16 -115 -44 -217 -55 -50 -6 -57 -4 -79 19 -13 14 -36 28 -52 31 -38 9 -149 -28 -184 -61 -20 -19 -37 -24 -75 -24 l-49 0 -6 48 c-8 64 -41 134 -81 173 -37 36 -42 60 -19 79 9 7 13 20 10 29 -3 8 2 29 11 47 13 23 24 31 45 32 37 1 126 61 170 114 59 72 74 108 44 108 -8 0 -15 -9 -15 -20 0 -24 -112 -140 -158 -164 -49 -25 -59 -15 -26 24 16 19 42 53 57 76 15 23 40 47 55 55 15 7 34 19 42 26 13 10 148 38 200 41 8 1 40 -8 70 -19z m-465 -501 c23 -42 46 -148 33 -148 -11 0 -94 41 -112 55 -16 12 -17 18 -8 27 7 7 12 28 12 48 0 19 3 52 7 74 l6 39 18 -24 c10 -13 30 -45 44 -71z m825 33 c-11 -39 -25 -63 -49 -85 -45 -40 -38 7 9 73 35 48 52 53 40 12z m-432 -134 c23 -18 12 -27 -34 -27 -25 0 -65 -5 -89 -11 -23 -6 -51 -9 -61 -7 -16 4 -13 7 11 18 111 47 141 52 173 27z m149 -94 c13 -19 27 -60 32 -92 5 -33 19 -78 31 -101 16 -31 20 -52 15 -79 -8 -46 -25 -91 -35 -91 -10 0 -20 26 -20 50 0 18 -26 35 -34 22 -2 -4 -9 -26 -15 -49 l-12 -43 -52 0 c-76 0 -230 19 -241 30 -15 15 -8 75 20 173 14 51 30 102 35 115 5 13 9 38 9 57 0 19 4 36 9 39 5 3 41 9 80 12 61 6 74 4 91 -11 11 -10 21 -15 21 -12 1 4 3 12 4 17 1 6 3 12 4 15 3 11 37 -19 58 -52z"/>
                <path id="eye-right" className="eye"
                      d="M 1077 1483 C 1017 1352 1087 1167 1150 1291 C 1166 1321 1171 1350 1171 1401 C 1171 1528 1119 1573 1077 1483 Z M 1150 1425 C 1150 1370 1129 1289 1113 1283 C 1091 1274 1082 1290 1074 1348 C 1068 1396 1077.262 1396.24 1079.7 1415.083 C 1082.92 1439.977 1090.884 1455.953 1098.884 1480.953 C 1112.884 1522.953 1150 1472 1150 1425 Z"/>
                <path ref={rightEyeIris} id="eye-right-iris" className="eye-iris" style={{transform: `translateX(${rightEyeIrisOffset.x}px) translateY(${-rightEyeIrisOffset.y}px)`}}
                      d="M 1080.27 1393.89 C 1075.27 1385.55 1080.27 1370.54 1093.61 1360.53 C 1110.29 1347.19 1120.3 1347.19 1135.31 1363.87 C 1145.31 1377.21 1148.65 1392.22 1141.98 1397.22 C 1126.97 1413.9 1090.28 1412.23 1080.27 1393.89 Z"
                />
                <path id="eye-left" className="eye"
                      d="M 924 1468 C 914 1448 907 1409 906 1365 C 905 1301 908 1290 933 1256 C 950 1234 969 1220 978 1222 C 1027 1231 1049 1403 1010 1468 C 983 1512 947 1512 924 1468 Z M 1008 1401 C 1013 1350 995 1264 978 1254 C 963 1244 941 1270 934 1307 C 929 1334 928.283 1375.686 931.103 1398.86 C 934.117 1423.629 937.471 1429.708 947.334 1450.867 C 973.79 1507.622 1001 1469 1008 1401 Z"/>
                <path ref={leftEyeIris} id="eye-left-iris" className="eye-iris" style={{transform: `translateX(${leftEyeIrisOffset.x}px) translateY(${-leftEyeIrisOffset.y}px)`}}
                      d="M 937.754 1374.34 C 932.754 1366 937.754 1350.99 951.104 1340.98 C 967.774 1327.64 977.784 1327.64 992.794 1344.32 C 1002.79 1357.66 1006.14 1372.67 999.464 1377.67 C 984.454 1394.35 947.764 1392.68 937.754 1374.34 Z"
                />
                <path
                    d="M1217 1253 c-4 -3 -7 -15 -7 -25 0 -11 -15 -27 -35 -39 -41 -24 -45 -39 -11 -39 30 0 76 52 76 86 0 23 -10 31 -23 17z"/>
                <path d="M1766 1581 c-3 -5 0 -14 8 -20 10 -8 16 -8 25 2 6 8 8 17 4 20 -9 10 -31 9 -37 -2z"/>
                <path
                    d="M2081 492 c-32 -26 -33 -29 -23 -66 6 -21 31 -59 56 -86 59 -63 60 -85 5 -102 -41 -12 -42 -11 -70 20 -19 21 -29 43 -29 63 0 20 -4 29 -12 26 -15 -5 -12 -50 5 -87 7 -14 29 -33 49 -43 33 -16 40 -17 72 -3 51 21 64 55 38 98 -11 18 -37 49 -56 67 -52 51 -44 96 22 116 26 8 55 -11 45 -29 -3 -6 2 -3 12 6 15 14 16 20 5 32 -21 26 -81 20 -119 -12z"/>
                <path
                    d="M1780 487 c-79 -37 -128 -109 -115 -168 9 -39 57 -94 95 -107 63 -22 167 66 157 133 -22 132 -64 176 -137 142z m72 -34 c21 -24 41 -92 36 -128 -3 -33 -75 -95 -110 -95 -11 0 -36 16 -54 36 -26 27 -34 44 -34 71 0 44 35 93 82 116 43 21 61 21 80 0z"/>
                <path
                    d="M360 477 c-38 -19 -36 -54 5 -117 41 -64 52 -97 38 -119 -17 -28 -51 -25 -83 8 -34 33 -39 65 -12 80 15 9 13 10 -10 11 -35 0 -44 -29 -22 -71 23 -45 53 -68 90 -69 38 0 64 27 64 66 0 35 -33 109 -53 120 -8 5 -17 20 -19 34 -2 19 4 28 25 38 31 15 84 4 80 -17 -2 -6 4 -11 12 -11 25 0 17 36 -10 48 -33 15 -74 15 -105 -1z"/>
                <path
                    d="M1236 449 c-25 -20 -38 -47 -15 -33 8 5 9 -21 4 -95 -8 -111 -2 -131 42 -131 64 0 143 72 143 131 0 42 -43 115 -80 134 -39 20 -62 19 -94 -6z m96 -29 c37 -28 61 -93 47 -124 -14 -31 -61 -65 -99 -73 l-31 -6 5 109 c3 60 5 110 5 112 3 10 53 -2 73 -18z"/>
                <path d="M1519 448 c-2 -54 3 -223 7 -227 2 -3 8 0 14 5 11 11 0 244 -11 244 -5 0 -9 -10 -10 -22z"/>
                <path
                    d="M678 433 c-84 -16 -103 -33 -37 -33 l40 0 -6 -57 c-4 -32 -11 -78 -16 -102 -6 -28 -6 -48 0 -54 14 -14 31 1 31 26 0 12 3 61 6 109 7 94 10 98 77 98 15 0 27 4 27 9 0 9 -25 22 -38 20 -4 -1 -42 -8 -84 -16z"/>
                <path
                    d="M1057 438 c-2 -7 0 -24 5 -37 13 -35 -2 -120 -26 -148 -25 -28 -88 -45 -122 -33 -39 15 -41 62 -8 178 12 43 -14 22 -30 -25 -38 -112 -6 -202 69 -190 104 17 144 71 145 195 0 55 -3 72 -14 72 -8 0 -16 -6 -19 -12z"/>
                <path d="M61 381 c-19 -12 -4 -31 25 -31 26 0 31 9 12 28 -14 14 -19 15 -37 3z"/>
                <path d="M2310 355 c0 -8 9 -15 20 -15 11 0 20 7 20 15 0 8 -9 15 -20 15 -11 0 -20 -7 -20 -15z"/>
                <path
                    d="M 224.89 1582.8 C 221.89 1577.8 224.89 1568.8 232.89 1562.8 C 242.89 1554.8 248.89 1554.8 257.89 1564.8 C 263.89 1572.8 265.89 1581.8 261.89 1584.8 C 252.89 1594.8 230.89 1593.8 224.89 1582.8 Z"/>
            </g>
        </svg>
    </div>
}