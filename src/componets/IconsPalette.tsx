interface Props {
    iconStyle: string; // Define the type of iconTrend prop
}

export function Arrow(){
    return(
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.625113 2.85L4.92155 7.16667C5.5685 7.81667 6.61358 7.81667 7.26053 7.16667L11.557 2.85C12.602 1.8 11.8556 0 10.3792 0H1.78631C0.309931 0 -0.419965 1.8 0.625113 2.85Z" fill="#191D1F"/>
        </svg>
    )
}

export function Trend({iconStyle}:Props){
    return(
        <svg width="19" height="20" className={iconStyle} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0.931641C4.256 0.931641 0 5.04634 0 10.1162C0 11.3378 0.247 12.5134 0.703 13.5788L5.7 8.73854L8.835 11.2919L11.951 8.27931H10.45V6.4424H15.2V11.0347H13.3V9.58353L8.9395 13.7901L5.814 11.2276L1.634 15.2688C3.344 17.7027 6.232 19.3008 9.5 19.3008H17.1C18.145 19.3008 19 18.4742 19 17.4639V10.1162C19 5.04634 14.744 0.931641 9.5 0.931641ZM16.625 17.9231C16.1025 17.9231 15.675 17.5098 15.675 17.0047C15.675 16.4995 16.1025 16.0862 16.625 16.0862C17.1475 16.0862 17.575 16.4995 17.575 17.0047C17.575 17.5098 17.1475 17.9231 16.625 17.9231Z" fill="black"/>
        </svg>
    )
}

export function WebTrend({iconStyle}:Props){
    return(
        <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconStyle}>
            <path d="M29.1667 0C13.0667 0 0 12.88 0 28.75C0 32.5737 0.758333 36.2537 2.15833 39.5888L17.5 24.4375L27.125 32.43L36.6917 23H32.0833V17.25H46.6667V31.625H40.8333V27.0825L27.4458 40.25L17.85 32.2287L5.01667 44.8788C10.2667 52.4975 19.1333 57.5 29.1667 57.5H52.5C55.7083 57.5 58.3333 54.9125 58.3333 51.75V28.75C58.3333 12.88 45.2667 0 29.1667 0ZM51.0417 53.1875C49.4375 53.1875 48.125 51.8937 48.125 50.3125C48.125 48.7313 49.4375 47.4375 51.0417 47.4375C52.6458 47.4375 53.9583 48.7313 53.9583 50.3125C53.9583 51.8937 52.6458 53.1875 51.0417 53.1875Z" fill="black"/>
        </svg>
    )
}


export function ListTag({iconStyle}:Props){
    return(
        <svg width="32" height="28" className={iconStyle} viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28 0H3.11111C1.4 0 0 1.35352 0 3.00782V24.0626C0 25.7169 1.4 27.0704 3.11111 27.0704H28C29.7111 27.0704 31.1111 25.7169 31.1111 24.0626V3.00782C31.1111 1.35352 29.7111 0 28 0ZM12.4444 21.0547H4.66667V18.0469H12.4444V21.0547ZM12.4444 15.0391H4.66667V12.0313H12.4444V15.0391ZM12.4444 9.02346H4.66667V6.01564H12.4444V9.02346ZM19.9422 18.0469L15.5556 13.7758L17.7489 11.6553L19.9422 13.7909L24.8733 9.02346L27.0822 11.159L19.9422 18.0469Z" fill="black"/>
        </svg>
    )
}

export function RightArrow({iconStyle}:Props){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

      
    )
}

export function List({iconStyle}:Props){
    return(
        <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconStyle}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M51.75 0H5.75C2.5875 0 0 2.5875 0 5.75V46C0 49.1625 2.5875 51.75 5.75 51.75H51.75C54.9125 51.75 57.5 49.1625 57.5 46V5.75C57.5 2.5875 54.9125 0 51.75 0ZM23 40.25H8.625V34.5H23V40.25ZM23 28.75H8.625V23H23V28.75ZM23 17.25H8.625V11.5H23V17.25ZM36.8575 34.5L28.75 26.335L32.8037 22.2812L36.8575 26.3638L45.9712 17.25L50.0537 21.3325L36.8575 34.5Z" fill="black"/>
        </svg>

    )
}

export function QuoteLeft({iconStyle}:Props){
    return(
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={iconStyle}>
            <rect width="72" height="72" fill="url(#pattern0_621_771)"/>
            <defs>
                <pattern id="pattern0_621_771" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_621_771" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_621_771" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADqUlEQVR4nO2cS6iOWxjHf8h2F+VyUjiIZLuUyIhyyYhOBgopBkqkFJIMGMhELjuXwkSuRUgGynE6GYjkVu46YUCi3GK7b9bprTWQyX72Xt/7Ps/S86tnttv9/uv71vq+d631fOA4juM4juM4juM4juM4juM4juM4juM45bAcCILapPQCbBD6rSJDxgGfBeEuA3UKfpOBJoHfGaANmdENeCAI9wb4U8GvD/BM4PcE6EWGHBaE+wHMUnBrC/wt8PsGTCRDlgrX1W1KfuuEfmvJkFHAR0G4K0rr/iThuv8v0I7M6ArcE4R7CwxW8OsNPBX4PQf+IEMOCKf2XAW34lvMaYHbd2AaGbJIOPg7lfzWCP3WkyH1wAdBuJtAJwW/CcBXgd/5HNf9LsAdQbj3wHAFv57AY4HfC6AfGbJPOLXnK637p4Tr/nQyZI5w8Pcq+a0Q+m0kQ4YC7wThbgOdFfzGA18EfpeA9mRGR+CGIFwjMELBrwfwSOD3GhhIhuwRTu0FSn4nhPtQf5Ehs4WDX3w4a7DM+PlDEkPiNkJz4R7E7eiqGS3ch9I6f0iiA3BNEO4TMEZpH+q+8PxhEBmyQzi1iy0JDQ4ZPn9IZmaUby7gUSW/xcI3RwMZMgB4JQj3H9BdwW+kcB/qalxGs6J4QLkoCFccvI9V2oe6K/ArHhiHkSFbhFN7iZLffqHfPDJkhnDdL/7mYQvrLnAWWAn0baXfQuHgt6Ya4xZKQ1ziKqc/8LLEgOGXberVLbx3MyIOUhV+TfEbYKXPDRcqChd+qoPxuoiEWwp+/1T5IgSlWmfcb3vJ464e8LPwlpyWX1M8fi2doFgbjfttrWD8VQNeN+5XfP6UjmbAN8b9ioe60gnKlbtfMtYDBuN+yVgPGIz7JWM9YDDul4z1gMG4XzLWAwbjfslYDxiM+yVjPWAw7peM9YDBuF8y1gMG437JWA8YjPslYz1gMO6XjPWAwbhfMtYDBuN+yVgPGIz7JWM9YDDul4zkql9Z1Sjwk7RGZX0gI/mZmbLqvsBP0hab9ZHkbsWAuwR+2xT9NlfVWS65lljr+hG7G5ujXviLJ7WupiqbDo8o3Y6rdcNILauh6pYfSStqLa+jdG2BX128LliV3zmNfuKi4eJkBeGOt7Kpry5eFyxzOfoW3/mqzdxTgWPCDsmW3P85CkypgV99vLF2K962TnV7H//XFqVG82ZnxeDE6q4dwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ech9+D/wFEsXzNlXx9QAAAAABJRU5ErkJggg=="/>
            </defs>
        </svg>
    )
}

export function QuoteRight({iconStyle}:Props){
    return(
        <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={iconStyle}>
            <rect width="73" height="73" fill="url(#pattern0_621_772)"/>
            <defs>
                <pattern id="pattern0_621_772" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_621_772" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_621_772" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADs0lEQVR4nO2cXYiVRRjHf1qtG6WiRCa4hB8ouitWF7LSRYgfEOyViCCCCFGgXkRIeSGiBCFU5KoshUEIFRUb9AGyiEYgK4IgW6xRbi0kISUpWq65bNuODMzedHOes3PO+zwjzw+eu+U9v/+cM7Pzzsz7guM4juM4juM4juM4juM4juM4juM4jtMgZgOLMitewxQdQDdwCRgBQmaNpGt1p2vnshH4HPi7AW6T9RfQC6xHkRagB/ivgcHC/2ocOJY+q17iL/WrJrpN1hfALComNsg3FYQLqc7U+SXMBL6r0G8AeJQK6akwXEh1tA6/TxX8PqYiOtLQUHXAcaBd4Nep4BZrAlhdQftzRClgAN4R+B1X9Hu3gvbnB8WAgwK/IUW/nypo/4ZO50KdFT+7FncU/eJnN52gXKX7ZWM9YDDul431gMG4XzbWAwbjftlYDxiM+2VjPWAw7peN9YDBuF821gMG437ZWA8YjPtlYz1gMO6XjfWAwbhfNtYDBuN+2VgPGIz7ZWM9YDDul431gMG4XzbWAwbjfkVvyASB3y3jfkVvSQaB34Bxv2wOGw94yLhfNu1Kx1KCMOBCYNSwX0M4ZjzgAeN+2bSk44IWj6VEpgMfKfj1UyEt6bhgVcPRCLCiDr9pwGvA7Yr8rgNtKNCeTqwNNjnsjin6zQP2AH1pBjdcZ00I3OLfdFEgm4WN/4mS3y6h39sUyGLhTdNQOm5eNSuBfwR+F6b4/IIqDwHnBeHuAk8p+MWz/j8K/G6maW9xSE9Yv6Tk96HQbxMF0iX8x/aZkt+LTXhgxAxtabpWK9wvGs9dpRmd5HT190ArhfEgcE4QbhR4RsHvEeFCY5xqL6NA3hJ27d1KfieEftsokOeF4/7X6Q62arYKG/89CmQB8Kcg3BVgroLfUuEmU7zTf5gCx/2zgnBjwBoFv1bh88RxHWo5BfKGsGu/ouT3vtBvOwWyVrhSelJp3N8ibPwPKJC4Avm7INxvwGMKfkvSCzdq+V1WWofKIm6GnBaE+xd4VsFvBnBRuA61igI5KOzae5X8pO+5eIECeU447velnmJ1/yG+7KM4HgeuCsL9ATyh4PckcEPg97PSOlQW8dd8ShAuvtxpneH9h1HgaQpkn7Br71fy6xb67aRAOtOdbK1w3wIPGN5/6KVA5gC/CsJdA+Yb3n8Ytvg2xFrEu9cvheP+BqV1qH6B31jqxcXxqnBcfV3J702h38tKfo7jOI7jOI7jOI7jOI7jOI7jOI7jOA73N/cAIox9EpXWmzAAAAAASUVORK5CYII="/>
            </defs>
        </svg>
    )
}

export function People({iconStyle}:Props){
    return(
        <svg width="59" height="41" viewBox="0 0 59 41" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconStyle}>
            <path d="M42.2917 20.4167C46.3167 20.4167 49.5542 17.15 49.5542 13.125C49.5542 9.1 46.3167 5.83333 42.2917 5.83333C38.2667 5.83333 35 9.1 35 13.125C35 17.15 38.2667 20.4167 42.2917 20.4167ZM20.4167 17.5C25.2583 17.5 29.1375 13.5917 29.1375 8.75C29.1375 3.90833 25.2583 0 20.4167 0C15.575 0 11.6667 3.90833 11.6667 8.75C11.6667 13.5917 15.575 17.5 20.4167 17.5ZM42.2917 26.25C36.9542 26.25 26.25 28.9333 26.25 34.2708V40.8333H58.3333V34.2708C58.3333 28.9333 47.6292 26.25 42.2917 26.25ZM20.4167 23.3333C13.6208 23.3333 0 26.7458 0 33.5417V40.8333H20.4167V34.2708C20.4167 31.7917 21.3792 27.4458 27.3292 24.15C24.7917 23.625 22.3417 23.3333 20.4167 23.3333Z" fill="black"/>
        </svg>
    )
}