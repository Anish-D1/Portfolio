// Theme Toggle Function
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-theme");
}

    var btn = document.querySelector(".theme-toggle");
    btn.addEventListener("click", function() {
      if (document.body.classList.contains("dark-theme")) {
        btn.textContent = "Light Mode";    
        } else {    
        btn.textContent = "Dark Mode";
        }
    });


// Calculator Functions
function addToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculate() {
        try {
            var result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Invalid Expression';
        }
    }

    