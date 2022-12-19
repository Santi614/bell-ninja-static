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

    
    ///// Summer School Schedule
    if (n == 2020) {
        dayweek = "Summer School Schedule 2021"
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Early Bird"
            timel = "8:00:00";
            classis = false;
        } else if (timex >= 8.00 && timex < 9.10) {
            period = "Class 1"
            bmessage = "Session 1 - 8:00 to 9:10"
            timel = "9:10:00";
            classis = true;
        } else if (timex >= 9.10 && timex < 9.20) {
            period = "Take 10. We're back at 9:20"
            bmessage = "Intermission Between 2 Classes -  9:10 to 9:20"
            timel = "9:20:00";
            classis = false;
        } else if (timex >= 9.20 && timex < 10.25) {
            period = "Class 2"
            bmessage = "Session 2 - 9:20 to 10:25"
            timel = "10:25:00";
            classis = false;
        } else if (timex >= 10.25 && timex < 10.35) {
            period = "Take 10. We're back at 10:35"
            bmessage = "Intermission Between 2 Classes - 10:25 to 10:35"
            timel = "10:35:00";
            classis = true;
        } else if (timex >= 10.35 && timex < 11.45) {
            period = "Class 3"
            bmessage = "Session 3 - 10:35 to 11:45"
            timel = "11:45:00";
            classis = false;
        } else if (timex >= 11.45 && timex < 11.55) {
            period = "Take 10. We're back at 11:55"
            bmessage = "Intermission Between 2 Classes - 11:45 to 11:55"
            timel = "11:55:00";
            classis = true;
        } else if (timex >= 11.55 && timex < 13.00) {
            period = "Class 3"
            bmessage = "Session 3 - 11:55 to 1:00"
            timel = "13:00:00";
            classis = false;
        } else if (timex >= 13.00 && timex <= 24.59) {
            period = "School Day Ended"
            timel = "23:59:59";
            classis = false;
            bmessage = "Have a great rest of your day!"
        } else {
            period = "Intermission"
            timel = "1:00:00";
            classis = false;
            exit("Program Terminated to prevent the bell 'sound loop' bug.");
        }
    };

    /*
    ///// FINAL TESTING WEEK SCHEDULE
    if (n == 2020) {
        dayweek = "FINALS TESTING WEEK (Good luck!)"
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Early Bird"
            timel = "8:00:00";
            classis = false;
        } else if (timex >= 8.00 && timex < 9.30) {
            period = "Class 1"
            bmessage = "Class 1 TESTING -  8:00 to 9:30"
            timel = "9:30:00";
            classis = true;
        } else if (timex >= 9.30 && timex < 9.40) {
            period = "Take 10. We're back at 9:40"
            bmessage = "Intermission Between 2 Classes -  9:30 to 9:40"
            timel = "9:40:00";
            classis = false;
        } else if (timex >= 9.40 && timex < 11.10) {
            period = "Class 2"
            bmessage = "Class 2 TESTING -  9:40 to 11:10"
            timel = "11:10:00";
            classis = false;
        } else if (timex >= 11.10 && timex <= 24.59) {
            period = "School Day Ended"
            timel = "23:59:59";
            classis = false;
            bmessage = "Have a great rest of your day!"
        } else {
            period = "Intermission"
            timel = "1:00:00";
            classis = false;
            exit("Program Terminated to prevent the bell 'sound loop' bug.");
        }
    };
    */

            

        document.getElementById("demo-b").innerHTML = period;
        document.getElementById("demo2-b").innerHTML = timex;
        document.getElementById("demo3-b").innerHTML = dayweek;
        document.getElementById("demo4-b").innerHTML = bmessage;

        ////////////////
        //timel = "15:20:00";
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