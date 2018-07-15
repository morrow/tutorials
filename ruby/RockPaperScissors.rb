class RockPaperScissors

  # define ROCK, PAPER, SCISSORS as constants
  ROCK = 'ROCK'
  PAPER = 'PAPER'
  SCISSORS = 'SCISSORS'
  # define winning moves constant so we can look up which move wins when comparing
  WINNING_MOVES = {
    ROCK => SCISSORS,
    PAPER => ROCK,
    SCISSORS => PAPER
  }

  def initialize(rounds)
    @rounds = rounds
    @user_score = 0
    @computer_score = 0
    @round_number = 1
    @rounds_won = 0
  end

  def getWinner(a, b)
    if a == b
      winner = 'tie'
    else
      # We defined what the winning moves are earlier, and here we look up if the winning move for move "a" matches move "b".
      # For example, if "a" is ROCK, the winning move for ROCK is defined as SCISSORS, so if "b" is SCISSORS, we can say that "a" wins.
      # If it is, move "a" is the winner. If it is not, then it follows that whatever "b" is, it beats "a" since we have already checked for a tie.
      if WINNING_MOVES[a] == b
        winner = a
      else
        winner = b
      end
    end
    return winner
  end

  def printWinner(winner, user_input, computer_input)
    if user_input == winner
      puts "You won! :)"
    elsif computer_input == winner
      puts "The computer won :("
    elsif user_input == computer_input
      puts "It was a tie! :|"
    else
      puts "Something went horribly wrong. :O"
    end
  end

  def printScore
    puts "\nScore:\n"
    puts "You: #{@user_score}"
    puts "Computer: #{@computer_score}"
  end

  def playRound
    # get a move from the computer
    available_moves = [ROCK, PAPER, SCISSORS]
    computer_input = available_moves[rand(3)]
    # print round info
    puts "\n********************************\n"
    puts "Round: #{@round_number}"
    print "\nPlease enter a move: "
    # get user input
    user_input = gets
    # print computer's move
    puts "Computer's move: #{computer_input}\n\n"
    # check if user input matches a valid move
    if user_input.match /rock|^r/i
      user_input = ROCK
    elsif user_input.match /paper|^p/i
      user_input = PAPER
    elsif user_input.match /scissors|^s/i
      user_input = SCISSORS
    end
    #get winner and update scoring
    winner = getWinner(user_input, computer_input)
    if winner != 'tie'
      @rounds_won += 1
      if winner == user_input
        @user_score += 1
      elsif winner == computer_input
        @computer_score += 1
      end
    end
    # print winner and score, update round number
    printWinner(winner, user_input, computer_input)
    printScore()
    @round_number += 1
  end

  def playGame
    # play a round
    playRound()
    # calculate the maximum rounds remaining
    max_rounds_remaining = @rounds - @rounds_won
    # if gap between player scores is larger than possible rounds left, game over
    if @computer_score - @user_score > max_rounds_remaining
      puts "YOU LOST ¯\\_(ツ)_/¯"
    elsif @user_score - @computer_score > max_rounds_remaining
      puts "YOU WON OMG :D"
    else
      self.playGame()
    end
  end

end

game = RockPaperScissors.new(3)
game.playGame()
