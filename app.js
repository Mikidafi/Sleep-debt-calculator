function getHours(day) {
    const hours = prompt(`How many hours this you get on ${day} ?`) 
    return Number(hours);
}

function calculation() {
    var sum = 0;
    sum += getHours('Monday');
    sum += getHours('Yuesday');
    sum += getHours('Wednesday');
    sum += getHours('Thursday');
    sum += getHours('Friday');
    sum += getHours('Saturday');
    sum += getHours('Sunday');
    return sum;
}

function idealHours() {
    var ideal = prompt("How many hours would you like to sleep a day?")
    return ideal * 7;
}

function finalCalc() {
    var planned = idealHours();
    var slept = calculation();
    if ( planned > slept ) {
        var debt = 0;
        debt = planned - slept;
        console.log(`You slept ${debt} hours less than you planned.`)

    }else if( planned < slept ){
        var debt = 0;
        debt = slept - planned;
        console.log(`You slept ${debt} hours more than you planned.`)
    }else if ( planned === slept ) {
        console.log("You achieved your sleep goal!")
        }else{
            console.log("Erorr")
        }
    console.log(`planned ${planned}`);
    console.log(`slept ${slept}`);
}
finalCalc();