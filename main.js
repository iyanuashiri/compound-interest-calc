new Vue({
    el: '#app',
    data: {
        balance: 0,
        amount: 0,
        rate: 0,
        duration: 0,
        savings: 0,
        interests: 0,

    },
    methods: {
        calculateBalance: function (e) {
            e.preventDefault();
            const number_of_compounds = 12;
            let percentage = this.rate / 100;
            let base = (1 + percentage/number_of_compounds);
            let exponent = number_of_compounds * this.duration;
            let rn = percentage/number_of_compounds;
            let result = this.amount * ((Math.pow(base, exponent) - 1) / rn);
            this.balance = result.toLocaleString();
            let savings = this.calculateSavings();
            this.calculateInterest(savings, result)
        },
        calculateSavings: function () {
            let  result = this.amount * 12 * this.duration;
            this.savings = result.toLocaleString();
            return result
        },
        calculateInterest: function (total_savings, balance) {
            let result = balance - total_savings;
            this.interests = result.toLocaleString();
        },
    },

});