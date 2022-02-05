import createTestCodeGenerator from "./algorithm-site-factory.js";

$(document).ready(function () {
    $("#generate-button").click(function () {
        $("#content").html('');
        createTestCodeGenerator().generateTestCode();
    });
})
