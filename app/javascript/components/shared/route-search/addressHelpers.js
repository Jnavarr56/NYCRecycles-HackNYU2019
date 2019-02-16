export const parseAddressResponse = arr => {

    for(let x = 0; x < arr.length; x++) {

        if (
            arr[x].types.includes('establishment')
            ||
            arr[x].types.includes('point_of_interest')
            ||
            arr[x].types.includes('street_address')
            ||
            arr[x].types.includes('premise')
            
        ) {
            for(let y = 0; y < arr[x].address_components.length; y++) {

                if (
                    arr[x].address_components[y].types.includes('sublocality') 
                    ||
                    arr[x].address_components[y].types.includes('sublocality_level_1')
                    ||
                    arr[x].address_components[y].types.includes('locality')
                    ) {

                    if (
                        arr[x].address_components[y].long_name === 'Brooklyn'
                        ||
                        arr[x].address_components[y].long_name === 'Staten Island'
                        ||
                        arr[x].address_components[y].long_name === 'Bronx'
                        ||
                        arr[x].address_components[y].long_name === 'Manhattan'
                        ||
                        arr[x].address_components[y].long_name === 'Queens'
                        ||
                        arr[x].address_components[y].long_name === 'New York'
                        ) {

                        return true;

                    }

                    else {

                        return false;

                    }

                }

            }

        }

    }

}

export const constructGeoclientParams = obj => {

    const geoClientparams = {};

    for (let x = 0;  x < obj.address_components.length; x++) {

        if (obj.address_components[x].types.includes('street_number')) {

            geoClientparams['house_number'] = Number(obj.address_components[x].long_name);
        
        }

        else if (obj.address_components[x].types.includes('route')) {

            geoClientparams['street'] = obj.address_components[x].long_name;

        }

        else if (
            obj.address_components[x].types.includes('sublocality') 
            && 
            obj.address_components[x].types.includes('sublocality_level_1')
        ) {

            geoClientparams['borough'] = obj.address_components[x].long_name;
        
        }

    }

    return geoClientparams;

}

