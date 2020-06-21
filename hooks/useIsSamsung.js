import {useState, useEffect} from "react";
import moment from "moment";

function checkForIOS() {
    if (navigator.standalone) {
        return false;
    }
    const today = moment().toDate();
    const lastPrompt = moment(localStorage.getItem("installPrompt"));
    const days = moment(today).diff(lastPrompt, "days");
    const isSamsungBrowser = navigator.userAgent.match(/SamsungBrowser/i);

    const prompt = (isNaN(days) || days > 5) && isSamsungBrowser;

    if (prompt && "localStorage" in window) {
        localStorage.setItem("installPrompt", today);
    }

    return {isSamsungBrowser, prompt};
}

export default function useIsSamsung() {
    const [isSamsung, setIsSamsung] = useState({});

    useEffect(() => {
        setIsSamsung(checkForIOS());
        return() => console.log("CLEANUP INSTALL PROMPT", isSamsung);
    }, []);

    return isSamsung;
}