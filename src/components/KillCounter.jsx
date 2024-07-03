export default function KillCounter(props){
    //console.log(props.count)
    let title='Kill Counter'
    //contitional rendering with if statement!!!
    if(props.count==1){
        return(
            <h3>First Blood!</h3>
        )
    }
    if(props.count==2){
       title='Double Kill'
    }

    if(props.count>9){
        title='God Like'
    }else if(props.count>5){
        title='Unstoppable'
    }else if(props.count>3){
        title='Multi Kill'
    }


    return (
        <>  
            {props.count==3 ? <h3>Tripple Kill!</h3>: <h3>{title}</h3>}
            
        </>
        
    )
}