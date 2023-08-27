import PropTypes from 'prop-types';
import './index.css'
import Item from "./Item";
export default function PackingList({items,onDeleteItem,Darkmode,onToggleItems,onClearList}){
  //writing it to show the list of the item
  const all =items.length
  //writing it to filter the remaining items when it is not checked
  const remainingItems = items.filter((item) => !item.checked).length;
  //writing it to filter the items chosen when checked
  const vic=  items.filter((item) => item.checked).length;
  //writing it to filter the items remaining when it is not checked
  const sam = items.filter((item) => !item.checked).length;
  return(
    <div >
      <ul >
        <div>
        {
        items.map((item)=>
        <Item item={item} key={item.id} onDeleteItem={onDeleteItem}  Darkmode={Darkmode} onToggleItems={onToggleItems} />
        )
        }
         </div>
         <div className={`${Darkmode?`flex-man`:'flex-mans'}`}>
        <div>{`${remainingItems}`} items left</div>
        <div className='flexman'>
        <div className='all'> {`${all}`} All</div>
        <div className={`${Darkmode ? `active`:`actives`}`}>{`${sam}`} Active</div>
        <div>{`${vic}`} Completed</div>
        </div>
        <div onClick={onClearList} className={`${Darkmode ? `completed`:``}`}>Clear Completed</div>
       </div> 
      </ul>
    </div>
  )
}
PackingList.propTypes={
  items:PropTypes.array,
  onDeleteItem:PropTypes.func.isRequired,
  Darkmode:PropTypes.bool.isRequired,
  onToggleItems:PropTypes.func.isRequired,
  onClearList:PropTypes.func.isRequired

}