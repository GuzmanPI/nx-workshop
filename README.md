<p align="center">
  <a href="https://nx.dev/" target="blank"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="180" alt="Nx" /></a>
</p>
  
<p align="center"><b>Angular Bogotá:</b> Workshop de Nx - Angular Monolithic app</p>
<p align="center">Por <b>Israel Guzmán -</b> Cheers 🍻</p>
<p align="center">Sígueme en:</p>
<p align="center">
  <a href="https://twitter.com/israelgp4/" target="blank"><img src="https://camo.githubusercontent.com/27c721be6bcac1881e0f3798ee8e2795c58e428f/68747470733a2f2f696d672e69636f6e73382e636f6d2f706c6173746963696e652f34352f3030303030302f747769747465722e706e67" width="50" alt="@israelgp4" /></a>
</p>

# My Company Monorepo

## Agregar Plugins al Espacio de Trabajo

Nx tiene varios plugins para desarrollar diferentes tipos de aplicaciones y herramientas.

Estos plugins permiten generar applicaciones, librerías, así como las herramientas para correr pruebas unitarias, de e2e y hacer el "build" de las aplicaciones.

Plugins que puede agregar a su espacio de trabajo:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (Sin framework de frontend)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generar una Aaplicación

Correr el comando `nx g @nrwl/react:app my-app` para generar una aplicación.

> También puedes usar cualquiera de los plugins que se encuentran arriba para generar aplicaciones.

Cuando usas Nx, puedes crear múltiples aplicaciones y librerías en el mismo espacio de trabajo.

## Generate una Libraría

Correr el comando `nx g @nrwl/react:lib my-lib` para generar una librería.

> También puedes usar cualquiera de los plugins que se encuentran arriba para generar librerías.

Las librerías se comparten a través de las aplicaciones. Se pueden importar de `@my-company/mylib`.

## Servideor de Desarrollo

Correr el comando `nx serve my-app` para iniciar el servidor de desarrollo. Navega a http://localhost:4200/. La aplicación se recarga automáticamente si cambian los archivos fuente.

## Comandos de Nx

Correr `nx g @nrwl/react:component my-component --project=my-app` para generar un nuevo componente.

## Build

Correr `nx build my-app` para hacer el build del proyectuo. El build de la aplicación se guarda en el directorio `dist/`. Usar la bandera `--prod` para generar un build productivo.

## Pruebas unitarias

Correr `nx test my-app` para ejecutar pruebas unitarias via [Jest](https://jestjs.io).

Correr `nx affected:test` para ejecutar las pruebas unitarias afectadas por algún cambio.

## Pruebas de end-to-end

Correr `ng e2e my-app` para ejecutar las pruebas de end-to-end via [Cypress](https://www.cypress.io).

Correr `nx affected:e2e` para ejecutar las pruebas de end-to-end afectadas por algún cambio.

## Entendiendo el Espacio de Trabajo your workspace

Correr `nx dep-graph` para ver el diagrama de dependencias de los proyectos.

## Más Información

Visite la [Documentaión de Nx](https://nx.dev) para conocer más.
