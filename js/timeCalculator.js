var isNS = 1;
var count = 0;
function calculator() {
    $(".btnStart").hide();
    var timer = document.querySelector("#timer");
    if (!count) {
        timer.innerHTML = 'loading';
        count++;
    }
    var number = 0;
    $.ajax({
        url: "http://localhost:8080/time/calculator",
        type: "POST",
        crossDomain: true,
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            "intersectionId": "i01",
            "isNS": isNS
        }),
        success: async (data) => {
            const lightTime = data.response.lightTime;
            const waitTime = ((lightTime * 1000) - 15000);


            $(".yellow-light-vr").css("background-color", "darkgray");
            $(".yellow-light-hr").css("background-color", "darkgray");

            $(".green-light-vr").css("background-color", isNS == 1 ? "greenyellow" : "darkgray");
            $(".red-light-vr").css("background-color", isNS == 1 ? "darkgray" : "red");

            $(".green-light-hr").css("background-color", isNS == 0 ? "greenyellow" : "darkgray");
            $(".red-light-hr").css("background-color", isNS == 0 ? "darkgray" : "red");

            countDown(await data.response.lightTime);
            setTimeout(() => {
                $(".yellow-light-vr").css("background-color", isNS == 0 ? "yellow" : "darkgray");
                $(".yellow-light-hr").css("background-color", isNS == 1 ? "yellow" : "darkgray");
                $(".green-light-vr").css("background-color", "darkgray");
                $(".green-light-hr").css("background-color", "darkgray");

                setTimeout(() => {
                    $(".yellow-light-vr").css("background-color", "darkgray");
                    $(".yellow-light-hr").css("background-color", "darkgray");
                }, 3000);
            }
                , waitTime + 12000);
            setTimeout(() => {
                if (isNS == 1) isNS = 0;
                else isNS = 1;
                calculator();
            }, waitTime);
        },
        error: (err) => {
            console.log(err);
        }
    }
    )

    function countDown(second) {
        number = second;
        var news;
        if (isNS == 1) news = '南北：'
        else news = '東西: ';

        setInterval(function () {
            number--;
            if (number <= 0) {
                number = 0;
                return 0;
            }

            timer.innerText = news + number;
        }, 1000);

    }
}

