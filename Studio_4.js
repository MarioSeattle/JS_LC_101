/**
 * Created by Mgomez on 7/24/17.
 */
function isPrime(num) {
    for (var i = 2; i < num / 2 +1; i++) {
        if ( num % i == 0)
            return false
    }
    return true
}
isPrime(1)  // true
isPrime(13) // true
isPrime(2)  // true
isPrime(14) // false
isPrime(4)  // false
isPrime(22) // false
