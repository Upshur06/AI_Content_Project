console.log('form layout');
let formContainer = document.getElementById('formContainer');
let practdiv = document.getElementById('practdiv');

let formBussinessInputContainer = document.getElementById('formBussinessInputContainer');
let formCompanyDetailInputContainer = document.getElementById('formCompanyDetailInputContainer');
let formCompanyInfoInputContainer = document.getElementById('formCompanyInfoInputContainer');
let formGenderInputContainer = document.getElementById('formGenderInputContainer');
let formGeoInputContainer = document.getElementById('formGeoInputContainer');
let formAgeInputContainer = document.getElementById('formAgeInputContainer');
let formIncomeInputContainer = document.getElementById('formIncomeInputContainer');
let formBrandsInputContainer = document.getElementById('formBrandsInputContainer');
let formfirstDSInputContainer = document.getElementById('formfirstDSInputContainer');
let formSecondDSInputContainer = document.getElementById('formSecondDSInputContainer');
let formDSToneInputContainer = document.getElementById('formDSToneInputContainer');
let formMarketingInputContainer = document.getElementById('formMarketingInputContainer');

let formInputDiv = document.getElementById('formInputDiv');


function companyFormPrevFunc(event){
    event.preventDefault();
    let call = fetch('/form/1');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function businessFormFunc(event){
    event.preventDefault();
    let companyName = formBussinessInputContainer['company-name'].value;
        companyProject = formBussinessInputContainer['project-contact'].value;
        companyWeb = formBussinessInputContainer['company-website'].value;
        companyAddress = formBussinessInputContainer['company-address'].value;
        companyCity = formBussinessInputContainer['company-city'].value;
        companyState = formBussinessInputContainer['company-state'].value;
        companyZip = formBussinessInputContainer['company-zip'].value;
        companyPhone = formBussinessInputContainer['company-phone'].value;

    // dataArr.push(companyName, companyProject, companyWeb, companyAddress, companyCity, companyState, companyZip, companyPhone);

    // console.log(dataArr);

    let call = fetch('/form/2');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormFunc(event){
    event.preventDefault();
    // let companyBuyReason = formCompanyDetailInputContainer['company-buy-reason'].value;
    //     companyCar = formCompanyDetailInputContainer['company-car'].value;
    //     companyUnique = formCompanyDetailInputContainer['company-unique'].value;
    //     companyRegion = formCompanyDetailInputContainer['company-region'].value;


    // dataArr.push(companyBuyReason, companyCar, companyUnique, companyRegion);

    // console.log(dataArr);

    let call = fetch('/form/3');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}


function companyFormInfoFunc(event){
    event.preventDefault();    
    // let companyServiceType = formCompanyInfoInputContainer['company-service-type'].value;
    //     companyTarget = formCompanyInfoInputContainer['company-target'].value;
    //     companyLargestClient = formCompanyInfoInputContainer['company-largest-client'].value;
    //     companyMostProfitable = formCompanyInfoInputContainer['company-most-profitable'].value;

    // dataArr.push(companyServiceType, companyTarget, companyLargestClient, companyMostProfitable);

    // console.log(dataArr);

    let call = fetch('/form/4');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormGenderFunc(event){
    event.preventDefault();    
    // let companyMaleCheckbox = formGenderInputContainer['male-checkbox'].checked;
    //     companyFemaleCheckbox = formGenderInputContainer['female-checkbox'].checked;

    // dataArr.push(companyMaleCheckbox, companyFemaleCheckbox);

    // console.log(dataArr);

    let call = fetch('/form/5');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormGeoFunc(event){
    event.preventDefault();    
    // let companyLocationUrban = formGeoInputContainer['location-urban'].checked;
    //     companyLocationSuburban = formGeoInputContainer['location-suburban'].checked;
    //     companyLocationRural = formGeoInputContainer['location-rural'].checked;

    // dataArr.push(companyLocationUrban, companyLocationSuburban, companyLocationRural);

    // console.log(dataArr);

    let call = fetch('/form/6');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormAgeRangeFunc(event){
    event.preventDefault();    
    // let companyAgeRangeUnder12 = formAgeInputContainer['age-under-12'].checked;
    //     companyAgeRange13To19 = formAgeInputContainer['age-13-19'].checked;
    //     companyAgeRange20To25 = formAgeInputContainer['age-20-25'].checked;
    //     companyAgeRange26To31 = formAgeInputContainer['age-26-31'].checked;
    //     companyAgeRange32To39 = formAgeInputContainer['age-32-39'].checked;
    //     companyAgeRange40To50 = formAgeInputContainer['age-40-50'].checked;
    //     companyAgeRange51To60 = formAgeInputContainer['age-51-60'].checked;
    //     companyAgeRange60To65 = formAgeInputContainer['age-60-65'].checked;
    //     companyAgeRange65Plus = formAgeInputContainer['age-65-plus'].checked;

    // dataArr.push(companyAgeRangeUnder12, companyAgeRange13To19, companyAgeRange20To25, companyAgeRange26To31, companyAgeRange32To39, companyAgeRange40To50, companyAgeRange51To60, companyAgeRange60To65, companyAgeRange65Plus);

    // console.log(dataArr);

    let call = fetch('/form/7');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormIncomeRangeFunc(event){
    event.preventDefault();    
    // let companyIndividualIncome = formIncomeInputContainer['individual-income'].value;
    //     companyHouseholdIncome = formIncomeInputContainer['household-income'].value;

    // dataArr.push(companyIndividualIncome, companyHouseholdIncome);

    // console.log(dataArr);

    let call = fetch('/form/8');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormBrandFunc(event){
    event.preventDefault();    
    // let companyBrandList = formBrandsInputContainer['brand-list'].value;
    //     companyBrandListWhyLike = formBrandsInputContainer['brand-list-why-like'].value;

    // dataArr.push(companyBrandList, companyBrandListWhyLike);

    // console.log(dataArr);
    
    let call = fetch('/form/9');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormFirstDSFunc(event){
    event.preventDefault();    
    // let companyCorperate = formfirstDSInputContainer['style-corperate'].checked;
    //     companyModern = formfirstDSInputContainer['style-modern'].checked;
    //     companyClassic = formfirstDSInputContainer['style-classic'].checked;
    //     companySimple = formfirstDSInputContainer['style-simple'].checked;
    //     companyIndustrial = formfirstDSInputContainer['style-industrial'].checked;

    // dataArr.push(companyCorperate, companyModern, companyClassic, companySimple, companyIndustrial);

    // console.log(dataArr);

    let call = fetch('/form/10');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormSecondDSFunc(event){
    event.preventDefault();    
    // let companyVibrant = formSecondDSInputContainer['secondary-vibrant'].checked;
    //     companyElegant = formSecondDSInputContainer['secondary-elegant'].checked;
    //     companyMuted = formSecondDSInputContainer['secondary-muted'].checked;
    //     companyNatural = formSecondDSInputContainer['secondary-natural'].checked;
    //     companyClean = formSecondDSInputContainer['secondary-clean'].checked;

    // dataArr.push(companyVibrant, companyElegant, companyMuted, companyNatural, companyClean);

    // console.log(dataArr);

    let call = fetch('/form/11');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormDSToneFunc(event){
    event.preventDefault();    
    // let companyInformative = formDSToneInputContainer['tone-informative'].checked;
    //     companyDirect = formDSToneInputContainer['tone-direct'].checked;
    //     companyEmpathetic = formDSToneInputContainer['tone-empathetic'].checked;
    //     companyHelpful = formDSToneInputContainer['tone-helpful'].checked;
    //     companyClear = formDSToneInputContainer['tone-clear'].checked;
    //     companyInclusive = formDSToneInputContainer['tone-inclusive'].checked;
    //     companyAuthoritative = formDSToneInputContainer['tone-authoritative'].checked;
    //     companyConcise = formDSToneInputContainer['tone-concise'].checked;
    //     companyWarm = formDSToneInputContainer['tone-warm'].checked;
    //     companyFriendly = formDSToneInputContainer['tone-friendly'].checked;
    //     companyPersuasive = formDSToneInputContainer['tone-persuasive'].checked;
    //     companyWitty = formDSToneInputContainer['tone-witty'].checked;

    // dataArr.push(companyInformative, companyDirect, companyEmpathetic, companyHelpful, companyClear, companyInclusive, companyAuthoritative, companyConcise, companyWarm, companyFriendly, companyPersuasive, companyWitty);

    // console.log(dataArr);

    let call = fetch('/form/12');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
}

function companyFormMarketingFunc(event){
    event.preventDefault();
    
    // let companyObjectiveBA = formMarketingInputContainer['objective-brand-awareness'].checked;
    //     companyObjectiveLG = formMarketingInputContainer['objective-lead-generation'].checked;
    //     companyObjectiveDS = formMarketingInputContainer['objective-direct-sales'].checked;

    // dataArr.push(companyObjectiveBA, companyObjectiveLG, companyObjectiveDS);

    // console.log(dataArr);
    
}


window.onload = () => {
    console.log("page is loaded");

    let call = fetch('/form/1');

    call.then(response => {
        console.log(response);
        return response.text();
    }).then(result => {
        formContainer.innerHTML = result;
        formContainer
        console.log('working');
    }).catch(err => {
        console.log("Something broke.");

        return false;
    });
};


