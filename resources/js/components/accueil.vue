<template lang="">
    <div>
        <h1>Bienvenue dans note site</h1>
        <h2>code : {{ article.code }}</h2>
        <h2>designation : {{ article.designation }}</h2>
        <h2>prix : {{ article.prix }}</h2>
        <h2>quantité : {{ article.qte }}</h2>
    </div>
</template>
<script setup>
const article={
    code:100,
    designation:"PC portable",
    prix:2100,
    qte:10
};
</script>
<style lang="">
    
</style>