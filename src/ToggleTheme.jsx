import PropTypes from 'prop-types';
import "./index.css";
import icon from "../src/assets/images/icon-sun.svg"
import iconmoon from "../src/assets/images/icon-moon.svg"


export default function ToggleTheme({ontoggleTheme,Darkmode,}) {
  return (
    <div className="container">
     <div className="div1">
     <div className={`${Darkmode?`picture`:'pictures'}`}>
  <div>
    <h1>TODO</h1>
  </div>
  <div className='image'>
  <img src={Darkmode ? icon :iconmoon} onClick={ontoggleTheme} />
  </div>
     </div>
     <div className={`${Darkmode?`div2`:'div3'}`}></div>
</div>
</div>
  );
}

ToggleTheme.propTypes={
  Darkmode:PropTypes.bool.isRequired,
  ontoggleTheme:PropTypes.func.isRequired,
}