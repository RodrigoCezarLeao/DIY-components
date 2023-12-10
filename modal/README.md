# Como utilizar a modal?

- Fazer o download do arquivo 'modalScript.js' nesse repositório e inserir no seu projeto.

- Importar o arquivo no seu HTML com o respectivo path
```
<script src="..path/modalScript.js"></script>
```

- Construir o HTML do elemento a ser inserido dentro da modal definindo um ID e display como 'none'
```
<div id="modal" style="display: none;">
    elementos...
</div>
```

- Atrelar à algum evento a função 'openModal(id)' que recebe o ID do conteúdo HTML a ser exibido no interior da modal quando a mesma for aberta
```
<button onclick="openModal('modal')">Abrir Modal</button>
```

- O projeto pode ser visualizado no link: https://rodrigocezarleao.github.io/ModalBaseJSVanilla/

-------------


# How to use the modal?

- Download the file 'modalScript.js' in this repository to your project.

- Import the file in your HTML
```
<script src="..path/modalScript.js"></script>
```

- Build the HTML element to be inserted as the content of modal, defining an ID and display as 'none'
```
<div id="modal" style="display: none;">
    elementos...
</div>
```

- Attach the function 'openModal(id)' to some event and pass as parameter the ID of HTML content to be shown when modal is opened
```
<button onclick="openModal('modal')">Abrir Modal</button>
```

- The project can be opened in link: https://rodrigocezarleao.github.io/ModalBaseJSVanilla/