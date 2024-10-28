// Adiciona um evento ao formulário para prevenir o envio padrão e tratar o cálculo
document.getElementById("salaryForm").addEventListener("submit", function (e) {
	e.preventDefault();  // Impede o envio padrão do formulário
  
	// Obtém o valor do salário bruto e outros descontos fornecidos pelo usuário
	const salary = document.getElementById("salary").value;
	const outrosDescontos = document.getElementById("outrosDescontos").value;
  
	// Mostra no console os dados que estão sendo enviados
	console.log("Enviando dados:", { salary, outros_descontos: outrosDescontos });
  
	// Envia uma requisição POST para o endpoint '/calculate' com o salário e outros descontos
	fetch("/calculate", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json"
	  },
	  body: JSON.stringify({ salary: salary, outros_descontos: outrosDescontos })
	})
	.then(response => response.json())  // Processa a resposta JSON do servidor
	.then(data => {
	  // Define a conexão como bem-sucedida
	  window.calc = { backendConnection: true };

	  // Mostra o resultado detalhado dos descontos e o salário líquido
	  document.getElementById("result").innerHTML = `
		<p>Salário Bruto: R$ ${salary}</p>
		<p>INSS: R$ ${data.inss}</p>
		<p>IRRF: R$ ${data.irrf}</p>
		<p>Outros Descontos: R$ ${data.outros_descontos}</p>
		<h3>Salário Líquido: R$ ${data.net_salary}</h3>
	  `;
	})
	.catch(error => {
	  console.error("Erro:", error);

	  // Define a conexão como falha
	  window.calc = { backendConnection: false };
	});
});
