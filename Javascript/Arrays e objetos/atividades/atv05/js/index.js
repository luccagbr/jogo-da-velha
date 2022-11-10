function verifica_arr(arr, arr1) {
    if(arr.length <= 5) {
        console.log("A array 1 possui poucos valores..");
    } else if(arr.length > 5) {
        console.log("A array 1 possui muitos valores..");
    } 
    
    if(arr1.length <= 5) {
        console.log("A array 2 possui poucos valores..");
    } else if(arr1.length > 5) {
        console.log("A array 2 possui muitos valores..");
    }
}

let arr = ["Lucca", "Luciana", "Cristino", "Miguel", "Viviane"];

let arr1 = [12, 25, 500, 200];

verifica_arr(arr, arr1);

JSON.s