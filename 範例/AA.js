const endpoint = 'https://data.kcg.gov.tw/dataset/5a91fbe3-9364-45cf-9743-65ceee49b5e6/resource/4b5743ef-48b4-47e8-9242-54735b86e24e/download/xml01.xml';
  $.ajax({
    type: "GET",
    url: endpoint,
    dataType: "xml",
    success: function (response) {
      const charge = [];
      charge.push(...response);
      createDomElement(charge);
    },
    error: function (thrownError) {
      console.log(thrownError);
    }
  });

  function createDomElement(charge) {
    const domElements = charge.map( place => {
      return `
    <li>
      <p class="location">位置： ${ place.Location }</p>
      <p class="address">地址：${ place.Address }</p>
    </li>
  `;
    }).join("");

    const chargeList = document.querySelector('.charge-list');
    chargeList.innerHTML = domElements;
  }