import Navbar from "./Navbar"
immport Header from "./Header"

//higher order component 
const Layout=(WrappedComponent)=>{

    return (props)=>(

        <div>
            <Navbar/>
            <Header/>
            <WrappedComponent {...props}/>
        </div>
    )
}
export default Layout;