import { useState, useRef } from 'react'
import ReactPlayer from 'react-player'

import Minus10 from 'public/icons/minus10.svg'
import Next from 'public/icons/Next.svg'
import Plus10 from 'public/icons/plus10.svg'
import Pause from 'public/icons/Pause.svg'
import Play from 'public/icons/Play.svg'

import Duration from 'components/Player/Duration'

import {
  Active,
  Bg,
  VideoNavigation,
  Timeline,
  Line,
  RangeInput,
} from 'styles/components/Player'

// style={{ marginTop: -64, position: 'fixed', zIndex: 100 }}
export default () => {
  const [playing, setPlaying] = useState(false)
  const [seeking, setSeeking] = useState(false)
  const [played, setPlayed] = useState(0)
  const [duration, setDuration] = useState(0)

  const playerRef = useRef(null)

  const togglePlaying = () => setPlaying(!playing)

  const handleProgress = ({ played }) => {
    if (!seeking) {
      setPlayed(played)
    }
  }

  const jumpForward = () => {
    const currentTime = playerRef.current.getCurrentTime()

    playerRef.current.seekTo(currentTime + 10)
  }
  const jumpBackward = () => {
    const currentTime = playerRef.current.getCurrentTime()

    if (currentTime > 10) {
      playerRef.current.seekTo(currentTime - 10)
    } else {
      playerRef.current.seekTo(0)
    }
  }

  const handleSeekMouseDown = (e) => setSeeking(true)

  const handleSeekChange = (e) => setPlayed(parseFloat(e.target.value))

  const handleSeekMouseUp = (e) => {
    setSeeking(false)
    playerRef.current.seekTo(parseFloat(e.target.value))
  }

  const handleDuration = (duration) => setDuration(duration)

  return (
    <>
      <ReactPlayer
        url="https://vimeo.com/248940683"
        width="100vw"
        height="655px"
        ref={playerRef}
        playing={playing}
        onProgress={handleProgress}
        onDuration={handleDuration}
        controls={false}
      />
      <Bg>
        <VideoNavigation>
          <Minus10
            onClick={jumpBackward}
            style={{
              marginRight: '24px',
            }}
          />
          <Next />
          {playing ? (
            <Pause
              onClick={togglePlaying}
              style={{
                margin: '0px 48px',
              }}
            />
          ) : (
            <Play
              onClick={() => setPlaying(true)}
              style={{
                margin: '0px 48px',
              }}
            />
          )}
          <Next
            style={{
              transform: 'rotate(180deg)',
            }}
          />
          <Plus10
            onClick={jumpForward}
            style={{
              marginLeft: '24px',
            }}
          />
        </VideoNavigation>
        <Timeline>
          <p>
            <Duration seconds={duration * played} />
          </p>

          <RangeInput
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onChange={handleSeekChange}
            onMouseDown={handleSeekMouseDown}
            onMouseUp={handleSeekMouseUp}
          />
          <p>
            <Duration seconds={duration} />
          </p>
        </Timeline>
      </Bg>
    </>
  )
}
