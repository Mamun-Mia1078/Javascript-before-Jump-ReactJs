const takeOrder = (customer,callback) => {
    console.log('take a order for ${customer}');
    callback(customer);
};
const processOrder = (customer,callback) => {
    console.log('Processing order for ${customer}');
    setTimeout(() => {
        console.log('cooking completed');
        console.log('order process for ${customer}');
        callback(customer);
    }, 300);
};
const completeOrder = (customer) => {
    console.log('Compelete order for ${customer}');
};
takeOrder("customer1",(customer) => {
    processOrder(customer,(customer) => {
        completeOrder(customer);
    });
});