import { Readable } from 'stream';

export interface Music {
    id : number,
    uri : string,
    name : string,
    time : number,
    className : string,
    loadFunction :() => Readable,
}