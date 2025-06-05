    window.onload = function() {
      const goals = [
        "Świadczenie usług na najwyższym poziomie - Dbamy o każdy detal, aby nasi klienci czuli się komfortowo w perfekcyjnie czystym otoczeniu.",
        "Zapewnienie nieskazitelnej czystości w domach i firmach naszych klientów - Naszym priorytetem jest dokładność i dbałość o każdy szczegół.",
        "Budowanie długofalowych relacji z klientami opartych na zaufaniu i niezawodności - Chcemy być Twoim stałym partnerem w utrzymaniu porządku.",
        "Zwiększanie komfortu życia i pracy naszych klientów - Czysta przestrzeń to lepsze samopoczucie, efektywność i spokój.",
        "Wyróżnianie się profesjonalizmem i wysokimi standardami obsługi - Każde zlecenie traktujemy z pełnym zaangażowaniem."
      ];

      let indeks = 0;
      const element = document.getElementById("goal_");

      function changeGoal() {
        element.style.opacity = 0;

        setTimeout(() => {
          element.innerText = goals[indeks];
          element.style.opacity = 1;

          indeks = (indeks + 1) % goals.length;
        }, 1000);
      }

      setInterval(changeGoal, 7500);
    };