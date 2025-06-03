const data = {
    window1: [
      { title: "Mycie okien", description: "Lśniące okna bez smug i wysiłku. Zamów profesjonalne mycie i ciesz się krystaliczną czystością już teraz!" },
      { title: "Sprzątanie pomieszczeń gospodarczych", description: "Zadbamy o czystość garaży, piwnic i warsztatów, byś nie musiał się martwić bałaganem." },
      { title: "Czyszczenie tapicerki meblowej", description: "Odświeżamy meble, usuwając plamy i nieprzyjemne zapachy, przywracając im świeżość." }
    ],
    window2: [
      { title: "Pranie wykładzin", description: "Twoje wykładziny znów mogą wyglądać jak nowe - zleć nam pranie i odśwież wnętrze w mgnieniu oka!" },
      { title: "Opieka nad domem", description: "Zostaw swój dom pod naszą opieką podczas nieobecności – podlewamy rośliny i dbamy o porządek." },
      { title: "Prasowanie", description: "Szybko i dokładnie uprasujemy Twoje ubrania, dając Ci więcej wolnego czasu." }
    ],
    window3: [
      { title: "Ozonowanie", description: "Ozonowanie to skuteczny sposób na świeże i zdrowe wnętrze - pozbądź się zapachów i drobnoustrojów już dziś!" },
      { title: "Awaryjne sprzątanie", description: "Reagujemy błyskawicznie na niespodziewany bałagan, by szybko przywrócić porządek." },
      { title: "Czyszczenie piekarnika", description: "Usuwamy przypalenia i tłuszcz z piekarnika, przywracając mu blask i świeżość." }
    ]
  };

  Object.keys(data).forEach(id => {
    const items = data[id];
    let index = 0;
    const container = document.getElementById(id);

    if (!container) return;

    const titleEl = container.querySelector('.title');
    const descEl = container.querySelector('.description');

    titleEl.classList.add('fade');
    descEl.classList.add('fade');

    setInterval(() => {
      titleEl.classList.add('fade-out');
      descEl.classList.add('fade-out');

      setTimeout(() => {
        index = (index + 1) % items.length;
        titleEl.textContent = items[index].title;
        descEl.textContent = items[index].description;

        titleEl.classList.remove('fade-out');
        descEl.classList.remove('fade-out');
      }, 800);
    }, 6500);
  });