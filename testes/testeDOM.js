// Exemplo 1: Adicionar Elemento
function addElement() {
    var container = document.getElementById('container1');
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'Novo parágrafo adicionado.';
    container.appendChild(newParagraph);
}

// Exemplo 2: Remover Elemento
function removeElement() {
    var paragraph = document.getElementById('paragraph2');
    if (paragraph) {
        paragraph.remove();
    } else {
        alert('O parágrafo já foi removido.');
    }
}

// Exemplo 3: Modificar Conteúdo de um Elemento
function modifyContent() {
    var paragraph = document.getElementById('paragraph3');
    paragraph.textContent = 'O conteúdo foi modificado.';
}

// Exemplo 4: Modificar Atributos
function modifyAttribute() {
    var image = document.getElementById('image1');
    image.src = 'https://via.placeholder.com/200';
    image.alt = 'Imagem Exemplo Modificada';
}

// Exemplo 5: Adicionar Classe CSS
function addClass() {
    var paragraph = document.getElementById('paragraph4');
    paragraph.classList.add('highlight');
}

// Exemplo 6: Remover Classe CSS
function removeClass() {
    var paragraph = document.getElementById('paragraph5');
    paragraph.classList.remove('highlight');
}

// Exemplo 7: Alternar Classe CSS
function toggleClass() {
    var paragraph = document.getElementById('paragraph6');
    paragraph.classList.toggle('highlight');
}