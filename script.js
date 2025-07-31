const texts = {
  easy: [
    { duration: 1, text: "The Magic Paintbrush. There was once a poor boy named Ravi who loved to draw. One day, he found a magic paintbrush that could make anything he painted come to life. Excited, Ravi painted bread, and it appeared before him, warm and fresh. He shared it with his family and neighbors. Soon, word spread, and everyone asked Ravi to paint their wishes. He realized the magic was special, and used it to help those in need. Ravi learned that kindness and creativity could change the world, and the magic paintbrush brought joy to his entire village." },
    { duration: 2, text: "Rosy's First Day at School. Rosy was nervous on her first day at a new school. Everything seemed big and unfamiliar. She clutched her backpack and hoped to make friends. In class, the teacher asked everyone to introduce themselves. Rosy whispered her name, but a girl named Priya smiled and waved at her. During lunch, Rosy sat alone, watching others laugh and share. Suddenly, Priya came over and invited her to join their group. Soon, Rosy was laughing too. In art class, Rosy drew a colorful garden, and the teacher praised her work. By the end of the day, Rosy had made new friends and felt happy. She realized every new place has friendly faces and adventures. Rosy couldn’t wait to return the next day and learn more, knowing she belonged." },
    { duration: 5, text: "The Farmer’s Apple Pie. The tree was full of red apples. The farmer rode his brown horse, stopping under the heavy branches. He picked an apple, enjoying its crisp taste. His horse watched and the farmer offered it a fruit, which it also enjoyed. Filling a bag with apples, the farmer headed home and put his horse in the barn. His cat greeted him, rubbing against his leg, and he served it warm milk. Comforted, he opened a book on the sofa. When his wife returned, she cooked the apples and baked a fresh apple pie. That evening, they enjoyed hot soup, fresh bread, and the delicious apple pie for dessert. The simple joys of farm life—kindness, sharing, gratitude—made every day special for the farmer, his family, and their animals." }
  ],
  medium: [
    { duration: 1, text: "Flying Free She dreamed of flying with birds, swooping through clouds with grace. Above, the endless sky looked blank, but below, tiny buildings and cars filled the city. She dropped down to see the ocean, full of quiet beauty. Boats and islands dotted the blue, but most of the water was empty and peaceful. Suddenly, she fell, drifting down—uncertain, but free. In her dream, she rose and soared, exploring the world with wings she wished were real." },
    { duration: 2, text: "A New Beginning It was Mohini’s first day at her new school. Nervous and alone, she watched students chatting and laughing together. Suddenly, four senior students walked towards her. Mohini froze, unsure of what to do. To her surprise, they introduced themselves and offered to show her around. They talked about the school, teachers, and even shared jokes. During the lunch break, Mohini found herself sitting with them, feeling more at ease. As the day went on, she joined in classes and club activities, realizing the school was not so scary after all. The seniors cheered her on during gym class and helped her find her classrooms. Mohini finished her first day relieved and happy, thanking her new friends for their kindness. She learned that beginnings can be tough, but with a little help and courage, every day could be a good one." },
    { duration: 5, text: "The Forest My eyes flicked open. I sat up and viewed this foreign world around me, my memories buzzing in my head. The snow at my feet crunched strangely and the mud mixed with it, making a strange surface. The forest was dense, the distant white trees fading with the falling snow. I wandered through the forest aimlessly. The cold slowly sapped my strength. I looked to the sky, noticed gray clouds forming a thundercloud. Instinct told me to find shelter. I rushed through snow and darkness, fear growing at every sound. A distant howl made me panic. I found a clearing, the snow deep. My body weakened, and I fell to the ground, the cold biting into me. When I woke, I was by a warm fireplace. A bearded man handed me hot chocolate, a smiling woman brought soup. I drank, comforted by their kindness. Children joined in, and warmth filled the room. I thanked them for taking me in, a stranger in their world. Outside, the forest still roared, but inside I was safe. Their kindness melted the cold, teaching me that even lost in the harshest places, hope and goodness could be found." }
  ],
  hard: [
    { duration: 1, text: "The Fossilized Calendar Our future is fossilized in my kitchen calendar. Your sister’s wedding in May, trivia nights, an anniversary in November. Like it or not, every box has meaning. Some events go as planned. Others, like the night you left, stay empty, a forgotten appointment I still prepare for. Sometimes I flip ahead, searching for answers in days not yet lived, hoping another note will appear and change the story. But fate writes in ink. Try as I might, I can’t erase old scars, nor predict what new ones the calendar will hold." },
    { duration: 2, text: "The Struggle for Acceptance He wore a yellow shirt and almost ran into the chair. The cat leapt away, the chair tipped over. The dog paused its bone, eyeing the commotion, then chased the boy, who ran from the room and out into the street. He threw a stick, and the dog chased it, then lay by his side, chewing contentedly. Tired from playing, the boy wanted a nap, but Mama Bear came home and growled. Her growl was clear—rest must wait. He obeyed, remembering, maybe next time he’d nap after a meal. A squirrel ran up a tree with a nut, dropped it, and ran down to retrieve it, glancing warily at the boy. Hard shells and mysterious routines—everyone had struggles and lessons. The boy watched the squirrel and the animals, wondering where he fit in this web of noise and rules. He knew next time, he’d make better choices, try to fit in. His thoughts lingered on acceptance and understanding, more valuable than naps or mischief." },
    { duration: 5, text: "Against the Clock Time was running out. Shadows pooled in the corners as she scanned the laboratory, her heart pounding. The experiment had gone wrong, and every tick of the old clock on the wall pressed heavier on her mind. She recalled her professor’s warning: “Do not touch the vial.” But curiosity, her ever-faithful companion, demanded answers. She flicked the switch, heard the spark, the hum of energy. Lights flickered; on the screen, numbers rushed toward zero. Adrenaline spiked as glass shattered behind her. Something moved in the mist—a form half-glimpsed, too quick for the tired mind to capture in detail. Memories of her research flooded in: chemical equations, ethical debates, late-night emails warning of consequences. Panic clawed. She lunged for her notes, searching for any hint of a solution. The mist swirled, thick and cold, pressing against her thoughts. Desperate, she scribbled calculations, tried every hypothesis. Seconds blurred together. The form crystallized—a girl, younger than herself, eyes wide in silent accusation. “Why did you break the rules?” No good answer. She repeated every lesson, each warning. With trembling hands, she pressed the kill switch. The hum faded. The mist dissipated; the clock’s ticking slowed. But that quiet voice lingered, echoing in her work forever." }
  ]
};

let selectedLevel = "easy";
let selectedTimeMinutes = 1;
let startTime, timer, mistakeCount = 0;
let wordsExpected = "", userInput = "";
let inputArea = document.getElementById("input-area");
let seeResultBtn = document.getElementById("see-result");
let startBtnMain = document.getElementById("start-btn-main");

function loadWords() {
  const pool = texts[selectedLevel].filter(t => t.duration === selectedTimeMinutes);
  const txt = pool[Math.floor(Math.random() * pool.length)].text;
  wordsExpected = txt;
  document.getElementById("words-panel").innerText = txt;
  inputArea.value = '';
  document.getElementById("timer").innerText = formatTime(selectedTimeMinutes * 60);
  mistakeCount = 0;
  userInput = "";
  clearInterval(timer);
  inputArea.disabled = true;
  seeResultBtn.disabled = true;
  startBtnMain.disabled = false;
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec.toString().padStart(2, '0')}`;
}

function startCountdown(duration) {
  let remaining = duration;
  document.getElementById("timer").innerText = formatTime(remaining);
  inputArea.disabled = false;
  inputArea.focus();
  startBtnMain.disabled = true;
  seeResultBtn.disabled = false;
  timer = setInterval(() => {
    remaining--;
    document.getElementById("timer").innerText = formatTime(remaining);
    if (remaining <= 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

document.querySelectorAll(".level-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".level-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedLevel = btn.getAttribute("data-level");
    loadWords();
  };
});

document.querySelectorAll(".time-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".time-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedTimeMinutes = Number(btn.getAttribute("data-minutes"));
    loadWords();
  };
});

startBtnMain.onclick = () => {
  startTime = Date.now();
  startCountdown(selectedTimeMinutes * 60);
};

inputArea.addEventListener("input", e => {
  userInput = e.target.value;
  if (!startTime && userInput.length > 0) {
    startTime = Date.now();
    startCountdown(selectedTimeMinutes * 60);
  }

  let mistakes = 0;
  for (let i = 0; i < userInput.length; ++i) {
    if (userInput[i] !== wordsExpected[i]) {
      mistakes++;
    }
  }
  mistakeCount = mistakes;
});

seeResultBtn.onclick = showResult;

function showResult() {
  clearInterval(timer);
  inputArea.disabled = true;

  const rawDurationSeconds = (Date.now() - startTime) / 1000;
  const durationMinutes = rawDurationSeconds / 60;

  const wordsTyped = userInput.trim().split(/\s+/).filter(word => word !== '').length;
  const wpm = durationMinutes > 0 ? Math.round(wordsTyped / durationMinutes) : 0;

  const charsTyped = userInput.length;
  const accuracy = charsTyped ? Math.max(0, Math.round((charsTyped - mistakeCount) * 100 / charsTyped)) : 0;

  // ✅ Correct Net WPM calculation
  const netWPM = Math.round(wpm * (accuracy / 100));

  document.getElementById("res-wpm").innerText = wpm;
  document.getElementById("res-accuracy").innerText = accuracy + '%';
  document.getElementById("res-net-wpm").innerText = netWPM;
  document.getElementById("res-mistakes").innerText = mistakeCount;

  document.getElementById("typing-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";
}

document.getElementById("restart-btn").onclick = () => {
  document.getElementById("typing-section").style.display = "block";
  document.getElementById("result-section").style.display = "none";
  startTime = null;
  loadWords();
};

const darkBtn = document.getElementById("dark-mode-toggle");
const enableDark = () => { document.body.classList.add("dark"); localStorage.setItem("darkMode", "1"); }
const disableDark = () => { document.body.classList.remove("dark"); localStorage.removeItem("darkMode"); }
darkBtn.onclick = () => {
  if (document.body.classList.contains("dark")) disableDark(); else enableDark();
};
if (localStorage.getItem("darkMode") === "1") enableDark();

loadWords();
