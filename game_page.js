player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score=0;
player2_score=0;

document.getElementById("player_2").innerHTML=player2_name+ ":"
document.getElementById("player_1").innerHTML=player1_name+ ":"
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score

document.getElementById("player_question").innerHTML="Question Turn-" + player1_name
document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name

function send()
{
    
    number1 = document.getElementById("num_1").value
    number2 = document.getElementById("num_2").value
    actual_answer = parseInt(number1) * parseInt(number2)

    qusetion_number = "<h4>"+number1+" X "+ number2 + "</h4>"
    input_box="<br>Answer : <input type='text' id='input_check_box'>"
    chk_btn="<br><br><button class='btn btn-info' onclick='check()' >Check</button>"
    row = qusetion_number+input_box+chk_btn
    document.getElementById("output").innerHTML=row
    document.getElementById("num_1").value= " "
    document.getElementById("num_2").value=" " 
}

question_turn="player1_name";
answer_turn="player2_name";

function check()
{
    get_answer=document.getElementById("input_check_box").value
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1_name")
        {
            player1_score=player1_score+1
            document.getElementById("player1_score").innerHTML=player1_score
        }
        else
        {
            player2_score=player2_score+1
            document.getElementById("player2_score").innerHTML=player2_score
        }
    }
    if(question_turn == "player1_name")
    {
        question_turn="player2_name"
        document.getElementById("player_question").innerHTML="Question turn-"+player2_name
    }
    else
    {
        question_turn="player1_name"
        document.getElementById("player_question").innerHTML="Question turn-"+player1_name
    }
    if(answer_turn == "player1_name")
    {
        answer_turn="player2_name"
        document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name
    }
    else
    {
        answer_turn="player1_name"
        document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name
    }
    document.getElementById("input_check_box").value=" "
    document.getElementById("output").innerHTML=" "
}