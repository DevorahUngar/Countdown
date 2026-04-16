import { useState } from "react";
import './Countdown.css';

const Countdown = () => {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)


    // Set the date we're counting down to
    var countDownDate = new Date("Oct 13, 2026 18:30:00").getTime();


    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24))) 
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

        // Display the result in the element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        // if (distance < 0) {
        //     clearInterval(x);
        //     document.getElementById("demo").innerHTML = "EXPIRED";
        // }
    }, 1000);


    return (
        <>
{/* Display the result in the element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s " */}
            <div>
                <h1 className="text-align center countdown">{days}d {hours}h {minutes}m {seconds}s</h1>
            </div>
        </>
    )
}

    export default Countdown
