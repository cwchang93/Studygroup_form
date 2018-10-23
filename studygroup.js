//    var reginsert =/^[A-Q]|^[2-7][A]/
    //note: 必須考量到數字後面的* 因為若不考慮， 1開頭的二位及三位數字(12,113,14)會被1讀取，導致book出現123,142等數字
    // var materialLevelType1 = /^[2-7]A(1|11|21|31|41|51|61|71|81|91|101|111|121|131|141|151|161|171|181|191)(\*)[1-9]{1}/
    var materialLevelType1 = /^[2-7]A(1|11|21|31|41|51|61|71|81|91|101|111|121|131|141|151|161|171|181|191)(\*)[1-9]/
    var materialLevelType2 = /^[A-Q](1|11|21|31|41|51|61|71|81|91|101|111|121|131|141|151|161|171|181|191)(\*)[1-9]/
window.onload = function() {
new Vue({
      el: '#app',
      data: {
        errors:[],
        mytodo:'',
//        items: [],
        other:[],
        fullnotation:[],  // replace items
//        regarray:[],
        bookArray:[],
      },
      methods : {
        deleteRow(index) {
    //      this.items.splice(index,1)
      this.fullnotation.splice(index,1);
      },
        handleClick(){
         if(this.mytodo != '') { 
          this.items.unshift(this.mytodo);
       //   console.log('handleClick: ' + this.mytodo);
          } 
        },
/*
        regexp(){
         // console.log('regexp:' + this.mytodo)
         if(reginsert.test(this.mytodo)){ 
             this.regarray.unshift('LV: format is Correct');
         }else {
             this.regarray.unshift('LV: incorrect')
         }
        }
*/
        check(){
          if(materialLevelType1.test(this.mytodo)) {
              var startSheet = (this.mytodo).substring(2, this.mytodo.indexOf('*'));
        //      var endSheet = startSheet -1 + 10;   JS會把它當成字串-1 +10 
        //      console.log(typeof(startSheet));
              var endSheet = Number(startSheet) + Number(-1+10)
              var book = startSheet + '-' + endSheet;
              var materiallevel = (this.mytodo).substring(0,2);
              console.log('materiallevel: '+materiallevel);
        //      console.log(this.mytodo.indexOf('*'));
              var repetition = (this.mytodo).substring(this.mytodo.indexOf('*')+1);
//              var repetition = (this.mydoto).substring(5);
                console.log('repetition: '+ repetition);
            
       //       console.log('No1 Type--> StartSheet: ' + startSheet + ' EndSheet: ' + endSheet);
              console.log('Book: ' + book);
              this.bookArray.unshift(book);
              this.fullnotation.unshift(materiallevel+book+'*'+repetition)        
      //        console.log(book);
      //        console.log('fullnotation: '+  )
          } else if(materialLevelType2.test(this.mytodo)) {
              var startSheet = (this.mytodo).substring(1, this.mytodo.indexOf('*'));
              var endSheet = Number(startSheet) + Number(-1+10)
              var book = startSheet + '-' + endSheet;
              var materiallevel = (this.mytodo).substring(0,1);
              console.log('materiallevel: '+materiallevel);
        //      console.log(this.mytodo.indexOf('*'));
              var repetition = (this.mytodo).substring(this.mytodo.indexOf('*')+1);
//              var repetition = (this.mydoto).substring(5);
                console.log('repetition: '+ repetition);
            
       //       console.log('No1 Type--> StartSheet: ' + startSheet + ' EndSheet: ' + endSheet);
              console.log('Book: ' + book);
              this.bookArray.unshift(book);
              this.fullnotation.unshift(materiallevel+book+'*'+repetition) 
         //     console.log('No2 Type--> StartSheet: ' + startSheet + ' EndSheet: ' + endSheet);
              console.log('Book: ' + book)
          } 


        }

      },  //method
    });
}