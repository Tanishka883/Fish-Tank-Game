const fishTimers = [
    { id: "fish1", timeLeft: 10 },
    { id: "fish2", timeLeft: 12 },
    { id: "fish3", timeLeft: 15 },
    { id: "fish4", timeLeft: 14 },
    { id: "fish5", timeLeft: 13 },
  ];

  const timerElements = {
    fish1: document.getElementById("time1"),
    fish2: document.getElementById("time2"),
    fish3: document.getElementById("time3"),
    fish4: document.getElementById("time4"),
    fish5: document.getElementById("time5"),
  };

  const statusElement = document.getElementById("status");

  const interval = setInterval(() => {
    let allDead = true;
    fishTimers.forEach((fish) => {
      if (fish.timeLeft > 0) {
        fish.timeLeft--;
        timerElements[fish.id].textContent = fish.timeLeft;
        allDead = false;

        if (fish.timeLeft === 0) {
          document.getElementById(fish.id).style.display = "none";
          statusElement.textContent = "Oh no! A fish has died!";
        }
      }
    });

    if (allDead) {
      clearInterval(interval);
      statusElement.textContent = "Game Over! All fishes have died.";
    }
  }, 1000);

  document.getElementById("feed-fish1").addEventListener("click", () => {
    feedFish("fish1");
  });
  document.getElementById("feed-fish2").addEventListener("click", () => {
    feedFish("fish2");
  });
  document.getElementById("feed-fish3").addEventListener("click", () => {
    feedFish("fish3");
  });
  document.getElementById("feed-fish4").addEventListener("click", () => {
    feedFish("fish4");
  });
  document.getElementById("feed-fish5").addEventListener("click", () => {
    feedFish("fish5");
  });

  function feedFish(fishId) {
    const fish = fishTimers.find((f) => f.id === fishId);
    if (fish.timeLeft > 0) {
      fish.timeLeft = 240;
      timerElements[fishId].textContent = fish.timeLeft;
      statusElement.textContent =`You fed ${fishId}!`;
      document.getElementById(fishId).style.display = "block";
    }
  }