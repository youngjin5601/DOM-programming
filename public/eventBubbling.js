window.addEventListener('load',()=>{
  const section=document.getElementById('section-1')
  const imgList=section.querySelector('.img-list')
  const display=section.querySelector('.display')

  imgList.onclick=(e)=>{
    if(e.target.nodeName != "IMG") return;
    display.src=e.target.src
  }
})

window.addEventListener('load',()=>{
  const section=document.getElementById('section-2')
  const imgList=section.querySelector('.img-list')
  const display=section.querySelector('.display')

  imgList.onclick=(e)=>{
    if(e.target.nodeName != "IMG") return;
    display.src=e.target.src
  }
  imgList.querySelector('input').onclick=(e)=>{
    e.stopPropagation()
    
    const img=document.createElement('img')
    img.src='./images/1.jpg'
    //display.insertAdjacentElement("afterend",img)
    const currentImg=section.querySelector('.current-img')
    currentImg.appendChild(img)
  }
})

window.addEventListener("load", ()=>{
  const section=document.getElementById('section-3')
  const fileButton=section.querySelector(".file-button")
  const triggerButton=section.querySelector(".trigger-button")
  triggerButton.onclick=()=>{
    const event=new MouseEvent("click",{
      'view': window,
      "bubble":true,
      "cancelable": true
    })
    fileButton.dispatchEvent(event)
  }
})
