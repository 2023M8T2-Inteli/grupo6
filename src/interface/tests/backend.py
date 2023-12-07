import requests

base_url = 'http://localhost:3000'
components_url = base_url + '/components'

def getComponents():
    response = requests.get(f'{components_url}/get')
    data = response.json()
    return data

def postComponents(component, description):
    response = requests.post(f'{components_url}/post', json={'component':component, 'description':description})
    data = response.json()
    return data

def main():
    print(getComponents())
    component = input('Enter component: ')
    description = input('Enter description: ')
    print(postComponents(component, description))

if __name__ == '__main__':
    main()