<template>
    <div class="menu" :class="{'small-menu':smallMenu}" >
        <MenuItem
        v-for="(item,index) in menuTree"
        :key="index"
        :label="item.label" 
        :icon="item.icon"
        :depth="0"
        :data="item.children"
        :smallMenu="smallMenu"/>
        <i class="material-icons" @click="smallMenu =! smallMenu">menu</i>
    </div>
</template>

<script>

import MenuItem  from './MenuItem.vue';

export default{
    name:"recursive_menu",
    data:()=>({
        smallMenu:false,
        menuTree:[
            {
                label:"Home",
                icon:"home",
                children:[
                    {
                        label:"Project1",
                        children:[
                            {
                                label:"class1",
                            },
                            {
                                label:"class2",
                            },
                            {
                                label:"class3"
                            },
                        ]
                    },
                    {
                        label:"Project2"
                    },
                    {
                        label:"Project3"
                    }
                ]
            },
            {
                label:"Settings",
                icon:"settings"
            },
            {
                label:"Dashboard",
                icon:"dashboard"
            }
        ]


    }),

    components:{
        MenuItem
    }
}

</script>

<style lang="scss" scoped>
.menu{
    position: fixed;
    height: 100vh;
    width: 120px;
    background-color: #409EFF;;
    left: 0;
    top: 0;
    border-right: 1px solid #ececec;
    transition: all .3s ease;
    overflow: auto;
    i{
        position: fixed;
        left: 120px;
        top: 15px;
        font-size: 20px;
        user-select: none;
        cursor: pointer;
        transition: all .3s ease;
    }
    &.small-menu{
        overflow: inherit;
        width: 60px;
        padding-top: 50px;
        i{
            left: 20px;
        }

    }

}


</style>