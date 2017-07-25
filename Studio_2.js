/**
 * Created by Mgomez on 7/24/17.
 */
function commaList(item1, item2, item3, useOxfordComma ) {

    if (useOxfordComma) {

        return item1 + ", " + item2 + ", " + "and " + item3;

    }
    else {

        return item1 + ", " + item2 + " " + "and " + item3;

    }

}

commaList('Huey', 'Dewey', 'Louie', true) // 'Huey, Dewey, and Louie'
