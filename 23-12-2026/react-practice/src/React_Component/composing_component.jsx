const Navbar = () =>{
   return <h1>This is NavBar</h1>
}

const Sidebar = () =>{
    return <h1>This is Sidebar</h1>
}

const ArticleList = () =>{
   return <h1>This is ArticleList</h1>
}

const Appbase = () =>{
    return (
        <>
        <Navbar />
        <Sidebar />
        <ArticleList />
        </>
    );
}

export default Appbase;
