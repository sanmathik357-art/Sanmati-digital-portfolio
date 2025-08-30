//toggle mobile menu const menu toggle=document.get element by id("menu-toggle"); Menu toggle.add event listence("click",()=>{nav links.class.toggle(show ")});
//simple contact from validation const contact from =document.get element byid("form -status");
contact from.add event li stener
("submit",(e)=>
 {
  e. preventdefault();
  cost name=document.get element byid("name"). value.trim();
  const email=document.get element by id("email"). value.trim();
  const =document. get element by id("message").value.trim(); 
  if(name && email && massage)
    {form status.text content="✅ massage sent successfully!";