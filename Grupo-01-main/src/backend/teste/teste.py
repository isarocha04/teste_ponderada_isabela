import requests

url = "http://localhost:3000/initiatives"

dadosdainiciativa = {
        "name": "teste do patinho",
        "status": "COMPLETED",
        "moduleId": 1,
        "companyId": 33
    }


response = requests.post(url,json = dadosdainiciativa)

if (response.status_code == 200):
    print("Iniciativa foi cadastrada com sucessoo!")
else:
    print("Erro ao cadastrar a iniciativa!! =(")