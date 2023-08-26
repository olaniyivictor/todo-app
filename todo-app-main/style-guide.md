# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 400, 700

 <div className="container">
      <div className="top">
        <div className="header__top">
          <div className="left">

        <h1>TODO</h1>
          </div>

        <div className="icon"><img src={icon} alt="icon-moon" /></div>
        

        </div>
       
       
      </div>
      <div className="bottom">
        
      </div>
    </div>





    <div className="checkbox-container">
                <label className="checkbox-label">
                    <input
                    type='checkbox'
                    value={item.checked}
                    onChange={()=>toggleCheckbox(item.id)}
                    className="checkbox-input"
                    />
                       <span className={`checkbox-circle ${item.checked ? 'checked' : ''}`}>
          {item.checked && <img src={iconcheck} alt="Checked" />}
        </span>
                </label>
                <span style={item.checked?{textDecoration:'line-through', color: 'var(--Dark-Grayish-Blue)'}:
        {}}>{item.form}</span>
            </div>
        <div onClick={()=>onDeleteItem(item.id)}  ><img src={iconcross} alt='crossbutton' className="images"/></div

        const [checked,setChecked] =useState(true);








        body {
  width: 100%;
  min-height: 100vh;
   overflow: hidden;
   font-family: 'Josefin Sans', sans-serif;
   z-index: 1000; 
 }

.form-input{
  width: 57rem;
  height: 5rem;
  background-color: var(--Very-Dark-Desaturated-Blue);;
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(--Dark-Grayish-Blue);
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
  
}
.form-inputs{
  width: 57rem;
  height: 5rem;
  background-color:white;
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(--Dark-Grayish-Blue);
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
}

html{
  font-size: 62.5%;
}

.container {
  width: 100%;
  height: 100%;
}
.div1{
  width: 100%;
  height: 40rem;
}
.div2{
  width: 100%;
  height: 100%;
  
}
.div3{
  width: 100%;
  height: 100vh;
  background-color:var(--Very-Light-Grayish-Blue);
}

.app{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in;
 
  

}
.picture{
  width: 100%;
  height: 30rem;
  background-image:url(./assets/images/bg-desktop-dark.jpg) ;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38rem;
  z-index: 1000;
  transition: all;
  transition-timing-function: ease;
  transition-delay: 0.3s;
 
}

.pictures{
  width: 100%;
  height: 30rem;
  background-image:url(./assets/images/bg-desktop-light.jpg) ;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38rem;
  z-index: 1000;
  transition: all;
  transition-timing-function: ease-in;
  transition-delay: 0.3s;
 

}
h1{
  font-size: 3rem;
  color: var(---LightGrayishBlue);
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 2rem;
}
.image{
  width: 4rem;
  height: 4rem;
}
.flexbox{
 /* paddi-top: -53rem;*/
  z-index: 1000;
  
  
}
.form-input:focus{
  border: none;
}
::placeholder{
  padding-left: 3rem;
  font-size: 1.3rem;
  color: var(--Dark-Grayish-Blue);
  font-weight: 400;
}
/*flexboxs{
  display: flex;
   
  justify-content: center;
  margin-top: 2rem;
  width: 57rem;
  height: 38rem;
  border-radius: 0.4rem;
  color: white;
  
}
.flexboxss{
  display: flex;
  background-color:white;
  justify-content: center;
  margin-top: 2rem;
  width: 57rem;

  border-radius: 0.4rem;
}*/
ul{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y:auto;
  width: 58rem;
  height: 37rem;
  margin-top: 2rem;

}

ul:hover{
  cursor: pointer;
}
/*li{
  display: flex;
  border-bottom: 0.1rem solid var(--Dark-Grayish-Blue);
  padding: 1rem;
  font-size: 1.6rem;
  background-color: green;
  align-items: center;
  font-size: 400;
  color: white;
  width: 58rem;
  height: 4rem;
  
}*/

.flexa{
  display: flex;
 justify-content:space-between;
 background-color: var(--Very-Dark-Desaturated-Blue);
 border-bottom: 0.1rem solid var(--Dark-Grayish-Blue);
 padding: 1rem;
 font-size: 1.6rem;
 align-items: center;
 font-size: 400;
 color: white;
 
}
.flexan{
  display: flex;
 justify-content: space-between;
 border-bottom: 0.1rem solid var(--Dark-Grayish-Blue);
 padding: 1rem;
 font-size: 1.6rem;
 background-color: white;
 align-items: center;
 font-size: 400;
 color:var(--Very-Dark-Blue);
}
.victor{
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.flexaar{
  display: flex;
 justify-content: space-between;

}
.images{
  width: 1.5rem;
  height: 1.5rem;
}
.containerss{
  width: 100%;
  height: 100%;
  background-color: orange;
}
.flex-man{
  display: flex;
  gap: 7rem;
  padding: 1.2rem;
  align-items: center;
  background-color: var(--Very-Dark-Desaturated-Blue);
  margin-top: -2rem;
  border-radius: 0.4rem;
  color: var(--Dark-Grayish-Blue);
  font-size: 1.4rem;
  font-weight: 400;
  white-space: nowrap;
}
.flex-mans{
  display: flex;
  gap: 3rem;
  padding: 1.2rem;
  align-items: center;
  background-color: white;
  margin-top: -2rem;
  border-radius: 0.4rem;
  color: var(--Dark-Grayish-Blue);
  font-size: 1.4rem;
  font-weight: 400;
  white-space: nowrap;

}
.flexman{
  display: flex;
  gap: 3rem;
  overflow-x: hidden;
  width: 58rem;
  white-space: nowrap;
  height: 4rem;
  align-items: center;
  justify-content: center;
}

input[type="checkbox"] {
  height: 2rem;
  width: 2rem;
  accent-color: white;
}
.completed:hover{
  color: white;
  cursor: pointer;
}
.active:hover{
  color: white;
}
.actives:hover{
 color: var(--Very-Dark-Desaturated-Blue);
}
.all{
  color: blue;
}
@media screen and (max-width:600px) {
 
  .picture{
    width: 100%;
    height: 24rem;
    background-image:url(./assets/images/bg-desktop-dark.jpg) ;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30rem;
    z-index: 1000;
    transition: all;
    transition-timing-function: ease;
    transition-delay: 0.3s;
   
  }
  
  .pictures{
    width: 100%;
    height: 24rem;
    background-image:url(./assets/images/bg-desktop-light.jpg) ;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30rem;
    z-index: 1000;
    transition: all;
    transition-timing-function: ease-in;
    transition-delay: 0.3s;
   
  
  }
  .form-input{
  width: 50rem;
  height: 5rem;
  background-color: var(--Very-Dark-Desaturated-Blue);;
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(--Dark-Grayish-Blue);
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
  
}
.form-inputs{
  width: 50rem;
  height: 5rem;
  background-color:white;
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(--Dark-Grayish-Blue);
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
  
}
ul{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y:auto;
  width: 50rem;
  height: 37rem;
  margin-top: 2rem;

}
}
@media  screen and (max-width:540px) {
   .picture{
    width: 100%;
    height: 24rem;
    background-image:url(./assets/images/bg-desktop-dark.jpg) ;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 27rem;
    z-index: 1000;
    transition: all;
    transition-timing-function: ease;
    transition-delay: 0.3s;
   
  }
  
  .pictures{
    width: 100%;
    height: 24rem;
    background-image:url(./assets/images/bg-desktop-light.jpg) ;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 27rem;
    z-index: 1000;
    transition: all;
    transition-timing-function: ease-in;
    transition-delay: 0.3s;
   
  
  }
  .form-input{
  width: 46rem;
  height: 5rem;
  background-color: var(--Very-Dark-Desaturated-Blue);;
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(--Dark-Grayish-Blue);
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
  
}
.form-inputs{
  width: 46rem;
  height: 5rem;
  background-color:white;
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(--Dark-Grayish-Blue);
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
  
}
ul{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y:auto;
  width: 46rem;
  height: 37rem;
  margin-top: 2rem;

}
.flex-man{
  display: flex;
  gap: 7rem;
  padding: 1.2rem;
  align-items: center;
  background-color: var(--Very-Dark-Desaturated-Blue);
  margin-top: -2rem;
  border-radius: 0.4rem;
  color: var(--Dark-Grayish-Blue);
  font-size: 1.1rem;
  font-weight: 400;
  white-space: nowrap;
}
.flex-mans{
  display: flex;
  gap: 3rem;
  padding: 1.2rem;
  align-items: center;
  background-color: white;
  margin-top: -2rem;
  border-radius: 0.4rem;
  color: var(--Dark-Grayish-Blue);
  font-size: 1.1rem;
  font-weight: 400;
  white-space: nowrap;

}
.flexman{
  display: flex;
  gap: 3rem;
  overflow-x: hidden;
  width: 50rem;
  white-space: nowrap;
  height: 4rem;
  align-items: center;
  justify-content: center;
}
}

@media  screen and (max-width:510px) {
  .picture{
   width: 100%;
   height: 24rem;
   background-image:url(./assets/images/bg-desktop-dark.jpg) ;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 23rem;
   z-index: 1000;
   transition: all;
   transition-timing-function: ease;
   transition-delay: 0.3s;
  
 }
 
 .pictures{
   width: 100%;
   height: 24rem;
   background-image:url(./assets/images/bg-desktop-light.jpg) ;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 23rem;
   z-index: 1000;
   transition: all;
   transition-timing-function: ease-in;
   transition-delay: 0.3s;
  
 
 }
 .form-input{
 width: 43rem;
 height: 5rem;
 background-color: var(--Very-Dark-Desaturated-Blue);;
 border: none;
 border-radius: 0.4rem;
 padding: 1.2rem 3.2rem;
 font-size: 1.5rem;
 color: var(--Dark-Grayish-Blue);
 outline: none;
 font-family: 'Josefin Sans', sans-serif;
 
}
.form-inputs{
 width: 43rem;
 height: 5rem;
 background-color:white;
 border: none;
 border-radius: 0.4rem;
 padding: 1.2rem 3.2rem;
 font-size: 1.5rem;
 color: var(--Dark-Grayish-Blue);
 outline: none;
 font-family: 'Josefin Sans', sans-serif;
 
}
ul{
 list-style-type: none;
 display: flex;
 flex-direction: column;
 gap: 2rem;
 overflow-y:auto;
 width: 43rem;
 height: 37rem;
 margin-top: 2rem;

}
.flex-man{
 display: flex;
 gap: 4rem;
 padding: 1.2rem;
 align-items: center;
 background-color: var(--Very-Dark-Desaturated-Blue);
 margin-top: -2rem;
 border-radius: 0.4rem;
 color: var(--Dark-Grayish-Blue);
 font-size: 1.1rem;
 font-weight: 400;
 white-space: nowrap;
}
.flex-mans{
 display: flex;
 gap: 3rem;
 padding: 1.2rem;
 align-items: center;
 background-color: white;
 margin-top: -2rem;
 border-radius: 0.4rem;
 color: var(--Dark-Grayish-Blue);
 font-size: 1.1rem;
 font-weight: 400;
 white-space: nowrap;

}
.flexman{
 display: flex;
 gap: 3rem;
 overflow-x: hidden;
 width: 50rem;
 white-space: nowrap;
 height: 4rem;
 align-items: center;
 justify-content: center;
}
}
@media  screen and (max-width:463px) {
  .picture{
   width: 100%;
   height: 24rem;
   background-image:url(./assets/images/bg-desktop-dark.jpg) ;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 15rem;
   z-index: 1000;
   transition: all;
   transition-timing-function: ease;
   transition-delay: 0.3s;
  
 }
 
 .pictures{
   width: 100%;
   height: 24rem;
   background-image:url(./assets/images/bg-desktop-light.jpg) ;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 15rem;
   z-index: 1000;
   transition: all;
   transition-timing-function: ease-in;
   transition-delay: 0.3s;
  
 
 }
 .form-input{
 width: 35rem;
 height: 5rem;
 background-color: var(--Very-Dark-Desaturated-Blue);;
 border: none;
 border-radius: 0.4rem;
 padding: 1.2rem 3.2rem;
 font-size: 1.5rem;
 color: var(--Dark-Grayish-Blue);
 outline: none;
 font-family: 'Josefin Sans', sans-serif;
 
}
.form-inputs{
 width: 35rem;
 height: 5rem;
 background-color:white;
 border: none;
 border-radius: 0.4rem;
 padding: 1.2rem 3.2rem;
 font-size: 1.5rem;
 color: var(--Dark-Grayish-Blue);
 outline: none;
 font-family: 'Josefin Sans', sans-serif;
 
}
ul{
 list-style-type: none;
 display: flex;
 flex-direction: column;
 gap: 2rem;
 overflow-y:auto;
 width: 35rem;
 height: 37rem;
 margin-top: 2rem;

}
.flex-man{
 display: flex;
 gap: 1rem;
 padding: 1.2rem;
 align-items: center;
 background-color: var(--Very-Dark-Desaturated-Blue);
 margin-top: -2rem;
 border-radius: 0.4rem;
 color: var(--Dark-Grayish-Blue);
 font-size: 1rem;
 font-weight: 400;
 white-space: nowrap;
}
.flex-mans{
 display: flex;
 gap: 2rem;
 padding: 1.2rem;
 align-items: center;
 background-color: white;
 margin-top: -2rem;
 border-radius: 0.4rem;
 color: var(--Dark-Grayish-Blue);
 font-size: 1
 rem;
 font-weight: 400;
 white-space: nowrap;

}
.flexman{
 display: flex;
 gap: 3rem;
 overflow-x: hidden;
 width: 35rem;
 white-space: nowrap;
 height: 4rem;
 align-items: center;
 justify-content: center;
}
}

/* Set full height for the div */


.app {
  /* width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
 /*grid-template-rows:100px 100px 100px 130px;*/
 /*grid-template-rows: 100px 100px 100px 130px;*/
 
}
.top {
  /* background-image: url(./assets/images/bg-desktop-dark.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 30rem; */
}


/*.top {
  background-image: url(./assets/images/bg-desktop-dark.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 30rem;
}

.header__top {
  display: flex;
  gap: 36rem;
  justify-content: center; 
  align-items: center;
  padding-top: 8rem;
}
.left {
  font-size: 2rem;
  color: var(---LightGrayishBlue);
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 2rem;
}
.bottom{
  background-color: var(--Very-Dark-Blue);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height:100rem;
}
.form-input{
  width: 57rem;
  height: 5rem;
  background-color: var(--Very-Dark-Desaturated-Blue);;
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(--Very-Light-Gray);
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
  
}.form-input:focus{
  border: none;
}
::placeholder{
  padding-left: 3rem;
  font-size: 1.3rem;
  color: var(---LightGrayishBlue);
  font-weight: 700;
}
.flexbox{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 9rem;
}
.flexboxs{
  display: flex;
  background-color:var(--Very-Dark-Desaturated-Blue);
  justify-content: center;
  
  
margin-top: 6rem;
  width: 57rem;
  height: 38rem;
 
}
.div4{
  width: 57rem;
  height: 38rem;
  background-color:var(--Very-Dark-Desaturated-Blue);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16rem;
  
}
ul{
  list-style-type: none;
  width: 57rem;
  text-decoration: underline;
  display: flex;
  flex-direction: row;
  

}
*/

/*.image{
  background-image: url(./assets/images/bg-desktop-dark.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 30rem;
}*/
/*.div2{
  background-color: var(--Very-Dark-Blue);
  width: 100%;
  height: 100%
}
.div3{
  background-color: var(---LightGrayisheBlue);
  width: 100%;
  height: 100%
}
.space{
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.toggle{
padding-top: 9rem;
}
h1{
  padding-top: 8rem;
  padding-left: 48rem;
  font-size: 4rem;
  color: var(---LightGrayishBlue);
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 2rem;
}


.light-background-image {
  background-image: url(./assets/images/bg-desktop-light.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 30rem;
}

.dark-background-image {
  background-image: url(./assets/images/bg-desktop-dark.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 30rem; 
}
h4{
  color: green;
  z-index: -1000;
  font-size: 6rem;
}
.flexbox{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  
}
.boxs{
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexboxs{
  display: flex;
  justify-content: center;
  align-items: center;

}
.form-input{
  width: 57rem;
  height: 5rem;
  background-color: var(--Very-Dark-Blue);
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(---LightGrayishBlue);
  outline: none;
  
}.form-input:focus{
  border: none;
}
::placeholder{
  padding-left: 3rem;
  font-size: 1.3rem;
  color: var(--Dark-Grayish-Blue);
  font-weight: 700;
}
:-ms-input-placeholder{
  padding-left: 4rem;
}
.form-inputs{
  width: 57rem;
  height: 5rem;
  background-color:white;
  border: none;
  border-radius: 0.4rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.5rem;
  color: var(--Very-Dark-Grayish-Blue);
  font-weight: 700;
  outline: none;
  
}.form-inputs:focus{
  border: none;
}
::placeholder{
  padding-left: 3rem;
  font-size: 1.3rem;
  color: var(--Dark-Grayish-Blue);
  font-weight: 700;
}
.div4{
  width: 57rem;
  height: 40rem;
  background-color:var(--Very-Dark-Desaturated-Blue);
  z-index: 1000;
}
.div5{
  width: 57rem;
  height: 40rem;
  background-color:green;
  z-index: 1000;
}
*/