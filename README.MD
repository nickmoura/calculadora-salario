# Calculadora de Salário Líquido

Este projeto é uma calculadora de salário líquido que considera as diferentes faixas de contribuição do INSS e IRPF, além de permitir que o usuário insira descontos adicionais, como convênio médico ou benefícios de ginástica (exemplo: Gympass). Desenvolvida com uma interface amigável, a calculadora fornece o valor final do salário líquido do usuário.

## Tecnologias Utilizadas
- **Frontend:** HTML, CSS, Bootstrap, JavaScript
- **Backend:** Python (Flask e Django)

## Funcionalidades
- **Cálculo Automático:** Cálculo do salário líquido com base nas faixas de contribuição do INSS e do IRPF.
- **Descontos Personalizados:** Permite ao usuário adicionar descontos extras, como plano de saúde, vale-transporte, entre outros.

## Estrutura do Projeto
- `app.py` - Arquivo principal para execução do backend em Flask ou Django.
- `static/` - Pasta que contém os arquivos CSS e JavaScript.
- `templates/` - Arquivos HTML para renderização das páginas da aplicação.

## Como Rodar o Projeto

1. **Clonar o Repositório**
    ```bash
    git clone https://github.com/nickmoura/calculadora-salario.git
    cd calculadora-salario
    ```

2. **Instalar Dependências**
    ```bash
    pip install -r requirements.txt
    ```

3. **Rodar a Aplicação**
    - **Flask**:
      ```bash
      python app.py
      ```
    - **Django**:
      ```bash
      python manage.py runserver
      ```

4. **Acessar a Aplicação**
    - Abra o navegador e acesse `http://localhost:5000` (Flask) ou `http://localhost:8000` (Django).

## Contribuição
Contribuições são bem-vindas! Envie um pull request ou entre em contato para mais informações.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
