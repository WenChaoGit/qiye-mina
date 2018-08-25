import {
    fly
} from "../utils/http";


export class LikeModel {
    like({behavior,artID,category}) {
        let url = behavior == 'like' ? 'like' : 'like/cancel'
        return fly.post(url, {
            art_id: artID,
            type: category
        })
    }
}
