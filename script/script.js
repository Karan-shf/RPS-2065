let user_win_count = 0;
let ai_win_count = 0;

function singleplayermode(){
    document.getElementById('game-mode').style.display = 'none';
    document.getElementById('single-player-div').style.display = 'block';
}
function multiplayermode(){
    document.getElementById('game-mode').style.display = 'none';
    document.getElementById('multi-player-div').style.display = 'block';   
}

function reset_page() {

    document.getElementById('intro-div').style.display = 'block';

    document.getElementById('win-div').style.display = 'none';

    document.getElementById('lose-div').style.display = 'none';

    document.getElementById('draw-div').style.display = 'none';

    document.getElementById('game-button').innerHTML = 'START';

    document.getElementById('turn').innerHTML = 'Your Turn';

    let radiobuttons = document.getElementsByName('choice');

    for (let i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].checked = false;
    }
    
}

function update_score() {
    document.getElementById('result').innerHTML = 'You '+user_win_count+':'+ai_win_count+' AI';
}

function win_of_user() {
    document.getElementById('intro-div').style.display = 'none';
    document.getElementById('win-div').style.display = 'block';
    user_win_count++;
    update_score();
}

function win_of_ai() {
    document.getElementById('intro-div').style.display = 'none';
    document.getElementById('lose-div').style.display = 'block';
    ai_win_count++;
    update_score();
}

function draw() {
    document.getElementById('intro-div').style.display = 'none';
    document.getElementById('draw-div').style.display = 'block';
}

function game() {

    let button = document.getElementById('game-button')

    console.log(button.innerHTML)

    if (button.innerHTML=='START'){

        let ai_choice_num = Math.floor(Math.random()*3);
        let ai_choice;
    
        switch (ai_choice_num) {
            case 0:
                ai_choice = 'rock';
                break;
            case 1:
                ai_choice = 'paper';
                break;
            case 2:
                ai_choice = 'scissor';
                break;
            default:
                break;
        }
    
        let user_input_element = document.getElementsByName('choice');
        let user_input = '';
    
        for (let i = 0; i < user_input_element.length; i++) {
            if (user_input_element[i].checked) {
                user_input += user_input_element[i].value;
            }
            
        }
    
        console.log("user input: " + user_input);
        console.log("ai input: " + ai_choice);
        console.log("-------------------");
    
        document.getElementById('turn').innerHTML = 'Computer Chose '+ai_choice;
        button.innerHTML = 'PLAY AGAIN';
    
        if (user_input=="rock" && ai_choice=="paper") {
            win_of_ai();
        } else if(user_input=="rock" && ai_choice=="scissor") {
            win_of_user();
        } else if(user_input=="scissor" && ai_choice=="paper") {
            win_of_user();
        } else if(user_input=="scissor" && ai_choice=="rock") {
            win_of_ai();
        } else if(user_input=="paper" && ai_choice=="rock") {
            win_of_user();
        } else if(user_input=="paper" && ai_choice=="scissor") {
            win_of_ai();
        } else if(user_input==ai_choice) {
            draw();
        } else {
            console.log("Something Went Wrong");
        }

    } else {
        reset_page();
    }

}

let player1_choice = 'none';
let player2_choice = 'none';
let player1_win_count = 0;
let player2_win_count = 0;

function render_two_player_result(){
    document.getElementById('two-result').innerHTML = 'Player 1 --- '+player1_win_count+':'+player2_win_count+' --- Player 2';
}


function win_of_player1(){
    document.getElementById('two-intro').innerHTML = 'Winner: Player 1!';
    player1_win_count++;
    render_two_player_result();
}

function win_of_player2(){
    document.getElementById('two-intro').innerHTML = 'Winner: Player 2!';
    player2_win_count++;
    render_two_player_result();
}

function reset_2player_page(){
    document.getElementById('two-game-button').innerHTML = 'START';
    document.getElementById('player1-choice').innerHTML = '';
    document.getElementById('player2-choice').innerHTML = '';
    document.getElementById('two-intro').innerHTML = 'Rock Paper Scissor';
    player1_choice = 'none';
    player2_choice = 'none';
    document.getElementById('player1-rock').style.border = 'none';
    document.getElementById('player1-paper').style.border = 'none';
    document.getElementById('player1-scissor').style.border = 'none';
    document.getElementById('player2-rock').style.border = 'none';
    document.getElementById('player2-paper').style.border = 'none';
    document.getElementById('player2-scissor').style.border = 'none';
}

function calculateResult(){

    if (player1_choice!='none' && player2_choice!='none') {
        
        button = document.getElementById('two-game-button').innerHTML;
    
        if (button=='START') {

            document.getElementById('two-game-button').innerHTML = 'PLAY AGAIN';
    
            if (player1_choice=="rock" && player2_choice=="paper") {
                document.getElementById('player1-rock').style.border = 'solid red 3px';
                document.getElementById('player2-paper').style.border = 'solid red 3px';
                win_of_player2();
            } else if(player1_choice=="rock" && player2_choice=="scissor") {
                document.getElementById('player1-rock').style.border = 'solid red 3px';
                document.getElementById('player2-scissor').style.border = 'solid red 3px';
                win_of_player1();
            } else if(player1_choice=="scissor" && player2_choice=="paper") {
                document.getElementById('player1-scissor').style.border = 'solid red 3px';
                document.getElementById('player2-paper').style.border = 'solid red 3px';
                win_of_player1();
            } else if(player1_choice=="scissor" && player2_choice=="rock") {
                document.getElementById('player1-scissor').style.border = 'solid red 3px';
                document.getElementById('player2-rock').style.border = 'solid red 3px';
                win_of_player2();
            } else if(player1_choice=="paper" && player2_choice=="rock") {
                document.getElementById('player1-paper').style.border = 'solid red 3px';
                document.getElementById('player2-rock').style.border = 'solid red 3px';
                win_of_player1();
            } else if(player1_choice=="paper" && player2_choice=="scissor") {
                document.getElementById('player1-paper').style.border = 'solid red 3px';
                document.getElementById('player2-scissor').style.border = 'solid red 3px';
                win_of_player2();
            } else if(player1_choice=="paper" && player2_choice=="paper") {
                document.getElementById('player1-paper').style.border = 'solid red 3px';
                document.getElementById('player2-paper').style.border = 'solid red 3px';
                document.getElementById('two-intro').innerHTML = 'Draw!';
            } else if(player1_choice=="rock" && player2_choice=="rock"){
                document.getElementById('player1-rock').style.border = 'solid red 3px';
                document.getElementById('player2-rock').style.border = 'solid red 3px';
                document.getElementById('two-intro').innerHTML = 'Draw!';
            } else if(player1_choice=="scissor" && player2_choice=="scissor") {
                document.getElementById('player1-scissor').style.border = 'solid red 3px';
                document.getElementById('player2-scissor').style.border = 'solid red 3px';
                document.getElementById('two-intro').innerHTML = 'Draw!';
            } else {
                console.log("Something Went Wrong");
            }
        } else {
            reset_2player_page();
        }
    } else {
        alert('both players have to make a choice')
    }
}

document.onkeydown = function player_input(event) {

    let key = event.key;

    switch (key) {
        case "A": case "a":
            player1_choice = "paper";
            break;
        case "S": case "s":
            player1_choice = "scissor";
            break;
        case "D": case "d":
            player1_choice = "rock";
            break;
        case "ArrowLeft":
            player2_choice = "paper";
            break;
        case "ArrowUp":
            player2_choice = "scissor";
            break;
        case "ArrowRight":
            player2_choice = "rock";
            break;
        default:
            console.log("Invalid Input!");
            break;
    }

    console.log("player 1 choice: " + player1_choice);
    console.log("player 2 choice: " + player2_choice);

    if (player1_choice != 'none') {
        document.getElementById('player1-choice').innerHTML = "Player 1 made a choice";
    }
    
    if (player2_choice != 'none') {
        document.getElementById('player2-choice').innerHTML = "Player 2 made a choice";
    }

}