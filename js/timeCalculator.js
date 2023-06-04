var isNS = 1;
function calculator() {
    $(".btnStart").hide();
    var timer = document.querySelector("#timer");
    timer.innerHTML = 'loading'
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
            countDown(await data.response.lightTime);
            setTimeout(() => {
                if(isNS == 1) isNS = 0;
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
        if(isNS == 1) news = '南北：'
        else  news = '東西: ';

        setInterval(function () {
            number--;
            if (number <= 0) {
                number = 0;
                return 0;
            }

            timer.innerText = news + number
        }, 1000);

    }
}

