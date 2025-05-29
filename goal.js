    window.onload = function() {
      const goals = [
        "Świadczenie usług na najwyższym poziomie – dbamy o każdy detal, aby nasi klienci czuli się komfortowo w perfekcyjnie czystym otoczeniu.",
        "To jest drugi tekst.",
        "To jest trzeci tekst.",
        "To jest czwarty tekst.",
        "To jest piąty tekst."
      ];

      let indeks = 0;
      const element = document.getElementById("goal_");

      function changeGoal() {
        element.style.opacity = 0;

        setTimeout(() => {
          element.innerText = goals[indeks];
          element.style.opacity = 1;

          indeks = (indeks + 1) % goals.length;
        }, 800);
      }

      setInterval(changeGoal, 3500);
    };