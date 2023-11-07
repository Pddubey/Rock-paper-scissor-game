let scoreCard = {
    playerWins: 0,
    computerWins: 0,
    ties: 0,
  };    
     
     
     
     function checkResult(playerMove,comMove) {
        // Define the possible outcomes
        const outcomes = {
          'rock': { beats: 'scissor', loses_to: 'paper' },
          'paper': { beats: 'rock', loses_to: 'scissor' },
          'scissor': { beats: 'paper', loses_to: 'rock' }
        };
      
        if (playerMove === comMove) {
          return "It's a tie!";
        } else if (outcomes[playerMove].beats === comMove) {
          return "You Win";
        } else {
          return "You Loss";
        }
      }
    function updateScore(result) {
        if (result === "You Win") {
          scoreCard.playerWins++;
        } else if (result === "You Loss") {
          scoreCard.computerWins++;
        } else if (result === "It's a tie!") {
          scoreCard.ties++;
        }
      }
      function loadScore() {
        const savedScore = localStorage.getItem('scoreCard');
        if (savedScore) {
          return JSON.parse(savedScore);
        } else {
          return {
            playerWins: 0,
            computerWins: 0,
            ties: 0,
          };
        }
      }
      
      function saveScore() {
        localStorage.setItem('scoreCard', JSON.stringify(scoreCard));
      }
      scoreCard = loadScore();
    
    const resetButton = document.querySelector('.reset-button');
    const Result=document.querySelector('.result');
    const showMove=document.querySelector('.show-move');  
    const playerMoveImg=showMove.querySelector('#player-move');
    const comMoveImg=showMove.querySelector('#com-move');
   
    let scoreText=document.querySelector('.score-cart');  
    const rockButton = document.querySelector('.rock-button');
    const paperButton = document.querySelector('.paper-button');
    const scissorButton = document.querySelector('.scissor-button');
   

    // Event listeners for each button
    rockButton.addEventListener('click', function () {
      const playerMove = 'rock';
      
      playerMoveImg.src='/Images/rock.png';
      const computerMoves = ['rock', 'paper', 'scissor'];
      const comMove = computerMoves[Math.floor(Math.random() * 3)];
      
      if(comMove==='rock'){comMoveImg.src='/Images/rock.png';}
      else if(comMove==='paper'){comMoveImg.src='/Images/paper.png';}
      else{comMoveImg.src='/Images/scissor.png';}
      const result = checkResult(playerMove, comMove);
      updateScore(result);
      Result.innerHTML=result;
      scoreText.textContent = `Win: ${scoreCard.playerWins}, Loss: ${scoreCard.computerWins}, Tie: ${scoreCard.ties}`;
      saveScore();
      
    });

    paperButton.addEventListener('click', function () {
      const playerMove = 'paper';
      playerMoveImg.src='/Images/paper.png';
      const computerMoves = ['rock', 'paper', 'scissor'];
      const comMove = computerMoves[Math.floor(Math.random() * 3)];
      if(comMove==='rock'){comMoveImg.src='/Images/rock.png';}
      else if(comMove==='paper'){comMoveImg.src='/Images/paper.png';}
      else{comMoveImg.src='/Images/scissor.png';}
      const result = checkResult(playerMove, comMove);
      updateScore(result);
      Result.innerHTML=result;
      scoreText.textContent = `Win: ${scoreCard.playerWins}, Loss: ${scoreCard.computerWins}, Tie: ${scoreCard.ties}`;
      saveScore();
      
    });

    scissorButton.addEventListener('click', function () {
      const playerMove = 'scissor';
      playerMoveImg.src='/Images/scissor.png';
      const computerMoves = ['rock', 'paper', 'scissor'];
      const comMove = computerMoves[Math.floor(Math.random() * 3)];
      if(comMove==='rock'){comMoveImg.src='/Images/rock.png';}
      else if(comMove==='paper'){comMoveImg.src='/Images/paper.png';}
      else{comMoveImg.src='/Images/scissor.png';}
      const result = checkResult(playerMove, comMove);
      updateScore(result);
      Result.innerHTML=result;
      scoreText.textContent = `Win: ${scoreCard.playerWins}, Loss: ${scoreCard.computerWins}, Tie: ${scoreCard.ties}`;
      saveScore();
      
    });

    resetButton.addEventListener('click', function() {
        scoreCard.playerWins = 0;
        scoreCard.computerWins = 0;
        scoreCard.ties = 0;
        
        scoreText.textContent = `Win: ${scoreCard.playerWins}, Loss: ${scoreCard.computerWins}, Tie: ${scoreCard.ties}`;
        saveScore(); // Save the reset scoreCard to localStorage
      });



