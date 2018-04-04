    $(document).ready(function() {

      // Make our variables global to the runtime of our application
      let userNumber = 0;
      let winningNumber = 20;
      // var operator = "";
      let currentSum = 0;
      let wins = 0;
      let losses = 0;
      let g1Value = 1;
      let g2Value = 2;
      let g3Value = 3;
      let g4Value = 4;
      
      // var result = 0;
      // var isOperatorChosen = false;
      // var isCalculated = false;

      // Use a function to initialize our calculator.
      // This way when the user hits clear, we can guarantee a reset of the app.
      function initializeGame() {
        userInFunctionGuess = "";
        winningInFunctionNumber = "";
        // operator = "";
        // isOperatorChosen = false;
        hasLost = false;

      // This resets the Results Panel where we're using 
      // each id for an empty h1 that we populate
        $("#current-sum, #winning-number").empty();
      }
      
      // getting all the numbers
      $(".card").on("click", ".number", function() {
        if(currentSum < winningNumber){
          currentSum += parseInt($(this).val());
          var n = currentSum.toString();
          $("#current-sum").text(n);
          debugger;
        }
        // // Check if we've already run a calculation, if so... we'll just.
        // if (hasLost === true) {
        //   return false;
        // }

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
          secondNumber += $(this).val();
          $("#second-number").text(secondNumber);

        }
        else {
          firstNumber += $(this).val();
          $("#first-number").text(firstNumber);
        }

      }).on("click", ".operator", function() {

        // Check if a first number has already been selected
        // Or we've already run a calculation, if so we just exit.
        if (!firstNumber || isCalculated) {
          return false;
        }

        // Set isOperatorChosen to true so we start writing to secondNumber
        isOperatorChosen = true;

        // Store off the operator
        operator = $(this).val();

        // Set the HTML of the #operator to the text of what was clicked
        $("#operator").text($(this).text());

      }).on("click", ".equal", function() {

        // If we already clicked equal, don't do the calculation again
        if (isCalculated) {
          return false;
        }

        // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
        isCalculated = true;

        // Use parseInt to convert our string representation of numbers into actual integers
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        // Based on the operator that was chosen.
        // Then run the operation and set the HTML of the result of that operation
        // if (operator === "plus") {
        //   result = firstNumber + secondNumber;
        // }

        // else if (operator === "minus") {
        //   result = firstNumber - secondNumber;
        // }

        // else if (operator === "times") {
        //   result = firstNumber * secondNumber;
        // }

        // else if (operator === "divide") {
        //   result = firstNumber / secondNumber;
        // }

        // else if (operator === "power") {
        //   result = Math.pow(firstNumber, secondNumber);
        // }

        $("#result").text(result);

      }).on("click", ".clear", function() {

        // Call initializeCalculater so we can reset the state of our app
        initializeGame();

      });

      // Call initializeCalculater so we can set the state of our app
      initializeGame();
    });

