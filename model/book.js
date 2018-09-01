import {
    fly
} from "../utils/http";


export class BookModel{
    getBookList(){
        return fly.get('classic/latest')
    }

    getPrevious(index){
        return fly.get(`classic/${index}/previous`)
    }

    getNext(index){
        return fly.get(`classic/${index}/next`);
    }
}