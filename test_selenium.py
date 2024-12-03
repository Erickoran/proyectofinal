from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

# Especifica la ruta a tu archivo chromedriver
servicio = Service('ruta/del/chromedriver')

# Inicia el navegador
driver = webdriver.Chrome(service=servicio)

# Abre una página web (por ejemplo, Google)
driver.get('https://www.google.com')

# Realiza acciones en la página
print(driver.title)

# Cierra el navegador
driver.quit()
