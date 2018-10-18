<template>
  <div id="translateForm">
    <form v-on:submit="formSubmit">
      <input type="text" v-model="textToTranslate" placeholder="输入需要翻译的内容">
      <select v-model="language">
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="ko">Korean</option>
        <option value="fr">French</option>
      </select>
      <input type="submit" value="翻译">
    </form>
  </div>
</template>

<script>

export default {
  name: 'translateForm',
  data:function(){
    return {
      textToTranslate:"",
      language:""
    }
  },
  methods:{
    formSubmit:function(e){
      // alert(this.textToTranslate);
      this.$emit("formSubmit",this.textToTranslate,this.language);
      e.preventDefault();
    }
  }
}
</script>

<style>

</style>
