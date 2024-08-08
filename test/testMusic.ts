import { PassThrough, Readable } from "stream";
import ffmpeg from 'fluent-ffmpeg';

import { Music } from "../../interface/music";
import { createReadStream } from "fs";

export default class TestMusic implements Music{
    id : number;
    uri : string;
    name : string;
    time : number;
    className : string;
    loadFunction :() => Readable;
    
    load = () => {
        const outputStream = new PassThrough();
        let stream = createReadStream(this.uri)
        ffmpeg(stream)
            .audioFilters('volume=1')
            .format('mp3')
            .pipe(outputStream)
            .on('error', (err) => {
                console.error('Output stream error:', err);
                outputStream.destroy(err);
            });
            return outputStream;
    }

    constructor(){
        this.id = 0
        this.uri = ".\test.mp3"
        this.name = "test"
        this.time = 204
        this.className = "TestMusic"
        this.loadFunction = this.load
    }
}