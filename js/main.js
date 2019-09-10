// Get input element
let filterInput = document.querySelector("#filterInput");

// Filter the Names
const filterNames = () => {
  // Get Value of input
  let filterValue = document.querySelector("#filterInput").value.toUpperCase();

  // Get the Names ul
  let ul = document.querySelector("#names");

  // Get li from ul         &&&&   this is sick lol &&&&&&&
  let li = ul.querySelectorAll("li.collection-item");

  // Loop through .collection-item li set
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    // if match is found
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

// Add event Listener
filterInput.addEventListener("keyup", filterNames);
