  const sechand = document.querySelector('.second-hand');
  const minhand = document.querySelector('.min-hand');
  const hourhand = document.querySelector('.hour-hand');


  function setDate() {
    const now = new Date;
    const seconds = now.getSeconds();
    const secDegress = seconds / 60 * 360 + 90;
    sechand.style.transform = `rotate(${secDegress}deg)`;

    // for minutes
    const minutes = now.getMinutes();
    const minDegress = minutes / 60 * 360;
    minhand.style.transform = `rotate(${minDegress}deg)`;

    // for hours
    const hour = now.getHours();
    const hourDegress = hour / 60 * 360;
    hourhand.style.transform = `rotate(${hourDegress}deg)`;



  }
  setInterval(setDate, 1000);
