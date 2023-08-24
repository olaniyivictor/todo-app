import PropTypes from 'prop-types';
import iconcross from "../src/assets/images/icon-cross.svg"
import './index.css';
export default function Item({item,onDeleteItem,Darkmode, onToggleItems}){
    return(
        <div > 
            
        <li className={`${Darkmode?`flexa`:`flexan`}`}  >
            <div className='victor'>
          <input type='checkbox' value={item.checked}
          onChange={()=>onToggleItems(item.id)}
          
          />
          <span style={item.checked?{textDecoration:'line-through', color: 'var(--Dark-Grayish-Blue)'}:{}}>{item.form}</span>
        </div>
          <div onClick={()=>onDeleteItem(item.id)}  ><img src={iconcross} alt='crossbutton' className="images"/></div>
            </li>   
            </div>           
    )
}

Item.propTypes={
    item:PropTypes.object,
    onDeleteItem:PropTypes.func.isRequired,
    Darkmode:PropTypes.bool.isRequired,
    onToggleItems:PropTypes.func.isRequired
  }