# Vue/VueResource/VueRouter/Vuex (4Vs) JWT-Auth

> Esqueleto base para uma aplicação web com sistema de autenticação via JWT incluído

> *Skeleton basis for a web application with authentication system via JWT included*

## Instalação *(Setup)*

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## O que está incluso? *(What is included?)*

* Vue
* Vue-Router
* Vue-Resource
* Vuex
* Vue-Validator
* Vue-Strap
* Bootstrap 3.3.6

## Estrutura da Aplicação *(Application Structure)*

* /(root)
    * /assets - pasta de imagens e outros arquivos externos para a aplicação
    * /dist - o build final ficará aqui
    * /src - o código-fonte da aplicação
        * /content
            * /auth - componentes para autenticação
            * /default - componentes base/comuns
        * /router
            * config.js - configura o Vue-Router
            * paths.js - lista das URLs
            * routes.js - rotas da aplicação
        * /services
            * authService.js -
        * /vuex (1)
            * /api - módulo de api para o vuex
            * /auth - módulo de autenticação
            * /notification - módulo de notificações
            * store.js - Vuex store
        * App.vue - componente raiz da aplicação
        * main.js - ponto de entrada da aplicação
    * index.html - container HTML da aplicação

(1) - os módulos Vuex criam cada um seus respectivos *state* e *mutations*, bem como seus *getters* e *actions*.

## ToDo:

```
 - melhorar este readme
 - documentar o processo de autenticação usando JWT
 - exemplos de como criar novos módulos
 - muito mais!

```

Cya! Jorge ***jjsquad*** Junior \o/

### Links:

- [Vue.js](http://vuejs.org)
- [Vue-Resource](https://github.com/vuejs/vue-resource)
- [Vue-Router](https://github.com/vuejs/vue-router)
- [Vuex](https://github.com/vuejs/vuex)
- [Vue-Validator](https://github.com/vuejs/vue-validator)
- [Vue-Strap](http://yuche.github.io/vue-strap)
- [Bootstrap](http://getbootstrap.com)


For more information see the [docs for vueify](https://github.com/vuejs/vueify).
