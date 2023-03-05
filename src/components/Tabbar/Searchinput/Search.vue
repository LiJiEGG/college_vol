<template>
    <div class="container">
        <div class="search-box">
            <input type="text" class="search-input" :placeholder="searchmessage" v-model="inputtext">
            <div class="search-btn" @click="giveinput(inputtext)">
                <div class="search-ico">
					<svg t="1628753060592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="918" width="200" height="200"><path d="M448 96C253.6 96 96 253.6 96 448s157.6 352 352 352 352-157.6 352-352S642.4 96 448 96z m0 64a288 288 0 1 1 0 576 288 288 0 0 1 0-576z" fill="#2C3E50" p-id="919"></path><path d="M656.512 670.304a32 32 0 0 1 42.144-3.904l3.104 2.56 216.192 203.744a32 32 0 0 1-40.8 49.152l-3.104-2.56-216.192-203.744a32 32 0 0 1-1.344-45.248z" fill="#2C3E50" p-id="920"></path></svg>
				        </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default{
    name: 'Search',
    data(){
      return{
        inputtext: '',
      }
    },
    props:{
      searchmessage: '',
    },
    methods:{
      giveinput(inputtxet){
        this.$emit('inputmessage',inputtxet)
      }
    }
  }
</script>

<style>
  .container {
    position: absolute;
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 50%;*/
    /*transform: translate(-50%, -50%);*/
  }
  .search-box {
    position: relative;
    background: #2c3e50;
    height: 20px;
    border-radius: 40px;
    padding: 10px;
}
  .search-input {
    position: relative;
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 16px;
    line-height: 10px;
    height: 20px;
    width: 0px;
    transition: .5s;
    padding: 0px 40px 0 0;
  }
  .search-box:hover .search-input {
    width: 200px;
  }
  .search-box:hover .search-btn {
    background: white;
  }
  .search-btn {
    position: absolute;
    top: 0px;
    right: 0px;
    text-decoration: none;
    color: #e74c3c;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e74c3c;
    transition: .5s;
    cursor: pointer;
  }
  .search-ico {
    margin: 12px;
    width: 16px;
    height: 16px;
  }
  .icon{
    width: 18px;
    height: 18px;
  }
</style>
