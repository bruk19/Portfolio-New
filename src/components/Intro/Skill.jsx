import Icon from 'react-icons-kit';
import { gears } from 'react-icons-kit/fa/gears';
import { code } from 'react-icons-kit/fa/code';
import { database } from 'react-icons-kit/fa/database';


const Skill = () => {
  const ICON_SIZE = 50;
  return (
    <div className='all-skill'>
        <div className="skill-show">
          <div className="skill-ins">
           <Icon icon={code} size={ICON_SIZE} color={'#fdae05'}/>
           <p>React.js, Redux, Javascript(ES6), Jquey, HTML(JSX), CSS, Jest, etc</p>
          </div>
        </div>
        <div className="skill-show">
          <div className="skill-ins">
           <Icon icon={gears} size={ICON_SIZE} color={'#fdae05'}/>
           <p>Mentorship, Pair Programming, Agile methodology, Active Listening, Leadership, Communication, Time Management, Problem Solving.</p>
          </div>
        </div>
        <div className="skill-show">
        <div className="skill-ins">
           <Icon icon={database} size={ICON_SIZE} color={'#fdae05'}/>
           <p>Ruby, Ruby on Rails, Rspec, SQL, PHP, MySQL, PostgreSQL, etc.</p>
        </div>
        </div>
    </div>
  )
}

export default Skill
