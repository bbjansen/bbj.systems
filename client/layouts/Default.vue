<script lang="ts">
  export default {};
</script>

<template>
  <div data-theme="black" class="text-white bg-black min-h-screen">
    <navbar class="navbar bg-base-100 z-40 shadow-sm">
      <div class="navbar-start ">
        <a class="btn btn-ghost md:text-xl" href="/">bbj.systems</a>
      </div>
      <div class="navbar-end space-x-2 hidden">
        <span class="inline-flex items-center rounded-full bg-white p-2"></span>
        <span class="inline-flex items-center rounded-full bg-white p-2"></span>
        <span class="inline-flex items-center rounded-full bg-white p-2"></span>
      </div>
    </navbar>
    <main className="mx-auto w-[80rem] justify-self-center my-10">
      <slot />
    </main>
  </div>
</template>