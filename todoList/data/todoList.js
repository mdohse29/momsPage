import { appendFile } from 'fs';
function addItem(item){
    let data = item;
    appendFile('./db/thelist.txt', data, (err) => {
        if(err){
            console.log(err);
        }
    });
}