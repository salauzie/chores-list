angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Chores';
    vm.searchInput = '';
    vm.shows = [
	    {
	    	title: 'Take out trash',
	    	favorite: true
	    },
	    {
	    	title: 'Wash dishes',
	    	favorite: false
	    },
	    {
	    	title: 'Sweep',
	    	favorite: true
	    },
	    {
	    	title: 'Mop',
	    	favorite: true
	    },
	    {
	    	title: 'Wipe down counters',
	    	favorite: false
	    }
    ];
    // vm.orders = [
//     {
//         id: 1,
//         title: 'Year Ascending',
//         key: 'year',
//         reverse: false
//     },
//     {
//         id: 2,
//         title: 'Year Descending',
//         key: 'year',
//         reverse: true
//     },
//     {
//         id: 3,
//         title: 'Title Ascending',
//         key: 'title',
//         reverse: false
//     },
//     {
//         id: 4,
//         title: 'Title Descending',
//         key: 'title',
//         reverse: true
//     }
// ];
// vm.order = vm.orders[0];
vm.new = {};
vm.addShow = function() {
    vm.shows.push(vm.new);
    vm.new = {};
};
});