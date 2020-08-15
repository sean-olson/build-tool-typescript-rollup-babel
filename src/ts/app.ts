import {ZooKeeper} from './controllers/zoo-keeper';

document.addEventListener('DOMContentLoaded', ()=> {
    const zoo_keeper = new ZooKeeper();
    zoo_keeper.introduceAnimal('lion', 'Clarence', 'ROARRR');
});