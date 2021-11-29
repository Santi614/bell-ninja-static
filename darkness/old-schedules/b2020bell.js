function scheduleB() {

    audio = new Audio('./img/guitarbell.mp3');

    var d = new Date();
    var n = d.getDay()
    var n = 2020; // (2020-2021 Weekly Schedule)
    getsch();



    //set the target countdown time
    function getsch() {


        //get current minute, seconds, and hours
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var cminute = today.getMinutes();
        if (cminute < 10) {
            var cminute = "0" + cminute;
        }
        var chour = today.getHours();
        var csecond = today.getSeconds();


        //divide current minute by sixty (an hour)* and combine strings for hour + minute product*
        // new Date() and today are commensurated. ACtually, division is not necessary if the string (x.x) is accepted.
        var minute = cminute
        var timex = chour + "." + cminute;

    
            ///// Coronavirus 2020-2021 B SCHEDULE
            if (n == 2020) {
                dayweek = "Coronavirus - First Day of School Exception Schedule (Middle School)"
                //var timex = new Date().getHours();
                if (timex >= 1.00 && timex < 8.00) {
                    period = "Early Bird"
                    var timel = "8:00:00";
                    classis = false;
                } else if (timex >= 8.00 && timex < 9.00) {
                    period = "Welcome/Orientation"
                    bmessage = "Welcome/Orientation -  8:00 to 9:00"
                    var timel = "9:00:00";
                    classis = true;
                } else if (timex >= 9.00 && timex < 9.30) {
                    bmessage = "Period 1 -  9:00 to 9:30"
                    period = "Period 1"
                    var timel = "9:30:00";
                    classis = true;
                } else if (timex >= 9.30 && timex < 9.40) {
                    period = "Take 10. We're back at 9:40"
                    bmessage = "P1 to P2 Intermission - 9:30 to 9:40"
                    var timel = "9:40:00";
                    classis = false;
                } else if (timex >= 9.40 && timex < 10.10) {
                    bmessage = "Period 2 -  9:40 to 10:10"
                    period = "Period 2"
                    var timel = "10:10:00";
                    classis = true;
                } else if (timex >= 10.10 && timex < 10.20) {
                    bmessage = "P2 to P3 Intermission -  10:10 to 10:20"
                    period = "Take 10. We're back at 10:20"
                    var timel = "10:20:00";
                    classis = false;
                } else if (timex >= 10.20 && timex < 10.50) {
                    bmessage = "Period 3 - 10:20 to 10:50"
                    period = "Period 3"
                    var timel = "10:50:00";
                    classis = true;
                } else if (timex >= 10.50 && timex < 11.00) {
                    period = "Take 10. We're back at 10:30"
                    bmessage = "P3 to P4 Intermission -  10:50 to 11:00"
                    var timel = "11:00:00";
                    classis = false;
                } else if (timex >= 11.00 && timex < 11.30) {
                    bmessage = "Period 4 - 11:00 to 11:30"
                    period = "Period 4"
                    var timel = "11:30:00";
                    classis = true;
                } else if (timex >= 11.30 && timex < 11.40) {
                    period = "Take 10. We're back at 11:40"
                    bmessage = "P4 to P5 Intermission -  11:30 to 11:40"
                    var timel = "11:40:00";
                    classis = false;
                } else if (timex >= 11.40 && timex < 12.10) {
                    bmessage = "Period 5A (Either Lunch or Study Hall) - 11:40 to 12:10"
                    period = "Period 5A"
                    var timel = "12:10:00";
                    classis = false;
                } else if (timex >= 12.10 && timex < 12.15) {
                    period = "Take 5 Minutes off. We're back at 12:15"
                    bmessage = "P5a to P5b Intermission -  12:10 to 12:15"
                    var timel = "12:15:00";
                    classis = false;
                } else if (timex >= 12.15 && timex < 12.45) {
                    bmessage = "Period 5B (Either Lunch or Study Hall) - 12:15 to 12:45"
                    period = "Period 5B"
                    var timel = "12:45:00";
                    classis = false;
                } else if (timex >= 12.45 && timex < 12.55) {
                    period = "Take 10. We're back at 12:55 PM"
                    bmessage = "P5B to P6A Intermission -  12:45 to 12:55"
                    var timel = "12:55:00";
                    classis = false;
                } else if (timex >= 12.55 && timex < 13.25) {
                    bmessage = "Period 6A (Class) 12:55 PM to 1:25 PM"
                    period = "Period 6A"
                    var timel = "13:25:00";
                    classis = true;
                } else if (timex >= 13.25 && timex < 13.30) {
                    period = "Take 5 Minutes off. We're back at 1:30 PM"
                    bmessage = "P6A to P6B Intermission -  1:25 PM to 1:30 PM"
                    var timel = "13:30:00";
                    classis = false;
                } else if (timex >= 13.30 && timex < 14.00) {
                    bmessage = "Period 6B (Study Hall) - 1:30 PM to 2:00 PM"
                    period = "Period 6B"
                    var timel = "14:00:00";
                    classis = true;
                } else if (timex >= 14.00 && timex < 14.10) {
                    period = "Take 10. We're back at 2:10 PM"
                    bmessage = "P6B to P7 Intermission -  2:00 PM to 2:10 PM"
                    var timel = "14:10:00";
                    classis = false;
                } else if (timex >= 14.10 && timex < 14.40) {
                    period = "Period 7"
                    bmessage = "Period 7 -  2:10 PM to 2:40 PM"
                    var timel = "14:40:00";
                    classis = false;
                } else if (timex >= 14.40 && timex < 14.50) {
                    period = "Take 10. We're back at 2:50 PM"
                    bmessage = "P7 to P8 Intermission -  2:40 PM to 2:50 PM"
                    var timel = "14:50:00";
                    classis = false;
                } else if (timex >= 14.50 && timex < 15.20) {
                    period = "Period 8"
                    bmessage = "Period 8 -  2:50 PM to 3:20 PM"
                    var timel = "15:20:00";
                    classis = false;
                } else if (timex >= 14.45 && timex <= 24.59) {
                    period = "School Day Ended"
                    var timel = "23:59:59";
                    classis = false;
                    bmessage = "Have a great rest of your day!"
                } else {
                    period = "Intermission"
                    var timel = "1:00:00";
                    classis = false;
                    exit("Program Terminated to prevent the bell 'sound loop' bug.");
                }
            };

            

        document.getElementById("demo-b").innerHTML = period;
        document.getElementById("demo2-b").innerHTML = timex;
        document.getElementById("demo3-b").innerHTML = dayweek;
        document.getElementById("demo4-b").innerHTML = bmessage;

        ////////////////
        //var timel = "15:20:00";
        ////////////////

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + ' ' + dd + ', ' + yyyy + ' ';
        var countDownDate = new Date(today + " " + timel).getTime();
        //var countDownDate = new Date(today + " 14:35:20").getTime();
        var x = setInterval;

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);






            //get everythiong again
            //get current minute, seconds, and hours
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
            var cminute = today.getMinutes();
            if (cminute < 10) {
                var cminute = "0" + cminute;
            }
            var chour = today.getHours();
            var csecond = today.getSeconds();
        
        
            //divide current minute by sixty (an hour)* and combine strings for hour + minute product*
            // new Date() and today are commensurated. ACtually, division is not necessary if the string (x.x) is accepted.
            var minute = cminute;
            var timex = chour + "." + cminute;



        temphour = hours * 60;
        combinedvar = minutes + temphour;
        tempmath = combinedvar * 60;
        nonseconds = temphour + tempmath;
        finalseconds = seconds + nonseconds;
        window.xsec = finalseconds;

    };
    /////////////////// Visuals preperation




    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.daysB');
        var hoursSpan = clock.querySelector('.hoursB');
        var minutesSpan = clock.querySelector('.minutesB');
        var secondsSpan = clock.querySelector('.secondsB');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            
            if (t.total <= 0) {
                clearInterval(timeinterval);
                getsch();
            }
        }
        getsch();
        checknull();
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    // Last number is mili seconds
    deadline = new Date(Date.parse(new Date()) + 1 * 1 * 1 * xsec * 1000);
    initializeClock('clockdiv2', deadline);

    function checknull() {
        if (distance == 0) {
            getsch();
            Program.restart();
            window.location.reload();
        };

    };




    var x = document.getElementById("bell"); 

    function playAudio() { 
    x.play(); 
    } 

    function pauseAudio() { 
    x.pause(); 
    } 

    timeoutx = finalseconds * 1000;

    const start = Date.now();

    console.log('Starting alternate bell countdown for audio');

    setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis/1000)}, playing bell`);
    playAudio();
    scheduleB();
    }, timeoutx);

    if (accepted()) {

        document.cookie = "audioenabled = True";

    }




    function exit( status ) {
    
        var i;
    
        if (typeof status === 'string') {
            console.log(status);
        }
    
        window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);
    
        var handlers = [
            'copy', 'cut', 'paste',
            'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
            'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
            'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
        ];
    
        function stopPropagation (e) {
            e.stopPropagation();
            // e.preventDefault(); // Stop for the form controls, etc., too?
        }
        for (i=0; i < handlers.length; i++) {
            window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
        }
    
        if (window.stop) {
            window.stop();
        }
    
        throw '';
    }

}