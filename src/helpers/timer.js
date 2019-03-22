// import DateTime from "luxon/src/datetime";

export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// export function millsToDate (mills,dateFormat){
//   return DateTime.fromISO(DateTime.fromMillis(mills)).toFormat(dateFormat);
// }
//
// export function secondsToMinuteAndSecondString(value) {
//   let minutes = Math.floor(value / 60); // 7
//   let seconds = value % 60; // 30
//   seconds = Math.round(seconds);
//
//   let timerString;
//   if(seconds < 10){
//     timerString = minutes+':0'+seconds;
//   }else{
//     timerString = minutes+':'+seconds;
//   }
//
//   return timerString;
// }