import pandas as pd
import requests
from flask import Flask, make_response, send_file

app = Flask(__name__)


@app.route('/test/produtos.xlsx', methods=['GET'])
def retornaArquivo():
    result = requests.get('http://192.168.2.107:3000/produtos/consultar')
    data = result.json()

    lista = []
    for codigo in data:
        lista.append(codigo)


    produtos = pd.DataFrame(lista)
    produtos.to_excel("produtos.xlsx")

    return send_file("produtos.xlsx")