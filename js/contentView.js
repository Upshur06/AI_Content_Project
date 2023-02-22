console.log('content View js working');

let summaryLink = document.getElementById('summaryLink');
let inputSummaryInfo = document.getElementById('inputSummaryInfo');

let profileLink = document.getElementById('profileLink');
let inputProfileInfo = document.getElementById('inputProfileInfo');

let avatarLink = document.getElementById('avatarLink');
let inputAvatarInfo = document.getElementById('inputAvatarInfo');

let strategyLink = document.getElementById('strategyLink');
let inputStrategyInfo = document.getElementById('inputStrategyInfo');

fetch('js/content.json')
.then((res)=>res.json())
.then((data)=>{
    summaryLink.addEventListener('click', ()=>{
        // console.log('Summary Link Info console.log');
        inputSummaryInfo.innerHTML = `
            ${data[0]['Summary']}
        `;
        // console.log(data[0]['Avatar']);
    })
})
.catch((err)=>console.log(err));


fetch('js/content.json')
.then((res)=>res.json())
.then((data)=>{
    profileLink.addEventListener('click', ()=>{
        // console.log('Profile Link Info console.log');
        inputProfileInfo.innerHTML = `
            ${data[0]['Profile']}
        `;
        // console.log(data[0]['Profile']);
    })
})
.catch((err)=>console.log(err));


fetch('js/content.json')
.then((res)=>res.json())
.then((data)=>{
    avatarLink.addEventListener('click', ()=>{
        // console.log('Avatar Link Info console.log');
        inputAvatarInfo.innerHTML = `
            ${data[0]['Avatar']}
        `;
        // console.log(data[0]['Avatar']);
    })
})
.catch((err)=>console.log(err));


fetch('js/content.json')
.then((res)=>res.json())
.then((data)=>{
    strategyLink.addEventListener('click', ()=>{
        // console.log('Strategy Link Info console.log');
        inputStrategyInfo.innerHTML = `
            ${data[0]['Strategy']}
        `;
        console.log(data[0]['Strategy']);
    })
})
.catch((err)=>console.log(err));
