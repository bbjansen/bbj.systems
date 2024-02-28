<script setup lang="ts">
  import { TresCanvas, useRenderLoop } from '@tresjs/core'
  import { OrbitControls, Html } from '@tresjs/cientos'
  import { SRGBColorSpace, ACESFilmicToneMapping, BasicShadowMap } from 'three'
  import { ref, shallowRef, shallowReactive, onMounted, nextTick } from 'vue'

  
  const { onLoop } = useRenderLoop()
  const torusRef: any = shallowRef(null)
  const yRotation: any = shallowRef(0)

  const gl: any = {
    clearColor: '#000',
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: ACESFilmicToneMapping,
  }

  useRenderLoop().onLoop(({ delta }) => {
    yRotation.value += 0.02 * delta
  })

  onMounted(async () => {
    await nextTick()

    onLoop(({ elapsed }) => {
      torusRef.value.rotation.x = elapsed * 0.835;
      torusRef.value.rotation.y = elapsed * 0.251;
    })
  })
</script>

<template>
  <div data-theme="black">
    <div class="hero min-h-screen w-full">

      <TresCanvas v-bind="gl" class="hidden">
      <TresPerspectiveCamera :position="[0, 1.8, 10]" :look-at="[0, 0, 0]"  />

      <OrbitControls
          :enable-rotate="false"
          :enable-pan="false"
          :enable-zoom="false"
      />
      
      <TresGridHelper :args="[20, 10]" />

      <Stars
          :rotation="[0, yRotation, 0]"
          :radius="50"
          :depth="50"
          :count="5000"
          :size="0.1"
          :size-attenuation="true"
      />

      <TresMesh ref="torusRef" :position="[3, 1.3, 0]">
          <TresTorusGeometry :args="[1, 0.5, 16, 100]" />
          <TresMeshNormalMaterial />
      </TresMesh>

      <Html
          center
          :distance-factor="-1"
          :position="[3.9, -0.1, 0.65]"
        >
        <a href="/portfolio">
          <h2 class="lowercase bg-white text-black text-4xl font-bold py-2 px-3 ">Portfolio</h2>
        </a>
        </Html>
      </TresCanvas>
      <slot />
    </div>
  </div>
</template>
