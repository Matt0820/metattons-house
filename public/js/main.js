  const texts = [
    "Flowey is just a friendly flower who wants to help you through your journey. Always smiling, always cheerful… and definitely not hiding anything sinister. Trust him!",
    "Just a flower at the start of the game... Right? Or not?",
    "Why are you still reading this? Are you an idiot?",
    "Seriously, you're still reading this? Just a website <p>!",
    "You think this is a game? Oh, it is... for me.",
    "Welcome to my world, where kindness is a lie and pain is the truth.",
    "That's all about ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME"
  ];

  const suspectIndex = 6;
  const noSensePhrase = 1;
  const showingFaces = 4;
  const finalIndex = texts.length - 1;
  let index = 0;

  const floweyText = document.getElementById('Flowey');
  const floweyImg = document.getElementById('Flowey-img');

  function changeText() {
    if (index < texts.length) {
      floweyText.textContent = texts[index];

      if (index === noSensePhrase) {
        floweyImg.src = 'misc/img/FloweyConfused.png';
      }
      if (index === showingFaces) {
        floweyImg.src = 'misc/img/DemonFlowey.jpg';
      }
      if (index === suspectIndex) {
        floweyImg.src = 'misc/img/FloweyLaughing.gif';
      }

      if (index === finalIndex) {
        floweyText.classList.add('soul-glitch'); // animação de cor + shake
      }

      index++;
        let delay = (index === 1) ? 10000 : 3000;
        setTimeout(changeText, delay);
    }
  }

  // Quando Flowey entrar na tela, dispara o script
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        changeText();           // começa a maluquice
        obs.disconnect();       // só dispara uma vez
      }
    });
  }, {
    threshold: 0.5 // 50% do card visível
  });

  observer.observe(document.getElementById('Flowey-card'));