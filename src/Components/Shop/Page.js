

const Page = ()=>{

    return(
        <div className="page-select">
                {[...Array(10)].map((e,i)=>(
                    <button className="page-select-button"  key={i} onClick={()=>{
                        // select the button with the same key
                        if(document.querySelector(".selected")!=null){
                            document.querySelector(".selected").classList.toggle("selected");
                        }
                        document.querySelector(`.page-select-button:nth-child(${i+1})`).classList.toggle("selected");
                    }}>{i+1}</button>
                ))}
        </div>
    )
}

export default Page;