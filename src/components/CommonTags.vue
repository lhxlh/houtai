<template>
  <div class="tabs">
    <el-tag
      size="small"
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handlerClose(tags, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonTags',
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    changeMenu(tag) {
      this.$router.push({
        name: tag.name
      })
    },
    handlerClose(tags, index) {
      tags.splice(index, 1)
      this.$router.push({
        name: tags[tags.length - 1].name
      })
    }
  },
}
</script>

<style lang="less" scoped>
.tabs {
  background-color: #f2f3f4;
  .el-tag {
    margin: 6px 10px 0 5px;
    cursor: pointer;
  }
}
</style>