var cnadyMachine = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy: function(){
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = cnadyMachine.getCandy;
var count = cnadyMachine.status.count;

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};
const {getCandy, status: {count}} = candyMachine;

var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;