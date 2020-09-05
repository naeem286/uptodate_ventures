// One gaming company found out that they are losing money because some players are using scripts that are playing for 
// players while they are sleeping.
// 
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them
// they discovered that those scripts are using the same sequence of commands all the time.
// 
// Your task is to cleaned up access logs to discover bots. Cleaned up access log of one player would look like an space
// separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least 2 times from
// the cleaned up access log.
// 
// For example we have following access log:
// 
// left right fire jump fire back forward forward jump fire back left left right
// 
// we can see that the sequence "jump fire back" is repeated two times.

exports.botProtection = function(data) {
    //TODO implement me
    var detected = false;
    for (var i = 0; i < data.length - 2; i++) {
        var subStr = [data[i], data[i + 1], data[i + 2]];
        for (var j = i + 3; j < data.length - 2; j++) {
            if (
                subStr[0] === data[j] &&
                subStr[1] === data[j + 1] &&
                subStr[2] === data[j + 2]
            ) {
                detected = true;
                console.log("Detected");
            }
        }
    }
    return detected;
}
