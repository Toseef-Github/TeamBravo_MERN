const Navigation = () => {

    return (
             <div className="text-center">
                <header>
                  <nav className="navbar-nav ">
                    <ul className="p-2 gt-4">
                      {/* <Link to="/"> */}
                        <button type="button" className="btn btn-primary">
                          Home
                        </button>
                      {/* </Link> */}
          
                      {/* <Link to="/About"> */}
                        <button type="button" className="btn btn-primary">
                          About
                        </button>
                      {/* </Link> */}
                      {/* <Link to="/Searchbar"> */}
                        <button type="button" className="btn btn-primary">
                          Search
                        </button>
                      {/* </Link> */}
                      </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;