let user_win_count = 0;
let ai_win_count = 0;

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