import { useState, useRef } from 'react'
import ReactPlayer from 'react-player'

import Minus10 from 'public/icons/minus10.svg'
import Next from 'public/icons/Next.svg'
import Plus10 from 'public/icons/plus10.svg'
import Pause from 'public/icons/Pause.svg'
import Play from 'public/icons/Play.svg'
import Loading from 'public/icons/Loading.svg'

import Duration from 'components/Player/Duration'

import {
  PlayerWrapper,
  Bg,
  VideoNavigation,
  Timeline,
  RangeInput,
} from 'styles/components/Player'

// style={{ marginTop: -64, position: 'fixed', zIndex: 100 }}
export default ({ videoUrl = 'https://vimeo.com/248940683' }) => {
  const [playing, setPlaying] = useState(false)
  const [seeking, setSeeking] = useState(false)
  const [played, setPlayed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [ buffered, setBuffered] = useState(false)

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
      <PlayerWrapper>
     {!buffered && playing && <Loading style={{
        position: 'absolute', 
        backgroundColor: 'transparent',
        width: '30%',
        left: '35%',
        top: '185px'
        }}/> }
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          className="react-player"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          ref={playerRef}
          playing={playing}
          onProgress={handleProgress}
          onDuration={handleDuration}
          controls={false}
          style={{ zIndex: -1 }}
          preload="true"
          playsinline
          config={{
            file: {
              attributes: {
                preload: true,
                autoPlay: true,
              },
            },
            vimeo: {
              playsinline: true,
              iframeParams: {
                fullscreen: 0,
                preload: true,
                autoPlay: true,
              },
              preload: true,
            },
          }}
          onReady={() => {
            console.log('ready')
            // setPlaying(true)
          }}
          onStart={()=>{

            setBuffered(true)

          }}
        />
      </PlayerWrapper>
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
