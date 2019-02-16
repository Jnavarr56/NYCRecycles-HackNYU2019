export const resultsDeDupe = arr => {

    let record = {}, newArr = []; 

    arr.forEach(x => {

        if (
            !record[x.formatted_address] 
            && 
                (
                    x.types.includes('establishment')
                    ||
                    x.types.includes('point_of_interest')
                    ||
                    x.types.includes('street_address')
                    ||
                    x.types.includes('premise')
                )
            ) {

            newArr.push(x);

            record[x.formatted_address] = true;

        }

    });

    return newArr;

}

