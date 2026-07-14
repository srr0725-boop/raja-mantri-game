function createRoom() {
    let room = Math.random().toString(36).substring(2,8).toUpperCase();

    alert("Room Created!\n\nRoom Code: " + room);

    localStorage.setItem("roomCode", room);
}

function joinRoom() {

    let code = prompt("Enter Room Code");

    if(code == null || code == ""){
        alert("Please enter Room Code");
        return;
    }

    let saved = localStorage.getItem("roomCode");

    if(saved == code.toUpperCase()){
        alert("Successfully Joined Room");
    }else{
        alert("Room Not Found");
    }

}

function playAI(){

    alert("AI Game Coming Soon");

}
