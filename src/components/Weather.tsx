import { useEffect, useState } from "react"

export default function Weather() {
    const [c, setC] = useState(null);
    const [f, setF] = useState(null);

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=22151&aqi=no`) 
        .then(response => response.json())
        .then(data => {
            let current = data["current"];
            setF(current["temp_f"]);
            setC(current["temp_c"]);
        })
    }, [])

    if (!f) return null;
    return (
        <div className="flex text-sm items-center gap-2 text-black dark:text-white border-[1px] border-[rgb(100,100,100)] shadow-lg dark:shadow-[0_0_10px_5px_rgb(255,255,255,0.1)] rounded py-1.5 px-3 w-fit h-[38px]">
            <p>
                It's currently
                <span className="group text-sm mx-1">
                    <span className="group-hover:hidden underline inline-block">
                        {f}°F
                    </span>
                    <span className="group-hover:inline-block underline hidden">
                        {c}°C
                    </span>
                </span> 
                in Springfield, Virginia
            </p>
        </div>
    )
}