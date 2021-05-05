$('#button').click(function calculate(a1, a2, a3, a4, a5) {
    a1 = $("#1a");
    a2 = $("#2a");
    a3 = $("#3a");
    a4 = $("#4a");
    a5 = $("#5a");
    var result = (a1 + a2 + a3 + a4 + a5) / 5;
    alert(result);
});


/*
function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
*/