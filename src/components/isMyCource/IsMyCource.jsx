/* eslint-disable react/prop-types */
const IsMyCource = ({finish, modules}) => {
    const bar_progress = finish * 100 / modules
    
  return (
    <div>
        <progress value={bar_progress} max="100">
            {bar_progress}%
        </progress>
        <div className="card__info">
          <p>{finish} / {modules} Modules</p>
          <div>{bar_progress} %</div>
        </div>
      </div>
  )
}

export default IsMyCource
