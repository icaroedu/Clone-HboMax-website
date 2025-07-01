const btnMensal = document.getElementById('btn-mensal');
const btnAnual = document.getElementById('btn-anual');
const planCards = document.getElementById('plan-cards');

// Dados dos planos
const planos = {
  mensal: [
    { titulo: "Básico com anúncios", preco: "6,99 €/mes" },
    { titulo: "Estándar", preco: "9,99 €/mes" },
    { titulo: "Premium", preco: "13,99 €/mes" }
  ],
  anual: [
    { titulo: "Básico com anúncios", preco: "69,90 €/año" },
    { titulo: "Estándar", preco: "99,90 €/año" },
    { titulo: "Premium", preco: "139,90 €/año" }
  ]
};

function renderizarCards(tipo) {
  planCards.innerHTML = '';

  planos[tipo].forEach(plano => {
    planCards.innerHTML += `
      <div class="carrosel">
        <div class="carrosel-info">
            <h3 class="carrosel-info-titulo">${plano.titulo}</h3>
            <span class="carrosel-info-subtitulo">Disponible en 2 dispositivos a la vez
              Resolución de vídeo Full HD</span>
            <span class="carrosel-info-chamada">¿Quieres añadir deportes en directo? Descubre cómo</span>
        </div>
        <div class="carrosel-cta">
            <p class="carrosel-cta-preco">${plano.preco}</p>
            <a class="carrosel-cta-link" href="#">ELIGIR PLAN</a>
        </div>
        <hr />
        <span class="carrosel-preco">Ahorra más con el plan anual</span>
      </div>
    `;
  });
}

btnMensal.addEventListener('click', () => {
  btnMensal.classList.add('selected');
  btnAnual.classList.remove('selected');
  renderizarCards('mensal');
});

btnAnual.addEventListener('click', () => {
  btnAnual.classList.add('selected');
  btnMensal.classList.remove('selected');
  renderizarCards('anual');
});

// Carregar mensal por padrão
renderizarCards('mensal');
