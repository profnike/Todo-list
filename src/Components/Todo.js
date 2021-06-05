 function Tasks(props){
     return(
<div className="outer">
    <div className="inner">
        <div>
        <h1>My To-do List</h1>
       
        <label for="task"><p>add a new task</p>  <img src="https://www.mcicon.com/wp-content/uploads/2020/12/Education_Pen_1-copy-13.jpg "/></label>
        <div><input type="text" id="task"></input>
        <button id="addsign">+</button></div>
      
        <div className="add">
        <img src="https://thumbs.dreamstime.com/b/right-arrow-png-icon-left-image-flat-application-web-set-vector-isolated-182083333.jpg"/>
<       p>I want to send messages.</p>
            <button className="remove">remove</button>
        </div>
        <div className="add">
        <img src="https://thumbs.dreamstime.com/b/right-arrow-png-icon-left-image-flat-application-web-set-vector-isolated-182083333.jpg"/>
<       p>I want to have a quick nap and eat my delicious meal.</p>
        <button className="remove">remove</button>
    </div>
    </div>
    <div>
    <p id="count">You have 2 tasks to do</p>
    <button id="clear">clear all</button>
    </div>
    </div>
    
</div>
     )
 }
 export default Tasks;