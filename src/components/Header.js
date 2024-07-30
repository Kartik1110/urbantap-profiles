import Nav from "./Nav";

const Header = () => {
    return (
        <header className="sticky top-0 z-[20] mx-auto flex w-full items-center py-8 px-2 flex-wrap" style={{ backgroundColor : "white"}}>
                <Nav />
        </header>
    );
};

export default Header;
