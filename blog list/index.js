let posts = [];
const uimaker = () => {

    document.getElementById('mainposts').innerHTML = "";
    posts.map((ele, i) => {
        let main_div = document.createElement('div');
        main_div.setAttribute('id', "main-post");


        let s_title = document.createElement('span');
        s_title.setAttribute('id', 's_title');
        s_title.innerHTML = ele.TITLE;



        let S_LIKE_ICON = document.createElement('span');
        S_LIKE_ICON.innerHTML = '<i class="fa-regular fa-heart"></i>';
        S_LIKE_ICON.addEventListener('click',()=>{
            S_LIKE_ICON.classList.toggle('heart');
            if(S_LIKE_ICON.innerHTML!='<i class="fa-solid fa-heart"></i>'){
                S_LIKE_ICON.innerHTML='<i class="fa-solid fa-heart"></i>';
                alert(`You Like ${ele.TITLE} POST`);
            }
            else{
                S_LIKE_ICON.innerHTML = '<i class="fa-regular fa-heart"></i>';
                alert(`You Unlike ${ele.TITLE} POST`)
            }
        })
        let s_grp = document.createElement('div');
        s_grp.setAttribute('id', 'grp_title');
        s_grp.append(s_title, S_LIKE_ICON);

        let s_img = document.createElement('img');
        s_img.setAttribute('id', 's_img');
        s_img.src = ele.IMG;
        let s_dec = document.createElement('p');
        s_dec.setAttribute('id', 's_dec');
        s_dec.innerHTML = ele.DEC;
        
        let btn_grp=document.createElement('div');
        btn_grp.setAttribute('id', "btn_group");

        

        let b_edit = document.createElement('button')
        b_edit.setAttribute('id', "btn_like");
        b_edit.innerHTML = "EDIT";

        let add_btn = document.createElement('button');
        add_btn.setAttribute('id', "Edit_btn");
        add_btn.innerHTML = "Edit";
        
        let b_del = document.createElement('button')
        b_del.setAttribute('id', "btn_del");
        b_del.innerHTML = "DELETE"
        btn_grp.append(b_edit, b_del)
        main_div.append(s_grp, s_img, s_dec,btn_grp );

        
let Mode="ADD";


        b_del.addEventListener('click', () => {
            posts.splice(i, 1);
            uimaker();
            sum();
        })

        
            b_edit.addEventListener('click', () => {
                document.getElementById('sub-i').classList.add('hidden');
                document.getElementById('title-i').value = ele.TITLE;
                document.getElementById('img-i').value = ele.IMG;
                document.getElementById('desc-i').value = ele.DEC;
                Mode="Edit";
                
                document.querySelector('.card-input').append(add_btn);
                b_edit.innerHTML="Editing"
            
            })
        
        add_btn.addEventListener('click', (e) => {
            
            let TITLE = document.getElementById('title-i').value;
            let IMG = document.getElementById('img-i').value;
            let DEC = document.getElementById('desc-i').value;

            if (TITLE == "") {
                alert("Enter Title First.");
                return;
            }
            else if (IMG == "") {
                alert("Enter Image Url First.");
                return;
            }
            else if (DEC == "") {
                alert("Enter Description First.");
                return;
            }
            var post = {
                TITLE: TITLE,
                IMG: IMG,
                DEC: DEC
            }
            posts.splice(i, 1, post)

            document.getElementById('sub-i').classList.remove('hidden');

            uimaker();
            console.log(Mode);
            Mode="ADD";
            console.log(Mode);
            e.target.remove();
        })


        console.log(posts);
        document.getElementById('mainposts').append(main_div);
    })
    sum();
}
const sum=()=>{
    let n= posts.length;
    document.querySelector('.total_info').innerHTML=`Total Posts Are : ${n}`;
}
const cal = (e) => {
    e.preventDefault();
    let TITLE = document.getElementById('title-i').value;
    let IMG = document.getElementById('img-i').value;
    let DEC = document.getElementById('desc-i').value;

    if (TITLE == "") {
        alert("Enter Title First.");
        return;
    }
    else if (IMG == "") {
        alert("Enter Image Url First.");
        return;
    }
    else if (DEC == "") {
        alert("Enter Description First.");
        return;
    }

    var post = {
        TITLE: TITLE,
        IMG: IMG,
        DEC: DEC
    }

    posts.push(post);
    uimaker();
}
document.querySelector('.main-inputs').addEventListener('submit', cal);

