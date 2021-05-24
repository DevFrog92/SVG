function banc(members){
  this.members = members;
  this.perform = function(){
    let arr = this.members;
    setTimeout((arr)=>{
      console.log(arr)
      arr.forEach(function(member){member.perform()})
    },1000)
    this.members.forEach(function(member){
      setTimeout(function(){

      })
    })
  }
}

const oral = new banc([
  {name:'ttt',
    perform:function(){console.log(';asdfsdafs')}}
])

oral.perform()