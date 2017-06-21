var filterEducations = function(filter, user) { //filter = this.education, user = user.education
    var fl = 0,
        fl2 = 0;
    if (!filter || user.length !== filter.length) {
        return false;
    }
    for (var i = 0; i < filter.length; i++) {
        for (var j = 0; j < user.length; j++) {
            if (filter[i] === user[j]) {
                fl++;
                break;
            }
        }
    }
    // for (var j = 0; j < user.length; j++) {
    //     for (var i = 0; i < filter.length; i++) {
    //         if (filter[i] === user[j]) {
    //             fl2++;
    //             break;
    //         }
    //     }
    // }
    console.log(fl);
    // console.log(fl2);
    console.log(user.length);
    if (fl === user.length) {
        return true
    } else {
        return false
    }
};

var filter = ['Prof', 'Master', 'Student'],
    user = ['Prof', 'Master'],
    filter2 = ['Master', 'Prof', 'Student'],
    user2 = ['Master'],
    filter1 = ['Prof'],
    user1 = ['Prof', 'Master'],
    filter3 = ['Prof', 'Master'],
    user3 = ['Prof', 'Master'];

console.log(filterEducations(filter, user)); //false
console.log(filterEducations(filter2, user2)); //false
console.log(filterEducations(filter1, user1)); //false
console.log(filterEducations(filter3, user3)); //true