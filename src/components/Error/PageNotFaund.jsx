import { useNavigate } from "react-router-dom"
const PageNotFaund = () => {
    let navigate = useNavigate();
  return (
    <div>
      <p>Page Not Faund</p>
      <h2>404</h2>
      <button onClick={() => navigate('/')}>На главную</button>
    </div>
  )
}

export default PageNotFaund
