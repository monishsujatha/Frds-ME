let container = document.getElementById('chatbot-container');

let btn = document.getElementById('btn');

let form = document.getElementById('form');

let arr1 = [

    { name: "hello", text: "hi" },

    { name: "i am fine", text: "that's good to hear" },

    { name: "i\'m fine", text: "that\'s good to hear" },

    { name: "how are you", text: "i am fine,thanks, how about you?" },

    {

        name: "what is your name",
        text: "my name is im with you"

    },

    {
        name: "what\'s your name",
        text: "my name is vicbot"

    },

    {

        name: "do you understand english",
        text: "sure,that\'s my mother language"

    },

    {

        name: "hi",
        text: "Nice "

    },

    {

        name: "what's up",
        text: "i'm good,thanks"

    },

    {

        name: "suggest me a good course after HSC"
        text: "BE/B.Tech- Bachelor of Technology,
               B.Arch- Bachelor of Architecture,
               BCA- Bachelor of Computer Applications,
               B.Sc.- Information Technology,
               B.Sc- Nursing,
               BPharma- Bachelor of Pharmacy,
               B.Sc- Interior Design,
               BDS- Bachelor of Dental Surgery."

    },

    {

        name: "Which engineering branch is best for future",
        text: "Computer Science and Engineering.
               Mechanical Engineering.
               Electrical Engineering.
               Solar Engineering.
               Wind Energy Engineering.
               Nanotechnology.
               Environmental Engineering."

    },

    {

        name: "which engineering has highest salary",
        text: "https://www.fieldengineer.com/blogs/highest-paying-engineering-jobs"
        text: Civil Engineer
              Mechanical Engineer
              Industrial Engineer
              Biomedical Engineer
              Electrical Engineer
              Chemical Engineer
              Software Engineer
              Computer Engineer

    },

    {

        name: "",
        text: ""

    },

    {

        name: "",
        text: ""

    },

    {

        name: "",
        text: ""

    },

    {

        name: "",
        text: ""

    },

    {

        name: "",
        text: ""

    },

    {

        name: "",
        text: ""

    },

    {

        name: "",
        text: ""

    },

    {

        name: "",
        text: ""

    },

    {

        name: "do you know siri",
        text: "yes i do"

    },

    {

        name: "who is siri",
        text: "she's a sister robot"

    },

    {

        name: "who are you",
        text: "am a robot"

    },

    {

        name: "how old are you",
        text: 'i am few hours old'

    },

    {

        name: "who is your father",
        text: 'his name is victory lucky chukwuede'

    },
    {
        name: "im a love failure person",
        text: "Don't be worry about that'"
    },
    {
        name: "I love her so much",
        text: "	im just 14 and you are 28"
    }




];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recorder = new SpeechRecognition();

recorder.onstart = () => {

    console.log('voice is active');

    btn.innerHTML = " voice is active";

}

recorder.onend = () => {

    btn.innerHTML = " start voice";

}

function botVoice(message) {

    const speech = new SpeechSynthesisUtterance();

    speech.text = "i don't understand that";

    for (let botData of arr1) {

        if (message.includes(botData.name.toLowerCase())) {

            speech.text = botData.text

        }

    }

    container.innerHTML += `<p class="speech">${speech.text}</p>`;

    speech.volume = 1;

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}

recorder.onresult = (event) => {

    console.log(event);

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    container.innerHTML += `<p class="recorder">${transcript}</p>`;

    botVoice(transcript.toLowerCase());

}

function startVoice() {

    recorder.start();

}

form.onsubmit = (e) => {

    e.preventDefault();

    let formInput = document.getElementById('botvalue').value;

    if (formInput == '') {

        return false;

    } else {

        container.innerHTML += `<p class="recorder">${formInput}</p>`;

        botVoice(formInput.toLowerCase());

        form.reset();

        return true;

    }

}
