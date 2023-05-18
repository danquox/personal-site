import { useState, useEffect } from "react"

interface Time {
    time: string
}

export default function Time() {
    const [timeOfDay, setTimeOfDay] = useState("");
    const [time, setTime] = useState("");
    
    useEffect(() => {
        var date = new Date();
        setTime(date.toLocaleTimeString("en-US", {timeZone: "America/New_York"}))
        const interval = setInterval(() => {
            date = new Date();
            let localString = date.toLocaleTimeString("en-US", {timeZone: "America/New_York"});
            let hour = parseInt(localString.substring(0, localString.indexOf(":")));
            let prefix = localString.substring(localString.length-2);
            if (hour <= 6 && prefix === "AM") {
                setTimeOfDay("night");
            } else if (hour <= 12 && hour >= 6 && prefix === "PM") {
                setTimeOfDay("night");
            } else if (hour >= 6 && hour <= 12 && prefix === "AM") {
                setTimeOfDay("day");
            } else if (hour >= 0 && hour <= 6 && prefix === "PM") {
                setTimeOfDay("day");
            }
            setTime(date.toLocaleTimeString("en-US", {timeZone: "America/New_York"}))
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="text-sm flex items-center gap-2 text-black dark:text-white border-[1px] border-[rgb(100,100,100)] shadow-lg dark:shadow-[0_0_10px_5px_rgb(255,255,255,0.1)] rounded py-1.5 px-3 w-fit h-[38px]">
            {
                (timeOfDay === "day") ? 
                    <svg className="fill-black dark:fill-white aspect-square h-4/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 01232 160c30.23 0 58.48 9.39 81.71 27.17a142.24 142.24 0 0142.19 53.21 16 16 0 0011.19 9c26 5.61 48.4 17.29 65.17 34C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm19-232.18zM387.89 221.68a168.8 168.8 0 0134.76 14.71 4 4 0 005.82-2.44 97 97 0 003.53-26.68c-.39-52.43-43.48-95.22-95.91-95.27A95.46 95.46 0 00281 129.33h-.06a3.38 3.38 0 001 6 162.45 162.45 0 0151.28 26.4 173.92 173.92 0 0145.32 52.51 16 16 0 009.35 7.44zM496 224h-32a16 16 0 010-32h32a16 16 0 010 32zM336 96a16 16 0 01-16-16V48a16 16 0 0132 0v32a16 16 0 01-16 16zM245.49 133.49a15.92 15.92 0 01-11.31-4.69l-22.63-22.62a16 16 0 0122.63-22.63l22.62 22.63a16 16 0 01-11.31 27.31zM426.51 133.49a16 16 0 01-11.31-27.31l22.62-22.63a16 16 0 0122.63 22.63l-22.63 22.62a15.92 15.92 0 01-11.31 4.69z"/></svg>
                : 
                    <svg className="fill-black dark:fill-white aspect-square h-4/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74 12.1-9.26 27.2-16.17 43.33-20.05a16 16 0 0011.81-12.21c7.15-32.54 22.25-60.49 44.33-81.75A139.82 139.82 0 01232 160c32.33 0 62.15 10.65 86.24 30.79a142.22 142.22 0 0137.65 49.54 16.06 16.06 0 0011.12 9c24 5.22 45.42 15.78 61.62 30.56C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zM510.53 209.79a16.34 16.34 0 00-1.35-15.8 16 16 0 00-19.57-5.58c-10.7 4.65-24.48 7.17-39.92 7.28-55.3.4-101.38-45-101.38-100.31 0-15.75 2.48-29.84 7.18-40.76a16.3 16.3 0 00-1.85-16.33 16 16 0 00-19.1-5c-38.63 16.82-66.18 51.51-75.27 92.54a4 4 0 003.19 4.79 162.54 162.54 0 0176.31 35.59 172.58 172.58 0 0139.64 47.84 16.35 16.35 0 009.54 7.64c23.89 7.17 45.1 18.9 62.25 34.54q4.44 4.07 8.48 8.42a4 4 0 005.16.57 129.12 129.12 0 0046.69-55.43z"/></svg>
            }
            {time}
        </div>
    )
}