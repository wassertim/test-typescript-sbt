class TestClass {
    public message(): void {
        if (window.console) {
            console.log("Welcome to your Play application's JavaScript!");
        }
    }
}

var test = new TestClass();
test.message();

