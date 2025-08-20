//alert("Hi! This schedule isa werong because twe can an acseembly!!");




function regularSchedule(timex) {
 //var timex = new Date().getHours();
    if (timex >= 1.00 && timex < 8.00) {
        period = "Good Morning! School Starts in..."
        bmessage = "Early Bird Until 8:00"
        timel = "8:00:00";
        classis = false;
    } else if (timex >= 8.00 && timex < 8.57) {
        period = "Period 1"
        bmessage = "Period 1 - 8:00 to 8:57"
        timel = "8:57:00";
        classis = true;
    } else if (timex >= 8.57 && timex < 9.00) {
        bmessage = "Period 1 & 2 Intermission - 8:57 to 9:00"
        period = "Class Intermission"
        timel = "9:00:00";
        classis = false;
    } else if (timex >= 9.00 && timex < 9.46) {
        period = "Period 2"
        bmessage = "Period 2 - 9:00 to 9:46"
        timel = "9:46:00";
        classis = true;
    } else if (timex >= 9.46 && timex < 10.06) {
        bmessage = "Break - 9:46 to 10.06"
        period = "Break Time"
        timel = "10:06:00";
        classis = false;
    } else if (timex >= 10.09 && timex < 10.55) {
        period = "Period 3"
        bmessage = "Period 3 - 9:50 to 10:35"
        timel = "10:55:00";
        classis = true;
    } else if (timex >= 10.55 && timex < 10.58) {
        bmessage = "Period 3 & 4 Intermission - 10:55 to 10:58"
        period = "Class Intermission"
        timel = "10:58:00";
        classis = false;
    } else if (timex >= 10.58 && timex < 11.44) {
        period = "Period 4/ Lunch 1 - 10:58 - 11:44"
        bmessage = "Period 4 - 10:40 to 11:44"
        timel = "11:44:00";
        classis = true;
    }
      else if (timex >= 11.44 && timex < 11.47) {
          period = "Period 4 & 5 intermission - 11.44 - 11.47"
          bmessage = "Class Intermission"
          timel = "11:47:00";
          classis = true;
    } else if (timex >= 11.47 && timex < 12.33) {
        bmessage = "Period 5/ Lunch 2 - 11:47 to 12:33"
        period = "Period 5"
        timel = "12:33:00";
        classis = true;
    } else if (timex >= 12.33 && timex < 12.36) {
        bmessage = "Period 5 & 6 Intermission - 12:33 to 12:36"
        period = "Class Intermission"
        timel = "12:36:00";
        classis = false;
    } else if (timex >= 12.36 && timex < 13.22) {
        bmessage = "Period 6/Lunch 3 - 12:36 to 13:22"
        period = "Period 6"
        timel = "13:22:00";
        classis = true;
    } else if (timex >= 13.22 && timex < 13.25) {
        bmessage = "Period 6 & 7 Intermission - 1:22 to 1:25"
        period =  "Class Intermission"
        timel = "13:25:00";
        classis = false;
    } else if (timex >= 13.25 && timex < 14.11) {
        bmessage = "Period 7 - 1:25 to 2:11"
        period = "Period 7"
        timel = "14:11:00";
        classis = true;
    } else if (timex >= 14.11 && timex < 14.14) {
        bmessage = "Period 7 & 8 Intermission - 2:11 to 2:14"
        period =  "Class Intermission"
        timel = "14:14:00";
        classis = false;
    } else if (timex >= 14.14 && timex < 15.00) {
        bmessage = "Period 8 - 2:14 to 3:00"
        period = "Period 8"
        timel = "14:15:00";
        classis = true;
    } else if (timex >= 15.00 && timex < 15.30) {
        bmessage = "Optional Tutorial - 3:00 to 3:30"
        period = "Optional Tutorial"
        timel = "15:30:00";
        classis = false;
    } else if (timex >= 15.30 && timex <= 17.00) {
        bmessage = "The library *MAY BE* open until 5:00 PM"
        period = "Have a great rest of your day! Library Closes in..."
        timel = "17:00:00";
        classis = false;
    } else if (timex >= 17.01 && timex <= 24.59) {
        period = "Have a great rest of your day!"
        timel = "24:00:00";
        classis = false;
    } else {
        period = "Wow, devoted. Get to class! If you see this message email me."
        timel = "1:00:00";
        classis = false;
    }
};

function wednesdayfridaySchedule(timex) {
    //var timex = new Date().getHours();
    if (timex >= 1.00 && timex < 8.00) {
        period = "Good Morning! School Starts in..."
        bmessage = "Early Bird Until 8:00"
        timel = "8:00:00";
        classis = false;
    } else if (timex >= 8.00 && timex < 8.45) {
        period = "Period 1"
        bmessage = "Period 1 - 8:00 to 8:45"
        timel = "8:45:00";
        classis = true;
    } else if (timex >= 8.45 && timex < 8.48) {
        bmessage = "Period 1 & 2 Intermission - 8:45 to 8:48"
        period = "Class Intermission"
        timel = "8:48:00";
        classis = false;
    } else if (timex >= 8.48 && timex < 9.33) {
        period = "Period 2"
        bmessage = "Period 2 - 8.48 to 9:33"
        timel = "9:46:00";
        classis = true;
    } else if (timex >= 9.33 && timex < 10.12) {
        bmessage = "Thrive Time - 9:33 to 10.12"
        period = "Thrive Time"
        timel = "10:12:00";
        classis = false;
    } else if (timex >= 10.15 && timex < 11.00) {
        period = "Period 3"
        bmessage = "Period 3 - 10.15 to 11:00"
        timel = "11:00:00";
        classis = true;
    } else if (timex >= 11.00 && timex < 11.03) {
        bmessage = "Period 3 & 4 Intermission - 11:00 to 11:03"
        period = "Class Intermission"
        timel = "11:03:00";
        classis = false;
    } else if (timex >= 11.03 && timex < 11.48) {
        period = "Period 4/ Lunch 1 - 11:03 - 11:48"
        bmessage = "Period 4 - 11:03 to 11:48"
        timel = "11:48:00";
        classis = true;
    } else if (timex >= 11.48 && timex < 11.51) {
          period = "Period 4 & 5 intermission - 11:48 to 11.51"
          bmessage = "Class Intermission"
          timel = "11:51:00";
          classis = true;
    } else if (timex >= 11.51 && timex < 12.36) {
        bmessage = "Period 5/ Lunch 2 - 11:51 to 12:36"
        period = "Period 5"
        timel = "12:36:00";
        classis = true;
    } else if (timex >= 12.36 && timex < 12.39) {
        bmessage = "Period 5 & 6 Intermission - 12:36 to 12:39"
        period = "Class Intermission"
        timel = "12:39:00";
        classis = false;
    } else if (timex >= 12.39 && timex < 13.24) {
        bmessage = "Period 6/Lunch 3 - 12:39 to 1:24"
        period = "Period 6"
        timel = "13:24:00";
        classis = true;
    } else if (timex >= 13.24 && timex < 13.27) {
        bmessage = "Period 6 & 7 Intermission - 12:50 to 13:15"
        period = "Class Intermission"
        timel = "13:15:00";
        classis = false;
    } else if (timex >= 13.27 && timex < 14.12) {
        bmessage = "Period 7 - 1:20 to 2:10"
        period = "Period 7"
        timel = "14:12:00";
        classis = true;
    } else if (timex >= 14.12 && timex < 14.15) {
        bmessage = "Period 7 & 8 Intermission - 2:12 to 2:15"
        period = "Class Intermission"
        timel = "14:15:00";
        classis = false;
    } else if (timex >= 14.15 && timex < 15.00) {
        bmessage = "Period 8 - 1:20 to 2:10"
        period = "Period 8"
        timel = "15:00:00";
        classis = true;
    } else if (timex >= 15.00 && timex < 15.30) {
        bmessage = "Optional Tutorial - 3:00 to 3:30"
        period = "Optional Tutorial"
        timel = "15:30:00";
        classis = false;
    } else if (timex >= 15.30 && timex <= 17.00) {
        bmessage = "The library *MAY BE* open until 5:00 PM"
        period = "Have a great rest of your day! Library Closes in..."
        timel = "17:00:00";
        classis = false;
    } else if (timex >= 17.01 && timex <= 24.59) {
        period = "Have a great rest of your day!"
        timel = "24:00:00";
        classis = false;
    } else {
        period = "Wow, devoted. Get to class! If you see this message email me."
        timel = "1:00:00";
        classis = false;
    }
};



function scheduleA() {

    audio = new Audio('./img/guitarbell.mp3');

    var d = new Date();
    var n = d.getDay();
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
        timex = chour + "." + cminute;



        if (n == 1) {
            dayweek = "Monday :("
            regularSchedule(timex);
        };

        ///// Tuesday
        if (n == 2) {
            dayweek = "Tuesday"
            regularSchedule(timex);
        };

        ///// Wednesday
        if (n == 3) {
            dayweek = "Wednesday"
            //var timex = new Date().getHours();
            wednesdayfridaySchedule(timex);
        };

        if (n == 4) {
            dayweek = "Thursday"
            regularSchedule(timex);
        }


        if (n == 5) {
            //alert("The schedule may not be accurate today as the school never tells me when there is an assembly")
            dayweek = "Friday";
            //var timex = new Date().getHours();
            //regularSchedule(timex);
            wednesdayfridaySchedule(timex);
        };


        if (n == 6) {
            dayweek = "Saturday!"
            period = "Please enjoy your weekend!"
            bmessage = "Enjoy Your Weekend!"
            timel = "24:00:00";
        };

        if (n == 0) {
            dayweek = "Sunday :|"
            period = "Just one more day please......."
            bmessage = "Enjoy Your Weekend!"
            timel = "24:00:00";
        }
    }


    document.getElementById("demo-a").innerHTML = period;
    document.getElementById("demo2-a").innerHTML = timex;
    document.getElementById("demo3-a").innerHTML = dayweek;
    document.getElementById("demo4-a").innerHTML = bmessage;

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
        var daysSpan = clock.querySelector('.daysA');
        var hoursSpan = clock.querySelector('.hoursA');
        var minutesSpan = clock.querySelector('.minutesA');
        var secondsSpan = clock.querySelector('.secondsA');

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
    initializeClock('clockdiv1', deadline);

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

        console.log(`seconds elapsed = ${Math.floor(millis / 1000)}, playing bell`);
        playAudio();
        scheduleA();
    }, timeoutx);



    function exit(status) {

        var i;

        if (typeof status === 'string') {
            console.log(status);
        }

        window.addEventListener('error', function (e) { e.preventDefault(); e.stopPropagation(); }, false);

        var handlers = [
            'copy', 'cut', 'paste',
            'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
            'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
            'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
        ];

        function stopPropagation(e) {
            e.stopPropagation();
            // e.preventDefault(); // Stop for the form controls, etc., too?
        }
        for (i = 0; i < handlers.length; i++) {
            window.addEventListener(handlers[i], function (e) { stopPropagation(e); }, true);
        }

        if (window.stop) {
            window.stop();
        }

        throw '';
    }


}
