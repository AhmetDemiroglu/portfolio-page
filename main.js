const pLeft = document.querySelector("#pLeft");
    const pRight = document.querySelector("#pRight");
    
    window.addEventListener("scroll", () => {
      let value = scrollY;
      pLeft.style.left = -value * 0.68 + "px";
      pRight.style.left = value * 0.68 + "px";
    });

    let dinle = document.getElementById("dinle");
    let bitir = document.getElementById("bitir");
    let oku = document.getElementById("oku");
    let subject = document.getElementById("subject");

    let webSpeech = new webkitSpeechRecognition();
    webSpeech.lang = "tr-Tr";
    webSpeech.continuous = true;

    dinle.onclick = () => webSpeech.start();

    bitir.onclick = () => webSpeech.stop();

    webSpeech.onresult = (event) => {
        let liste = event.results;
        subject.value += liste[liste.length - 1][0].transcript;
        console.log(liste);
    }

    oku.addEventListener("click", () => {
        let text = subject.value;
        let uttr = new SpeechSynthesisUtterance(text);
        uttr.lang = "tr";
        speechSynthesis.speak(uttr);
      });
    

      const letters = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
      document.querySelector(".leadp").onmouseleave = (event) => {
        let repetition = 0;
        let interval;
        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < repetition) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 29)];
            })
            .join("");
    
          if (repetition >= event.target.dataset.value.length)
            clearInterval(interval);
          repetition += 1 / 3;
        }, 50);
      };