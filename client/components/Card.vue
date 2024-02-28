
  
<script lang="ts">
  export default {
    name: 'card',
    props: ['slug', 'title', 'description', 'exerpt', 'tags'],
  }
</script>

<template>
<div class="card w-96">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div class="card-body border-l border-r border-b">
    <h2 class="card-title">{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="card-actions justify-between items-center">
        <div class="flex justify-start space-x-3">
            <div class="border p-1 text-xs" v-for="tag in tags">
                {{ tag }}
            </div>
        </div>

      <button class="btn btn-primary">View</button>
    </div>
  </div>
</div>
</template>
