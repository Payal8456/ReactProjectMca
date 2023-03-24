import sys
import requests
import json
import webbrowser

print(sys.argv[1])

url="https://api.openweathermap.org/data/2.5/weather?q="+sys.argv[1]+"&appid=956ce029a2b7c043d7a7d36cdaa4acd9"
response_API = requests.get(url)


data = response_API.text
parse_json = json.loads(data)
apiData = parse_json['main']

temperature=apiData['temp']
mintemp=apiData['temp_min']
maxtemp=apiData['temp_max']
presure=apiData['pressure']
humidity=apiData['humidity']

print("Temperature is :", temperature)
print("Minimum Temperature is :", mintemp)
print("Maximum Temperature is :", maxtemp)
print("Pressure is :", presure)
print("Humidity is :", humidity)




