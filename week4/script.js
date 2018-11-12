"use strict"

class Timer {
    constructor() {
        this.flag = 0;
        this.timer;
        this.view = document.getElementById("timer");

        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.ms = 0;

        this.increment = this.increment.bind(this);
        this.start_pause = this.start_pause.bind(this);
        this.reset = this.reset.bind(this);
        this.pad = this.pad.bind(this);
    }

    pad(n, width) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    }

    increment() {
        this.ms = this.ms + 2;

        if (this.ms > 99) {
            this.s = this.s + 1;
            this.ms = 0;
        }

        if (this.s > 59) {
            this.m = this.m + 1;
            this.s = 0;
        }

        if (this.m > 59) {
            this.h = this.h + 1;
            this.m = 0;
        }

        let format_h = this.pad(this.h, 2);
        let format_m = this.pad(this.m, 2);
        let format_s = this.pad(this.s, 2);
        let format_ms = this.pad(this.ms, 2);

        this.view.innerHTML = "" + format_h + ":" + format_m + ":" + format_s + "." + format_ms;
    }

    start_pause() {
        if (this.flag == 0) {
            this.timer = setInterval(this.increment, 20);
            console.log(this.view.innerHTML);
            this.flag = 1;
        } 
        
        else {
            clearInterval(this.timer);
            this.flag = 0;
        }
    }


    reset() {
        this.start_pause();
        let timer = document.getElementById("timer");
        timer.innerHTML = "00:00:00.00";
        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.ms = 0;

    }



}

let t = new Timer();
let pausebtn = document.getElementById("pause-btn");
let resetbtn = document.getElementById("reset-btn");

pausebtn.addEventListener('click', t.start_pause);
resetbtn.addEventListener('click', t.reset);