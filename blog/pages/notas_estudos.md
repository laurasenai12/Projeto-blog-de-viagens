# Projeto Nova-Web - Especificações de UI/UX (Tela de Login)

## 1. Conceitos de Usabilidade em Formulários

### Labels vs. Placeholders

A **label** identifica de forma permanente o que deve ser preenchido em um campo, como "E-mail" ou "Senha". Ela continua visível mesmo depois que o usuário começa a digitar.

O **placeholder** é apenas uma dica ou exemplo do formato esperado. Ele não deve substituir a label, pois desaparece quando o usuário começa a preencher o campo e pode dificultar a identificação do conteúdo solicitado.

Por isso, no formulário de login, cada campo terá uma **label visível** e o placeholder será utilizado somente como informação complementar, quando necessário.

### Hierarquia Visual

O botão de ação principal deve receber maior destaque visual para indicar a ação mais importante da tela.

* **Primary Button:** será utilizado para a ação principal, como **"Entrar"**, com maior destaque de cor e contraste.
* **Secondary Button/Action:** será utilizado para ações secundárias, como **"Criar Conta"** e **"Esqueci a Senha"**, com menor destaque visual.

Essa hierarquia ajuda o usuário a identificar rapidamente qual ação deve ser realizada.

---

## 2. Estados de Validação dos Campos de Entrada (Input States)

Os campos de entrada terão diferentes estados visuais para informar ao usuário a situação atual do preenchimento.

### Default (Padrão)

O campo apresenta uma **borda neutra**, fundo adequado e uma label legível. Esse é o estado inicial antes de qualquer interação.

### Focus (Foco)

Quando o usuário seleciona o campo, ele recebe um **destaque visual**, como alteração na cor da borda ou utilização de um indicador de foco. Isso permite identificar facilmente qual campo está ativo.

### Error (Erro)

Quando o conteúdo preenchido é inválido ou está ausente, o campo apresenta uma **borda em tom vermelho** e uma mensagem explicativa abaixo, informando o problema e como corrigi-lo.

Exemplo: "Digite um e-mail válido."

### Success (Sucesso)

Quando o preenchimento é válido, o campo pode apresentar um **indicador visual de sucesso**, permitindo que o usuário identifique que aquela informação foi preenchida corretamente.

### Disabled (Desabilitado)

Quando um campo ou botão não pode ser utilizado, ele apresenta **contraste reduzido** e aparência diferente dos elementos ativos, indicando que está temporariamente indisponível.

---

## 3. Padrões de Acessibilidade

### Contraste de Cores

Os textos e elementos importantes devem possuir contraste suficiente em relação ao fundo para facilitar a leitura. De acordo com as diretrizes **WCAG**, o contraste mínimo recomendado para texto comum é de **4,5:1**, enquanto textos grandes podem utilizar uma proporção mínima de **3:1**.

### Leitores de Tela

Os campos devem possuir labels associadas corretamente aos inputs para que leitores de tela consigam identificar o que o usuário precisa preencher. As mensagens de erro também devem ser claras e informar qual problema precisa ser corrigido.

### Navegação pela Tecla Tab

Todos os elementos interativos devem poder ser acessados utilizando a tecla **Tab**, seguindo uma ordem lógica de navegação. O estado de foco deve permanecer visualmente identificável para facilitar a navegação sem o uso do mouse.

## Fontes

* W3C Web Accessibility Initiative (WAI) — Web Content Accessibility Guidelines (WCAG): https://www.w3.org/WAI/standards-guidelines/wcag/
* MDN Web Docs — `<label>`: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
* MDN Web Docs — `<input>`: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/inputr
