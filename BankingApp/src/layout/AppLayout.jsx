import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="min-h-screen flex flex-col">

            <Header />

            {/* Global Loading Bar */}
            {isLoading && (
                <div className="h-1 bg-amber-500 animate-pulse" />
            )}

            <main className="flex-1">
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-10 h-10 border-4 border-amber-500  rounded-full animate-bounce [animation-duration:.5s]"></div>
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>

            <Footer />
        </div>
    );
}

export default AppLayout;