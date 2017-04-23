module.exports = ["exposeId","conversations","category","$state",function(exposeId,conversations,category,$state){
  console.log("conversations",exposeId,conversations,category);
  this.conversations = conversations;
  this.exposeId = exposeId;
  this.reload = function(){
    $state.reload("inbox.category")
  }
}];