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
    