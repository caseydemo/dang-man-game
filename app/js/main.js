new Vue({
	el:'#vue-app',
	data: {
		word: '',
		bgcolor: 'gray',
		hiddenWord: 'cheese',
		blankSpaces: 0

	},
	methods: {
		checkLetter:function(letter){
			
				
		},
		reset:function(){
			alert('gotcha');
			this.word = '';
		},
	},
	mounted: function(){
		blankSpaces = this.hiddenWord.length;
		for(var i=0; i<blankSpaces; i++){
			this.word += " __ ";
		}
	}
});


