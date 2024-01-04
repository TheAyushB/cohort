function clock(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeFormat24 = `${hours}:${minutes}:${seconds}`;
    console.log("24 Hour Format: ", timeFormat24);
    
    hours = hours % 12 || 12;
    const timeFormat12 = `${hours}:${minutes}:${seconds} ${ampm}`;
    console.log("12 Hour Format: ", timeFormat12);
}

setInterval(clock, 1000);