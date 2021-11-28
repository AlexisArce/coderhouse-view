<template lang="html">
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.price }}</td>
  </tr>
</template>

<script lang="js">
export default  {
  name: 'Tr',
  props: ["item"],
}
</script>

<style scoped lang="scss"></style>
