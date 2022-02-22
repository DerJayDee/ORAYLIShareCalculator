function CreateRow(additional, transfer, total){
    let tr = $("<tr/>");
    
    let additionalTh = $("<th/>", {
        "scope": "row",
        text: additional
    });
    tr.append(additionalTh);

    let transferTd = $("<td/>", {
        "scope": "row",
        text: transfer
    });
    tr.append(transferTd);

    let totalTd = $("<td/>", {
        "scope": "row",
        text: total
    });
    tr.append(totalTd);

    return tr;

}
function ApplySubmitButton(){
    let button = $("#form-submit");
    button.unbind().click(function () {
        let MINIMUM_AMOUNT = 640;
        let ORAYLIS_AMOUNT = 360;
        let bruttoString = $("#brutto").val();
        console.log("bruttoString: " + bruttoString)
        let fivePercent = bruttoString * 0.05;
        let maxAddition = fivePercent - MINIMUM_AMOUNT;
        let maxAdditionRounded = Math.round(maxAddition / 100) * 100;
        console.log("maxAdditionRounded:" + maxAdditionRounded)

        let tableBody = $("#table-body")
        tableBody.empty();

        for (let i = 0; i < maxAdditionRounded / 100; i++){
            let additional = i * 100;
            let transfer = additional + MINIMUM_AMOUNT;
            let total = transfer + ORAYLIS_AMOUNT;

            tableBody.append(CreateRow(additional, transfer, total));
        }

        $("#table").show();
    });
}

function Init(){
    ApplySubmitButton();
}

Init();