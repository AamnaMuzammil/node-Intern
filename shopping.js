customer_name="Amna"
total_price=2200;
calculate_bill=function(total_price){
    if(total_price>=5000){
        console.log("You have to pay 20% tax");
        total_price=total_price-(total_price*(20/100));
        console.log("Total price after discount is: ",total_price);
    }
    else if(total_price>3000){
        console.log("You have to pay 10% tax");
        total_price=total_price-(total_price*(10/100));
        console.log("Total price after discount is: ",total_price);
    }
    else{
        console.log("You have to no discount");
        console.log("Total price is: ",total_price);
    }
}
calculate_bill(total_price);