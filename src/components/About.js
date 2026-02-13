import React from 'react'

export default function About(props) {
    // const [mystyle,setmystyle] = useState({
    //     color : "black",
    //     backgroundColor :"white"
    // })

     let mystyle={
        color : props.mode==="dark"?"white":"rgb(32 59 85)",
        backgroundColor : props.mode==="dark"?"rgb(32 59 85)":"white" 
     }

    
    
    return (
        <div className="container " style={mystyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  style={mystyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Welcome! to Text-Modifier.</strong> It gives facility to analyze your text quickly and efficientlY. Whether it is word count,character count or time count, you can see any of these; infact all of these properties related to your text
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle}  data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the free character count tool.</strong> It provides instant character count and word count statistics for the given text.Thus it is suitablefor writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This word counter software is very compatible with every browser.</strong> It works on chrome , firefox, Internet explorer , safari , Opera ,. It suits to count characters in facebook, blog, books, excel document, pdf , essays, etc.
                        </div>
                    </div>
                </div>
            </div>
             {/* <div className="container my-3">
             <button type="button" onClick={togglestyle} className="btn btn-primary">{btntext}</button>
             </div> */}
        </div>
    )
}
