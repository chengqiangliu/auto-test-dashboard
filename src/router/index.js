import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Home",
        component:()=>import('../components/Homepage.vue'),
        props: true,
       

    },

    {
        path:'/classErrorPage/:myprop',
        name:"classErrorPage",
        component:()=>import('../components/ClassErrorPage.vue'),
        props: true,
    },

    // {
    //     path:'/errorLog/',
    //     name:"errorLog",
    //     component:()=>import('../components/ErrorDetailPage.vue')
    // },
   
   
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router