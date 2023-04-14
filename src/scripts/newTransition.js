export default function modal(){
    if(document.querySelector('.formFild').style.display == 'flex'){
        document.querySelector('.formFild').style.display = 'none'
    }else
    document.querySelector('.formFild').style.display = 'flex'
}