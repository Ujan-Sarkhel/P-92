function addUser()
{
    player_name1=document.getElementById("player_1").value;
    player_name2=document.getElementById("player_2").value;

    localStorage.setItem("player_1", player_name1);
    localStorage.setItem("player_2", player_name2);

    window.location="quiz_game_page.html";
}