var root = ReactDOM.createRoot(document.getElementById("root"));

// two types of component 1- function component 2- class component


class TodoApp extends React.Component{
    render(){
        const data = {
            title : "TodoApp",
            description: "This is a ToDo app!",
            items: ["Task1", "Task2"]
        }
        return (
            <div>
                <Header title={ data.title} description={data.description} />
                <Description />
                 <TodoList items={data.items}/>
            </div>

        );
    }
}

// function Header(props){
//     return <h1>TodoApp</h1>;
// }

class Header extends React.Component{
    render(){
        return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.description}</h3>
                </div>
        );
    }
}

class Description extends React.Component{
    render(){
        return (
            <p>This is a component which write with class component.</p>
        );
    }
}

function TodoList(props){
    return (
        <ul>
            {
                props.items.map((item,index) => <TodoItem key={index} item={item} /> )
            }
        </ul>
    );
}

function TodoItem(props){
    return(
        <li>{props.item}</li>
    );
}





root.render(<TodoApp />);