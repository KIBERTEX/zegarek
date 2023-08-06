import React, { useEffect, useState} from 'react'

const ClockWrapper = () => {
  const [ time, setTime ] = useState(new Date())
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>{`${time}`}</h1>
    </div>
  )
}

export default ClockWrapper