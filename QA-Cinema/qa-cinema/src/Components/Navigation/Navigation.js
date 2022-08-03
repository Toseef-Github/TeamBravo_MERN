import './Navigation.css';
const Navigation = () => {

    return (
             <div className="text-center">
                <header>
                  <nav className="Navigation">
                    <ul className="p-2 gt-4">
                      {/* <Link to="/"> */}
                        <button type="button">
                          Home
                        </button>
                      {/* </Link> */}
          
                      {/* <Link to="/About"> */}
                        <button type="button">
                          About
                        </button>
                      {/* </Link> */}
                      {/* <Link to="/Searchbar"> */}
                        <button type="button">
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