const ui=()=>{
    

    let qty = document.createElement('div');
    qty.setAttribute('id', 'qty')
    qty.setAttribute('class', 'qty')

    let m_btn = document.createElement('button');
    m_btn.innerHTML = `<i class="bi bi-dash"></i>`
    m_btn.setAttribute('class', 'qty_m');
    m_btn.setAttribute('id', 'qty_m');
    m_btn.addEventListener('click', () => {

        alert(i)
        ele.qty--;
        console.log(ele.qty);
    })

    let s_div = document.createElement('div');
    s_div.innerHTML = "1";
    s_div.setAttribute('class', 'qty_s')
    s_div.setAttribute('id', 'qty_s')

    let p_btn = document.createElement('button');
    p_btn.innerHTML = `<i class="bi bi-plus-lg"></i>`
    p_btn.setAttribute('class', 'qty_a')

    let checkout_btn=document.createElement('button');
    checkout_btn.innerHTML=`Add To Cart`
    checkout_btn.setAttribute('id','checkout_btn');

    qty.append(m_btn,s_div,p_btn);
    document.querySelector('.main-qty').append(qty)
    document.querySelector('.main_chek_btn').append(checkout_btn)
}
ui()


