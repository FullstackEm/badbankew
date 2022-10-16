function NavBar(){
    return(
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Fake Bank <span class="sr-only">(Home)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/create_account/">Create Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/login/">Log In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/deposit/">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/withdraw/">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/all_data/">Customer Data</a>
      </li>
      </ul>
    </div>
</nav>
    );
  }