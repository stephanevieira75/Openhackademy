function getRandomArbitrary(min, max)
{
    result = Math.random() * (max - min) + min;
    return Math.round(result);
}

function askNumber(rdm){
// Ask number to user
input = parseInt(window.prompt('nbr:'));
while(true)
{
    if (input < 1 || input > 10)
        input = parseInt(window.prompt('Only between 1 & 10:'));
    else
    {
        console.log('input' + input + '\n' + 'rdm:' + rdm);
        if (input > rdm)
        {
            alert('En dessous');
            askNumber(rdm);
        }
        else if (input < rdm){
            alert('Au-dessus');
            askNumber(rdm);
        }
        else
            console.log('Félicitation, vous avez trouvé le bon chiffre');
        break;
    }
}
}

min = 1;
max = 10;
rdm = getRandomArbitrary(min, max);

askNumber(rdm);