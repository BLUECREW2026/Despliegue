# 🛠️ Guía de Comandos del Proyecto

## 📦 Instalación y Dependencias
Comandos para configurar Bootstrap y el compilador de estilos.

```bash
# Instalar dependencias del package.json
npm install
```

# Enlace de Despliegue
https://bluecrewreact.netlify.app/

# Compilar Sass y vigilar cambios (Watch mode)
```bash
sass scss:dist/css --watch
```
## 🌿 Comandos de Git

### Gestión de Ramas
Para crear una rama nueva y cambiarte a ella en un solo paso:
```bash
git checkout -b nueva-funcionalidad
```

Para añadir los cambios a la rama
```bash
git add .
git add nombreDeArchivo
```

Para hacer el commit para guardarlo para el push:
```bash
git commit -m "Explica que has hecho"
```

Volver a la rama principal:
```bash
git checkout main
```

Actualizar cambios desde el remoto:
```bash
git pull
```

Subir rama a GitHub:
```bash
git push -u origin mi-mejora
```

Borrar rama local:
```bash
git branch -d mi-mejora
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
