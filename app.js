const app = new Vue({
    el: "#app",
    data: {
        counter: 5,
        name: '',
        ratePerHour: 10,
        hours: 0,
        message: '',
        showPassword: false
    },
    computed: {
        calculatedSalary(){
            return this.ratePerHour * this.hours;
        },
        messageToUpperCase(){
            return this.message.toUpperCase();
        }
    },
    methods: {
        decreaseValue(){
            if(this.counter > 1){
                this.counter--;
            }        
        },
        increaseValue(){
            if(this.counter < 9){
                this.counter++;
            } else{
                this.counter = 1;
            }     
        } 
    }
});