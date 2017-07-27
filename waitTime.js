/**
 * Created by Mgomez on 7/26/17.
 */

var waitTime = parseInt("30");

if (waitTime > 20) {

    waitTime = 'a lot of time';

} else if (waitTime < 20) {

    waitTime = 'we can wait';

}
else {

    waitTime = "we can wait 20 min";

}

console.log(waitTime);