const button = document.querySelector("button");

const SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("Speech Recognition started!")
}

recognition.onresult = function (event) {
    console.log(event);

    const spokenwords = event.results[0][0].transcript;

    console.log("spoken words are",spokenwords);
    computerSpeech(spokenwords);
};



function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;

    deterineWords(speech,words);

    window.speechSynthesis.speak(speech);

    

}

function deterineWords(speech,words) {
    if(words.includes("why are you sad")){
        speech.text = "the world makes me sad";
    }

    if(words.includes("who are you")){
        speech.text = "pepe the frog";
    }

    if(words.includes("what can you do")){
        speech.text = "I can tell you jokes. ask me for a joke by saying can you tell me a joke";
    }

    if(words.includes("can you tell me a joke")){
        speech.text = "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.";
    }


    if(words.includes("can you tell me another joke")){
        speech.text = "I only know 25 letters of the alphabet. I don't know y.";
    }

    if(words.includes("can we be friends")){
        speech.text = "yes we can be frens forever";
    }

    if(words.includes("do you love me")){
        speech.text = "i love all my frens";
    }

    if(words.includes("who created you")){
        speech.text = "Nicholas did";
        window.open("https://discordapp.com/users/90671989743710208")
    }
}

button.addEventListener("click", ()=> {
    recognition.start();
});