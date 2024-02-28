<script lang="ts">
  import portfolioItems from '../../../data/portfolio.json'

  export default {
    data() {
      return {
        items: portfolioItems
      }
    }
  };
</script>

<template>
  <div class="grid justify-center place-content-center place-items-center h-screen">
    <h1 class="text-7xl lowercase">Coming Soon</h1>
  </div>
   <!--
    <div class="grid grid-flow-row grid-rows-2 grid-cols-4 justify-center place-content-center place-items-center gap-x-10 gap-y-10">
     <div v-for="item in items" :key="item.slug">
        <Card :slug="item.slug" :title="item.title" :description="item.description" :tags="item.tags" :color="item.color"></Card>
      </div>
    </div>
     -->
</template>
  
