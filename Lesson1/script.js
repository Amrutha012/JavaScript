let para = document.getElementById("para");
function setMood(mood) {
  if (mood === "happy") {
    para.innerText =
      "Hurray! I am happy too, Let's spread positive vibes and make others happy too!😊😊";
  } else if (mood === "sad") {
    para.innerText =
      "Hey darling, Dont worry, Everything will be alright! I am here for you💖🤗";
  } else if (mood === "angry") {
    para.innerText =
      "Tell me who is the buffalo made you angry😡, let's roast him";
  } else {
    para.innerText =
      "Hey, I felt so pleasant after looking at your pleasant face😉";
  }
}
