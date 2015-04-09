angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Chores';
    vm.searchInput = '';
    vm.chores = [
	    {
	    	title: 'Take out trash',
	    	day: 'Sunday',
	    	name: 'Jenna',
	    	finished: true
	    },
	    {
	    	title: 'Wash dishes',
	    	day: 'as needed',
	    	name: 'Lindsay',
	    	finished: false
	    },
	    {
	    	title: 'Sweep',
	    	day: 'Monday, Wednesday, Friday',
	    	name: 'Steph',
	    	finished: true
	    },
	    {
	    	title: 'Mop',
	    	day: 'Monday',
	    	name: 'Steph',
	    	finished: true
	    },
	    {
	    	title: 'Wipe down counters',
	    	day: 'After cooking',
	    	name: 'All',
	    	finished: false
	    }
    ];
    // vm.orders = [
    // {
    //     id: 1,
    //     title: 'Day of the Week',
    //     key: 'day',
    //     reverse: false
    // },
//     {
//         id: 2,
//         title: 'Person',
//         key: 'Name',
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
vm.addChore = function() {
    vm.chores.push(vm.new);
    vm.new = {};
};
vm.remove = function(chore) {
	var index = vm.chores.indexOf(chore);
	vm.chores.splice(index, 1);
}
});
