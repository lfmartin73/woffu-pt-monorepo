# Woffu :: Prueba técnica

Esta prueba consiste en la creación de un monorepo donde se aloja una aplicacion
React para realizar las operaciones crud basicas contra una api ya en operación.

Tambien se desarrolló un widget con informacion obtenida de la misma api y un
juego de componentes comunes que se comparten entre ambas aplicaciones.

La api se encuentra en https://tvztjkwemzrcuvxxcbpb.supabase.co/rest/v1
y en este proyecto se usan los endpoints de /bet para ejecutar las
operaciones basicas GET, POST, PUT y DELETE.

## Contenido

El monorepo fue creado con turborepo y se uso pnpm para la gestion de packages.
Incluye las siguientes aplicaciones y packages:

### Apps y Packages

- `apps/web`: aplicacion react typescript con el crud de /bet
- `apps/docs`: aplicación react typescript con widget estadisticas de /bet

- `packages/data` servicios comunes de acceso a la api
- `packages/ui`: componentes comunes entre ambas aplicaciones
- `static-web-test-widget.html` Pagina HTML donde probar el widget en un iframe

### Run

Para compilar el codigo y probar su ejecución ejecute los siguientes comandos:

```
cd woffu-pt-monorepo
npm install pnpm
pnpm install
pnpm run dev
```

Al terminar con exito podra consumir las aplicaciones en un navegador web.
http://localhost:3000/ para el crud de bets y
http://localhost:3001/ para el widget

Para probar el widget desde una web estática puede cargar en un navegador
el archivo `static-web-test-widget.html` incluido en la raiz del monorepo.

### Aplicaciones desarrolladas

Para este desarrollo se usaron componentes de Bootstrap
y algunos iconos de Font Awesome.

El diseño es muy simple e intuitivo, solo basta con navegar por los datos
y hacer click en los iconos o botones correspondientes a cada opción.

Contenido de las carpetas:

#### CRUD

/apps/web (@woffu/bets-crud) CRUD de Apuestas
En su interior hay un conjunto de carpetas que describimos a continuación:

/apps/web/components

Incluye todos los componentes react .tsx desarrollados para la
página de administración de apuestas. Incluye un listado y varios
dialogos modales que permiten crear, ver, editar y borrar apuestas.
Cada componente interactua con el servicio para obtener o actualizar
los datos en la api. Al cerrar cada modal de edicion tambien se actualizan
los registros modificados en la tabla inicial.

    BetAdmin: Componente raiz de la funcionalidad, hace la carga inicial
    de los datos a mostrar y maneja otros componentes subordinados.

    BetList: Se encarga de crear la tabla con el listado de apuestas.

    BetViewModal: Dialogo para ver el detalle de una apuesta.

    BetEditModal: Dialogo para crear o editar los datos de una puesta.
        El formulario de creacion/edicion de datos incluye validaciones
        de datos requeridos y por cantidad de caracteres.

    BetDeleteModal: Dialogo de confirmación para borrar una apuesta.

/apps/web/pages
Aqui esta la página raiz o punto de entrada a la app y en su interior
se publica el componente raiz BetAdmin para gestionar las apuestas.

/apps/web/styles
Incluye global.css con los estilos generales que se aplican.

#### WIDGET

/apps/docs (@woffu/bets-widget) Widget de Apuestas

En su interior esta la implementacion del widget de estadisticas.
Se muestra un resumen de apuestas entre dos fechas que contiene
el numero total de apuestas, el monto total en dinero y el promedio
en cada apuesta.

Al hacer click sobre el rango de fecha se muestra un formulario que permite
cambiar el rango de fechas y refrescar las estdisticas.

/apps/docs/components
Componentes implementados:

BetStatsWidget: Componente principal del widget que carga los datos y muestra
las estadisticas.
BetFilter: Componente donde se implementa el formulario para filtrar.

/apps/docs/model
Estructuras usadas para las estadisticas y el filtro.

/apps/docs/pages
Pagina principal de la app donde se carga el componente BetStatsWidget.

#### DATA

/packages/data (@woffu/data)
Seccion donde se implementa el consumo de datos de la api.

/packages/data/api
Contiene la configuración de axios para conectar a la api en
supabase.co y sus respectivos endpoints.

/dto
Clases auxiliares para transporte de datos desde y hacia la api.

/model
Clase Bet con el modelo de datos de apuestas. Encapsula los datos
usados en cada funcionalidad.

/services
Incluye el servicio BetService que gestiona los datos entre la api y los
componentes. Implementa algunas logicas de negocio y manejo de errores.
Los componentes visuales solo consumen este servicio, no necesitan conocer
los detalles de implementacion de la api.

#### UI

/packages/ui (@woffu/ui)

/packages/ui/buttons
Implementacion de botones comunes a ambas aplicaciones.

/packages/ui/components
Otros omponentes comunes como el de hacer loading en la carga de datos
y uno mostrar los mensajes de error.

#### TESTS

Pude hacer algunos test e2e.
Tuve problemas al configurar los unitarios, trate de configurar Jest pero
entraba en conflicto con otras dependencias, tuve que abandonarlo por cuestion
de tiempo.

Instale Cypress y logre hacer algunas pruebas e2e.

apps/web/cypress/e2e/pages
Test a pagina de inicio del crud.

apps/web/cypress/e2e/components
Algunos tests a los componentes del crud.

### Que mejorar?

- Configurar archivos .env para configuraciones globales.
  Es recomendable mover hacia aqui la url base y apikey,
  de esta forma se resuelve la configuracion para los ambientes
  de desarrolo, pruebas y productivo.

- Implementar el listado de apuestas con un juego de componentes que incluya
  funcionalidades como filtrado, ordenamiento, paginado, etc.
  Seria ideal con MUI.

- Supongo que buena parte del codigo se pueda mejorar para hacerlo mas
  compatible con las filosofias de react. Esta version mia debe ser mitad
  react y mitad angular.

### Que tareas quedaron pendiente?

- Las pruebas unitarias y de integracion entre componentes.
