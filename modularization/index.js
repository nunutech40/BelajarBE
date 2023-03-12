const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fightTing = (tiger, wolf) => {
    if(tiger.strength > wolf.strength) {
        tiger.growl()
    } else if (wolf.strength > tiger.strength) {
        wolf.auuu()
    } else {
        console.log('Tiger and Wolf have same strength');
    }
    console.log(`tiger Strength: ${tiger.strength}`);
    console.log(`wolf Strength: ${wolf.strength}`);
}

const tiger = new Tiger();
const wolf = new Wolf();

fightTing(tiger, wolf);

