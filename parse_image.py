import base64
with open("/Users/andreyfilatiev/Projects/13x13/public/logo.png", "rb") as image_file:
    print(base64.b64encode(image_file.read()).decode('utf-8')[:100])
