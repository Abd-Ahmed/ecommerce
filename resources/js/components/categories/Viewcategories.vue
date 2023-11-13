<template>
    <div>
        <router-link :to="{name: 'addcategorie'}" class="btn btn-primary">Ajouter</router-link>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Nom categorie</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cat in categ" :key="cat.id">
                    <td><img :src="cat.imagecategorie" width="70" height="80"/></td>
                    <td>{{ cat.nomcategorie }}</td>
                    <td><button class="btn btn-warning">Modifier</button></td>
                    <td><button class="btn btn-danger" @click="deletecat(cat.id)">Supprmier</button></td>


                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
import axios from "axios"
import {ref,onMounted} from "vue"
const categ=ref([])
const getcategories=async()=>{
    await axios.get("http://127.0.0.1:8000/api/categories")
    .then(res=>{
        categ.value=res.data
      })
      .catch(error=>{
        console.log(error)
       })

}
onMounted(() => {
    getcategories()
    })
const deletecat=async(id) => {
    await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
  .then(res=>{
        categ.value=categ.value.filter((cat) => cat.id !== id);
        console.log("Catégorie supprimée avec succées")
    })
  .catch(error=>{
        console.log(error)
    })
}

</script>

<style lang="scss" scoped>

</style>