const total = 0;
const index = 0;
const arr = [65, 44, 12, 4];
function reducer (total,arr,index) {
    if(index < arr.length){
            total+=arr[index];
            index++;
            reducer (total,arr,index);
        }
    else{
        arr.length = 0;
        arr.push(total);
    }
};
reducer (total,arr,index);