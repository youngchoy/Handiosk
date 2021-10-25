import Icon from '../icon.js';
import './Food.css';

function Food({name, img, cost, idx, socket}) {
	return (
	  <div className="food">
		<div className="item">
			<img className="food_img" src={img} alt="icon"/>
		</div>
		<div className="item">
			<span>{name}</span><br/>
			<span>₩{cost}</span>
		</div>
		<div className="item">
			<Icon img={`${idx}.png`} socket={socket}/>
		</div>
	  </div>
	);
}

export default Food;
