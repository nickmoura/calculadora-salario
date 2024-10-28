document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("salaryForm");
	const snackbar = document.getElementById("snackbar");

	function showToast(message, type = "success") {
		// Resetar a posição do toaster antes de mostrar
		snackbar.style.top = '-100px'; // Coloca o toaster fora da tela
		snackbar.style.visibility = 'visible'; // Assegura que está visível
		snackbar.style.opacity = '1'; // Torna o toaster visível

		// Define a classe para mostrar o toaster
		snackbar.className = `show ${type}`;

		// Atualiza o conteúdo do toaster
		snackbar.innerHTML = `
		<div class="content">
			<span class="icon"><i class='bx bx-error'></i></span>
			<span>${message}</span>
			<button class="close-btn">×</button>
		</div>
		<div class="timebar"></div>`;

		// Adiciona o listener ao botão de fechar
		const closeButton = snackbar.querySelector(".close-btn");
		closeButton.addEventListener("click", closeToast);

		// Define a animação para descer
		setTimeout(() => {
			snackbar.style.top = '20px'; // Move para a posição de exibição
		}, 10); // Aguarda um pequeno tempo para a transição

		// Fecha o toaster automaticamente após 7 segundos
		setTimeout(closeToast, 7000);
	}

	function closeToast() {
		snackbar.style.top = '-100px'; // Define a animação para subir
		snackbar.style.opacity = '0';   // Torna o toaster invisível
		setTimeout(() => {
			snackbar.style.visibility = 'hidden'; // Esconde o toaster
			snackbar.className = ''; // Remove todas as classes para resetar
		}, 600); // Aguarda o tempo da transição CSS
	}

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		const salaryInput = document.getElementById("salary");

		// Verifica se o campo de salário está preenchido e se é maior que 0
		if (salaryInput.value === "" || salaryInput.value.trim() === "" || Number(salaryInput.value) <= 0) {
			salaryInput.classList.add("error");
			showToast("Por favor, preencha o campo de salário com um valor válido.", "error");
			// Limpa o resultado para garantir que não apareça
			document.getElementById("result").innerHTML = "";
			return; // Para o envio do formulário
		} else {
			salaryInput.classList.remove("error");
		}

		showToast("Cálculo realizado com sucesso!", "success");

	});
});
