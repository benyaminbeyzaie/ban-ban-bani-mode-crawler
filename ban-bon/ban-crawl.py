import requests
import json

url = 'https://mobapi.banimode.com/api/v1/products?platform=desktop&need_filter=1&page_size=24&filter[product_categories.id][eq]=2'
response = requests.get(url)
parsed_data = json.loads(response.text)

backend_url = 'http://localhost:7500/products'

response = requests.post(backend_url, json=parsed_data['data']['data'])

if response.status_code == 200:
    print('Data inserted successfully')
else:
    print('Error inserting data')
