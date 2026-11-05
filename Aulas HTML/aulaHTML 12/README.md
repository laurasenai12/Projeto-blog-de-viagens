# Projeto Nova-Web - Especificações de UI/UX (Tela de Login)

## 1. Conceitos de Usabilidade em Formulários

### Labels vs. Placeholders

A **label** identifica permanentemente o campo e informa ao usuário qual informação deve ser preenchida. Ela permanece visível mesmo depois que o usuário começa a digitar.

O **placeholder** serve apenas como uma informação complementar ou exemplo do formato esperado. Ele desaparece quando o usuário começa a preencher o campo.

Por isso, o placeholder não deve substituir a label, pois o usuário pode esquecer o que deve informar depois que o texto desaparece.

### Hierarquia Visual

O botão de ação principal deve possuir maior destaque visual, pois representa a ação mais importante da tela.

No formulário de login, o botão **"Entrar"** será o Primary Button, utilizando maior destaque de cor e preenchimento.

Ações secundárias, como **"Esqueci minha senha"** e **"Criar conta"**, terão menor destaque visual, utilizando textos ou botões em estilo secundário.

---

## 2. Estados de Validação dos Campos de Entrada

### Default

Representa o estado normal do campo antes de qualquer interação.

- Borda em cor neutra.
- Label sempre visível.
- Fundo claro.
- Texto de preenchimento legível.

### Focus

Representa o momento em que o usuário seleciona o campo.

- A borda recebe uma cor de destaque.
- O campo permanece com a label visível.
- O destaque facilita a identificação do campo que está sendo preenchido.

### Error

Indica que existe algum problema com o valor informado.

- Borda em tom vermelho.
- Mensagem explicativa abaixo do campo.
- A mensagem deve explicar o problema de forma clara.

Exemplo:

> E-mail ou senha inválidos.

### Success

Indica que o preenchimento foi realizado corretamente.

- Borda em tom de verde.
- Indicador visual de preenchimento correto.
- Feedback visual simples e fácil de identificar.

### Disabled

Indica que o campo ou botão não está disponível para interação.

- Contraste reduzido.
- Fundo e texto em tons mais claros.
- Não deve parecer um elemento disponível para interação.

---

## 3. Padrões de Acessibilidade

A interface deve utilizar contraste suficiente entre textos e seus respectivos fundos para facilitar a leitura.

As informações não devem ser apresentadas somente por meio de cores. Estados de erro e sucesso também devem possuir textos ou indicadores visuais.

Os campos devem possuir labels claras e a ordem de navegação deve permitir que o usuário percorra os elementos utilizando a tecla **Tab**.

A estrutura deve ser compatível com tecnologias assistivas, utilizando informações claras para que leitores de tela possam identificar os campos e suas funções.

---

## 4. Design System

### Input

O componente de input terá quatro variantes:

- Default
- Focus
- Error
- Success

Cada estado possuirá sua própria aparência visual e poderá apresentar um texto de apoio quando necessário.

### Botão

O componente de botão terá dois tipos principais:

- Primary
- Secondary

O Primary será utilizado para a ação principal **"Entrar"**.

O Secondary será utilizado para ações complementares, como **"Criar conta"**.

Os botões também possuirão os estados:

- Default
- Hover
- Disabled

---

## 5. Estrutura da Tela de Login

A tela de login será composta por:

- Logo da aplicação;
- Título da página;
- Campo de e-mail;
- Campo de senha;
- Opção para exibir ou ocultar a senha;
- Checkbox "Lembrar de mim";
- Link "Esqueci minha senha";
- Botão principal "Entrar";
- Divisor visual;
- Link "Criar conta".

A estrutura será centralizada para facilitar a identificação do formulário e manter uma organização visual simples.

---

## 6. Protótipo

O protótipo será desenvolvido no Figma utilizando componentes e variantes.

Será criado um fluxo de login contendo:

1. Tela inicial de login;
2. Interação dos campos;
3. Estados visuais dos componentes;
4. Validação de autenticação;
5. Tela com mensagem de erro para credenciais inválidas.

A mensagem de erro utilizada será:

**"E-mail ou senha inválidos."**
