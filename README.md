# Check-in with QR

<h2 align="center">Aplicación para gestionar la entrada de empleados mediante el uso de códigos QR</h2>
<h2 align="center">App to manage employee entry by using QR code</h2>

## Author
- [@Natalia-García](https://github.com/natagr23)

## Descripción
Esta aplicación permite al usuario empleado generar un código QR correspondiente a un enlace con la información de su identificación o correo electrónico al igual que obtener su localización al momento de acceder a su cuenta. El usuario administrador tiene la posibilidad de adicionar empleados a los ya existentes, adicionar sedes y generar una tabla donde entrelace o correlacione cada empleado existente a una sede existente. Por medio de la información anterior el administrador podrá verificar por medio de la lectura del código QR un E-mail único de cada empleado y si éste se encuentra en la base de datos existente.De igual forma el administrador podrá verificar si la ubicación obtenida esta cerca de alguna sede existente designada a dicho empleado.

## Tecnologías implementadas
- Node.js
- React
- Material UI
- React Context 
- Hooks: UseLocalStorage
- LocalStorage

## Características
- Fully Resposive
- Toda la información es guardada en el Local Storage

## Vistazo a la página web

1. Langing Page

![Landing Page](https://github.com/natagr23/check-in-with-qr/blob/main/src/Data/LandingPage.PNG?raw=true)

2. Login o Acceso para el Empleado

![Employee Login](https://github.com/natagr23/check-in-with-qr/blob/main/src/Data/EmployeeLogin.PNG?raw=true)

3. Cuenta del Empleado

![Employee Account](https://github.com/natagr23/check-in-with-qr/blob/main/src/Data/EmployeeAccount.PNG?raw=true)

4. Cuenta del Administrador
4.1. Lista de los Empleados
![Employee List](https://github.com/natagr23/check-in-with-qr/blob/main/src/Data/EmployeeList.PNG?raw=true)

4.2. Lista de las Sedes

![Locations List](https://github.com/natagr23/check-in-with-qr/blob/main/src/Data/LocationList.PNG?raw=true)

4.3. Tabla de Cruce de Sedes por Empleado  

![Junction List](https://github.com/natagr23/check-in-with-qr/blob/main/src/Data/junctionEmployeewithLocation.PNG?raw=true)

## Deploy
https://portafolio-carbon.vercel.app/

## Prerequisites

## Setup

First, [fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

```bash
# Clone the starter code
git clone https://github.com/<your-username>/check-in-with-qr.git 
# Install the project's dependencies
yarn
```
## Running the App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the app, run:

```bash
yarn start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


