function sendMessage(){
    const msgInBoxElement = document.getElementById('text-in-msg');
    
    const message = msgInBoxElement.value;
    
    if(message){
        console.log(message);
    }
    else{
        alert('Please enter a message before Sending');
    }
    
}