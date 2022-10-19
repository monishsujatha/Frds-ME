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

        name: "Suggest me a good course after HSC",
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

        name: "Which engineering department is best for future",
        text: "Aerospace Engineering.
               Chemical Engineering.
               Electrical and Electronics Engineering.
               Petroleum Engineering.
               Telecommunication Engineering.
               Machine Learning and Artificial Intelligence.
               Robotics Engineering."

    },

    {

        name: "Which engineering has highest salary?",
        text: "https://www.fieldengineer.com/blogs/highest-paying-engineering-jobs"
              Civil Engineer
              Mechanical Engineer
              Industrial Engineer
              Biomedical Engineer
              Electrical Engineer
              Chemical Engineer
              Software Engineer

    },

    {

        name: "Which engineering has more scope?",
        text: "Mechanical Engineering has tremendous scope in industries such as Aerospace, Automotive, Biomedical, Robotics, Textiles, Fossil and Nuclear Power, etc. Students can also explore areas such as research and development, design, testing and evaluation, manufacturing, etc."

    },

    {

        name: "Is ECE better than CSE?",
        text: "The only difference lies in the interest of the candidates while deciding upon the courses. A candidate with an interest in electronics and having achieved all the above eligibility can apply for the course of ECE. Similarly, candidates who have got interested in computer science can take up the course of CSE"

    },

    {

        name: "Which course is best for good career?",
        text: "https://www.upgrad.com/blog/short-term-job-oriented-courses/"

    },

    {

        name: "What is Artificial Intelligence",
        text: "Artificial intelligence is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans."
               https://en.wikipedia.org/wiki/Artificial_intelligence

    },

    {

        name: "What is Machine Learning",
        text: "https://en.wikipedia.org/wiki/Machine_learning"

    },

    
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
