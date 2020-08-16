
export const formatTime = (timer) => {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  minutes = minutes < 10 ? ('0' + minutes) : minutes;
  seconds = seconds < 10 ? ('0' + seconds) : seconds;

  return `${minutes}:${seconds}`
}