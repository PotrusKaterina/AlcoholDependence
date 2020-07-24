import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface DocumentProps {
    height?: string
    width?: string
}

function Document({ height, width }) {
    return (
        <Svg viewBox="0 0 100 100" width={width || 50} height={height || 50} >
            <Path fill="#f1bc19" d="M77 12a1 1 0 100 2 1 1 0 100-2z" />
            <Path fill="#e4e4f9" d="M50 13a37 37 0 100 74 37 37 0 100-74z" />
            <Path fill="#f1bc19" d="M83 11a4 4 0 100 8 4 4 0 100-8z" />
            <Path fill="#8889b9" d="M87 22a2 2 0 100 4 2 2 0 100-4z" />
            <Path
                fill="#fbcd59"
                d="M81 74a2 2 0 100 4 2 2 0 100-4zM15 59a4 4 0 100 8 4 4 0 100-8z"
            />
            <Path fill="#8889b9" d="M25 85a2 2 0 100 4 2 2 0 100-4z" />
            <Path
                fill="#fff"
                d="M18.5 49a2.5 2.5 0 100 5 2.5 2.5 0 100-5zm61-17a1.5 1.5 0 100 3 1.5 1.5 0 100-3z"
            />
            <Path
                fill="#fefdef"
                d="M37.296 73.3a4.605 4.605 0 01-4.596-4.605V31.306a4.605 4.605 0 014.596-4.605h19.132L68.3 38.593v30.102a4.605 4.605 0 01-4.596 4.605H37.296z"
            />
            <Path
                fill="#472b29"
                d="M56.138 27.4l4.662 4.67 6.799 6.812v29.813a3.905 3.905 0 01-3.896 3.906H37.296a3.905 3.905 0 01-3.896-3.906V31.306a3.905 3.905 0 013.896-3.906h18.842m.581-1.4H37.297C34.383 26 32 28.388 32 31.306v37.389C32 71.613 34.384 74 37.296 74h26.406c2.913 0 5.296-2.388 5.296-5.306V38.303H69L56.719 26z"
            />
            <Path
                fill="#fef6aa"
                d="M56.5 27v6.483c0 2.759 2.214 5.017 4.921 5.017H68"
            />
            <Path
                fill="#472b29"
                d="M68 39h-6.579C58.432 39 56 36.525 56 33.483V27h1v6.483C57 35.974 58.983 38 61.421 38H68v1zm-5 32H38c-1.654 0-3-1.346-3-3V32c0-1.654 1.346-3 3-3h2a.5.5 0 010 1h-2c-1.103 0-2 .897-2 2v36c0 1.103.897 2 2 2h25c1.103 0 2-.897 2-2V52.917a.5.5 0 011 0V68c0 1.654-1.346 3-3 3zm2.5-20a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zm0-6.25a.5.5 0 01-.5-.5v-2.583a.5.5 0 011 0v2.583a.5.5 0 01-.5.5z"
            />
            <Path
                fill="#472b29"
                d="M49.5 43.75h-10a.25.25 0 010-.5h10a.25.25 0 010 .5zM49.5 47.75h-10a.25.25 0 010-.5h10a.25.25 0 010 .5zM49.5 51.75h-10a.25.25 0 010-.5h10a.25.25 0 010 .5zM46.5 55.75h-7a.25.25 0 010-.5h7a.25.25 0 010 .5zM49.5 59.75h-10a.25.25 0 010-.5h10a.25.25 0 010 .5zM51.5 63.75h-12a.25.25 0 010-.5h12a.25.25 0 010 .5zM61.5 63.75h-8a.25.25 0 010-.5h8a.25.25 0 010 .5zM61.5 55.75h-13a.25.25 0 010-.5h13a.25.25 0 010 .5zM61.5 59.75h-4a.25.25 0 010-.5h4a.25.25 0 010 .5zM55.5 59.75h-4a.25.25 0 010-.5h4a.25.25 0 010 .5z"
            />
            <Path fill="#fef6aa" d="M52.5 53v-9.5h9v9H56" />
            <Path
                fill="#472b29"
                d="M52.75 53h-.5v-9.75h9.5v9.5H56v-.5h5.25v-8.5h-8.5z"
            />
        </Svg>
    )
}

export default Document
