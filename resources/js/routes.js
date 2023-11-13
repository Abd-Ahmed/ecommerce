import accueil from './components/accueil.vue'; 
import listarticles from './components/listarticles.vue'; 
import Viewcategories from './components/categories/Viewcategories.vue';
import Addcategorie from './components/categories/addcategorie.vue';
export const routes = [ 
{ 
name: 'accueil', 
path: '/acc', 
component: accueil 
} ,
{ 
    name: 'listarticles', 
    path: '/articles', 
    component: listarticles 
    },
    { 
        name: 'listcategories', 
        path: '/listcat',  
        component: Viewcategories 
        },
        { 
            name: 'addcategorie', 
            path: '/addcateg',  
            component: Addcategorie 
            }

];
