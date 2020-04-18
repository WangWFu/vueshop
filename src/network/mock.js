const Mock=require('mockjs')
const Random=Mock.Random


const postdata=function(){
    let img=[];
    for(let i=0;i<4;i++){
        let posts={
            img:Random.dataImage('300x100')
        }
        img.push(posts);
    }
    return{
        img:img
    }
}
const listdata=function(){
    let goodslist=[];
    for(let i=0;i<60;i++){
        let goods={
            goodsimg:Random.dataImage('50x100'),
            goodstitle:Random.cparagraph(1, 3)
        }
        goodslist.push(goods);
    }
    return{
        goods:goodslist
    }
}

// Mock.mock('http://mockjs.com/api','get',postdata)
// Mock.mock('/home/goods','get',listdata)