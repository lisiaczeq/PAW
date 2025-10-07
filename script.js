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

    document.addEventListener('DOMContentLoaded', function () {
      const element = document.getElementById('ex3_element');
      const containers = [document.getElementById('ex3_one'), document.getElementById('ex3_two')];

      element.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', 'ex3_element');
      });

      containers.forEach(container => {
        container.addEventListener('dragover', function (e) {
          e.preventDefault();
        });

        container.addEventListener('drop', function (e) {
          e.preventDefault();
          const data = e.dataTransfer.getData('text/plain');
          if (data === 'ex3_element') {
            container.appendChild(element);
          }
        });
      });
    });
  })();