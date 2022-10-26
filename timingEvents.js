function sendalert() {
  alert("Hello");
}
let myalert = setTimeout(sendalert, 5000)

 clearTimeout(myalert)


// program to display time every 3 seconds
 function showTime() {

    
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();

    console.log(time)
}

let display = setInterval(showTime, 3000);

clearInterval(display)
