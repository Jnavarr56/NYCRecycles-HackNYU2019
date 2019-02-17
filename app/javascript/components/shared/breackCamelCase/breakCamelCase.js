export const formatSanitationData = obj =>  {

    let formattedObj = { stats: {}, schedules: [], address: obj.full_address }, formattedKey, value;

    for (let x in obj) {

        if (x === 'sanitationCollectionSchedulingSectionAndSubsection') {

            formattedKey = 'City Sanitation Section/Subsection';
            value = obj[x];

            formattedObj.stats[x] = { formattedKey: formattedKey, value: value }

        }
        else if (x === 'sanitationDistrict') {

            formattedKey = 'Sanitation District';
            value = obj[x];

            formattedObj.stats[x] = { formattedKey: formattedKey, value: value }

        }
        else if (x === 'sanitationOrganicsCollectionSchedule') {

            formattedKey = 'Organics Collection Schedule';

            if (obj[x].includes('TH')) {

                value = ['TH'];
                let otherDays = obj[x].split('TH');

                while(otherDays.length) {

                    value.push(otherDays.pop());

                }
            }

            else {

                value = obj[x].replace('E', '').split('');

            }
            
            formattedObj.schedules.push({ key: x, formattedKey: formattedKey, value: value, icon: 'fas fa-carrot' });

        }
        else if (x === 'sanitationRecyclingCollectionSchedule') {

            formattedKey = 'Recycling Collection Schedule';

            if (obj[x].includes('TH')) {

                value = ['TH'];
                let otherDays = obj[x].split('TH');
                
                while(otherDays.length) {

                    value.push(otherDays.pop());

                }
            }

            else {

                value = obj[x].replace('E', '').split('');

            }
            

            formattedObj.schedules.push({ key: x, formattedKey: formattedKey, value: value, icon: 'fas fa-recycle' });

        }
        else if (x === 'sanitationRegularCollectionSchedule') {

            formattedKey = 'Regular Trash Collection Schedule';
            value = obj[x].replace('E', '').split('');

            if (obj[x].includes('TH')) {

                value = ['TH'];
                let otherDays = obj[x].split('TH');
                
                while(otherDays.length) {

                    value.push(otherDays.pop());

                }
            }

            else {

                value = obj[x].replace('E', '').split('');

            }

            formattedObj.schedules.push({ key: x, formattedKey: formattedKey, value: value, icon: 'far fa-trash-alt' });

        }
        
    }

    return formattedObj;

};

