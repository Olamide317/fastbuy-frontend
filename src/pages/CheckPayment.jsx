import axios from "axios";
import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function CheckPayment() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState("loading");

    const reference = searchParams.get("reference");
    const token = Cookies.get("token");

    console.log(searchParams);

    useEffect(() => {
        const confirmPayment = async () => {
            try {
                const payment = await axios.get(`https://fastbuy-backend-jsjp.onrender.com/pay/verify/${reference}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                setStatus(payment.data.data.status);
            } catch (error) {
                console.log(error.response.data || "Something went wrong");
            }
        };
        confirmPayment();
    }, [reference, token]);

    return (
        <div className="flex items-center justify-center flex-col min-h-[80vh">
            {status === "pending" && (
                <div>
                    <button className="animate-spin"></button>
                    Loading ...
                </div>
            )}
            {status === "success" && (
                <div>
                    <h1 className="text-green-400 text-xl">Your payment was successful</h1>
                    <NavLink to={"/"}>
                        <button className="py-2 px-4 text-black border border-gray-800 rounded-md text-xl">Back to home page</button>
                    </NavLink>
                </div>
            )}
            {status === "failed" && (
                <div>
                    <h1 className="text-green-400 text-xl">Your payment failed</h1>
                    <NavLink to={"/"}>
                        <button className="py-2 px-4 text-black border border-gray-800 rounded-md text-xl">Back to home page</button>
                    </NavLink>
                </div>
            )}
        </div>
    );
}