function connectToJava() {
    $.ajax({
        url: "http://localhost:8080/intersection/all",
        // headers: {'Access-Control-Allow-Origin': '*' },
        method: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (res) { 
            console.log(res)
            alert(res.response[0].intersection_id) 
        },
        error: function (err) { console.log(err) },
    });
}