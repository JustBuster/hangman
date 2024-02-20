const HEAD = (
        <div 
            style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                border: "10px solid black",
                position: "absolute",
                top: "100px",
                right: "20px",
            }}
        />
);

const BODY = (
        <div 
            style={{
                width: "10px",
                height: "100px",
                background: "black",
                position: "absolute",
                top: "170px",
                right: "50px",
            }}
        />
);


export function HangmanDrawing() {
    return <div style={{ position: "absolute", alignSelf: "center", padding: "50px"}}>
    {HEAD}
    {BODY}
        <div 
            style={{ 
                height: "50px", 
                width: "10px",
                background: "black",
                top: "50px",
                right: "50px",
                position: "absolute",
            }}
        />
        <div 
            style={{ 
                height: "10px", 
                width: "200px",
                background: "black",
                marginLeft: "120px",
            }}
        />
        <div 
            style={{ 
                height: "400px", 
                width: "10px",
                background: "black",
                marginLeft: "120px",
            }}
        />
        <div style={{ height: "10px", width: "250px", background: "black"}}/>
    </div>
}
