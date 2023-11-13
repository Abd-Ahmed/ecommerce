<template lang="">
    <div>
        <h2>
            Liste Des Articles
        </h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>
                        Image
                    </th>
                    <th>
                        Désignation
                    </th>
                    <th>
                        Prix
                    </th>
                    <th>
                        Quantité
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pr in articles" :key="pr.id">
                    <td>
                        <img :src="pr.imagearticle" width="75" height="75"/>
                    </td>
                    <td>
                        {{pr.designation}}
                    </td>
                    <td>
                        {{pr.prix}}
                    </td>
                    <td>
                        {{pr.qte}}
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger">Supprimer</button>
                        <button type="button" class="btn btn-warning">Modifier</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
const articles = [
    {
        'id': 1,
        'designation': 'PC Portable',
        'prix': 2100,
        'qte': 10,
        'imagearticle' : "https://res.cloudinary.com/dg46glcif/image/upload/v1697464093/Images/s23ultra_poyvae.jpg"
    },
    {
        'id': 2,
        'designation': 'Clavier',
        'prix': 100,
        'qte': 40,
        'imagearticle' : "https://res.cloudinary.com/dfw7dzlpx/image/upload/v1698074991/cld-sample-5.jpg"

    },
    {
        'id': 3,
        'designation': 'Ecran',
        'prix': 350,
        'qte': 5,
        'imagearticle' : "https://res.cloudinary.com/dfw7dzlpx/image/upload/v1698074989/cld-sample.jpg"
    } ,

]
</script>
<style lang="">
   
</style>