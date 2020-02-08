# Módulo 02 - Iniciando backend do GoBarber

## Ambiente e conceitos

### Lesson: "Configurando Estrutura"

1. Start package.json with Yarn
   `yarn init -y`

2. Install Express to help in routes on Node.JS
   `yarn add express`

3. Create `src` forlder, and inside make files route.js, app.js and server.js

4. Make a constructor of `Class App` in app.js, and yout functions
   `Middlewares` and `Routes`

### Lesson: "Nodemon e Sucrase"

5. Install Sucrase (Babel alternative) to enable use `import` instead of `const`
   `yarn add sucrase -D`

6. Install Nodemon to monitore and autoreload application in developmente mode.
   `yarn add nodemon -D`

7. Make changes of `imports` on files to JS6 import/export

8. Make file `nodemon.json` to work with sucrase

9. Dev the script `dev` on package.json

10. And configure script `dev:debug` to debug the app on VSCode

11. Open or create launch.json on VSCode Debug to configure to run with sucrase and nodemon

### Lesson: "Configurando Docker"

12. Install Docker and create a container with command above.
    `docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

13. Install Postbird, connect on container and create a database with name `gobarber`

### Lesson: "ESLint, Prettier e EditorConfig"

14. Install eslint to standadize the code
    `yarn add eslint -D`

15. Run eslint
    `yarn eslint --init`

16. The eslint download dependences on npm, so we exclude file `package-lock.json`
    and run `yarn` on terminal to update dependences list.
    `yarn`

17. Install ESlint plugin on VSCode

18. Write the code below on settings.json of VSCode to autofix with eslint

```json
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    }
  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    }
  }`
```

19. Add rules of eslint on .eslintrc.js

```js
  rules: {
    'class-methods-use-this': 'off',
    'no-params-reassign': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  }
```

20. Install prettier and auxiliar dependences
    `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

21) Add prettier to extends, plugins and rules in `.eslintrc`

```js
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  }
```

22. Create .prettierrc file to overwirte some rules of eslint.

```js
  {
    "singleQuote": true,
    "trailingComma": "es5"
  }
```

23. To fix all the files with eslint, run:
    `yarn eslint --fix src --ext .js`

24. Install editor config plugin for VSCode

25. Create and configure .editorconfig on VSCode, pay attention to:

```json
  trim_trailing_whitespace = true
  insert_final_newline = true
```

### Lesson: "Configurando Sequelize"

26. Create folder and files:
    src/config/database.js
    src/database/migrations
    src/app/controllers
    src/app/models

27. Install Sequelize dependence to work with ORM databases
    `yarn add sequelize`

28. Install sequelize-cli to facilitate model creation
    `yarn add sequelize-cli -D`

29. Create file .sequelizerc to configure paths of sequelize on app

## Cadastro e autenticação de usuários

### Lesson: "Migration de usuário"

30. To use postgres with sequelize, instal pg dependences
    `yarn add pg pg-hstore`

31. Go to `src/config/database.js` and configure parameters to use sequelize

32. Run sequelize-cli to create migration of users
    `yarn sequelize migration:create --name=create-users`

33. Developer fields of each column of table on migration

34. Run migration via CLI to migrate fields to database
    `yarn sequelize db:migrate`

35. If I want return a migrate, i can run:
    `yarn sequelize db:migrate:undo`

### Lesson: "Model de usuário"

36. Create model of User in app/models/User.js

### Lesson: "Criando loader de models"

37. Create database/index.js to make connection with BD

38. Import database/index.js in app.js file.

### Lesson: "Cadastro de usuários"

39. Create a controller of User in app/controller/Usercontroller.js
    Function Store to add a new User on database,

40. Import UserController in Routes.js to configure a route to add User.

41. Code a test to identify double entry on database on momento of add User

42. We don't need return all parameters, so We wipe some parameters to return in
    User.Controller.js.store()

### Lesson: "Gerando hash da senha"

43. Install bcrypt to create hashs of passwords
    `yarn add bcryptjs`

44. Code the model User to make hash on passwords of users in models/User.js

### Lesson: "Autenticação JWT"

45. Install Json Web Token to work with JWT
    `yarn add jsonwebtoken`

46. Create method store on Controller `app/controlllers/SessionController.js`

47. Create function checkpassword to compare hashs in Model User.

48. Create a route `/session` in routes.js to access SessionController

49. Create `config/auth.js` file to put autentication data of application.

### Lesson: "Middleware de autenticação"

49. Create a Middleware to intercept requests and verify authorization
    `app/middlewares/auth.js`

50. In `auth.js` we get the bearer token, split then and use promisify to convert
    a old promises in a new ecms2015 format using async/await.

51. With the token decoded, we atribute id to req.userId and call `next()`.

52. In `routes.js`, import middleware auth and use to protect routes.

### Lesson: "Update do usuário"

53. Create function update on `UserController.js` to make some checks and update
    the user in case of pass for checks.

### Lesson: "Validando dados de entrada"

54. Install Yup Schema Validation to work with validations on functions of app.
    `yarn add yup`

55. Apply the funcionality where there is user input, as in UserController and SessionController
