<template>
    <div class="search">
        <searchForm></searchForm>
        <searchResults></searchResults>
    </div>
  </template>
  
  <script>
    import SearchForm from './SearchForm'
    import SearchResults from './SearchResults'
    export default {
      name: 'SearchForm',
      components: {
        searchForm: SearchForm,
        searchResults: SearchResults
      },
      data () {
        return {
          
        }
      },
      computed: {
  
      },
      methods: {
  
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  