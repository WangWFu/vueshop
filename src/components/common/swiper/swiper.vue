<template>
  <div id="hy-swiper">
      <div class="swiper" @touchstart="touchstart" @touchmove="touchmove" 
      @touchend="touchend">
      <slot></slot>
      </div>
      <slot name="indicator"></slot>
      <div class="indicator">
          <slot name="indicator" v-if="showIndicator && slideCount>1">
              <div v-for="(item,index) in slideCount" class="indi-item"
              :class="{active:index===currentIndex-1}" :key="index"></div>
          </slot>
      </div>
  </div>
</template>

<script>
export default {
  name:'swiper',
  props:{
      interval:{
          type:Number,
          default:3000
      },
      animDuration:{
          type:Number,
          default:300
      },
      moveRatio:{
          type:Number,
          default:0.25
      },
      showIndicator:{
          type:Boolean,
          default:true
      }
  },
  data:function(){
      return{
          slideCount:0, //元素个数
          totalwidth:0,//swiper的宽度
          swiperStyle:{},//swiper样式
          currentIndex:1,//当前的index
          scrolling:false,//是否正在滚动
      }
  },
  mounted:function(){
      //操作dom,
      setTimeout(()=>{
          this.handleDom();
          //开启定时器
          this.startTime();
      },100)
  },
  methods:{
      //定时器操作
      startTime:function(){
          this.playTimer=window.setInterval(()=>{
              this.currentIndex++;
              this.scrollContent(-this.currentIndex*this.totalwidth);
          },this.interval)
      },
      stopTimer:function(){
          window.clearInterval(this.playTimer);
      },
      //滚动到正确的位置
      scrollContent:function(currentPosition){
         //设置正在滚动
         this.scrolling=true;

         //开始滚动动画
         this.swiperStyle.transition='transform'+this.animDuration+'ms';
         this.setTransform(currentPosition);

         //判断滚动到的位置
         this.checkPosition();
         //滚动完成

         this.scrolling=false;
      },

      //校验正确的位置
      checkPosition:function(){
          window.setTimeout(()=>{
              this.swiperStyle.transition='0ms';
              if(this.currentIndex >= this.slideCount+1){
                  this.currentIndex = 1;
                  this.setTransform(-this.currentIndex*this.totalwidth);
              }else if(this.currentIndex <= 0){
                  this.currentIndex=this.slideCount;
                  this.setTransform(-this.currentIndex*this.totalwidth);
              }
              //移动结束后的回调
              this.$emit('transitionEnd',this.currentIndex-1);
          },this.animDuration)
      },
      //设置滚动的位置

      setTransform:function(position){
          this.swiperStyle.transform=`translate3d(${position}px,0,0)`;
          this.swiperStyle['-webkit-transform']=`translate3d(${position}px),0,0`;
          this.swiperStyle['-ms-transform']=`translate3d(${position}px),0,0`;
      },
      //操作DOM，在DOM前后添加slide
      handleDom:function(){
          let swiperEl=document.querySelector('.swiper');
          let slideEls=document.getElementsByClassName('slide');

          //保存个数

          this.slideCount=slideEls.length;

          //如果大于1个，前后分别添加一个slide
          if(this.slideCount>1){
              let cloneFirst=slideEls[0].cloneNode(true);
              let cloneLast=slideEls[this.slideCount-1].cloneNode(true);
              swiperEl.insertBefore(cloneLast,slideEls[0]);
              swiperEl.appendChild(cloneFirst);
              this.totalwidth=swiperEl.offsetWidth;
              this.swiperStyle=swiperEl.style;
          }
          this.setTransform(-this.totalwidth);
      },
      //拖动事件处理

      touchstart:function(e){
          //如果正在滚动，不能拖动
          if(this.scrolling) return;
          //停止定时器
          this.stopTimer();
          //保存开始滚动的位置
          this.startx=e.touches[0].pageX;
      },
      touchmove:function(e){
          //计算用户拖动的距离
          this.currentx=e.touches[0].pageX;
          this.distance=this.currentx-this.startx;
          let currentPosition=-this.currentIndex*this.totalwidth;
          let moveDistance=this.distance+currentPosition;
          //设置当前的位置
          this.setTransform(moveDistance);
      },
      touchend:function(e){
          //获取移动的距离
          let currentmove=Math.abs(this.distance);

          //判断最终的距离
          if(this.distance===0){
              return
          }else if(this.distance>0 && currentmove>this.totalwidth*this.moveRatio){
              //右边移动超过0.5
              this.currentIndex--
          }else if(this.distance<0 && currentmove>this.totalwidth*this.moveRatio){
              //左边移动超过0.5
              this.currentIndex++
          }
          
          //移动到正确的位置
          this.scrollContent(-this.currentIndex*this.totalwidth);

          //移动完成后重新开始定时器
          this.startTime();
      },
      //控制上一个，下一个
      previous:function(){
          thsi.changeItem(-1);
      },
      next:function(){
          this.changeItem(1);
      },
      changeItem:function(num){
          this.stopTimer();
          //修改index和位置
          this.currentIndex+=num;
          ths.scrollContent(-this.currentIndex*this.totalwidth);
          this.startTime();
      }
  }
}
</script>

<style>
    #hy-swiper{
        overflow: hidden;
        position: relative;
    }
    .swiper{
        display: flex;
    }
    .indicator{
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        bottom: 8px;
    }
    .indi-item{
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
    }
    .indi-item.active{
        background-color: rgba(212, 62, 46, 1.0);
    }
</style>