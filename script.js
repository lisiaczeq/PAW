  (function() {
    ex1_button.onclick = function() {
      var tabela = [];

      for (var i = 0; i <= 9; i++) {
        tabela.push(i);
      }

      ex1_content.innerHTML = tabela.toString();
    };

    document.addEventListener('DOMContentLoaded', function () {
      const input = document.getElementById('ex2_text');
      const content = document.getElementById('ex2_content');

      function validatePhoneNumber(value) {
        if (value.length !== 9) {
          return "Długość numeru musi być równa 9";
        }
        if (/[a-zA-Z]/.test(value)) {
          return "Numer nie może zawierać liter";
        }
        if (/[^0-9]/.test(value)) {
          return "Numer nie może zawierać znaków specjalnych";
        }
        return "Numer telefonu jest poprawny";
      }

      input.addEventListener('input', function () {
        const msg = validatePhoneNumber(input.value);
        content.textContent = msg;
      });
    });
  })();