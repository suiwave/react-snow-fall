import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";

const Layout = () => (
    <div>
        <Snowfall
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
            }}
        />
        <header>
            <h1>My App</h1>
            <nav>
                <a href="/">Home</a> | <a href="/about">About</a>
            </nav>
        </header>
        <main className="bg-gray-300">
            <Outlet /> {/* 各ページの内容がここにレンダリングされる */}
        </main>
    </div>
);

export default Layout;