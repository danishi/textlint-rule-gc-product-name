import requests
import json


def getGoogleCloudServiceListApi():
    product_list = []
    url = "https://danishi.github.io/gc-service-list-api/products.json"
    response = requests.get(url)
    data = response.json()

    names = [item['name'] for item in data['items']]

    for name in names:
        incorrect = []
        if ' ' in name: 
            incorrect.append(name.replace(' ', ''))
        
        product = {
            "correct": name,
            "incorrect": incorrect
        }
        product_list.append(product)

    return product_list


def saveJsonFile(product_list):
    with open('./src/terms.json', 'w') as file:
        json.dump(product_list, file, indent=2)


if __name__ == "__main__":
    product_list = getGoogleCloudServiceListApi()
    saveJsonFile(product_list)
