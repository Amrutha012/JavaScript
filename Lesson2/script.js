let arr = [];

function addTask() {
  let task = document.getElementById("task").value;
  let time = Number(document.getElementById("time").value);

  if (task === "" || time <= 0) {
    alert("Please enter valid task and time");
    return;
  }

  let session = {
    task: task,
    time: time,
  };

  arr.push(session);

  displaySessions();
}

function displaySessions() {
  let output = document.getElementById("output");
  output.innerHTML = "Today's Focus Sessions:<br>";

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    output.innerHTML +=
      i + 1 + ". " + arr[i].task + " – " + arr[i].time + " mins<br>";
    total += arr[i].time;
  }

  document.getElementById("msg").innerText =
    "Total Focus Time: " + total + " mins";
}
