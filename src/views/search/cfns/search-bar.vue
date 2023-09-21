
<script setup>

    import { ref } from 'vue';
    import { showToast } from 'vant';
    import {useRouter} from 'vue-router'
  
   
    const value = ref('');
    const router = useRouter()
 

    const onSearch = (val) => showToast(val);
    const onCancel = () => {
      router.back()
    }; 

</script>

<template>

  <div class="search">
          <form action="/">
          <van-search
              v-model="value"
              show-action
              shape="round"
              placeholder="城市/区域/位置"
              @search="onSearch"
              @cancel="onCancel"
              class="vansearch"
          />
          </form>
    </div>


</template>

<style scoped>
    
    :deep(.van-search__field .van-field__left-icon)  {
      color: var(--main-bg-color);
    }
  
</style>