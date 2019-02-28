//parses milliseconds into human readable format seconds, minutes, hours, days, and weeks
module.exports = function parseElapsedTime(ms){
  const s = parseInt(ms/1000);
  if(s < 60){
    return `${s} second${s === 1 ? "" : "s"}`;
  }
  const seconds = s%60;
  const m = Math.floor(s/60);
  if(m < 60){
    return `${m} minute${m === 1 ? "" : "s"}, ${seconds} second${seconds === 1 ? "" : "s"}`;
  }
  const minutes = m%60;
  const h = Math.floor(m/60);
  if(h < 24){
    return `${h} hour${h === 1 ? "" : "s"}, ${minutes} minute${minutes === 1 ? "" : "s"}`;
  }
  const hours = h%24;
  const d = Math.floor(h/24);
  if(d < 7){
    return `${d} day${d === 1 ? "" : "s"}, ${hours} hr${hours === 1 ? "" : "s"}, ${minutes} min${minutes === 1 ? "" : "s"}`;
  }
  const days = d%7;
  const w = Math.floor(d/7);
  return `${w} w, ${days} d, ${hours} h, ${minutes} m`;
}
