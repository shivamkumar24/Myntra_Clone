 
main=async()=>{
let query=document.getElementById('main').value
  try {
   let  res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type`)
    let data=await res.json();
 

 for(let i=0;i<=data.length-900;i++){
    append(data[i])
 }
   console.log(data)
  } catch (error) {
    console.log("error")
  }
}
main()
 function append(data){
    let appe=document.getElementById('appe')
 div=document.createElement('div')

 brand=document.createElement('h3')
brand.innerHTML=data.brand
 asp=document.createElement('h2')
 asp.innerHTML=data.name
 img=document.createElement('img')
 img.src=data.image_link
 price=document.createElement('h4')
price.innerHTML=data.price
div.append(brand,asp,img,price)
appe.append(div)
}
