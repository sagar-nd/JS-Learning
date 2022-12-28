function UpdateData() {
  tit = document.getElementById("title").value;
  dis = document.getElementById("discription").value;

  if (localStorage.getItem("itemsJson") == null) {
    itemsJsonArray = [];
    itemsJsonArray.push([tit, dis]);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  } else {
    itemsJsonArrayStr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    itemsJsonArray.push([tit, dis]);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  }
}

function getData() {
  let itemsJsonArrayStr = localStorage.getItem("itemsJson");
  let itemsJsonArray = JSON.parse(itemsJsonArrayStr);
  let tableBody = document.getElementById("tableBody");
  let str = "";
  
  if (!itemsJsonArrayStr) {
    str += `
    <tr>
    <th class="border-bottom-0"></th>
    <td class="border-bottom-0"></td>
    <td class="border-bottom-0">"No data found"</td>
  </tr>
    `;
  } else {
    itemsJsonArray.forEach((element, index) => {
      str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>

                <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
            </tr>
            `;
    });
  }

  tableBody.innerHTML = str;
}
getData();

function deleted(itemsIndex) {
  confirm("deleted", itemsIndex);
  itemsJsonArrayStr = localStorage.getItem("itemsJson");
  itemsJsonArray = JSON.parse(itemsJsonArrayStr);
  itemsJsonArray.splice(itemsIndex, 1);
  console.log(itemsJsonArray);
  localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  getData();
}

function clearStorage() {
  if (confirm("Do you really want to delete all...?")) {
    console.log("clearing storage..");

    localStorage.clear();
    getData();
  }
}
function reset() {
  let form = document.getElementById("myForm");
  form.reset();
}
