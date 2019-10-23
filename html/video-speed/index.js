const speed = document.querySelector('.speed')
    const bar = speed.querySelector('.speed-bar')
    const video = document.querySelector('.flex')
    function handleMove (e) {
      // console.log(e)
      const y = e.pageY - this.offsetTop
      const percent = y / this.offsetHeight
      const min = 0.4
      const max = 4
      const height = Math.round(percent * 100) + '%'
      const playbackRate = percent * (max - min) + min
      bar.style.height = height
      video.playbackRate = playbackRate
      bar.textContent = playbackRate.toFixed(2) + 'x'
    }
      speed.addEventListener('mousemove', handleMove)