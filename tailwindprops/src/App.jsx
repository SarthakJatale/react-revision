import Card from './components/Cards'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let arr = [1,2,3,4];
  return (
   
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card channel="sarthak" someObj={arr} />
      <Card channel="sarthak 3" />
    </>
  )
}

export default App
