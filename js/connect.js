function connectToJava() {
    $.ajax({
      url: "http://localhost:8080/intersection/all",
      method: "GET",
      crossDomain: true,
      dataType: "json",
      success: function(res) {
        console.log(res);
        createDomElement(res.response)
        createDomElement2(res.response)
        createDomElement3(res.response)
        createDomElement4(res.response)
        
      },
      error: function(err) {
        console.log(err);
      }
    });
  
    function createDomElement(response) {
      const domElements = 
         `
            <div>
              <p> ${response[0].intersection_id}</p>
            </div>
          `;
      const chargeList = document.querySelector('.intersection-id');
      chargeList.innerHTML = domElements;
    }

    function createDomElement2(response) {
      const domElements = 
         `
            <div>
              <p> ${response[0].intersection_id}</p>
            </div>
          `;
      const chargeList = document.querySelector('.intersection-id2');
      chargeList.innerHTML = domElements;
    }

    function createDomElement3(response) {
      const domElements = 
         `
            <div>
              <p> ${response[0].intersection_id}</p>
            </div>
          `;
      const chargeList = document.querySelector('.intersection-id3');
      chargeList.innerHTML = domElements;
    }

    function createDomElement4(response) {
      const domElements = 
         `
            <div>
              <p> ${response[0].intersection_id}</p>
            </div>
          `;
      const chargeList = document.querySelector('.intersection-id4');
      chargeList.innerHTML = domElements;
    }
  }
