import { obj, numbers } from "./db.js";
import { creator } from "./ui.js";
let inp = document.querySelector('input')
let btn = document.querySelector('.btn')
let blocks = document.querySelector('.blocks')
creator (blocks, obj, numbers, inp, btn)