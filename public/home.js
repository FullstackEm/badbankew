function Home(){
    return (
        <>
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Welcome to Fake Bank</h1>
    <p class="lead">Banking made easy.</p>
  </div>
</div>

            <div className="row m-3">
            <HomeCard
                    link="/login/"
                    title="Login"
                    text="Login to your account"
                    image={(<img src="login.png" className="img-fluid" alt="Responsive image"/>)}
                />
                <HomeCard
                    link="/create_account/"
                    title="Create account"
                    text="Create an account"
                    image={(<img src="create_account.png" className="img-fluid" alt="Responsive image"/>)}
                />
                <HomeCard
                    link="/deposit/"
                    title="Deposit"
                    text="Deposit to your account"
                    image={(<img src="deposit.png" className="img-fluid" alt="Responsive image"/>)}
                />
                <HomeCard
                    link="/withdraw/"
                    title="Withdraw"
                    text="Withdraw from your account"
                    image={(<img src="withdraw.png" className="img-fluid" alt="Responsive image"/>)}
                />
                <HomeCard
                    link="/all_data/"
                    title="Customer Information"
                    text="Internal Customer Information"
                    image={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
                />
                    
            </div>

        </>
    );
}