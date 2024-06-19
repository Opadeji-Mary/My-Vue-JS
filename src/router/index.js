import { createMemoryHistory, createRouter } from "vue-router"
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/About/AboutView.vue'
import AboutUs from '../views/About/AboutUs.vue'
import CompanyInfo from '../views/About/CompanyInfo.vue'
import ToDo from '../views/ToDo.vue'
import RecipePage from '../views/RecipePage.vue'



const routes = [
    { path: '/', name: 'home', component: HomeView },
    {path:'/to-do', name:'to-do', component:ToDo},
    {path:'/recipes', name:'recipes', component: RecipePage},
    {  
     path: '/about',
     name: 'about', 
     component: AboutView,
     children: [
        { path: 'about-us', name: 'uss', component: AboutUs },
        { path: 'our-company', name: 'company', component: CompanyInfo }
      ]
    },
    // { path: '/user/:name', name: 'user', component: UserView },
    // {path:'/to-do',component:ToDo},
    // {path:'/recipes',component:RecipePage}
  //   { path: '/:pathMatch(.*)*', component: NotFound }
  ]
  // nested routes, notFound



    
    // {path:'/home', name:'home', component: HomeView},


    // { path:'/', component: formone},
    // { path:'/form', component: formtwo},
    // { path:'/todo', component:ToDo},

const router = createRouter ({
    history: createMemoryHistory(),
    routes,
})

export default router