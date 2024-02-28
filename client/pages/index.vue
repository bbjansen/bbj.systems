<template>
    <div class="hero-content w-full justify-start">
        <div class="left max-w-sm">
            <h1 data-aos="fade-down" class="text-white text-3xl md:text-5xl font-bold mb-4">bbj.systems</h1>
            <p data-aos="fade-down" data-aos-delay="500" class="inline bg-white text-black text-md md:text-lg">
            Software Engineer & Data Analyst with background in Economics and System Design.
            </p>
            <div class="flex justify-start space-x-5 mt-5" data-aos-delay="900" data-aos="fade-down">
            <a
                class="btn btn-sm btn-primary"
                href="https://keybase.io/bobjansen"
                target="_blank"
            >
                Keybase
            </a>
            <a
                class="btn btn-sm btn-primary"
                href="https://github.com/bbjansen"
                target="_blank"
            >
                Github
            </a>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { definePageMeta } from '#imports';

    definePageMeta({
        layout: 'home'
    })
  export default {};
</script>