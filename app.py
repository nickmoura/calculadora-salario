from flask import Flask, request, jsonify, render_template  # Importa render_template também

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # Renderiza o arquivo index.html

@app.route('/calculate', methods=['POST'])
def calculate_salary():
    try:
        data = request.get_json()
        salary_bruto = float(data['salary'])
        outros_descontos = data.get('outros_descontos', 0)
        outros_descontos = float(outros_descontos) if outros_descontos else 0

        # Cálculo do INSS por faixas
        inss = 0
        if salary_bruto <= 1412.00:
            inss = salary_bruto * 0.075
        elif salary_bruto <= 2666.68:
            inss = (1412.00 * 0.075) + ((salary_bruto - 1412.00) * 0.09)
        elif salary_bruto <= 4000.03:
            inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((salary_bruto - 2666.68) * 0.12)
        elif salary_bruto <= 7786.02:
            inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((salary_bruto - 4000.03) * 0.14)
        else:
            inss = 713.08  # Teto máximo

        # Cálculo do IRRF por faixas
        irrf = 0
        if salary_bruto <= 2259.20:
            irrf = 0
        elif salary_bruto <= 2826.65:
            irrf = (salary_bruto * 0.075) - 169.44
        elif salary_bruto <= 3751.05:
            irrf = (salary_bruto * 0.15) - 381.44
        elif salary_bruto <= 4664.68:
            irrf = (salary_bruto * 0.225) - 662.77
        else:
            irrf = (salary_bruto * 0.275) - 896.00

        # Cálculo do salário líquido
        salario_liquido = salary_bruto - inss - irrf - outros_descontos

        # Retorno dos valores detalhados
        return jsonify({
            'net_salary': round(salario_liquido, 2),
            'inss': round(inss, 2),
            'irrf': round(irrf, 2),
            'outros_descontos': round(outros_descontos, 2)
        })
    except Exception as e:
        print("Erro ao calcular salário:", e)
        return jsonify({"error": "Erro ao calcular salário"}), 500

# Roda o servidor Flask
if __name__ == '__main__':
    app.run(debug=True)
