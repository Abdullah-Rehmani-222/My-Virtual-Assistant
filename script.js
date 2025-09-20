//! NOTE: HTML, CSS aur JavaScript means pura frontend maine likha hai bus concept chatgpt se liya hai, bakhi logic/code apne dimag/hand se likha hai.

let paragraph = document.getElementById("para");
let startButton = document.getElementById("start-btn");

//# yeh part maine apne weather app se copy kya hai.
// getWeatherData fetching the weater data.
async function getWeatherData(cityName = "Karachi") {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=16ebb38bcc5a4ba4bec215814241108&q=${cityName}&aqi=yes`
    );
    if (!response.ok) throw new Error("City not found");
    let data = await response.json();
    return { data };
  } catch (error) {
    speak("not found");
  }
}

//# yeh part maine apne logic se likha but concept Chatgpt ka hai.
// In speak function Virtual Assistant will speak.
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.pitch = 2;
  speech.rate = 1;
  paragraph.innerText = text;
  console.log(paragraph);
  window.speechSynthesis.speak(speech);
}

//# yeh part maine apne logic se likha but concept Chatgpt ka hai.
// In this part we speak and Virtual Assistant will listen our command.
const recoginition = new window.SpeechRecognition();
recoginition.lang = "en-US";
// In this part Virtual Assistant will react according to our command.
recoginition.onresult = async (event) => {
  // console.log(event);
  const command = event.results[0][0].transcript;
  console.log(command);
  if (command.includes("who are you")) {
    speak("I am Jarvis, created by Abdullah.");
  } else if (
    command.includes("who is Abdullah Rehmani") ||
    command.includes("who is Abdullah")
  ) {
    speak("He is a Frontend Developer.");
  } else if (
    command.includes("Jarvis open the YouTube") ||
    command.includes("open YouTube")
  ) {
    speak("Opening Youtube");
    window.open("https://www.youtube.com", "_blank");
  } else if (
    command.includes("Jarvis open the WhatsApp") ||
    command.includes("open WhatsApp")
  ) {
    speak("Opening WhatsApp");
    window.open("whatsapp://");
  } else if (
    command.includes("Jarvis open the calculator") ||
    command.includes("open calculator")
  ) {
    speak("Opening Calculator");
    window.open("calculator://");
  } else if (
    command.includes("Jarvis what time is it") ||
    command.includes("what time is it") ||
    command.includes("time kya ho raha hai") ||
    command.includes("Jarvis time kya ho raha hai")
  ) {
    speak(new Date().toLocaleTimeString());
  } else if (
    command.includes("aaj din kya hai") ||
    command.includes("Jarvis aaj din kya hai") ||
    command.includes("Jarvis Aaj Kaun Sa din hai") ||
    command.includes("Jarvis aaj kaun sa din hai") ||
    command.includes("What day is it today") ||
    command.includes("Jarvis what day is it today")
  ) {
    let date = new Date();

    if (date.getDay() == 1) {
      speak("It's Monday");
    }
    if (date.getDay() == 2) {
      speak("It's Tuesday");
    }
    if (date.getDay() == 3) {
      speak("It's Wednesday");
    }
    if (date.getDay() == 4) {
      speak("It's Thursday");
    }
    if (date.getDay() == 5) {
      speak("It's Friday");
    }
    if (date.getDay() == 6) {
      speak("It's Saturday");
    }
    if (date.getDay() == 7) {
      speak("It's Sunday");
    }
  } else if (
    command.includes("vedar kya ho raha hai") ||
    command.includes("Jarvis vedar kya ho raha hai") ||
    command.includes("weather kya ho raha hai") ||
    command.includes("Jarvis weather kya ho raha hai")
  ) {
    //! yeh part toh maine apne dimag/logic se likha hai kisi bhi kisam ki help aur concept voncept nahi use kya.
    let { data } = await getWeatherData();
    speak(`${data.current.temp_c} celsius`);
  } else if (
    command.includes("vedar ki condition kya hai") ||
    command.includes("Jarvis vedar ki condition kya hai") ||
    command.includes("weather ki condition kya hai") ||
    command.includes("Jarvis weather ki condition kya hai")
  ) {
    //! yeh part toh maine apne dimag/logic se likha hai kisi bhi kisam ki help aur concept voncept nahi use kya.
    let { data } = await getWeatherData();
    speak(data.current.condition.text);
  } else if (
    command.includes("what is") ||
    command.includes("Jarvis what is") ||
    command.includes("kya hai") ||
    command.includes("Jarvis kya hai")
  ) {
    const replacedCommand = command.replace("Jarvis", "").trim();
    const query = `https://www.google.com/search?q=${replacedCommand}`;
    window.open(query, "_blank");
    speak("let me search in Google");
  } else if (
    command.includes("who is") ||
    command.includes("Jarvis who is") ||
    command.includes("kaun hai") ||
    command.includes("Jarvis kaun hai")
  ) {
    const replacedCommand = command.replace("Jarvis", "").trim();
    const query = `https://www.google.com/search?q=${replacedCommand}`;
    window.open(query, "_blank");
    speak("let me search in Google");
  } else if (command.includes("Jarvis hello") || command.includes("hello")) {
    speak("How can I help you");
  } else if (command.includes("Jarvis")) {
    speak("ha sir");
  }
};

//# yeh part maine apne logic se likha but concept Chatgpt ka hai.
// In this part when I click on start button Virtual Assistant will able to listen me.
startButton.addEventListener("click", () => {
  recoginition.start();
});
