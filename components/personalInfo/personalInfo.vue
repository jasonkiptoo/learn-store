<template>
    <div>
      
        <label for="name">Name:</label>
          <input type="text" id="name" v-model="personalInfo.name">


          <div class="flex pt-4 justify-content-end">
                            <!-- <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" /> -->
                        </div>
          <!-- Add one field for each tab -->

    </div>
</template>

<script setup>

const personalInfo =ref({
    name: ""
})

</script>

<style lang="scss" scoped>

</style>