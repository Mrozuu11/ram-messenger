# ram-messenger

This app is a simple messenger created with Vue.JS.
It utilises libraries such as Axios to access the REST API and VuePersist to handle the local storage. This Single Page Aplication allows the user to send messages to a range of characters pulled from the Rick and Morty API, and access the message history. The functionality includes displaying two views - New Message and History. The New Message view presents the user with a form to send a message (form validation included) whilst the History view stores the sent messages in local storage, sorts them (descending order) and displays them to the user.
The app is optimised for both desktop and mobile view.

Stack:\
Vue.JS (Vue2)\
Vuex - store functionality\
Router - handling views\
Axios - working with the REST API\
VuePersist - handling local storage\
ElementUI\
SCSS\

Demo:
[![RAM-demo.gif](https://i.postimg.cc/nr2nXm9S/RAM-demo.gif)](https://postimg.cc/V0JxTdRX)

## Project setup

```

npm install

```

### Compiles and hot-reloads for development

```

npm run serve

```

### Compiles and minifies for production

```

npm run build

```

### Lints and fixes files

```

npm run lint

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```
