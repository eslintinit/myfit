import {useState, useEffect} from "react";
import moment from "moment";

function checkForIOS() {
    if (navigator.standalone) {
        return false;
    }
    const today = moment().toDate();
    const lastPrompt = moment(localStorage.getItem("installPrompt"));
    const days = moment(today).diff(lastPrompt, "days");
    const ua = window.navigator.userAgent;
    const webkit = !!ua.match(/WebKit/i);
    const isSamsungBrowser = webkit && !ua.match(/SamsungBrowser/i);

    const prompt = (isNaN(days) || days > 5) && isIOS;

    if (prompt && "localStorage" in window) {
        localStorage.setItem("installPrompt", today);
    }

    return {isSamsungBrowser, prompt};
}

export default function useIsIOS() {
    const [isSamsung, setIsSamsung] = useState({});

    useEffect(() => {
        setIsIOS(checkForIOS());
        return() => console.log("CLEANUP INSTALL PROMPT", isSamsung);
    }, []);

    return isSamsung;
}