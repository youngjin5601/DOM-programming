window.addEventListener('load',()=>{
  const section=document.getElementById("section-1")
  const container=section.querySelector(".container")
  
  let offset={x:0, y:0};
  let current=null;

  section.onmousemove=(e)=>{
    if(e.buttons !==1) return
    current.style.left=e.pageX-offset.x+"px"
    current.style.top=e.pageY-offset.y+"px"   
  }
  container.onmousedown=(e)=>{
    if(e.target.classList.contains("box")) {
      current=e.target
      offset.x=e.offsetX
      offset.y=e.offsetY
    }
  }
})
