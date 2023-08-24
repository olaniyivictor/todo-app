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