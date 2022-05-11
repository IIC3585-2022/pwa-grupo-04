# Tarea 4 - Grupo 4

Instalación:
  - Clonar repositorio
    - ```properties
       git clone git@github.com:IIC3585-2022/pwa-grupo-04.git
      ``` 
  - ```properties
      cd pwa-grupo-04
      ``` 
  - ```properties
      npm install
      ```  
  - ```properties
      cd ../api
      ``` 
  - Crear un archivo service-account.json en el root de api con la siguiente información:
    - ```yaml
      {
      "type": "service_account",
      "project_id": "iic3585-g4-e4",
      "private_key_id": "7979f02eb8b90b4d9f851baad58bb3f838e0490a",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9URUW23GVn8qt\nCPgPLeOCsZjVWyrDJMm+aqBxaLJ9egQqsdGOEZWgylgYlznZXdmqH+NgbrAuWLdY\nH5OxcUX6MyTn+dURpWDPkUPHf4vIK6mBJyAX4MlthvnTTtU7XuyHgOxZ2RDxYzev\nHeEiGEJG6g3Z3JcwSoCmagz+6CRpGYtmyS3vUvfCQ4qF9jAKWlutCMca6R1CXaT4\noXiffrJcS9MP16kTnZWKDvXmfx3Un9RBr/YwFXKwA/VO2Fzw4ouHOl0Ews4KcxML\n639sfUveGyQmt8v5kF44InrDvPB99FJzp2HSn3XBYy9wIjlzH/+WLJFOWbNyd93I\nhPkBf7LdAgMBAAECggEAAIY5rOZ5DySVYBIdqqHdbCdZfrjnmhZVcCqC4cuuC294\ngTbeYugNoA3BQZ3Eu4kYDNDLUa5KIamz9+5JlfKWiY8BDJriqb17lcQYVkm7GTPo\nXpYx1uZFEph/+Aawsa9/HCqhRfiBsa3cvM3dO7MdBph4mDVaKQwPKRc9MKEAvoE6\ntgjgUDrEjqiZwDeyMVZVNV485H8yFXfSxjw0l3Wj7L9BFK4RPKYrPrN/YsOrCFHm\nnyAxWMvXQEGMu3bwXtRVg/YeOTDYqoz5crwI2EFYWZtyWgQp1Z6g0ZDnsdqynuLi\nBbQbvpZ0HgpghCr8PgYpObRAQxQI6OjRzsTkRta9UQKBgQDr9wGEn2+61ETCoF//\n9Tiu6AkJwvBT+CRJRF7PYMYdR1Bey6oDJQvwOrfU2ogIsnA5RVS8d0rZ3miEMs0x\n8HhFKsTzAAru4PHqdUOqKUgwiGMjNw/cssXSHsCDq0uobp9p7zAPxbqJWD5sfN/e\neTGvfAcs0xRsTBRt+NUD8qYcsQKBgQDNZB7MFruIF9Kt5delSkjXBlDJlrzUQIJX\nCaoXilJF7oyLjLk3Tn4fJpo6M1FNJrpqTD5Zu+PWIoIUbTe2F3+DpniSL8OjE0ON\nxYpK1zk1Jrhlb36g19rTuGrYtDzJrDxYjQic16kwUWjVYpJOafgyE6twZ0l0JR2Y\nVc/O0HYT7QKBgHyMRCDchvz2TdTtEb7okKLBlwOwAWpQ79Y8YE7VpbyOh72Bgptm\nUobad23Ca0sr5FBWaAOSc8/LtR8SMXzKkLDxgkNBIoQz93zpqG2InLIBS1KrHZRA\nSGpAER1urOCag0pHFfc9Rth323sn7oJfNfqKXL8sKvt+rMnfLZCH42YBAoGBAL61\nXDM8WFyBYkm9xIHhe8jMQG8t259pVpziiGDbOpFccnuQ6tmDtG/QNBweUjtE3oqc\nyLghUegempHE55nYL7pZ9FIor4rX9D3LUiEzvhawIT9uSzGlu7Yi4nLcyCSqHE5M\nhda8GIiYzrJzmE3e72nwAZuZDAcf/17XLuFlhn3xAoGBAOgqjKE73TNh+VW24jX0\nKLKCL/aliIZXhF9tbRZlZvT04YICcZ28mDo4e84cB8Gd11zQlbLYtbOT3YyOXcjQ\nBY2FTY0Og4ne4WGFEITYBQnNz+Xte31X8J9aZKCbSIXF5VcNRH61G89WFjRiG80M\n4vK9kLAzCH9R7h/F0+2LSmGp\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-oo3pj@iic3585-g4-e4.iam.gserviceaccount.com",
      "client_id": "108302625057827872778",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-oo3pj%40iic3585-g4-e4.iam.gserviceaccount.com"
      } 
  - ```properties
      npm install
      ``` 
  - Crear archivo .env en el root de la carpeta api con la línea: GOOGLE_APPLICATION_CREDENTIALS="/su/ruta/service-account.json" 

Correr Aplicación:
  - Desde el src del proyecto, crear un server (ej con python, ingresar en consola): 
    - ```properties
      python3 -m http.server 3000 
      ```   
  - Desde la carpeta api correr el comando: 
    - ```properties
       npm run build 
      ```  
  - Abrir browser y entrar a la url: http://localhost:3000/src/
