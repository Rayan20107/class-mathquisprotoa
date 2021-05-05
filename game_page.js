player1=localStorage.getItem("player1_username");

player2=localStorage.getItem("player2_username");

player1_score=0;

player2_score=0;

document.getElementById("player1_name").innerHTML=player1;

document.getElementById("player2_name").innerHTML=player2;

document.getElementById("player1_score").innerHTML=player1_score;

document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn:" + player1;

document.getElementById("player_answer").innerHTML="answer turn:" + player2;

question_turn="player1";

answer_turn="player2";

function send()
{
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt (number2);
    question="<h3>Question:"+number1+"*"+number2+"</h3>";
    answer="<br>Answer:<input  id='Answerinput'type='number' class='form-control' placeholder='Enter your answer here'>"
    button="<br><button id='send_answer' onclick='check()'>Check</button>";
    row=question+answer+button;
    document.getElementById("output").innerHTML=row;
}

function check()

answer_given_by_player=document.getElementById("Answerinput").value;

{
    if (answer_given_by_player==actual_answer) 
    {
        if (answer_turn=="player2") {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        else{
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
    }

if (question_turn=="player1") {
    question_turn=player2;
    answer_turn=player1;
    document.getElementById("player_question").innerHTML="Question turn:"+player2;
    document.getElementById("player_answer").innerHTML="Answer turn:"+player1;
}
else{
    question_turn=player1;
    answer_turn=player2;
    document.getElementById("player_question").innnerHTML="Question turn:"+player1;
    document.getElementById("player_answer").innnerHTML="Answer turn:"+player2;
}
}


