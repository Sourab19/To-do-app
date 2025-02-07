function fetchTodos() {
  var para = document.querySelector(".para");

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);

      let val = `<div class="table-responsive">
                          <table class="table">
                              <thead class="table-dark">
                                  <tr>
                                      <th>Select</th>
                                      
                                      <th>ID</th>
                                      <th>Title</th>
                                  </tr>
                              </thead>
                              <tbody>`;

      data.forEach((item) => {
        val += `<tr>
                          <td><input type="checkbox" class="todo-checkbox"></td>
                          
                          <td>${item.id}</td>
                          <td>${item.title}</td>
                      </tr>`;
      });

      val += `</tbody></table></div>`;
      para.innerHTML = val;

      document.querySelectorAll(".todo-checkbox").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          setTimeout(() => {
            validateTaskCompletion();
          }, 10);
        });
      });
    }
  };
}

fetchTodos();

function validateTaskCompletion() {
  let checkedCount = document.querySelectorAll(".todo-checkbox:checked").length;

  var x = new Promise((resolve, reject) => {
    if (checkedCount === 5) {
      resolve("Congrats, You have selected exactly 5 tasks!");
    } else if (checkedCount > 5) {
      reject(" Selected more than 5 tasks! ");
    }
  });
  x.then((message) => {
    alert(message);
  }).catch((message) => {
    alert(message);
  });
}
