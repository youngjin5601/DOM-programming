window.addEventListener('load',()=>{
  const section1=document.getElementById('section-1')
  const imgList=section1.querySelector('.img-list')
  const display=section1.querySelector('.display')

  imgList.onclick=(e)=>{
    if(e.target.nodeName != "IMG") return;
    display.src=e.target.src
  }
})

window,addEventListener('load',()=>{
  const section2=document.getElementById('section-2')
  const imgList=section2.querySelector('.img-list')
  const display=section2.querySelector('.display')

  imgList.onclick=(e)=>{
    if(e.target.nodeName != "IMG") return;
    display.src=e.target.src
  }
  imgList.querySelector('input').onclick=(e)=>{
    e.stopPropagation()
    
    const img=document.createElement('img')
    img.src='./images/1.jpg'
    //display.insertAdjacentElement("afterend",img)
    const imgDiv=section2.querySelector('.img-list2')
    imgDiv.appendChild(img)
  }
})
