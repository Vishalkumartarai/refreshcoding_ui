import { Link, useNavigate } from "react-router-dom"

export const SidebarComponent = () => {

    const navigator = useNavigate();

    const logoutHandler = () => {
        
        navigator("/admin-login");
    }

    return (
        
        <div className="box" style={{ height: '100vh' }}>
            <div className="bg-primary text-white text-center py-4 font-weight-bold border-bottom border-secondary">
                Admin
            </div>
            
            
            <div className="text-center py-5">
                <button onClick={logoutHandler} className="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                    Logout
                </button>
            </div>
        </div>

    )
}