<template>
 <div class="p-4 ">
    <div class="d-flex flex-wrap gap-4">
        <div v-for="data in dataArray" :key="data">
        <Cardoverviews :imgsrc="data.CardIcon" :value="data.CardValue" :title="data.CardHeading" :Updates="data.Updates" :reloadIcon="data.reloadIcon"/>

        
 </div>
    </div>
</div>
    </template>
    
    <script setup>
    import Cardoverviews from './Cardoverviews.vue';
    const dataArray=[
        {
            'CardHeading': "Capacity",
            'CardValue': "105GB",
            'CardIcon': "server",
            'reloadIcon': "arrows-rotate",
            'Updates' : "Updated now"
        },
        {
            'CardHeading': "Revenue",
            'CardValue': "$1,345",
            'CardIcon': "wallet",
            'Updates' : " Last day",
            'reloadIcon': "calendar",
            },{
                'CardHeading': "Errors",
                'CardValue': "23",
                'CardIcon': "heart-pulse",
                'Updates' : "In the last hour",
                'reloadIcon': "clock",
        },{
            'CardHeading': "Followers",
            'CardValue': "+45",
            'CardIcon': "twitter",
            'Updates' : "Updated now",
            'reloadIcon': "arrows-rotate",
        }
    ]
    </script>
