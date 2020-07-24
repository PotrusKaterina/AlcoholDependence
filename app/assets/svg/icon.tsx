import * as React from "react"
import Svg, { Path, G } from "react-native-svg"

interface Props {
    height?: number,
    width?: number
}

function InfoIcon({ height, width }) {
    return (
        <Svg viewBox="0 0 100 100" width={width || 50} height={height || 50}>
            <Path fill="#ee3e54" d="M13 27a2 2 0 100 4 2 2 0 100-4z" />
            <Path fill="#f1bc19" d="M77 12a1 1 0 100 2 1 1 0 100-2z" />
            <Path fill="#fce0a2" d="M50 13a37 37 0 100 74 37 37 0 100-74z" />
            <Path fill="#f1bc19" d="M83 11a4 4 0 100 8 4 4 0 100-8z" />
            <Path fill="#ee3e54" d="M87 22a2 2 0 100 4 2 2 0 100-4z" />
            <Path
                fill="#fbcd59"
                d="M81 74a2 2 0 100 4 2 2 0 100-4zM15 59a4 4 0 100 8 4 4 0 100-8z"
            />
            <Path fill="#ee3e54" d="M25 85a2 2 0 100 4 2 2 0 100-4z" />
            <Path fill="#fff" d="M18.5 51a2.5 2.5 0 100 5 2.5 2.5 0 100-5z" />
            <Path fill="#f1bc19" d="M21 66a1 1 0 100 2 1 1 0 100-2z" />
            <Path fill="#fff" d="M80 33a1 1 0 100 2 1 1 0 100-2z" />
            <Path
                fill="#78a2d2"
                d="M35 72.3c-4 0-7.3-3.3-7.3-7.3V35c0-4 3.3-7.3 7.3-7.3h30c4 0 7.3 3.3 7.3 7.3v30c0 4-3.3 7.3-7.3 7.3H35z"
            />
            <Path
                fill="#472b29"
                d="M65 28.4c3.6 0 6.6 3 6.6 6.6v30c0 3.6-3 6.6-6.6 6.6H35c-3.6 0-6.6-3-6.6-6.6V35c0-3.6 3-6.6 6.6-6.6h30m0-1.4H35c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h30c4.4 0 8-3.6 8-8V35c0-4.4-3.6-8-8-8z"
            />
            <Path
                fill="#472b29"
                d="M68.5 47.4c-.3 0-.5-.2-.5-.5V43c0-.3.2-.5.5-.5s.5.2.5.5v3.9c0 .3-.2.5-.5.5zM68.5 40.5c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3-.2.5-.5.5z"
            />
            <Path
                fill="#472b29"
                d="M64 69H36c-2.8 0-5-2.2-5-5V36c0-2.8 2.2-5 5-5h25.4c.3 0 .5.2.5.5s-.2.5-.5.5H36c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V49.6c0-.3.2-.5.5-.5s.5.2.5.5V64c0 2.8-2.2 5-5 5z"
            />
            <G>
                <Path
                    fill="#fdfcee"
                    d="M52.3 58.2c0 .9 1 1.4 3 1.4v1.8H44.7v-1.8c2 0 3-.5 3-1.4v-9.6c0-1-1-1.5-3-1.5v-1.8h7.7v12.9zm.5-18.1c0 .7-.3 1.4-.8 1.9s-1.3.8-2.1.8c-.4 0-.8-.1-1.2-.2-.4-.1-.7-.3-.9-.6s-.5-.5-.6-.9c-.2-.3-.2-.7-.2-1.1 0-.8.3-1.4.9-1.9.6-.5 1.3-.8 2.1-.8s1.5.3 2.1.8c.4.6.7 1.2.7 2z"
                />
                <Path
                    fill="#472b29"
                    d="M55.8 62H44.2v-2.8h.5c1.1 0 2.5-.2 2.5-.9v-9.6c0-.8-1.3-1-2.5-1h-.5v-2.8h8.7v13.4c0 .2 0 .3.1.4.2.2.7.5 2.4.5h.5V62zm-10.6-1h9.7v-.8c-1.3-.1-2.1-.3-2.6-.8-.3-.3-.4-.7-.4-1.1V45.9h-6.7v.8c2 .1 3 .7 3 1.9v9.6c0 1.2-1 1.8-3 1.9v.9zm4.6-17.7c-.5 0-.9-.1-1.3-.3-.4-.2-.8-.4-1.1-.7-.3-.3-.6-.6-.7-1-.2-.4-.3-.8-.3-1.3 0-.9.4-1.7 1-2.3.7-.6 1.5-.9 2.4-.9.9 0 1.7.3 2.4.9.7.6 1 1.4 1 2.3 0 .9-.3 1.6-1 2.3-.6.7-1.4 1-2.4 1zm0-5.4c-.7 0-1.3.2-1.8.6-.5.4-.7.9-.7 1.5 0 .3.1.6.2.8.1.3.3.5.5.7.2.2.5.4.8.5.3.1.6.2 1 .2.7 0 1.3-.2 1.7-.7.5-.4.7-.9.7-1.5s-.2-1.1-.7-1.5c-.4-.4-1-.6-1.7-.6z"
                />
            </G>
        </Svg>
    )
}

export default InfoIcon
