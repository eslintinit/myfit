import { useState, useEffect } from 'react'
import moment from 'moment'

const isSamsung1 =
  process.browser &&
  window &&
  window.navigator &&
  window.navigator.userAgent.match(
    /SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[A|N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i,
  )
const isSamsung2 =
  process.browser &&
  window &&
  window.navigator &&
  window.navigator.userAgent.indexOf('534.30') > 0

function checkForIOS() {
  const today = moment().toDate()
  const lastPrompt = moment(localStorage.getItem('installPrompt'))
  const days = moment(today).diff(lastPrompt, 'days')
  const ua = window.navigator.userAgent
  const isSamsungBrowser =
    ua.match(/SamsungBrowser/i) || isSamsung1 || isSamsung2
  const prompt = (isNaN(days) || days > 5) && isSamsungBrowser

  if (prompt && 'localStorage' in window) {
    localStorage.setItem('installPrompt', today)
  }

  return { isSamsungBrowser, prompt }
}

export default function useIsSamsung() {
  const [isSamsung, setIsSamsung] = useState({})

  useEffect(() => {
    setIsSamsung(checkForIOS())
    return () => console.log('CLEANUP INSTALL PROMPT', isSamsung)
  }, [])

  return isSamsung
}
