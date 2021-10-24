function show_hide(){
    if(document.getElementById('si').style.display == 'none')
        document.getElementById('si').style.display = 'block';
    else 
        document.getElementById('si').style.display = 'none';
}


let novels_img = ['imgs/lost-friends.jpg' , 'imgs/lost-wife.jpg' , 'imgs/poppy-wife.jpg' ];
let novels_desc = ['NEW YORK TIMES BESTSELLER • From the bestselling author of  We Were Yours comes ...',
                    'A rapturous novel of star-crossed love in a time of war—from the international ... ',
                    'In the tradition of Jennifer Robson and Hazel Gaynor, this unforgettable debut ...'];
let novels_author = ['Lisa', 'Alyson', 'Caroline'];

for(var i = 0 ; i < novels_author.length ; i++)
{
    let nov = `<div class="novel">
    <img class="nvmg" src="${novels_img[i]}" alt="">
    <h2>${novels_author[i]}</h2>
    <p>${novels_desc[i]}</p>
    <div ><img class='sm' src="imgs/like.png"></div>
    <button onclick="del_novel(${i})"> Delete</button>
    </div>`;

    document.getElementById('novels').innerHTML += nov;
}


function printHi(){
    let email = document.getElementById('email').value;
    document.getElementById('hi').innerHTML = `Hi, Your email is ${email}`;
}


//// Add new novel

function add_novel(){ //declare the function
    let author = document.getElementById('author').value; //get the value of author that user entered
    let description = document.getElementById('desc').value; // get the value of description that user entered
    let img = document.getElementById('image').value; // get the image name
    novels_author.push(author);
    console.log(img);
    novels_desc.push(description);
    novels_img.push(img);

    let nov = `<div class="novel">
    <img class="nvmg" src="${img}" alt="">
    <h2>${author}</h2>
    <p>${description}</p>
    <div ><img class='sm' src="imgs/like.png"></div>
    <button onclick="del_novel(${novels_author[novels_author.length-1]})"> Delete</button>
    </div>`;
    document.getElementById('novels').innerHTML += nov;
}






