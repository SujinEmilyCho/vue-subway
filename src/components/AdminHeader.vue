<template>
  <nav class="flex items-center justify-between flex-wrap bg-yellow-500 p-4">
    <div class="flex items-center flex-shrink-0 text-gray-800 w-full">
      <a href="/" class="mr-2">
        <img src="/src/public/logo_small.png" class="w-6" />
      </a>
      <div class="flex justify-start">
        <div class="hover:bg-yellow-400 px-2 py-1 rounded">
          <a
            href="/stations"
            class="block inline-block lg:mt-0 text-gray-800 text-sm"
          >
            역 관리
          </a>
        </div>
        <div class="hover:bg-yellow-400 px-2 py-1 rounded">
          <a
            href="/lines"
            class="block inline-block lg:mt-0 text-gray-800 text-sm"
          >
            노선 관리
          </a>
        </div>
        <div class="hover:bg-yellow-400 px-2 py-1 rounded">
          <a
            href="/edges"
            class="block inline-block lg:mt-0 text-gray-800 text-sm"
          >
            구간 관리
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminHeader',
};
</script>

<style scoped></style>
