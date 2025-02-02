import { useState, useEffect } from 'react'

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date()
    const timeDifference = new Date(targetDate) - now

    if (timeDifference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer) // Limpieza al desmontar el componente
  }, [])

  return (
    <div className='grid place-content-center text-center'>
      <div className='mb-2 font-bold text-xl text-white'>
        Faltan:
      </div>
      <div className='flex gap-8 [&>div]:text-center [&>div]:flex [&>div]:flex-col [&>div]:text-5xl [&>div]:text-yellow [&>div]:font-black [&>div]:lg:text-8xl'>
        <div>
          <span>{timeLeft.days}</span>
          <span className='text-white text-lg uppercase font-bold'>días</span>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <span className='text-white text-lg uppercase font-bold'>horas</span>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <span className='text-white text-lg uppercase font-bold'>minutos</span>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <span className='text-white text-lg uppercase font-bold'>segundos</span>
        </div>
      </div>
    </div>
  )
}

export default Countdown
