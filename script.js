// Code goes here

var app = angular.module('myApp', []);

app.directive('test',function(){
  return{
    link: function(scope, el, attr) {
      
      angular.element(el[0].querySelector('.rightside > .fa')).addClass('fa-angle-up');
       
      el.on('hide.bs.collapse', function(ev){
        angular.element(el[0].querySelector('.rightside > .fa'))
          .removeClass('fa-angle-up')
          .addClass('fa-angle-down');
      });
      
      el.on('show.bs.collapse', function(ev){
        angular.element(el[0].querySelector('.rightside > .fa'))
          .removeClass('fa-angle-down')
          .addClass('fa-angle-up'); 
      });
    }
  }
});