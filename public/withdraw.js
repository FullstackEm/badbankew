const Withdraw = () => {
    const ctx = React.useContext(UserContext);
    const activeUser = ctx.activeUser;
    //temporarily balance state used within the page
    const [total, setTotal] = React.useState(()=>{return ctx.activeUser.balance});
    //state to decide if input is 0 or not
    const [empty, setEmpty] = React.useState(true);

    //set user to active user
    const updateUser = ()=>{
        let index = ctx.users.findIndex(user => user.email === activeUser.email);
        ctx.users[index] = activeUser;
    };

    //allow user input
    const handleSubmit = (e)=>{
        e.preventDefault();
        let status = Number(e.target.num.value);
        setTotal(total - status);
        alert(`You have withdrawn: $ ${status}`)
        };
    //adjust balance
    React.useEffect(() => {
        activeUser.balance = total
        if(activeUser.name != "Guest"){updateUser()};
        }, [total]);
    
    return (
        <div className="container-fluid main-container">
            <Card
            txtcolor="dark"
            header="Withdraw"
            text={`${activeUser.name}'s Account balance $${total}`}
            body={(
                <div className="container">
                <form onSubmit={handleSubmit}>
                    <span>$ </span>
                    <input type="number" name="num" min="0" max={total} onChange={e=>{e.target.value == 0 ? setEmpty(true) : setEmpty(false)}}></input>
                    <br/>
                    <button type="submit" className="btn btn-primary mt-2" disabled={empty}>Withdraw</button>
                </form>
            </div>)}
            />
        </div>

    );
};

const SubmitBalance = (prop) => {
    return (
        <>
            <input type="number" name="num" min="0" max={prop.total}></input>
            <br/>
            <input type="submit" className="btn btn-danger mt-2" value={prop.innerText}></input>
       </>
       )
};