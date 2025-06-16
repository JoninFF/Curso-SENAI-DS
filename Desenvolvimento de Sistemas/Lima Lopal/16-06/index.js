
    const carrinho = [];

    function formatarMoeda(valor) {
      return 'R$' + valor.toFixed(2).replace('.', ',');
    }

    function atualizarCarrinho() {
      const corpoCarrinho = document.querySelector('.cart-body');
      const totalEl = document.getElementById('total-value');
      const descontoEl = document.getElementById('discount-amount');
      const totalFinalEl = document.getElementById('final-total');
      const descontoInput = document.getElementById('discount-percentage');

      corpoCarrinho.innerHTML = '';

      if (carrinho.length === 0) {
        corpoCarrinho.innerHTML = '<tr><td colspan="4" style="text-align:center;">Carrinho vazio</td></tr>';
        totalEl.textContent = 'R$0,00';
        descontoEl.textContent = 'R$0,00';
        totalFinalEl.textContent = 'R$0,00';
        return;
      }

      let total = 0;
      carrinho.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${item.nome}</td>
          <td>${formatarMoeda(item.precoUnitario)}</td>
          <td>${item.quantidade}</td>
          <td>${formatarMoeda(item.subtotal)}</td>
        `;
        corpoCarrinho.appendChild(tr);
        total += item.subtotal;
      });

      totalEl.textContent = formatarMoeda(total);

      const descontoPct = parseFloat(descontoInput.value) || 0;
      const valorDesconto = total * (descontoPct / 100);
      descontoEl.textContent = formatarMoeda(valorDesconto);

      const totalFinal = total - valorDesconto;
      totalFinalEl.textContent = formatarMoeda(totalFinal);
    }

    function adicionarAoCarrinho(nome, precoStr, inputId) {
      const quantidadeInput = document.getElementById(inputId);
      let quantidade = parseInt(quantidadeInput.value);
      if (isNaN(quantidade) || quantidade < 1) quantidade = 1;
      if (quantidade > 10) quantidade = 10;

      const preco = parseFloat(precoStr.replace(',', '.'));

      const itemExistente = carrinho.find(i => i.nome === nome);
      if (itemExistente) {
        itemExistente.quantidade += quantidade;
        if (itemExistente.quantidade > 10) itemExistente.quantidade = 10;
        itemExistente.subtotal = itemExistente.precoUnitario * itemExistente.quantidade;
      } else {
        carrinho.push({
          nome,
          precoUnitario: preco,
          quantidade,
          subtotal: preco * quantidade,
        });
      }

      atualizarCarrinho();
    }


function adicionarAoCarrinho(nome, precoStr, inputId) {
  const quantidadeInput = document.getElementById(inputId);
  let quantidade = parseInt(quantidadeInput.value);
  if (isNaN(quantidade) || quantidade < 1) quantidade = 1;
  if (quantidade > 10) quantidade = 10;

  const preco = parseFloat(precoStr.replace(',', '.'));

  const itemExistente = carrinho.find(i => i.nome === nome);
  if (itemExistente) {
    itemExistente.quantidade += quantidade;
    if (itemExistente.quantidade > 10) itemExistente.quantidade = 10;
    itemExistente.subtotal = itemExistente.precoUnitario * itemExistente.quantidade;
  } else {
    carrinho.push({
      nome,
      precoUnitario: preco,
      quantidade,
      subtotal: preco * quantidade,
    });
  }

  alert(`O jogador ${nome} foi adicionado`);

  atualizarCarrinho();
}
