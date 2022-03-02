<template>
  <div class="dropdown">
  <button class="dropbtn">{{ $i18n.localeProperties.name }}</button>
  <div class="dropdown-content">
    <nuxt-link v-for="lang in $i18n.locales"
     :key="lang.code"
     :to="`/${lang.code}`">{{ lang.name }}</nuxt-link>
  </div>
</div>
</template>
<style lang="scss" scoped>

.dropbtn {
  margin-right: 32px;
  background-color: #0563af;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  width: 90px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  width: 90px;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #1174c5;}

.lang-input{
  margin-right: 16px;
    select {
    background-color: #0563af;
    color: white;
    padding: 8px;
    border: none;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    margin-left: auto;
      option {
      padding: 30px;
      }
  }
}
</style>