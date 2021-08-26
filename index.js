const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')

const countdown = () => {
  const countDate = new Date('September 2, 2021 15:00:00').getTime()
  const now = new Date().getTime()
  const timeDiff = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const pendingDays = Math.floor(timeDiff / day).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const pendingHours = Math.floor((timeDiff % day) / hour).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const pendingMinutes = Math.floor((timeDiff % hour) / minute).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const pendingSeconds = Math.floor((timeDiff % minute) / second).toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  )

  daysEl.textContent = pendingDays
  hoursEl.textContent = pendingHours
  minutesEl.textContent = pendingMinutes
  secondsEl.textContent = pendingSeconds
}

setInterval(() => {
  countdown()
}, 1000)
