let score = JSON.parse(localStorage.getItem
    ("score")) || { 
        Wins: 0, 
        Losses: 0, 
        Tie: 0 
    };
    
    updateScoreElement();

    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = "";
      if (playerMove === "Paper") {
        if (computerMove === "Rock") {
          result = "You Win";
        } else if (computerMove === "Paper") {
          result = "Tie";
        } else if (computerMove === "Scissors") {
          result = "Computer Wins";
        }
      } else if (playerMove === "Rock") {
        if (computerMove === "Rock") {
          result = "Tie";
        } else if (computerMove === "Paper") {
          result = "Computer Wins";
        } else if (computerMove === "Scissors") {
          result = "You Win";
        }
      } else if (playerMove === "Scissors") {
        if (computerMove === "Rock") {
          result = "Computer Wins";
        } else if (computerMove === "Paper") {
          result = "You Win";
        } else if (computerMove === "Scissors") {
          result = "Tie";
        }
      }

      if (result === "You Win") {
        score.Wins++;
      } else if (result === "Computer Wins") {
        score.Losses++;
      } else if (result === "Tie") {
        score.Tie++;
      }

      localStorage.setItem("score", JSON.stringify(score));

      

      updateScoreElement();
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `You - ${playerMove} . Computer - ${computerMove}`;


    }

    function updateScoreElement() {
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Tie}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = "";

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
      } else {
        computerMove = "Scissors";
      }

      return computerMove;
    }