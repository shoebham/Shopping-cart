

const Page = (props)=>{
    const {setPage} = props;

    function selectPage(i){
        if(document.querySelector(".selected")!=null){
            document.querySelector(".selected").classList.toggle("selected");
        }
        document.querySelector(`.page-select-button:nth-child(${i+1})`).classList.toggle("selected");
        setPage(i+1);
        console.log("page selected",i+1);
    }
    
    return(
        <div className="page-select">
                {[...Array(10)].map((e,i)=>{
                    if(i==0){
                        return (<button key = {i} className="page-select-button selected" onClick={()=>selectPage(i)}>{i+1}</button>);
                    }
                    else{
                    return(<button className="page-select-button"  key={i} onClick={()=>selectPage(i)}>
                        {i+1}
                    </button>);
                }
                })}
        </div>
    )
}

export default Page;