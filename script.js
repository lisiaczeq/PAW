(function() {
  ex1_button.onclick = function() {
    var tabela = []

    for (var i = 0; i <= 9; i++) {

      tabela.push(i);

    }

    ex1_content.innerHTML = tabela.toString();

  }
})();