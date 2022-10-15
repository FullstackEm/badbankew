function Spa() {

    return (
        <HashRouter>
          <div>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'Emily', email:'Emily@mit.edu', password:'password', balance:60},{name:'Nyx', email:'Nyx@mit.edu', password:'password123', balance:125}], activeUser:{name:'Guest', email:'guest@badbank.com', password:'password', balance:0}}}>
              <div className="container" style={{padding: "20px"}}>
                <Route path='/' exact component={Home}/>
                <Route path='/create_account/' exact component={CreateAccount}/>
                <Route path='/login/' exact component={Login}/>
                <Route path='/deposit/' exact component={Deposit}/>
                <Route path='/withdraw/' exact component={Withdraw}/>
                <Route path='/all_data/' exact component={AllData}/>
              </div>
          </UserContext.Provider>
        </div>
        </HashRouter>
    )
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );