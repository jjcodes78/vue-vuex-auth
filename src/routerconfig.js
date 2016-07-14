import MainContent from './content/MainContent.vue'
import ResourceContent from './content/ResourceContent.vue'
import VuexContent from './content/VuexContent.vue'


const RouterConfig = {
    '/': {
        component: MainContent
    },
    '/resourceExample': {
        component: ResourceContent
    },
    '/vuexExample': {
        component: VuexContent
    }
}

export default RouterConfig;