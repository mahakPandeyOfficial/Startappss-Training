function calculateSum() {
    // Get input value
    var input = document.getElementById("arrayInput").value;

    // Split into array and trim spaces
    var numbers = input.split(",").map(function(item) {
      return parseFloat(item.trim());
    });

    // Check for invalid numbers
    if (numbers.some(isNaN)) {
      document.getElementById("result").innerText = "❌ Please enter valid numbers separated by commas.";
      return;
    }

    // Calculate sum
    var sum = numbers.reduce(function(total, num) {
      return total + num;
    }, 0);

    // Show result
    document.getElementById("result").innerText = "✅ Sum: " + sum;
    console.log(sum);
  }

  function changeBG() {
    var element = document.getElementById('mode'); 
    element.style.background = 'grey';
  }