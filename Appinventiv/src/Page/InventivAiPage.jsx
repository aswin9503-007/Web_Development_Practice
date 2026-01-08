import { useEffect } from "react";
import InventivAI from "../Component/HomePage/InventivAI";
import AICapabilities from "../Component/InventivAi/AICapabilities";
import TrustSection from "../Component/InventivAi/TrustSection";


const InventivAIPage = () => {
    useEffect ( () => {
        window.scrollTo(0,0)
    }, [])

    return (
        <main>
            <InventivAI />
            <AICapabilities />
            <TrustSection />
        </main>
    )
}

export default InventivAIPage;