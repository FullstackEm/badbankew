function CreateAccount(){
    const ctx = React.useContext(UserContext);

    function handle(){
        console.log(name,email,password);
        const url = `/account/create/${name}/${email}/${password}`;
            (async () => {
                var res = await fetch(url);
                var data = await res.json();
                console.log(data);
        })();
        props.setShow(false);
    }}