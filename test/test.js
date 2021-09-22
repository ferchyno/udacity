const hex2ascii = require('hex2ascii');
const MAX_VERIFICATION_TIME = 300;

class Block
{
    constructor(data)
    {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousBlockHash = "";
    }

    validate() {}
}

class test
{
    constructor() {}

    parse_unparse()
    {
        let data = { hash: '', height: 0, body: 'Test', time: 0, previousBlockHash: '' };
        let body = Buffer.from(JSON.stringify(data)).toString('hex');

        body = hex2ascii(body);
        body = JSON.parse(body);
        console.log(body);
    }

    array_length()
    {
        let chain = [];
        console.log(chain.length);
    }

    string_lenght()
    {
        // let s_block = "7b2268617368223a22222c22686569676874223a302c22626f6479223a2254657374222c2274696d65223a302c2270726576696f7573426c6f636b48617368223a22227d";
        let s_block = "";
        console.log(s_block.length);
    }

    assignment()
    {
        let address = '1234';
        let a_message = [];
        a_message.push(address);
        a_message.push(new Date(1630873484000).getTime().toString().slice(0,-3));
        a_message.push("starRegistry");
        let s_message = a_message.join(':');
        // let s_message = [address, new Date().getTime().toString().slice(0,-3), "starRegistry"].join(':');
        console.log(s_message);

        let currentTime = parseInt(new Date().getTime().toString().slice(0, -3));
        let star_time = parseInt(a_message[1]);
        let time_diff = currentTime - star_time ;
        console.log(currentTime);
        console.log(star_time);
        console.log(time_diff);
        if (currentTime - star_time < MAX_VERIFICATION_TIME) {
            console.log("In time!!!");
        } else {
            console.log("Too much time diff");
        }
    }

    check_time()
    {
        let currentTime = parseInt(new Date().getTime().toString().slice(0, -3));
        let star_time = parseInt(new Date(1630873484000).getTime().toString().slice(0,-3));
        let result = Math.floor((currentTime - star_time) / 60)
        // let result = (currentTime - star_time) / 60;
        console.log(currentTime);
        console.log(star_time);
        console.log(result);
    }
}

let test_obj = new  test();
// test_obj.parse_unparse();
// test_obj.array_length();
// test_obj.string_lenght();
// test_obj.assignment();
test_obj.check_time();

