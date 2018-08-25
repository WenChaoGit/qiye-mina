import {
    fly
} from "../utils/http";


export class BookModel{
    getBookList(){
        return fly.get('classic/latest')
    }
}