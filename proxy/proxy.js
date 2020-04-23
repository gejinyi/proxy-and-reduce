const data = document.getElementsByClassName('data')[0];

const view = document.getElementsByClassName('view')[0];

const obj = {
    value : 'welcome',
}

view.value = data.innerHTML = obj.value;

const hander = {
    get :(target,propkey) => {
        data.innerHTML = target[propkey];
        return target[propkey];
    },
    set :(target,propkey,value) => {
        if(target[propkey] != value){
            console.log(`监听到${propkey}产生变化，值为${value}`)
            view.value = value;
            data.innerHTML = value;
        }
        return true;
    }
}

const proxy = new Proxy(obj,hander);
view.oninput = function () {
    proxy.data = view.value;
}