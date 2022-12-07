
const Giphy = ({gif})=> {
     console.log(gif)
    return (
        <div className="gif">
<h1>More Giphy more Fun</h1>
<h1>{gif.title}</h1>
<h2>{gif.id}</h2>
        </div>
           ) 
    
}
export default Giphy;