<template>
    <div>
      <form @submit.prevent="ajoutercategorie">
        <div class="mb-3">
          <label for="nomcategorie" class="form-label">Nom Catégorie</label>
          <input type="text" class="form-control" id="nomcategorie" v-model="categorie.nomcategorie">
        </div>
        <div class="mb-3">
          <label for="imagecategorie" class="form-label">Image</label>
          <input type="text" class="form-control" id="imagecategorie" v-model="categorie.imagecategorie">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
const router=useRouter();

  const categorie = ref({
    nomcategorie: '',
    imagecategorie: ''
  });
  
  const ajoutercategorie = async () => {
    await axios.post("http://127.0.0.1:8000/api/categories", categorie.value)
      .then(res => {
router.push({name:'listcategories'})
      })
      .catch(error => {
        console.log(error); // Corrected the console.log statement
      })
  }
  </script>
  
  <style lang="scss" scoped>
  /* Your styles here */
  </style>
  