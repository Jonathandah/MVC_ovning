let assert = require ("assert");
let model = require("./model");
describe("test function list", function(){
    it("ska hantera inmatning av nummer", function(){
        assert.deepStrictEqual(model.list([{name: "jona8", familyname: "dahn5", age: "tjugo",}]), [{name: Jonathan, familyname: dahnberg, age: 20,}] )
    });
    it("inga tomma nycklar får sparas", function(){
        assert.deepStrictEqual(model.list([{name: "", familyname:"", age:"",}]), [{name: "", familyname: "", age: "",}])
    });
});