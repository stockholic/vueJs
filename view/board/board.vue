<template>
  <div>
    <component v-bind:is="selectedComponent" 
      :page="page" 
      :seqNo="seqNo"
      @goView="view"
      @goList="list"
    >
    </component>
    
  </div>
</template>

<script>
import BoardList from "./BoardList"
import BoardView from "./BoardView"

  export default {
		data: function() {
			return {
        selectedComponent: 'BoardList'
        ,page : 1
        ,seqNo : 0
			}
		},
		components: {
      BoardList,
      BoardView
    },
    methods: {
      view(seqNo){
        this.selectedComponent = "BoardView";
        this.seqNo = seqNo;
      },
      list(){
        this.selectedComponent = "BoardList";
      }
    },
  }
</script>
