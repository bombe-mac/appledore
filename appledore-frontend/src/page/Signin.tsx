import { useRef, useState } from "react"
import { Button } from "../components/Button"
import axios from "axios";
import { config } from "../config";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const signinhandler = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            setError("Please fill in all fields");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response=await axios.post(`${config.baseURL}/signin`, {
                username,
                password
            });

            const jwt=response.data.token;
            if (response.status === 200 && response.data.token) {
                localStorage.setItem("token", jwt);
                localStorage.setItem("username", username);
                navigate("/dashboard");
            } 
            else {
                setError("Sign in failed");
            };

        } catch (err: any) {
            console.log(err)
            setError("Sign in failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-slate-100 px-4">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-slate-800">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sign in</h2>
    
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-2">
                                Username
                            </label>
                            <input 
                                ref={usernameRef}
                                type="text" 
                                placeholder="Enter your username" 
                                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100"
                                disabled={loading}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-2">
                                Password
                            </label>
                            <input 
                                ref={passwordRef}
                                type="password" 
                                placeholder="Enter your password" 
                                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100"
                                disabled={loading}
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <Button 
                            size="sm" 
                            text={loading ? "Signing up..." : "Sign In"} 
                            onClick={signinhandler}
                            disabled={loading}
                        />
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 dark:text-slate-300 text-sm">
                            Create new account. {" "}
                            <button
                                onClick={() => navigate("/signup")}
                                className="text-blue-600 hover:text-blue-700 font-medium dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                Signup
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};