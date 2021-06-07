import { Host } from './host.js';

window.cycles = {
  awake: {
    interval: null
  },
  asleep: {
    interval: null
  },
  alive: {
    interval: null
  }
};
window.speed = 100;

console.log('ehee');

const hosts = [];
const hostList = [{}];

hostList.forEach(host => hosts.push(new Host(host)));
console.log(hosts);